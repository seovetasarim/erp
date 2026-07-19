import { NextResponse } from "next/server";
import {
  getMissingMysqlEnvKeys,
  getMysqlEnvPresence,
  hasMysqlEnvConfig,
  isServerlessHost,
  useMysqlDriver,
} from "@/lib/db/env";
import { testMysqlConnection, useMysql } from "@/lib/db/mysql";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  const missing = getMissingMysqlEnvKeys();
  const presence = getMysqlEnvPresence();
  const mysqlEnabled = useMysql();

  let connection: { ok: true; users: number } | { ok: false; error: string } | null =
    null;

  if (mysqlEnabled && hasMysqlEnvConfig()) {
    try {
      connection = await testMysqlConnection();
    } catch (error) {
      connection = {
        ok: false,
        error: error instanceof Error ? error.message : "MySQL baglantisi basarisiz",
      };
    }
  }

  return NextResponse.json({
    ok: Boolean(connection && connection.ok),
    serverless: isServerlessHost(),
    vercelEnv: process.env.VERCEL_ENV || null,
    vercelUrl: process.env.VERCEL_URL || null,
    dbDriver: process.env.DB_DRIVER || null,
    useMysql: mysqlEnabled,
    presence,
    missing,
    connection,
    hint:
      missing.length > 0
        ? "Bu Vercel deployment'inda MySQL env okunmuyor. dogru projede Production secili oldugundan emin olun ve redeploy yapin. Alternatif: tek satir DATABASE_URL ekleyin."
        : connection && !connection.ok
          ? "Env var ama MySQL baglantisi kurulamadi. Remote MySQL izni ve sifreyi kontrol edin."
          : "MySQL baglantisi basarili.",
  });
}
