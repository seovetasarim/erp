import Error404Main from "@/pages/error/Error404Main";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Sayfa Bulunamadı (404) | DijitalERP",
  },
  description:
    "Aradığınız sayfa bulunamadı. DijitalERP ana sayfasına dönerek ücretsiz offline ERP'yi indirebilirsiniz.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return <Error404Main />;
}
