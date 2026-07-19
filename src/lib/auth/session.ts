import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import type { UserRow } from "@/lib/db/schema";

const COOKIE_NAME = "dijitalerp_session";

function getSecret() {
  const secret = process.env.AUTH_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("AUTH_SECRET en az 32 karakter olmalı.");
  }
  return new TextEncoder().encode(secret);
}

export type SessionPayload = {
  userId: number;
  email: string;
  customerCode: string;
  name: string;
  phone: string;
};

export async function createSession(
  user: Pick<UserRow, "id" | "email" | "customer_code" | "name" | "phone">,
) {
  const token = await new SignJWT({
    userId: user.id,
    email: user.email,
    customerCode: user.customer_code,
    name: user.name,
    phone: user.phone,
  } satisfies SessionPayload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("30d")
    .sign(getSecret());

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
}

export async function destroySession() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export async function getSession(): Promise<SessionPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, getSecret());
    return {
      userId: Number(payload.userId),
      email: String(payload.email),
      customerCode: String(payload.customerCode),
      name: String(payload.name || ""),
      phone: String(payload.phone || ""),
    };
  } catch {
    return null;
  }
}

export function createCustomerCode(userId: number) {
  return `DE-${String(userId).padStart(6, "0")}`;
}
