import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { expireDueLicenses, getUserLicenses } from "@/lib/commerce/repository";

export async function GET() {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Giriş gerekli." }, { status: 401 });
  }

  await expireDueLicenses();
  const licenses = (await getUserLicenses(session.userId)).map((license) => ({
    id: license.id,
    key: license.license_key,
    planId: license.plan_id,
    billingMode: license.billing_mode,
    maxPcs: license.max_pcs,
    expiresAt: license.expires_at,
    status: license.status,
    createdAt: license.created_at,
  }));

  return NextResponse.json({
    customerCode: session.customerCode,
    remoteUrl: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.dijitalerp.com.tr"}/api/licenses/remote`,
    licenses,
  });
}
