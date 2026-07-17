import { getGithubDownloadUrl } from "@/lib/githubRelease";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const downloadUrl = await getGithubDownloadUrl();
    return NextResponse.redirect(downloadUrl, 302);
  } catch {
    return NextResponse.redirect(
      "https://github.com/seovetasarim/erp/releases/latest",
      302,
    );
  }
}
