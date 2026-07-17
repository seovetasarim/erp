import { redirect } from "next/navigation";
import AdminSubscriptionsPage from "@/components/admin/pages/AdminSubscriptionsPage";
import { getAdminSession } from "@/lib/admin/session";

export default async function Page() {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");
  return <AdminSubscriptionsPage />;
}
