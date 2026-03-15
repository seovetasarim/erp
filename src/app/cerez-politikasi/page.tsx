import type { Metadata } from 'next';
import AnimateSection from '../AnimateSection';
import Footer from '../Footer';
import PolicyHero from '../PolicyHero';

export const metadata: Metadata = {
  title: 'Çerez Politikası | DijitalERP ERP Yazılımı',
  description:
    'DijitalERP çerez politikası: Web sitemizde kullanılan zorunlu ve analitik çerezler, çerez tercihleri ve KVKK kapsamındaki haklarınız hakkında bilgi.',
  keywords: ['DijitalERP çerez politikası', 'ERP yazılımı çerezler', 'KVKK çerez'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cerez-politikasi' },
  robots: { index: false, follow: false },
};

export default function CerezPolitikasiPage() {
  return (
    <div className="site-wrap policy-page">
      <PolicyHero title="Çerez Politikası" />
      <AnimateSection sectionType="seo" delay={80}>
        <main className="policy-content">
          <p><strong>DijitalERP</strong> web sitesi, kullanıcı deneyimini iyileştirmek, site performansını analiz etmek ve tercihlerinizi hatırlamak amacıyla çerezler (cookies) kullanabilir. Bu politika, hangi çerezlerin kullanıldığını ve tercihlerinizi nasıl yönetebileceğinizi açıklamaktadır.</p>
          <h3>Çerez Nedir?</h3>
          <p>Çerezler, web sitelerinin tarayıcınız aracılığıyla cihazınıza kaydettiği <strong>küçük metin dosyalarıdır</strong>. Bu dosyalar, sizi tanımak, tercihlerinizi hatırlamak, oturum bilgilerinizi saklamak ve site trafiğini analiz etmek için kullanılır. Çerezler kişisel olarak tanımlanabilir bilgi içermez; ancak tarayıcı ve cihaz bilgilerinizle ilişkilendirilebilir.</p>
          <h3>Kullandığımız Çerez Türleri</h3>
          <p><strong>Zorunlu çerezler:</strong> Site işlevselliği için gereklidir. Oturum yönetimi, güvenlik ve temel özellikler bu çerezler olmadan çalışmaz.</p>
          <p><strong>Analitik çerezler:</strong> Ziyaretçi sayısı, sayfa görüntüleme ve site kullanım istatistiklerini toplar. Bu veriler anonimdir ve site iyileştirmesi için kullanılır.</p>
          <p><strong>Tercih çerezleri:</strong> Dil, tema veya bölge gibi seçimlerinizi hatırlar.</p>
          <h3>Çerez Tercihlerinizi Yönetme</h3>
          <p>Tarayıcı ayarlarınızdan çerezleri <strong>devre dışı bırakabilir veya silebilirsiniz</strong>. Bu durumda bazı site özellikleri düzgün çalışmayabilir. Çoğu tarayıcıda Ayarlar &gt; Gizlilik ve Güvenlik bölümünden çerez tercihlerinizi değiştirebilirsiniz.</p>
          <h3>Üçüncü Taraf Çerezleri</h3>
          <p>Web sitemizde harici hizmet sağlayıcıların (örneğin analitik araçları) çerezleri de kullanılabilir. Bu çerezlerin kullanımı ilgili sağlayıcıların kendi politikalarına tabidir.</p>
          <h3>Güncellemeler</h3>
          <p>Bu çerez politikası değiştiğinde sayfa güncellenecektir. Sorularınız için <a href="/iletisim">iletişim</a> sayfamızdan bize ulaşabilirsiniz.</p>
        </main>
      </AnimateSection>
      <AnimateSection sectionType="footer" delay={100}>
        <Footer />
      </AnimateSection>
    </div>
  );
}
