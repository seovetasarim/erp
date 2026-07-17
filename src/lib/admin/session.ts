import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { verifyAdminLogin } from "@/lib/admin/repository";
import { ensureDefaultAdminUser } from "@/lib/admin/bootstrap";

const COOKIE_NAME = "dijitalerp_admin";

function getSecret() {
  const secret = process.env.ADMIN_SECRET || process.env.AUTH_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("ADMIN_SECRET veya AUTH_SECRET en az 32 karakter olmalı.");
  }
  return new TextEncoder().encode(secret);
}

export async function verifyAdminCredentials(username: string, password: string) {
  await ensureDefaultAdminUser();

  const admin = await verifyAdminLogin(username, password);
  if (admin) return true;

  const expectedUser = process.env.ADMIN_USERNAME || "admin";
  const expectedPass = process.env.ADMIN_PASSWORD;
  if (!expectedPass) return false;
  return username.trim().toLowerCase() === expectedUser && password === expectedPass;
}

export async function createAdminSession(username: string) {
  const token = await new SignJWT({ role: "admin", username: username.trim().toLowerCase() })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("12h")
    .sign(getSecret());

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 12,
  });
}

export async function destroyAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export async function getAdminSession(): Promise<{ username: string } | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, getSecret());
    if (payload.role !== "admin") return null;
    return { username: String(payload.username || "admin") };
  } catch {
    return null;
  }
}
