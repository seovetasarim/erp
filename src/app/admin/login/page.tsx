import AdminLoginMain from "@/pages/admin/AdminLoginMain";
import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/admin/session";

export default async function AdminLoginPage() {
  const session = await getAdminSession();
  if (session) redirect("/admin");

  return <AdminLoginMain />;
}
