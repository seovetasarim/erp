import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { findUserById } from "@/lib/commerce/repository";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ user: null });
  }

  if (session.name) {
    return NextResponse.json({
      user: {
        id: session.userId,
        name: session.name,
        email: session.email,
        phone: session.phone,
        customerCode: session.customerCode,
      },
    });
  }

  const user = await findUserById(session.userId);
  if (!user) {
    return NextResponse.json({ user: null });
  }

  return NextResponse.json({
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      customerCode: user.customer_code,
    },
  });
}
