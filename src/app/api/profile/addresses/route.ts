import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import {
  createUserAddress,
  formatAddressLine,
  listUserAddresses,
} from "@/lib/addresses/repository";

function mapAddress(row: Awaited<ReturnType<typeof listUserAddresses>>[number]) {
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

export async function GET() {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Oturum gerekli." }, { status: 401 });
  }

  const addresses = await listUserAddresses(session.userId);
  return NextResponse.json({
    addresses: addresses.map(mapAddress),
  });
}

export async function POST(request: Request) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Oturum gerekli." }, { status: 401 });
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

  const label = body.label?.trim() || "Genel";
  const line1 = body.line1?.trim() ?? "";
  const line2 = body.line2?.trim() || null;
  const city = body.city?.trim() ?? "";
  const district = body.district?.trim() ?? "";
  const postalCode = body.postalCode?.trim() || null;

  if (!line1 || !city || !district) {
    return NextResponse.json(
      { error: "Adres, il ve ilçe zorunludur." },
      { status: 400 },
    );
  }

  const address = await createUserAddress({
    userId: session.userId,
    label,
    line1,
    line2,
    city,
    district,
    postalCode,
    isDefault: body.isDefault ?? true,
  });

  if (!address) {
    return NextResponse.json({ error: "Adres kaydedilemedi." }, { status: 500 });
  }

  return NextResponse.json({ ok: true, address: mapAddress(address) });
}
