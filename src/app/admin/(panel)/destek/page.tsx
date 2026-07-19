import { redirect } from "next/navigation";
import AdminTicketsPage from "@/components/admin/pages/AdminTicketsPage";
import { getAdminSession } from "@/lib/admin/session";

export default async function Page() {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");
  return <AdminTicketsPage />;
}
