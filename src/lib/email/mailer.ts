import nodemailer from "nodemailer";

type MailInput = {
  to: string;
  subject: string;
  html: string;
};

function getTransport() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

export async function sendMail(input: MailInput) {
  const transport = getTransport();
  const from =
    process.env.SMTP_FROM || `"DijitalERP" <${process.env.SMTP_USER || "noreply@dijitalerp.com.tr"}>`;

  if (!transport) {
    if (process.env.NODE_ENV === "development") {
      console.info("[email:dev]", input.subject, "→", input.to);
      return { ok: true as const, skipped: true };
    }
    throw new Error("SMTP ayarları tanımlı değil.");
  }

  await transport.sendMail({
    from,
    to: input.to,
    subject: input.subject,
    html: input.html,
  });

  return { ok: true as const, skipped: false };
}

export function buildLicenseEmailHtml(input: {
  name: string;
  planLabel: string;
  customerCode: string;
  remoteUrl: string;
  licenseKeys: string[];
  expiresAt: string | null;
  accountUrl: string;
}) {
  const keysHtml = input.licenseKeys
    .map((key) => `<li><code style="background:#101828;color:#a0ff27;padding:8px 12px;border-radius:8px;display:inline-block">${key}</code></li>`)
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;color:#21212d;max-width:640px;margin:0 auto">
      <h2 style="color:#0c4642">DijitalERP lisansınız hazır</h2>
      <p>Merhaba ${input.name},</p>
      <p><strong>${input.planLabel}</strong> satın alımınız onaylandı. Lisans bilgileriniz aşağıdadır.</p>
      <h3 style="margin-top:24px">Lisans anahtarları</h3>
      <ul style="padding-left:0;list-style:none">${keysHtml}</ul>
      <h3>ERP ayarları</h3>
      <p><strong>Müşteri kodu:</strong> ${input.customerCode}<br/>
      <strong>Uzak lisans URL:</strong> ${input.remoteUrl}</p>
      <p><strong>Bitiş:</strong> ${input.expiresAt || "Süresiz (tek seferlik)"}</p>
      <p style="margin-top:24px">
        <a href="${input.accountUrl}" style="background:#0c4642;color:#fff;padding:12px 20px;border-radius:8px;text-decoration:none">
          Hesabımda Gör
        </a>
      </p>
      <p style="font-size:13px;color:#666;margin-top:32px">DijitalERP — info@dijitalerp.com.tr</p>
    </div>
  `;
}

export function buildRenewalReminderHtml(input: {
  name: string;
  planLabel: string;
  expiresAt: string;
  renewUrl: string;
}) {
  return `
    <div style="font-family:Arial,sans-serif;color:#21212d;max-width:640px;margin:0 auto">
      <h2 style="color:#0c4642">Lisans yenileme hatırlatması</h2>
      <p>Merhaba ${input.name},</p>
      <p><strong>${input.planLabel}</strong> aylık lisansınız <strong>${input.expiresAt}</strong> tarihinde sona erecek.</p>
      <p>Kesintisiz kullanım için lisansınızı yenileyin:</p>
      <p><a href="${input.renewUrl}" style="background:#0c4642;color:#fff;padding:12px 20px;border-radius:8px;text-decoration:none">Lisansı Yenile</a></p>
    </div>
  `;
}
