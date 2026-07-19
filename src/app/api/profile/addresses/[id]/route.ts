import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import {
  deleteUserAddress,
  formatAddressLine,
  getUserAddressById,
  updateUserAddress,
} from "@/lib/addresses/repository";

type RouteContext = { params: Promise<{ id: string }> };

function mapAddress(row: NonNullable<Awaited<ReturnType<typeof getUserAddressById>>>) {
  return {
    id: row.id,
    label: row.label,
    line1: row.line1,
    line2: row.line2,
    city: row.city,
    district: row.district,
    postalCode: row.postal_code,
    isDefault: Boolean(row.is_default),
    formatted: formatAddressLine(row),
    createdAt: row.created_at,
  };
}

export async function PATCH(request: Request, context: RouteContext) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Oturum gerekli." }, { status: 401 });
  }

  const { id } = await context.params;
  const addressId = Number(id);
  if (!Number.isFinite(addressId)) {
    return NextResponse.json({ error: "Geçersiz adres." }, { status: 400 });
  }

  const body = (await request.json()) as {
    label?: string;
    line1?: string;
    line2?: string;
    city?: string;
    district?: string;
    postalCode?: string;
    isDefault?: boolean;
  };

  const address = await updateUserAddress(addressId, {
    userId: session.userId,
    label: body.label?.trim(),
    line1: body.line1?.trim(),
    line2: body.line2 !== undefined ? body.line2.trim() || null : undefined,
    city: body.city?.trim(),
    district: body.district?.trim(),
    postalCode:
      body.postalCode !== undefined ? body.postalCode.trim() || null : undefined,
    isDefault: body.isDefault,
  });

  if (!address) {
    return NextResponse.json({ error: "Adres bulunamadı." }, { status: 404 });
  }

  return NextResponse.json({ ok: true, address: mapAddress(address) });
}

export async function DELETE(_request: Request, context: RouteContext) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Oturum gerekli." }, { status: 401 });
  }

  const { id } = await context.params;
  const addressId = Number(id);
  if (!Number.isFinite(addressId)) {
    return NextResponse.json({ error: "Geçersiz adres." }, { status: 400 });
  }

  const deleted = await deleteUserAddress(session.userId, addressId);
  if (!deleted) {
    return NextResponse.json({ error: "Adres bulunamadı." }, { status: 404 });
  }

  return NextResponse.json({ ok: true });
}
