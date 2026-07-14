import faqImg1 from '../../../public/assets/img/home-11/faq/faq-1.png';
import faqImg2 from '../../../public/assets/img/home-11/faq/faq-2.png';
import { FAQItemDT } from '@/types/custom-d-t';
import Image from 'next/image';

const ITSolutionFaq = () => {
    // FAQ data array
    const faqData: FAQItemDT[] = [
        {
            id: 'collapseOne1',
            question: 'DijitalERP nedir?',
            answer: 'DijitalERP, Windows üzerinde çalışan ücretsiz ERP yazılımıdır. Offline stok takip, cari yönetim, fatura yazılımı, kasa ve raporlama modüllerini tek pakette sunar.',
            isOpen: true
        },
        {
            id: 'collapseTwo2',
            question: 'İnternet bağlantısı gerekli mi?',
            answer: 'Hayır. DijitalERP offline çalışır; stok, cari ve fatura işlemlerinizi internet olmadan da sürdürebilirsiniz.'
        },
        {
            id: 'collapseThree3',
            question: 'Ücretsiz ERP gerçekten ücretsiz mi?',
            answer: 'Evet. Temel KOBİ ERP ihtiyaçları için ücretsiz indirebilir, stok takip ve cari yönetim özelliklerini kullanmaya hemen başlayabilirsiniz.'
        },
        {
            id: 'collapseFour4',
            question: 'Hangi modüller dahil?',
            answer: 'Stok takip, cari yönetim, fatura yazılımı, kasa ve raporlama modülleri DijitalERP paketinde yer alır.'
        },
        {
            id: 'collapseFive5',
            question: 'Destek alabilir miyim?',
            answer: 'Evet. 0216 606 17 46 numaralı telefondan veya info@dijitalerp.com.tr adresinden destek alabilirsiniz.'
        },
        {
            id: 'collapseSix6',
            question: 'Demo veya kurulum yardımı var mı?',
            answer: 'Evet. Demo talebi ve kurulum desteği için bizimle iletişime geçin; ekibimiz KOBİ ERP kurulumunda yardımcı olur.'
        }
    ];

    return (
        <div className="app-faq-area p-relative pb-120" id="sss">
            <div className="it-faq-shape-1">
                <Image data-speed=".9" src={faqImg1} alt="faq-image" />
            </div>
            <div className="container container-1230">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="app-faq-heading p-relative mb-40">
                            <span className="tp-section-subtitle border-bg bg-color">SSS</span>
                            <h3 className="tp-section-title-platform platform-text-black fs-84 tp-split-text tp-split-right mb-70">
                                Sorularınız <br /> mı var?
                            </h3>
                            <Image
                                data-speed="1.1"
                                className="it-faq-shape-2"
                                src={faqImg2}
                                alt="faq-image"
                            />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="app-faq-wrap pl-70 z-index-1 tp_fade_anim" data-fade-from="right">
                            <div className="ai-faq-accordion-wrap">
                                <div className="accordion" id="accordionExample1">
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
                                                className={`accordion-collapse collapse ${faq.isOpen ? 'show' : ''}`}
                                                data-bs-parent="#accordionExample1"
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
        </div>
    );
};

export default ITSolutionFaq;
