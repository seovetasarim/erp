import { redirect } from "next/navigation";
import AdminCustomersPage from "@/components/admin/pages/AdminCustomersPage";
import { getAdminSession } from "@/lib/admin/session";

export default async function Page() {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");
  return <AdminCustomersPage />;
}
