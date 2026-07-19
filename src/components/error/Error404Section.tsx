import errorImg from "../../../public/assets/img/error/error.png";
import Image from "next/image";
import Link from "next/link";

export default function Error404Section() {
  return (
    <section className="tp-error-area pt-180 pb-140 p-relative z-index-1 fix">
      <div className="container container-1230">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="tp-error-wrapper text-center">
              <Image
                src={errorImg}
                alt="404 — Sayfa bulunamadı"
                priority
                style={{ height: "auto", width: "auto", maxWidth: "100%" }}
              />
              <div className="tp-error-content">
                <h1 className="tp-error-title-sm">Sayfa bulunamadı</h1>
                <p>
                  Aradığınız sayfa taşınmış, kaldırılmış veya hiç var olmamış olabilir.
                  Ana sayfadan devam edebilirsiniz.
                </p>
                <Link className="tp-btn" href="/">
                  Ana Sayfaya Dön
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
