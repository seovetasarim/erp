import type { Metadata } from 'next';
import AnimateSection from '../AnimateSection';
import Footer from '../Footer';
import PolicyHero from '../PolicyHero';

export const metadata: Metadata = {
  title: 'KVKK Aydınlatma Metni | DijitalERP ERP Yazılımı',
  description:
    'DijitalERP KVKK aydınlatma metni: 6698 sayılı KVKK kapsamında kişisel verilerin işlenmesi, veri sorumlusu, haklarınız ve başvuru yolları hakkında bilgi.',
  keywords: ['DijitalERP KVKK', 'ERP yazılımı kişisel veri', 'KVKK aydınlatma metni'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/kvkk' },
  robots: { index: false, follow: false },
};

export default function KvkkPage() {
  return (
    <div className="site-wrap policy-page">
      <PolicyHero title="KVKK Aydınlatma Metni" />
      <AnimateSection sectionType="seo" delay={80}>
        <main className="policy-content">
          <p><strong>6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK)</strong> kapsamında, DijitalERP olarak kişisel verilerinizin işlenmesi, saklanması ve korunması hakkında sizi aydınlatmak amacıyla bu metni hazırladık. Kişisel verileriniz, Kanun&apos;un 5. ve 6. maddelerinde belirtilen şartlar çerçevesinde işlenmektedir.</p>
          <h3>Veri Sorumlusu</h3>
          <p>Kişisel verilerinizin işlenmesinden <strong>DijitalERP</strong> sorumludur. Sorularınız, talepleriniz veya şikayetleriniz için <a href="/iletisim">iletişim</a> sayfamızdan bize ulaşabilirsiniz.</p>
          <h3>İşlenen Kişisel Veriler</h3>
          <p><strong>Kimlik bilgileri:</strong> Ad, soyad, T.C. kimlik numarası (yasal zorunluluk halinde).</p>
          <p><strong>İletişim bilgileri:</strong> E-posta adresi, telefon numarası, adres.</p>
          <p><strong>Müşteri işlem bilgileri:</strong> Firma adı, vergi numarası, fatura bilgileri, sözleşme ve ödeme kayıtları.</p>
          <p><strong>İşlem güvenliği bilgileri:</strong> IP adresi, tarayıcı türü, oturum bilgileri.</p>
          <h3>İşleme Amaçları ve Hukuki Sebepler</h3>
          <p>Kişisel verileriniz; <strong>hizmet sunumu, sözleşme yönetimi, fatura ve muhasebe işlemleri, müşteri destek, yasal yükümlülüklerin yerine getirilmesi</strong> amacıyla işlenir. <strong>DijitalERP yazılımı tamamen offline çalıştığı</strong> için stok, cari hesap, fatura gibi işletme verileriniz sunucularımıza iletilmez; yalnızca kullanıcının kendi bilgisayarında saklanır.</p>
          <h3>Veri Aktarımı</h3>
          <p>Kişisel verileriniz, yalnızca <strong>yasal zorunluluklar</strong> veya hizmet sağlayıcılarımızla (hosting, ödeme altyapısı vb.) sözleşme kapsamında sınırlı olarak paylaşılabilir. Verileriniz yurt dışına aktarılmamaktadır.</p>
          <h3>KVKK Kapsamındaki Haklarınız</h3>
          <p>KVKK madde 11 uyarınca aşağıdaki haklara sahipsiniz: <strong>Kişisel verilerinizin işlenip işlenmediğini öğrenme; işlenmişse buna ilişkin bilgi talep etme; işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme; yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme; eksik veya yanlış işlenmişse düzeltilmesini isteme; silinmesini veya yok edilmesini talep etme; otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme; kanuna aykırı işlenmesi sebebiyle zarara uğramanız halinde tazminat talep etme.</strong> Başvurularınızı iletişim sayfamız üzerinden iletebilirsiniz.</p>
        </main>
      </AnimateSection>
      <AnimateSection sectionType="footer" delay={100}>
        <Footer />
      </AnimateSection>
    </div>
  );
}
