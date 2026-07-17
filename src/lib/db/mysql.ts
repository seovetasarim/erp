import type {
  Pool,
  PoolConnection,
  ResultSetHeader,
  RowDataPacket,
} from "mysql2/promise";
import mysql from "mysql2/promise";
import { resolveMysqlPoolConfig, useMysqlDriver } from "@/lib/db/env";
import { MYSQL_SCHEMA_SQL } from "./mysql-schema";

type SqlParam = string | number | boolean | null | Date | Buffer;
type SqlParams = SqlParam[];

let pool: Pool | undefined;
let schemaReady: Promise<void> | undefined;

function isIgnorableMysqlSchemaError(error: unknown) {
  const code = (error as { code?: string; errno?: number }).code;
  const errno = (error as { errno?: number }).errno;
  return (
    code === "ER_DUP_KEYNAME" ||
    code === "ER_TABLE_EXISTS_ERROR" ||
    code === "ER_DUP_FIELDNAME" ||
    errno === 1061 ||
    errno === 1050
  );
}

async function runMysqlSchemaStatement(pool: Pool, statement: string) {
  try {
    await pool.execute(statement);
  } catch (error) {
    if (isIgnorableMysqlSchemaError(error)) return;
    throw error;
  }
}

export function useMysql() {
  return useMysqlDriver();
}

export async function ensureMysqlSchema() {
  if (!useMysql()) return;
  if (!schemaReady) {
    schemaReady = (async () => {
      if (!pool) {
        pool = mysql.createPool({
          ...resolveMysqlPoolConfig(),
          waitForConnections: true,
          connectionLimit: 10,
          charset: "utf8mb4",
        });
      }
      const statements = MYSQL_SCHEMA_SQL.split(";")
        .map((part) => part.trim())
        .filter(Boolean);
      for (const statement of statements) {
        await runMysqlSchemaStatement(pool, statement);
      }
    })();
  }
  await schemaReady;
}

export async function getMysqlPool() {
  if (!useMysql()) {
    throw new Error("MySQL yapilandirmasi bulunamadi.");
  }
  await ensureMysqlSchema();
  if (!pool) {
    pool = mysql.createPool({
      ...resolveMysqlPoolConfig(),
      waitForConnections: true,
      connectionLimit: 10,
      charset: "utf8mb4",
    });
  }
  return pool;
}

export type DbExecutor = {
  get<T>(sql: string, params?: SqlParams): Promise<T | undefined>;
  all<T>(sql: string, params?: SqlParams): Promise<T[]>;
  run(sql: string, params?: SqlParams): Promise<{ insertId: number }>;
};

function toExecutor(connection: Pool | PoolConnection): DbExecutor {
  return {
    async get<T>(sql: string, params: SqlParams = []) {
      const [rows] = await connection.execute<RowDataPacket[]>(sql, params);
      return rows[0] as T | undefined;
    },
    async all<T>(sql: string, params: SqlParams = []) {
      const [rows] = await connection.execute<RowDataPacket[]>(sql, params);
      return rows as T[];
    },
    async run(sql: string, params: SqlParams = []) {
      const [result] = await connection.execute<ResultSetHeader>(sql, params);
      return { insertId: Number(result.insertId) };
    },
  };
}

export async function mysqlGet<T>(sql: string, params: SqlParams = []) {
  const db = await getMysqlPool();
  return toExecutor(db).get<T>(sql, params);
}

export async function mysqlAll<T>(sql: string, params: SqlParams = []) {
  const db = await getMysqlPool();
  return toExecutor(db).all<T>(sql, params);
}

export async function mysqlRun(sql: string, params: SqlParams = []) {
  const db = await getMysqlPool();
  return toExecutor(db).run(sql, params);
}

export async function withMysqlTransaction<T>(
  fn: (exec: DbExecutor) => Promise<T>,
): Promise<T> {
  const db = await getMysqlPool();
  const connection = await db.getConnection();
  const exec = toExecutor(connection);
  try {
    await connection.beginTransaction();
    const result = await fn(exec);
    await connection.commit();
    return result;
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
}

export async function testMysqlConnection() {
  const db = await getMysqlPool();
  const connection = await db.getConnection();
  try {
    await connection.ping();
    const [rows] = await connection.execute<RowDataPacket[]>(
      "SELECT COUNT(*) as c FROM users",
    );
    return { ok: true as const, users: Number(rows[0]?.c || 0) };
  } finally {
    connection.release();
  }
}

export function nowSql() {
  return useMysql() ? "NOW()" : "datetime('now')";
}
