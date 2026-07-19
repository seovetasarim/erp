import { getSiteDownloadCount } from "@/lib/downloads/repository";

const GITHUB_API = "https://api.github.com";

export const GITHUB_REPO = "seovetasarim/erp";
export const GITHUB_ASSET_FILENAME = "kurulum.rar";
/** Repoya push edilen guncel kurulum arsivi (master) */
export const REPO_KURULUM_RAW_URL = `https://github.com/${GITHUB_REPO}/raw/master/public/downloads/${GITHUB_ASSET_FILENAME}`;

export type GithubReleaseAsset = {
  name: string;
  download_count: number;
  browser_download_url: string;
};

export type DownloadStats = {
  total: number;
  githubTotal: number;
  siteTotal: number;
  offset: number;
  updatedAt: string;
  releaseTag: string;
  assetName: string;
  downloadUrl: string;
};

type GithubReleaseResponse = {
  tag_name: string;
  assets: GithubReleaseAsset[];
};

async function fetchLatestRelease(): Promise<GithubReleaseResponse> {
  const response = await fetch(`${GITHUB_API}/repos/${GITHUB_REPO}/releases/latest`, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "DijitalERP-Website",
    },
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    throw new Error(`GitHub release fetch failed: ${response.status}`);
  }

  return response.json();
}

function pickAsset(assets: GithubReleaseAsset[]): GithubReleaseAsset | null {
  if (!assets?.length) return null;
  return (
    assets.find((asset) => asset.name === GITHUB_ASSET_FILENAME) ??
    assets[0] ??
    null
  );
}

export async function getDownloadStats(): Promise<DownloadStats> {
  const offset = Number(process.env.DOWNLOAD_COUNT_OFFSET || 0);

  // Gercek indirmeler /api/download -> incrementSiteDownloadCount ile DB'ye yazilir.
  // Dosya artik raw master'dan sunuldugu icin eski GitHub Release sayaci ARTMAZ;
  // bu yuzden gosterilen toplam yalnizca gercek site sayaci + offset baz alinir.
  const siteTotal = await getSiteDownloadCount();

  // Release bilgisi yalnizca etiket/gecmis bilgi icin; erisilmezse sayiyi bozmaz.
  let githubTotal = 0;
  let releaseTag = "";
  try {
    const release = await fetchLatestRelease();
    const asset = pickAsset(release.assets);
    githubTotal = asset?.download_count ?? 0;
    releaseTag = release.tag_name;
  } catch {
    // Release yok/erisilemedi — gercek indirme sayisini etkilemez.
  }

  return {
    githubTotal,
    siteTotal,
    offset,
    total: siteTotal + offset,
    updatedAt: new Date().toISOString(),
    releaseTag,
    assetName: GITHUB_ASSET_FILENAME,
    downloadUrl: REPO_KURULUM_RAW_URL,
  };
}

export async function getGithubDownloadUrl(): Promise<string> {
  return REPO_KURULUM_RAW_URL;
}
