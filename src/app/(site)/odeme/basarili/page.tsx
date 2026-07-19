import Link from "next/link";
import CheckoutMain from "@/pages/checkout/CheckoutMain";

export default function OdemeBasariliPage() {
  return (
    <CheckoutMain>
      <div className="it-checkout-result">
        <h1>Ödeme alındı</h1>
        <p>
          Ödemeniz alındı. Lisansınız kısa süre içinde yönetici tarafından tanımlanacak;
          hazır olduğunda{" "}
          <Link href="/hesabim">Hesabım → Lisanslarım</Link> bölümünde görünür ve e-posta
          ile bilgilendirilirsiniz.
        </p>
        <Link className="tp-login-btn d-inline-block mt-20" href="/hesabim">
          Lisanslarımı Gör
        </Link>
      </div>
    </CheckoutMain>
  );
}
