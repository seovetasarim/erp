import { getSession } from "@/lib/auth/session";
import { incrementSiteDownloadCount } from "@/lib/downloads/repository";
import { getGithubDownloadUrl } from "@/lib/githubRelease";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const session = await getSession();
  if (!session) {
    const loginUrl = new URL("/giris", request.url);
    loginUrl.searchParams.set("next", "/api/download");
    return NextResponse.redirect(loginUrl, 302);
  }

  try {
    await incrementSiteDownloadCount();
    const downloadUrl = await getGithubDownloadUrl();
    return NextResponse.redirect(downloadUrl, 302);
  } catch {
    return NextResponse.redirect(
      "https://github.com/seovetasarim/erp/releases/latest",
      302,
    );
  }
}
