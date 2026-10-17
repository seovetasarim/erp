import { FAQItemDT } from '@/types/custom-d-t';
import { SITE } from '@/constants/seo';

const faqData: FAQItemDT[] = [
    {
        id: 'priceFaq1',
        question: 'Ücretsiz sürüm ile lisanslı sürüm farkı nedir?',
        answer:
            'Demo sürüm örnek verilerle incelenir; lisans girilmeden ekleme, düzenleme ve silme yapılamaz. Lisans anahtarı girilince demo veriler temizlenir ve program tam kullanıma açılır.',
        isOpen: true,
    },
    {
        id: 'priceFaq2',
        question: 'Yıllık lisans fiyatları nedir?',
        answer:
            'Yıllık lisans: 1 bilgisayar 4.990 TL, 3 bilgisayar 9.990 TL, 5 bilgisayar 14.990 TL. Süre 1 yıldır.',
    },
    {
        id: 'priceFaq3',
        question: 'Süresiz lisans fiyatları nedir?',
        answer:
            'Süresiz lisans tek seferliktir: 1 bilgisayar 12.900 TL, 3 bilgisayar 24.900 TL, 5 bilgisayar 34.900 TL.',
    },
    {
        id: 'priceFaq4',
        question: 'Güncelleme süresi bitince yazılım kapanır mı?',
        answer:
            'Hayır. Yazılım çalışmaya devam eder. Güncelleme süresi, yeni sürüm ve destek kapsamını belirler; programı kullanamaz hale getirmez.',
    },
    {
        id: 'priceFaq5',
        question: 'Fiyatlar neden erişilebilir tutuluyor?',
        answer:
            'DijitalERP sunucusuz ve offline mimariyle çalıştığı için sürekli bulut altyapı maliyeti yansıtılmaz. Yıllık ve süresiz lisans seçenekleri vardır.',
    },
    {
        id: 'priceFaq6',
        question: 'Kurumsal paket için nasıl teklif alırım?',
        answer:
            `info@dijitalerp.com.tr adresine yazın veya ${SITE.phoneDisplay} numarasını arayın. İhtiyaçlarınıza göre kullanıcı sayısı, destek ve eğitim kapsamını netleştiririz.`,
    },
];

const ITSolutionPricingFaq = () => {
    return (
        <div className="it-pricing-faq-area pb-120" style={{ backgroundColor: '#FDF7F4' }}>
            <div className="container container-1230">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="mb-40 tp_fade_anim" data-delay=".3">
                            <span className="tp-section-subtitle-platform platform-text-black mb-20 d-inline-block">
                                SSS
                            </span>
                            <h3 className="tp-section-title-platform platform-text-black">
                                Fiyatlandırma<br />soruları
                            </h3>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="ai-faq-accordion-wrap tp_fade_anim" data-delay=".4" data-fade-from="right">
                            <div className="accordion" id="pricingFaqAccordion">
                                {faqData.map((faq) => (
                                    <div className="accordion-items" key={faq.id}>
                                        <h2 className="accordion-header">
                                            <button
                                                className={`accordion-buttons ${faq.isOpen ? '' : 'collapsed'}`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#${faq.id}`}
                                                aria-expanded={faq.isOpen ? 'true' : 'false'}
                                                aria-controls={faq.id}
                                            >
                                                {faq.question}
                                                <span className="accordion-icon"></span>
                                            </button>
                                        </h2>
                                        <div
                                            id={faq.id}
                                            className={`accordion-collapse collapse${faq.isOpen ? ' show' : ''}`}
                                            data-bs-parent="#pricingFaqAccordion"
                                        >
                                            <div className="accordion-body">
                                                <p>{faq.answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ITSolutionPricingFaq;
