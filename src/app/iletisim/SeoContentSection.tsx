import { SITE_HOST } from '../../site-url';

export default function SeoContentSection() {
  return (
    <section className="section section-seo" aria-labelledby="seo-contact-heading">
      <div className="section-inner">
        <h2 id="seo-contact-heading" className="seo-main-title">
          DijitalERP İletişim ve Destek
        </h2>
        <div className="seo-columns">
          <article className="seo-col">
            <h3>Bize Nasıl Ulaşabilirsiniz?</h3>
            <p>
              <strong>DijitalERP</strong> ile iletişime geçmek için bu sayfadaki formu doldurabilir veya <strong>0532 166 76 97</strong> numarasından arayabilirsiniz. <strong>E-posta</strong> ile info@dijitalerp.com.tr adresine yazabilirsiniz. <strong>ERP yazılımı</strong>, stok takip, cari yönetim ve E-Fatura hakkında tüm sorularınızı yanıtlamaya hazırız.
            </p>
            <p>
              <strong>Kurumsal destek</strong> ekibimiz hafta içi 09:00 - 18:00 arası hizmetinizdedir. <strong>Demo talebi</strong>, fiyat bilgisi, kurulum desteği veya teknik sorularınız için bize ulaşabilirsiniz. <strong>KOBİ ERP</strong> çözümümüz hakkında detaylı bilgi almak isteyen işletmeleri bekliyoruz.
            </p>
            <h3>Destek ve Danışmanlık</h3>
            <p>
              <strong>DijitalERP</strong> satış öncesi ve sonrası <strong>teknik destek</strong> sunar. E-Fatura kurulumu, barkod entegrasyonu ve yazılım kullanımı konusunda yardımcı oluyoruz. <strong>Stok takip yazılımı</strong> ve <strong>cari yönetim</strong> modülleri hakkında eğitim talepleriniz için iletişime geçin.
            </p>
          </article>
          <article className="seo-col">
            <h3>İletişim Kanalları</h3>
            <p>
              <strong>Telefon:</strong> 0532 166 76 97 numarasından hemen arayabilirsiniz. <strong>E-posta:</strong> info@dijitalerp.com.tr adresine yazın. <strong>Web:</strong> {SITE_HOST} üzerinden bilgi alabilirsiniz. <strong>WhatsApp</strong> ile de iletişime geçebilirsiniz.
            </p>
            <p>
              <strong>Çalışma saatleri</strong> Pazartesi - Cuma 09:00 - 18:00 arasındadır. Acil durumlar için mesaj bırakabilirsiniz. <strong>ERP sistemi</strong> kurulumu ve E-Fatura entegrasyonu için randevu alabilirsiniz.
            </p>
            <h3>Neden DijitalERP?</h3>
            <p>
              <strong>Tek seferlik ödeme</strong>, abonelik yok, <strong>tamamen offline</strong> çalışan ERP yazılımı. Stok takip, cari yönetim, fatura, kasa ve raporlama tek yazılımda. <strong>25.000 TL</strong> ve <strong>35.000 TL</strong> paket seçenekleri ile KOBİ&apos;lere uygun fiyatlı çözüm.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
