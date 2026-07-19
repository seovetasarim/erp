import crypto from "crypto";

function mustEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`${name} tanımlı değil.`);
  return value;
}

export function getPaytrConfig() {
  return {
    merchantId: mustEnv("PAYTR_MERCHANT_ID"),
    merchantKey: mustEnv("PAYTR_MERCHANT_KEY"),
    merchantSalt: mustEnv("PAYTR_MERCHANT_SALT"),
    testMode: process.env.PAYTR_TEST_MODE === "1" ? "1" : "0",
  };
}

export function buildPaytrToken(input: {
  userIp: string;
  merchantOid: string;
  email: string;
  paymentAmount: number;
  userBasket: string;
  noInstallment?: string;
  maxInstallment?: string;
  currency?: string;
}) {
  const { merchantId, merchantKey, merchantSalt, testMode } = getPaytrConfig();

  const hashStr = [
    merchantId,
    input.userIp,
    input.merchantOid,
    input.email,
    String(input.paymentAmount),
    input.userBasket,
    input.noInstallment ?? "0",
    input.maxInstallment ?? "0",
    input.currency ?? "TL",
    testMode,
  ].join("");

  const paytrToken = crypto
    .createHmac("sha256", merchantKey)
    .update(hashStr + merchantSalt)
    .digest("base64");

  return { paytrToken, merchantId, testMode };
}

export function verifyPaytrCallback(body: {
  merchant_oid: string;
  status: string;
  total_amount: string;
  hash: string;
}) {
  const { merchantKey, merchantSalt } = getPaytrConfig();
  const payload =
    body.merchant_oid + merchantSalt + body.status + body.total_amount;
  const token = crypto
    .createHmac("sha256", merchantKey)
    .update(payload)
    .digest("base64");
  return token === body.hash;
}

export async function requestPaytrIframeToken(params: Record<string, string>) {
  const form = new URLSearchParams(params);
  const res = await fetch("https://www.paytr.com/odeme/api/get-token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: form.toString(),
  });

  const data = (await res.json()) as { status?: string; token?: string; reason?: string };
  if (data.status !== "success" || !data.token) {
    throw new Error(data.reason || "PayTR token alınamadı.");
  }
  return data.token;
}

export function encodeUserBasket(items: { name: string; price: string; qty: number }[]) {
  const basket = items.map((item) => [item.name, item.price, item.qty]);
  return Buffer.from(JSON.stringify(basket)).toString("base64");
}
