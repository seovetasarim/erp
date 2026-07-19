import RegisterMain from "@/pages/auth/RegisterMain";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, buildPageMetadata } from "@/constants/seo";

export const metadata = buildPageMetadata({
  title: "Kayıt Ol",
  description:
    "DijitalERP için ücretsiz hesap oluşturun. Lisans takibi, destek talepleri ve güncellemelerden haberdar olun.",
  path: "/kayit",
  keywords: ["DijitalERP kayıt", "ERP hesap oluştur", "ücretsiz kayıt"],
});

const page = () => {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Ana Sayfa", path: "/" },
          { name: "Kayıt Ol", path: "/kayit" },
        ])}
      />
      <RegisterMain />
    </>
  );
};

export default page;
