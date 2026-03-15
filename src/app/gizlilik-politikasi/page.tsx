import type { Metadata } from 'next';
import AnimateSection from '../AnimateSection';
import Footer from '../Footer';
import PolicyHero from '../PolicyHero';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası | DijitalERP ERP Yazılımı',
  description:
    'DijitalERP gizlilik politikası: Kişisel verilerinizin toplanması, işlenmesi, saklanması ve korunması hakkında detaylı bilgi. KVKK uyumlu ERP yazılımı.',
  keywords: ['DijitalERP gizlilik politikası', 'ERP yazılımı KVKK', 'kişisel veri koruma'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/gizlilik-politikasi' },
  robots: { index: false, follow: false },
};

export default function GizlilikPolitikasiPage() {
  return (
    <div className="site-wrap policy-page">
      <PolicyHero title="Gizlilik Politikası" />
      <AnimateSection sectionType="seo" delay={80}>
        <main className="policy-content">
          <p><strong>DijitalERP</strong> olarak kişisel verilerinizin güvenliğine büyük önem veriyoruz. Bu gizlilik politikası, web sitemizi ziyaret ettiğinizde, yazılımımızı kullandığınızda veya bizimle iletişime geçtiğinizde toplanan bilgilerin nasıl işlendiğini, saklandığını ve korunduğunu açıklamaktadır. Politikamızı okumadan önce hizmetlerimizi kullanmaya devam etmeniz, bu koşulları kabul ettiğiniz anlamına gelir.</p>
          <h3>Toplanan Bilgiler</h3>
          <p>Web sitemiz ve yazılımımız aracılığıyla aşağıdaki bilgiler toplanabilir: <strong>Ad, soyad, e-posta adresi, telefon numarası, firma adı, vergi numarası ve adres bilgileri</strong>. Bu bilgiler; iletişim formu doldurulduğunda, demo talebi yapıldığında, hesap oluşturulduğunda veya destek talebinde bulunulduğunda toplanır. Ayrıca web sitemizi ziyaret ederken <strong>IP adresi, tarayıcı türü ve cihaz bilgileri</strong> gibi teknik veriler otomatik olarak kaydedilebilir.</p>
          <h3>Bilgilerin Kullanımı</h3>
          <p>Topladığımız bilgiler <strong>yalnızca hizmet sunumu, müşteri destek, fatura ve sözleşme yönetimi, yasal yükümlülüklerin yerine getirilmesi</strong> amacıyla kullanılır. Verileriniz hiçbir koşulda üçüncü taraflarla satılmaz veya pazarlama amaçlı paylaşılmaz. Yalnızca yasal zorunluluklar veya hizmet sağlayıcılarımızla sözleşme kapsamında (örneğin hosting, ödeme altyapısı) sınırlı paylaşım yapılabilir.</p>
          <h3>Veri Güvenliği</h3>
          <p>Verilerinizi korumak için <strong>şifreleme, güvenli sunucular ve erişim kontrolleri</strong> dahil uygun teknik ve idari önlemler alıyoruz. <strong>DijitalERP yazılımı tamamen offline çalıştığı</strong> için stok, cari, fatura gibi işletme verileriniz yalnızca bilgisayarınızda saklanır ve sunucularımıza iletilmez. Bu sayede verileriniz üçüncü tarafların erişimine kapalı kalır.</p>
          <h3>Veri Saklama Süresi</h3>
          <p>Toplanan kişisel veriler, <strong>hukuki yükümlülüklerimiz ve hizmet ilişkimiz devam ettiği sürece</strong> saklanır. İlişkinin sona ermesinden sonra yasal saklama süreleri dışında veriler silinir veya anonim hale getirilir.</p>
          <h3>İletişim</h3>
          <p>Gizlilik politikamız hakkında sorularınız, talepleriniz veya şikayetleriniz için <a href="/iletisim">iletişim</a> sayfamızdan bize ulaşabilirsiniz. <strong>KVKK kapsamındaki haklarınızı</strong> kullanmak için de aynı kanalları kullanabilirsiniz.</p>
        </main>
      </AnimateSection>
      <AnimateSection sectionType="footer" delay={100}>
        <Footer />
      </AnimateSection>
    </div>
  );
}
