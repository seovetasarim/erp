import LoginMain from "@/pages/auth/LoginMain";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, buildPageMetadata } from "@/constants/seo";

export const metadata = buildPageMetadata({
  title: "Giriş Yap",
  description:
    "DijitalERP hesabınıza giriş yapın. Lisans yönetimi, destek talepleri ve indirme geçmişinize erişin.",
  path: "/giris",
  keywords: ["DijitalERP giriş", "ERP hesap", "kullanıcı girişi"],
});

const page = () => {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Ana Sayfa", path: "/" },
          { name: "Giriş Yap", path: "/giris" },
        ])}
      />
      <LoginMain />
    </>
  );
};

export default page;
