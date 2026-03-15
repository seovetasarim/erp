import type { Metadata } from 'next';
import AnimateSection from '../AnimateSection';
import Footer from '../Footer';
import PolicyHero from '../PolicyHero';

export const metadata: Metadata = {
  title: 'Kullanım Şartları | DijitalERP ERP Yazılımı',
  description:
    'DijitalERP kullanım şartları: Web sitesi ve ERP yazılımı kullanımına ilişkin hizmet koşulları, yasal yükümlülükler ve kullanıcı sorumlulukları.',
  keywords: ['DijitalERP kullanım şartları', 'ERP yazılımı hizmet şartları'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/kullanim-sartlari' },
  robots: { index: false, follow: false },
};

export default function KullanimSartlariPage() {
  return (
    <div className="site-wrap policy-page">
      <PolicyHero title="Kullanım Şartları" />
      <AnimateSection sectionType="seo" delay={80}>
        <main className="policy-content">
          <p><strong>DijitalERP</strong> web sitesini ve yazılımını kullanarak aşağıdaki kullanım şartlarını kabul etmiş sayılırsınız. Bu şartları okumadan hizmetlerimizi kullanmaya devam etmeniz, koşulları kabul ettiğiniz anlamına gelir. Şartları kabul etmiyorsanız lütfen web sitemizi ve yazılımımızı kullanmayınız.</p>
          <h3>Genel Koşullar</h3>
          <p>Web sitemizi <strong>yalnızca yasal ve meşru amaçlarla</strong> kullanmalısınız. Site içeriğini, görselleri, metinleri veya yazılım kodlarını izinsiz kopyalama, değiştirme, dağıtma veya ticari amaçla kullanma yasaktır. Web sitemize zarar verebilecek, virüs veya zararlı yazılım yayabilecek veya başka kullanıcıların haklarını ihlal edebilecek davranışlardan kaçınmalısınız.</p>
          <h3>Yazılım Lisansı</h3>
          <p><strong>DijitalERP yazılımı lisans satın alımı ile kullanılır.</strong> Lisans koşulları, fiyatlandırma ve kullanım hakları satın alma sırasında size sunulan sözleşme ile belirlenir. Lisanslı kopyayı yalnızca lisans sahibi firma veya kişi kullanabilir. Yazılımın yetkisiz kopyalanması, dağıtılması veya tersine mühendislik yapılması yasaktır.</p>
          <h3>Sorumluluk ve Garanti Reddi</h3>
          <p>Yazılım <strong>&quot;olduğu gibi&quot; (as is)</strong> sunulmaktadır. Veri kaybı, iş kesintisi, yanlış hesaplama veya sistem hatalarından doğan zararlardan DijitalERP sorumlu tutulamaz. Kullanıcı, <strong>düzenli yedekleme yapmakla</strong> yükümlüdür. Yazılımın kurulumu, kullanımı ve veri yönetimi kullanıcının sorumluluğundadır.</p>
          <h3>Fikri Mülkiyet</h3>
          <p>DijitalERP adı, logosu, arayüzü ve tüm içerikleri <strong>telif hakkı ve ticari marka</strong> koruması altındadır. İzinsiz kullanım veya taklit yasaktır.</p>
          <h3>Değişiklikler</h3>
          <p>Bu kullanım şartları <strong>önceden haber verilmeksizin</strong> güncellenebilir. Güncel metin her zaman web sitemizde yayınlanır. Değişiklikler yayınlandığı tarihten itibaren geçerli sayılır.</p>
        </main>
      </AnimateSection>
      <AnimateSection sectionType="footer" delay={100}>
        <Footer />
      </AnimateSection>
    </div>
  );
}
