"use client"
import aboutShape from '../../../public/assets/img/home-11/step/about-shape-3.png';
import aboutShapeTwo from '../../../public/assets/img/home-11/step/about-shape-4.png';
import loginShot from '../../../public/assets/img/home-11/project/project-1.png';
import { AccordionId, AccordionItemDT } from '@/types/custom-d-t';
import { useState } from 'react';
import Image from 'next/image';

const ITSolutionStep = () => {
    const [activeAccordion, setActiveAccordion] = useState<AccordionId | null>('collapseOne');

    const accordionData: AccordionItemDT[] = [
        {
            id: 'collapseOne',
            step: 'Adım 1',
            title: 'Ücretsiz İndirin',
            content: 'DijitalERP ücretsiz ERP kurulum dosyasını indirin. Windows bilgisayarınıza hızlıca kurun; internet zorunlu değildir.'
        },
        {
            id: 'collapseTwo',
            step: 'Adım 2',
            title: 'Kurulum & Ayarlar',
            content: 'Firma bilgilerinizi girin, depo ve kullanıcı ayarlarını tamamlayın. Offline stok takip için hazır hale gelin.'
        },
        {
            id: 'collapseThree',
            step: 'Adım 3',
            title: 'Stok & Cari Girişi',
            content: 'Ürün, stok ve cari hesaplarınızı ekleyin. Fatura yazılımı ile satış ve alış belgelerini hemen kesmeye başlayın.'
        },
        {
            id: 'collapseFour',
            step: 'Adım 4',
            title: 'Raporlayın',
            content: 'Kasa, stok ve cari raporlarıyla KOBİ ERP sürecinizi net görün; günlük işletme kararlarını güvenle alın.'
        }
    ];

    const handleAccordionClick = (id: AccordionId) => {
        setActiveAccordion(id === activeAccordion ? null : id);
    };

    return (
        <div className="it-step-area it-step-bg paste-bg-2 p-relative pt-120 pb-140">
            <div className="it-step-shape-1">
                <Image data-speed="1.1" src={aboutShape} alt="about-shape" />
            </div>
            <div className="it-step-shape-2 d-none d-xxl-block">
                <Image data-speed="1.1" src={aboutShapeTwo} alt="about-shape" />
            </div>
            <div className="container container-1230">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="it-step-title-box z-index-1 text-center mb-105">
                            <span className="tp-section-subtitle-platform mb-20 tp-split-text tp-split-right">Nasıl çalışır</span>
                            <h4 className="tp-section-title-platform mb-20 tp-split-text tp-split-right">DijitalERP ile 4 Adımda Yönetin</h4>
                            <div className="tp_text_anim">
                                <p>
                                    Her işletme farklıdır; ücretsiz ERP ile stok, cari ve fatura {`işlemlerinizi`}
                                    <br /> kendi temposunuzda kurun
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-xl-5">
                        <div className="it-step-thumb-wrap p-relative">
                            <div className="it-step-thumb">
                                <Image
                                    className="it-step-login-shot"
                                    src={loginShot}
                                    alt="DijitalERP kontrol paneli"
                                    width={1448}
                                    height={1086}
                                    style={{ width: '100%', height: 'auto' }}
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="it-step-accordion-wrap it-faq-wrap">
                            <div className="accordion it-faq-accordion" id="accordionExample">
                                {accordionData.map((item) => (
                                    <div
                                        className={`accordion-items ${activeAccordion === item.id ? 'faq-active' : ''}`}
                                        key={item.id}
                                    >
                                        <h2 className="accordion-header">
                                            <button
                                                className={`accordion-buttons ${activeAccordion === item.id ? '' : 'collapsed'}`}
                                                type="button"
                                                onClick={() => handleAccordionClick(item.id)}
                                                aria-expanded={activeAccordion === item.id ? "true" : "false"}
                                                aria-controls={item.id}
                                            >
                                                <i>{item.step}</i>
                                                <span>{item.title}</span>
                                            </button>
                                        </h2>
                                        <div
                                            id={item.id}
                                            className={`accordion-collapse collapse ${activeAccordion === item.id ? 'show' : ''}`}
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <p>{item.content}</p>
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

export default ITSolutionStep;
