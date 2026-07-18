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
  const release = await fetchLatestRelease();
  const asset = pickAsset(release.assets);

  if (!asset) {
    throw new Error("GitHub release asset not found");
  }

  const githubTotal = asset.download_count ?? 0;
  const siteTotal = await getSiteDownloadCount();

  return {
    githubTotal,
    siteTotal,
    offset,
    total: githubTotal + siteTotal + offset,
    updatedAt: new Date().toISOString(),
    releaseTag: release.tag_name,
    assetName: asset.name,
    downloadUrl: REPO_KURULUM_RAW_URL,
  };
}

export async function getGithubDownloadUrl(): Promise<string> {
  return REPO_KURULUM_RAW_URL;
}
