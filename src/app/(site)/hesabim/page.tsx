import MyAccountMain from "@/pages/auth/MyAccountMain";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, buildPageMetadata } from "@/constants/seo";

export const metadata = buildPageMetadata({
  title: "Hesabım",
  description:
    "DijitalERP hesap paneliniz. Profil bilgileri, lisanslar, destek talepleri ve bildirim tercihlerinizi yönetin.",
  path: "/hesabim",
  keywords: ["DijitalERP hesabım", "ERP profil", "lisans yönetimi"],
});

const page = () => {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Ana Sayfa", path: "/" },
          { name: "Hesabım", path: "/hesabim" },
        ])}
      />
      <MyAccountMain />
    </>
  );
};

export default page;
