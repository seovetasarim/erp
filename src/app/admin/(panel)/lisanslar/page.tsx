import { redirect } from "next/navigation";
import AdminLicensesPage from "@/components/admin/pages/AdminLicensesPage";
import { listAdminLicenses } from "@/lib/admin/data";
import { getAdminSession } from "@/lib/admin/session";

export default async function Page() {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");

  const licenses = await listAdminLicenses();
  return <AdminLicensesPage initialLicenses={licenses} />;
}
