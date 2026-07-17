export function isServerlessHost() {
  return Boolean(process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME);
}

export function getMysqlConnectionUrl() {
  return process.env.DATABASE_URL?.trim() || process.env.MYSQL_URL?.trim() || "";
}

export function parseMysqlConnectionUrl(url: string) {
  const parsed = new URL(url);
  const database = parsed.pathname.replace(/^\//, "");
  if (!parsed.hostname || !parsed.username || !database) {
    throw new Error("DATABASE_URL gecersiz. Ornek: mysql://user:pass@host:3306/veritabani");
  }

  return {
    host: parsed.hostname,
    port: Number(parsed.port || 3306),
    user: decodeURIComponent(parsed.username),
    password: decodeURIComponent(parsed.password),
    database,
  };
}

export function getMissingMysqlEnvKeys() {
  if (getMysqlConnectionUrl()) return [];

  const required = [
    "MYSQL_HOST",
    "MYSQL_USER",
    "MYSQL_PASSWORD",
    "MYSQL_DATABASE",
  ] as const;

  return required.filter((key) => !process.env[key]?.trim());
}

export function hasMysqlEnvConfig() {
  return getMissingMysqlEnvKeys().length === 0;
}

export function useMysqlDriver() {
  return (
    process.env.DB_DRIVER === "mysql" ||
    Boolean(process.env.MYSQL_HOST?.trim()) ||
    Boolean(getMysqlConnectionUrl())
  );
}

export function assertWritableSqlite() {
  if (!isServerlessHost()) return;

  if (hasMysqlEnvConfig() && useMysqlDriver()) return;

  const missing = getMissingMysqlEnvKeys();
  if (missing.length === 0) {
    throw new Error(
      "Vercel ortaminda SQLite kullanilamaz. DB_DRIVER=mysql veya DATABASE_URL ekleyip redeploy edin.",
    );
  }

  throw new Error(
    `Vercel ortaminda MySQL zorunludur. Production ortam degiskenlerine ekleyin: ${missing.join(", ")} (veya tek satir DATABASE_URL)`,
  );
}

export function resolveMysqlPoolConfig() {
  const connectionUrl = getMysqlConnectionUrl();
  if (connectionUrl) {
    return parseMysqlConnectionUrl(connectionUrl);
  }

  const missing = getMissingMysqlEnvKeys();
  if (missing.length > 0) {
    throw new Error(`MySQL yapilandirmasi eksik: ${missing.join(", ")}`);
  }

  return {
    host: process.env.MYSQL_HOST!.trim(),
    port: Number(process.env.MYSQL_PORT || 3306),
    user: process.env.MYSQL_USER!.trim(),
    password: process.env.MYSQL_PASSWORD!,
    database: process.env.MYSQL_DATABASE!.trim(),
  };
}

export function getMysqlEnvPresence() {
  return {
    DB_DRIVER: Boolean(process.env.DB_DRIVER?.trim()),
    DATABASE_URL: Boolean(process.env.DATABASE_URL?.trim()),
    MYSQL_URL: Boolean(process.env.MYSQL_URL?.trim()),
    MYSQL_HOST: Boolean(process.env.MYSQL_HOST?.trim()),
    MYSQL_USER: Boolean(process.env.MYSQL_USER?.trim()),
    MYSQL_PASSWORD: Boolean(process.env.MYSQL_PASSWORD?.trim()),
    MYSQL_DATABASE: Boolean(process.env.MYSQL_DATABASE?.trim()),
  };
}
