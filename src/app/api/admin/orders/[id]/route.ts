import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin/session";
import {
  adminCancelOrderById,
  adminDeleteOrderById,
  adminDeleteOrderByIdForce,
  adminMarkOrderPaidById,
} from "@/lib/commerce/repository";

type RouteProps = {
  params: Promise<{ id: string }>;
};

export async function PATCH(request: Request, { params }: RouteProps) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });
  }

  const { id } = await params;
  const orderId = Number(id);
  if (!orderId) {
    return NextResponse.json({ error: "Geçersiz sipariş." }, { status: 400 });
  }

  const body = (await request.json()) as { action?: string };
  const action = body.action?.trim();

  try {
    if (action === "approve") {
      const order = await adminMarkOrderPaidById(orderId);
      return NextResponse.json({ ok: true, order });
    }

    if (action === "cancel") {
      const order = await adminCancelOrderById(orderId);
      return NextResponse.json({ ok: true, order });
    }

    return NextResponse.json({ error: "Geçersiz işlem." }, { status: 400 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "İşlem başarısız." },
      { status: 400 },
    );
  }
}

export async function DELETE(request: Request, { params }: RouteProps) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });
  }

  const { id } = await params;
  const orderId = Number(id);
  if (!orderId) {
    return NextResponse.json({ error: "Geçersiz sipariş." }, { status: 400 });
  }

  const url = new URL(request.url);
  const force = url.searchParams.get("force") === "1";

  try {
    if (force) {
      await adminDeleteOrderByIdForce(orderId);
    } else {
      await adminDeleteOrderById(orderId);
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Silinemedi." },
      { status: 400 },
    );
  }
}
