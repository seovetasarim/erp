export async function readJson<T>(res: Response): Promise<T> {
  const text = await res.text();
  if (!text) return {} as T;
  try {
    return JSON.parse(text) as T;
  } catch {
    throw new Error(
      res.ok
        ? "Sunucu yanıtı okunamadı. Lütfen tekrar deneyin."
        : `İstek başarısız (${res.status}). Lütfen tekrar deneyin.`,
    );
  }
}

export async function fetchJson<T>(
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<{ ok: boolean; status: number; data: T }> {
  const res = await fetch(input, init);
  const data = await readJson<T>(res);
  return { ok: res.ok, status: res.status, data };
}
