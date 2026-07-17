import type {
  Pool,
  PoolConnection,
  ResultSetHeader,
  RowDataPacket,
} from "mysql2/promise";
import mysql from "mysql2/promise";
import { MYSQL_SCHEMA_SQL } from "./mysql-schema";

type SqlParam = string | number | boolean | null | Date | Buffer;
type SqlParams = SqlParam[];

let pool: Pool | undefined;
let schemaReady: Promise<void> | undefined;

export function useMysql() {
  return process.env.DB_DRIVER === "mysql" || Boolean(process.env.MYSQL_HOST);
}

function getPoolConfig() {
  return {
    host: process.env.MYSQL_HOST || "localhost",
    port: Number(process.env.MYSQL_PORT || 3306),
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    charset: "utf8mb4",
  };
}

export async function ensureMysqlSchema() {
  if (!useMysql()) return;
  if (!schemaReady) {
    schemaReady = (async () => {
      if (!pool) {
        pool = mysql.createPool(getPoolConfig());
      }
      const statements = MYSQL_SCHEMA_SQL.split(";")
        .map((part) => part.trim())
        .filter(Boolean);
      for (const statement of statements) {
        await pool.execute(statement);
      }
    })();
  }
  await schemaReady;
}

export async function getMysqlPool() {
  if (!useMysql()) {
    throw new Error("MySQL yapılandırması bulunamadı.");
  }
  await ensureMysqlSchema();
  if (!pool) {
    pool = mysql.createPool(getPoolConfig());
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

export function nowSql() {
  return useMysql() ? "NOW()" : "datetime('now')";
}
