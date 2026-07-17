import Signin from "@na/components/Auth/Signin";
import DijitalErpLogo from "@/components/brand/DijitalErpLogo";
import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/admin/session";
import Image from "next/image";
import Link from "next/link";

export default async function AdminLoginPage() {
  const session = await getAdminSession();
  if (session) redirect("/admin");

  return (
    <div className="flex min-h-screen flex-wrap items-center">
      <div className="w-full xl:w-1/2">
        <div className="mx-auto w-[570px] p-4 sm:p-12.5 xl:p-15">
          <Signin />
        </div>
      </div>

      <div className="hidden w-full p-6 xl:block xl:w-1/2">
        <div className="custom-gradient-1 overflow-hidden rounded-2xl px-15 pt-12.5 dark:bg-dark-2! dark:bg-none">
          <div className="mb-10">
            <DijitalErpLogo href="/" variant="dark" size="lg" />
          </div>
          <p className="mb-3 text-xl font-medium text-dark dark:text-white">
            Yönetim paneline giriş
          </p>
          <h1 className="mb-4 text-2xl font-bold text-dark dark:text-white sm:text-heading-3">
            Hoş Geldiniz!
          </h1>
          <p className="w-full max-w-[375px] font-medium text-dark-4 dark:text-dark-6">
            Devam etmek için kullanıcı adı ve şifrenizi girin.
          </p>
          <div className="mt-31">
            <Image
              src="/admin-nextadmin/images/grids/grid-02.svg"
              alt=""
              width={405}
              height={325}
              className="mx-auto dark:opacity-30"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
