import { redirect } from "next/navigation";
import AdminTicketsPage from "@/components/admin/pages/AdminTicketsPage";
import { getAdminSession } from "@/lib/admin/session";
import { listSupportTickets } from "@/lib/support/repository";

export default async function Page() {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");

  const tickets = await listSupportTickets();
  return <AdminTicketsPage initialTickets={tickets} />;
}
