import { redirect } from "next/navigation";
import AdminTicketDetailPage from "@/components/admin/pages/AdminTicketDetailPage";
import { getAdminSession } from "@/lib/admin/session";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");

  const id = Number((await params).id);
  if (!Number.isFinite(id)) redirect("/admin/destek");

  return <AdminTicketDetailPage ticketId={id} />;
}
