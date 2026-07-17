import { NextResponse } from "next/server";
import { getMissingMysqlEnvKeys, isServerlessHost } from "@/lib/db";
import { useMysql } from "@/lib/db/mysql";

export async function GET() {
  const missing = getMissingMysqlEnvKeys();

  return NextResponse.json({
    ok: missing.length === 0 && useMysql(),
    serverless: isServerlessHost(),
    dbDriver: process.env.DB_DRIVER || null,
    mysqlHostSet: Boolean(process.env.MYSQL_HOST?.trim()),
    useMysql: useMysql(),
    missing,
    hint:
      missing.length > 0
        ? "Vercel → Settings → Environment Variables → Production kutusunu işaretleyip redeploy edin."
        : "MySQL ortam degiskenleri yuklu gorunuyor.",
  });
}
