import { NextResponse } from "next/server";
import { getOrderByMerchantOid, markOrderPaid } from "@/lib/commerce/repository";
import { saveUserPaytrToken } from "@/lib/commerce/fulfillment";
import { mysqlRun, useMysql } from "@/lib/db/mysql";
import { verifyPaytrCallback } from "@/lib/paytr/client";

export async function POST(request: Request) {
  try {
    const form = await request.formData();
    const body = {
      merchant_oid: String(form.get("merchant_oid") || ""),
      status: String(form.get("status") || ""),
      total_amount: String(form.get("total_amount") || ""),
      hash: String(form.get("hash") || ""),
      utoken: String(form.get("utoken") || ""),
      ctoken: String(form.get("ctoken") || ""),
    };

    if (!verifyPaytrCallback(body)) {
      return new NextResponse("HASH_MISMATCH", { status: 400 });
    }

    const order = await getOrderByMerchantOid(body.merchant_oid);
    if (!order) {
      return new NextResponse("ORDER_NOT_FOUND", { status: 404 });
    }

    if (order.status === "paid") {
      return new NextResponse("OK");
    }

    if (body.status === "success") {
      await markOrderPaid(body.merchant_oid);

      if (body.utoken) {
        await saveUserPaytrToken(order.user_id, body.utoken);
      }
    } else if (useMysql()) {
      await mysqlRun("UPDATE orders SET status = 'failed' WHERE merchant_oid = ?", [
        body.merchant_oid,
      ]);
    } else {
      const { getDb } = await import("@/lib/db");
      getDb()
        .prepare("UPDATE orders SET status = 'failed' WHERE merchant_oid = ?")
        .run(body.merchant_oid);
    }

    return new NextResponse("OK");
  } catch {
    return new NextResponse("ERROR", { status: 500 });
  }
}
