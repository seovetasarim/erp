import CheckoutClient from "@/components/checkout/CheckoutClient";
import CheckoutMain from "@/pages/checkout/CheckoutMain";
import { buildPageMetadata } from "@/constants/seo";
import { Suspense } from "react";

export const metadata = buildPageMetadata({
  title: "Ödeme",
  description: "DijitalERP lisansınızı PayTR ile güvenle satın alın.",
  path: "/odeme",
});

export default function OdemePage() {
  return (
    <CheckoutMain>
      <Suspense fallback={<div className="it-checkout-loading">Yükleniyor…</div>}>
        <CheckoutClient />
      </Suspense>
    </CheckoutMain>
  );
}
