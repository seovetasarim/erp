import { FAQItemDT } from '@/types/custom-d-t';

const faqData: FAQItemDT[] = [
    {
        id: 'priceFaq1',
        question: 'Ücretsiz sürüm ile lisanslı sürüm farkı nedir?',
        answer:
            'Ücretsiz sürüm temel modüllerle tek bilgisayarda süresiz kullanılır. Lisanslı paketlerde tüm modüller, güncelleme süresi ve destek kapsamı genişler.',
        isOpen: true,
    },
    {
        id: 'priceFaq2',
        question: 'Aylık kiralama var mı?',
        answer:
            'Evet. Başlangıç paketi 1.990₺/ay, Profesyonel paket 2.990₺/ay kiralama ile kullanılabilir. Taahhüt yoktur; istediğiniz zaman iptal edebilirsiniz. Tek seferlik lisans seçeneği de mevcuttur.',
    },
    {
        id: 'priceFaq3',
        question: 'Aylık kiralama mı, tek seferlik lisans mı daha mantıklı?',
        answer:
            'Başlangıç bütçeniz kısıtlıysa aylık kiralama daha erişilebilir. Uzun vadede kullanacaksanız tek seferlik lisans (Başlangıç 49.900₺, Profesyonel 79.900₺) toplam maliyeti düşürür. İstediğiniz zaman tek seferliğe geçiş için bize ulaşın.',
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
            'DijitalERP sunucusuz ve offline mimariyle çalıştığı için sürekli bulut altyapı maliyeti yansıtılmaz. Tek seferlik ve aylık kiralama seçenekleriyle farklı bütçelere uyum sağlanır.',
    },
    {
        id: 'priceFaq6',
        question: 'Kurumsal paket için nasıl teklif alırım?',
        answer:
            'info@dijitalerp.com.tr adresine yazın veya 0216 606 17 46 numarasını arayın. İhtiyaçlarınıza göre kullanıcı sayısı, destek ve eğitim kapsamını netleştiririz.',
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
