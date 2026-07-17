import { getDownloadStats, GITHUB_ASSET_FILENAME } from "@/lib/githubRelease";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const stats = await getDownloadStats();
    return NextResponse.json(stats, {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch {
    const offset = Number(process.env.DOWNLOAD_COUNT_OFFSET || 0);
    return NextResponse.json(
      {
        total: offset,
        githubTotal: 0,
        offset,
        updatedAt: new Date().toISOString(),
        releaseTag: "",
        assetName: GITHUB_ASSET_FILENAME,
        downloadUrl: "https://github.com/seovetasarim/erp/releases/latest",
      },
      { status: 200 },
    );
  }
}
