import servicesData from '@/data/serviceData';
import { ArrowSvg } from '@/svg';
import Link from 'next/link';
import React from 'react';

const moduleDetails = [
    {
        id: 28,
        points: ['Depo ve ürün kartları', 'Stok giriş / çıkış', 'Kritik stok uyarıları'],
    },
    {
        id: 29,
        points: ['Müşteri & tedarikçi carileri', 'Borç / alacak takibi', 'Tahsilat kayıtları'],
    },
    {
        id: 30,
        points: ['Satış ve alış faturaları', 'Hızlı belge oluşturma', 'Yazdırma desteği'],
    },
    {
        id: 31,
        points: ['Nakit kasa hareketleri', 'Banka işlemleri', 'Günlük kasa özeti'],
    },
    {
        id: 32,
        points: ['Satış performans raporları', 'Stok ve cari özetleri', 'KOBİ odaklı analiz'],
    },
];

const ITSolutionFeatureDetails = () => {
    const features = servicesData.slice(27, 32);

    return (
        <div className="it-feature-details-area pt-40 pb-100" style={{ backgroundColor: '#FDF7F4' }}>
            <div className="container container-1230">
                <div className="row mb-70">
                    <div className="col-xl-5">
                        <span className="tp-section-subtitle-platform platform-text-black mb-15 d-inline-block tp_fade_anim" data-delay=".3">
                            Modül Detayları
                        </span>
                        <h3 className="tp-section-title-platform platform-text-black fs-84 tp-split-text tp-split-right">
                            Her modül işinizi kolaylaştırır
                        </h3>
                    </div>
                    <div className="col-xl-6 offset-xl-1 d-flex align-items-end">
                        <p className="it-feature-details-intro tp_fade_anim" data-delay=".5">
                            Temel KOBİ süreçlerini tek ekranda yönetin. İnternet olmadan çalışır;
                            kurulumdan sonra hemen kullanmaya başlarsınız.
                        </p>
                    </div>
                </div>

                <div className="it-feature-details-wrap">
                    {features.map((feature, index) => {
                        const detail = moduleDetails.find((item) => item.id === feature.id);
                        const number = String(index + 1).padStart(2, '0');

                        return (
                            <div key={feature.id} className="it-feature-details-item tp_fade_anim">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="it-feature-details-left d-inline-flex align-items-center">
                                            <span className="it-feature-details-num">{number}</span>
                                            <h4 className="it-feature-details-title">
                                                <Link href={feature.link}>{feature.title}</Link>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="it-feature-details-right d-flex align-items-center justify-content-between">
                                            <div>
                                                <p>{feature.description}</p>
                                                {detail?.points && (
                                                    <ul className="it-feature-details-points">
                                                        {detail.points.map((point) => (
                                                            <li key={point}>{point}</li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                            <Link className="it-feature-details-link" href={feature.link}>
                                                <span>
                                                    <ArrowSvg width={14} height={14} strokeWidth={1.5} viewBox="0 0 14 14" pathValue="M0.880859 13L12.8809 1M12.8809 1H0.880859M12.8809 1V13" />
                                                    <ArrowSvg width={14} height={14} strokeWidth={1.5} viewBox="0 0 14 14" pathValue="M0.880859 13L12.8809 1M12.8809 1H0.880859M12.8809 1V13" />
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ITSolutionFeatureDetails;
