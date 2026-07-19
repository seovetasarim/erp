import { redirect } from "next/navigation";
import AdminOrdersPage from "@/components/admin/pages/AdminOrdersPage";
import { listAdminOrders } from "@/lib/admin/data";
import { getAdminSession } from "@/lib/admin/session";

export default async function Page() {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");

  const orders = await listAdminOrders();
  return <AdminOrdersPage initialOrders={orders} />;
}
