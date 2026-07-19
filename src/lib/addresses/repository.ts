import { getDb } from "@/lib/db";
import type { UserAddressRow } from "@/lib/db/schema";
import { mysqlAll, mysqlGet, mysqlRun, useMysql } from "@/lib/db/mysql";

export type CreateAddressInput = {
  userId: number;
  label: string;
  line1: string;
  line2?: string | null;
  city: string;
  district: string;
  postalCode?: string | null;
  isDefault?: boolean;
};

export type UpdateAddressInput = Partial<
  Omit<CreateAddressInput, "userId">
> & {
  userId: number;
};

async function clearDefaultAddress(userId: number, exceptId?: number) {
  if (useMysql()) {
    const params: (string | number | null)[] = [userId];
    let sql = "UPDATE user_addresses SET is_default = 0 WHERE user_id = ?";
    if (exceptId != null) {
      sql += " AND id != ?";
      params.push(exceptId);
    }
    await mysqlRun(sql, params);
    return;
  }

  const db = getDb();
  if (exceptId != null) {
    db.prepare(
      "UPDATE user_addresses SET is_default = 0 WHERE user_id = ? AND id != ?",
    ).run(userId, exceptId);
  } else {
    db.prepare("UPDATE user_addresses SET is_default = 0 WHERE user_id = ?").run(
      userId,
    );
  }
}

export async function listUserAddresses(userId: number) {
  const sql =
    "SELECT * FROM user_addresses WHERE user_id = ? ORDER BY is_default DESC, created_at DESC";

  if (useMysql()) {
    return mysqlAll<UserAddressRow>(sql, [userId]);
  }

  return getDb().prepare(sql).all(userId) as UserAddressRow[];
}

export async function getUserAddressById(userId: number, addressId: number) {
  const sql = "SELECT * FROM user_addresses WHERE id = ? AND user_id = ?";

  if (useMysql()) {
    return mysqlGet<UserAddressRow>(sql, [addressId, userId]);
  }

  return getDb().prepare(sql).get(addressId, userId) as
    | UserAddressRow
    | undefined;
}

export async function countUserAddresses(userId: number) {
  const sql = "SELECT COUNT(*) as c FROM user_addresses WHERE user_id = ?";

  if (useMysql()) {
    return Number((await mysqlGet<{ c: number }>(sql, [userId]))?.c || 0);
  }

  return (getDb().prepare(sql).get(userId) as { c: number }).c;
}

export async function createUserAddress(input: CreateAddressInput) {
  const isDefault = input.isDefault ? 1 : 0;

  if (isDefault) {
    await clearDefaultAddress(input.userId);
  }

  if (useMysql()) {
    const result = await mysqlRun(
      `INSERT INTO user_addresses
       (user_id, label, line1, line2, city, district, postal_code, is_default)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        input.userId,
        input.label,
        input.line1,
        input.line2 ?? null,
        input.city,
        input.district,
        input.postalCode ?? null,
        isDefault,
      ],
    );
    return getUserAddressById(input.userId, Number(result.insertId));
  }

  const db = getDb();
  const insert = db
    .prepare(
      `INSERT INTO user_addresses
       (user_id, label, line1, line2, city, district, postal_code, is_default)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    )
    .run(
      input.userId,
      input.label,
      input.line1,
      input.line2 ?? null,
      input.city,
      input.district,
      input.postalCode ?? null,
      isDefault,
    );

  return getUserAddressById(input.userId, Number(insert.lastInsertRowid));
}

export async function updateUserAddress(
  addressId: number,
  input: UpdateAddressInput,
) {
  const existing = await getUserAddressById(input.userId, addressId);
  if (!existing) return null;

  const label = input.label ?? existing.label;
  const line1 = input.line1 ?? existing.line1;
  const line2 = input.line2 !== undefined ? input.line2 : existing.line2;
  const city = input.city ?? existing.city;
  const district = input.district ?? existing.district;
  const postalCode =
    input.postalCode !== undefined ? input.postalCode : existing.postal_code;
  const isDefault =
    input.isDefault !== undefined
      ? input.isDefault
        ? 1
        : 0
      : existing.is_default;

  if (isDefault) {
    await clearDefaultAddress(input.userId, addressId);
  }

  if (useMysql()) {
    await mysqlRun(
      `UPDATE user_addresses
       SET label = ?, line1 = ?, line2 = ?, city = ?, district = ?, postal_code = ?, is_default = ?
       WHERE id = ? AND user_id = ?`,
      [
        label,
        line1,
        line2,
        city,
        district,
        postalCode,
        isDefault,
        addressId,
        input.userId,
      ],
    );
    return getUserAddressById(input.userId, addressId);
  }

  getDb()
    .prepare(
      `UPDATE user_addresses
       SET label = ?, line1 = ?, line2 = ?, city = ?, district = ?, postal_code = ?, is_default = ?
       WHERE id = ? AND user_id = ?`,
    )
    .run(
      label,
      line1,
      line2,
      city,
      district,
      postalCode,
      isDefault,
      addressId,
      input.userId,
    );

  return getUserAddressById(input.userId, addressId);
}

export async function deleteUserAddress(userId: number, addressId: number) {
  const existing = await getUserAddressById(userId, addressId);
  if (!existing) return false;

  if (useMysql()) {
    await mysqlRun("DELETE FROM user_addresses WHERE id = ? AND user_id = ?", [
      addressId,
      userId,
    ]);
    return true;
  }

  getDb()
    .prepare("DELETE FROM user_addresses WHERE id = ? AND user_id = ?")
    .run(addressId, userId);
  return true;
}

export function formatAddressLine(row: UserAddressRow) {
  const parts = [
    row.line1,
    row.line2,
    row.district,
    row.city,
    row.postal_code,
  ].filter(Boolean);
  return parts.join(", ");
}
