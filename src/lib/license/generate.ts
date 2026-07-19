import crypto from "crypto";
import fs from "fs";

function loadSecret(): string {
  const env = process.env.DIJITALERP_LICENSE_SECRET?.trim();
  if (env && env.length >= 16) return env;

  const secretPath = process.env.DIJITALERP_LICENSE_SECRET_PATH;
  if (secretPath && fs.existsSync(secretPath)) {
    const content = fs.readFileSync(secretPath, "utf8").trim();
    if (content.length >= 16) return content;
  }

  throw new Error(
    "DIJITALERP_LICENSE_SECRET tanımlı değil. ERP ile aynı license.secret kullanılmalı.",
  );
}

export function generateLicenseKey(): string {
  const secret = loadSecret();
  const id = crypto.randomBytes(10).toString("hex").toUpperCase();
  const sig = crypto
    .createHmac("sha256", secret)
    .update(id)
    .digest("hex")
    .slice(0, 10)
    .toUpperCase();
  return `DERP-${id}-${sig}`;
}

export function verifyLicenseKeyFormat(rawKey: string): string | null {
  const secret = loadSecret();
  const k = String(rawKey || "")
    .trim()
    .toUpperCase()
    .replace(/\s+/g, "");
  const m = /^DERP-([0-9A-F]{20})-([0-9A-F]{10})$/.exec(k);
  if (!m) return null;
  const id = m[1];
  const sig = m[2];
  const expected = crypto
    .createHmac("sha256", secret)
    .update(id)
    .digest("hex")
    .slice(0, 10)
    .toUpperCase();
  if (sig !== expected) return null;
  return `DERP-${id}-${sig}`;
}

export function licenseKeyFingerprint(key: string): string {
  return crypto
    .createHash("sha256")
    .update(String(key).trim().toUpperCase())
    .digest("hex");
}

export function computeLicenseExpiry(
  billingMode: "monthly" | "lifetime",
): string | null {
  if (billingMode === "lifetime") return null;
  return extendExpiryFromBase(null);
}

export function extendExpiryFromBase(baseIso: string | null): string {
  const now = new Date();
  const base = baseIso ? new Date(baseIso) : now;
  const start = base > now ? base : now;
  const expires = new Date(start);
  expires.setMonth(expires.getMonth() + 1);
  return expires.toISOString();
}
