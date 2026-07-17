import AdminLoginForm from "@/components/admin/AdminLoginForm";
import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/admin/session";

export default async function AdminLoginPage() {
  const session = await getAdminSession();
  if (session) redirect("/admin");

  return <AdminLoginForm />;
}
