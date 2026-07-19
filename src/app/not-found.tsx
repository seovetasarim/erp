import Error404Main from "@/pages/error/Error404Main";
import GlobalVideoModal from "@/components/Popup/GlobalVideoModal";
import { VideoProvider } from "@/provider/VideoProvider";
import AppProvider from "@/provider/AppProvider";
import Wrapper from "@/layouts/wrapper";
import "./globals.scss";
import "swiper/css/bundle";
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

export default function RootNotFound() {
  return (
    <div className="no-js agntix-light site-shell">
      <AppProvider>
        <Wrapper>
          <VideoProvider>
            <Error404Main />
            <GlobalVideoModal />
          </VideoProvider>
        </Wrapper>
      </AppProvider>
    </div>
  );
}
