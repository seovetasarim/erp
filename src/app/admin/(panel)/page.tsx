import { redirect } from "next/navigation";
import AdminDashboard from "@/components/admin/AdminDashboard";
import { getAdminSession } from "@/lib/admin/session";
import { listAdminOverview } from "@/lib/commerce/repository";

export default async function AdminPage() {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");

  const initialData = await listAdminOverview();
  return <AdminDashboard initialData={initialData} />;
}
