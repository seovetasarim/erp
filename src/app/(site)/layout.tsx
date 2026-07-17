import GlobalVideoModal from "@/components/Popup/GlobalVideoModal";
import PromoOfferPopup from "@/components/Popup/PromoOfferPopup";
import { VideoProvider } from "@/provider/VideoProvider";
import AppProvider from "@/provider/AppProvider";
import JsonLd from "@/components/seo/JsonLd";
import GoogleAnalytics from "@/components/seo/GoogleAnalytics";
import {
  organizationJsonLd,
  softwareApplicationJsonLd,
} from "@/constants/seo";
import Wrapper from "@/layouts/wrapper";
import type { PropsWithChildren } from "react";
import "../globals.scss";
import "swiper/css/bundle";

export default function SiteLayout({ children }: PropsWithChildren) {
  return (
    <div className="no-js agntix-light site-shell">
      <GoogleAnalytics />
      <JsonLd data={[organizationJsonLd, softwareApplicationJsonLd]} />
      <AppProvider>
        <Wrapper>
          <VideoProvider>
            {children}
            <GlobalVideoModal />
            <PromoOfferPopup />
          </VideoProvider>
        </Wrapper>
      </AppProvider>
    </div>
  );
}
