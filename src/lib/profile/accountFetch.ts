import { fetchJson } from "@/lib/http/safeJson";

type CacheEntry = {
  at: number;
  ok: boolean;
  status: number;
  data: unknown;
};

const TTL_MS = 45_000;
const cache = new Map<string, CacheEntry>();
const inflight = new Map<string, Promise<CacheEntry>>();

function cacheKey(url: string, init?: RequestInit) {
  return `${init?.method || "GET"}:${url}`;
}

export function invalidateAccountCache(urlPrefix?: string) {
  if (!urlPrefix) {
    cache.clear();
    return;
  }
  for (const key of cache.keys()) {
    if (key.includes(urlPrefix)) cache.delete(key);
  }
}

export async function accountFetchJson<T>(
  url: string,
  init?: RequestInit & { force?: boolean },
): Promise<{ ok: boolean; status: number; data: T }> {
  const { force, ...fetchInit } = init || {};
  const key = cacheKey(url, fetchInit);
  const method = (fetchInit.method || "GET").toUpperCase();
  const canCache = method === "GET" && !force;

  if (canCache) {
    const hit = cache.get(key);
    if (hit && Date.now() - hit.at < TTL_MS) {
      return { ok: hit.ok, status: hit.status, data: hit.data as T };
    }

    const pending = inflight.get(key);
    if (pending) {
      const shared = await pending;
      return { ok: shared.ok, status: shared.status, data: shared.data as T };
    }
  }

  const request = (async () => {
    const result = await fetchJson<unknown>(url, fetchInit);
    const entry: CacheEntry = {
      at: Date.now(),
      ok: result.ok,
      status: result.status,
      data: result.data,
    };
    if (canCache && result.ok) {
      cache.set(key, entry);
    } else if (method !== "GET") {
      invalidateAccountCache("/api/");
    }
    return entry;
  })();

  if (canCache) {
    inflight.set(key, request);
    try {
      const entry = await request;
      return { ok: entry.ok, status: entry.status, data: entry.data as T };
    } finally {
      inflight.delete(key);
    }
  }

  const entry = await request;
  return { ok: entry.ok, status: entry.status, data: entry.data as T };
}
