import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin/session";
import { adminDeleteUserById } from "@/lib/commerce/repository";

type RouteProps = {
  params: Promise<{ id: string }>;
};

export async function DELETE(_request: Request, { params }: RouteProps) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });
  }

  const { id } = await params;
  const userId = Number(id);
  if (!userId) {
    return NextResponse.json({ error: "Geçersiz kullanıcı." }, { status: 400 });
  }

  try {
    await adminDeleteUserById(userId);
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Kullanıcı silinemedi." },
      { status: 400 },
    );
  }
}
