import Link from "next/link";
import CheckoutMain from "@/pages/checkout/CheckoutMain";

export default function OdemeBasarisizPage() {
  return (
    <CheckoutMain>
      <div className="it-checkout-result is-fail">
        <h1>Ödeme tamamlanamadı</h1>
        <p>İşlem iptal edildi veya banka tarafından reddedildi. Tekrar deneyebilirsiniz.</p>
        <Link className="tp-login-btn d-inline-block mt-20" href="/fiyatlandirma">
          Paketlere Dön
        </Link>
      </div>
    </CheckoutMain>
  );
}
