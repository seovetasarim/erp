import project1 from '../../../public/assets/img/home-11/project/project-1.jpg';
import project2 from '../../../public/assets/img/home-11/project/project-2.jpg';
import project3 from '../../../public/assets/img/home-11/project/project-3.jpg';
import { DIJITAL_ERP_DOWNLOAD_FILENAME, DIJITAL_ERP_DOWNLOAD_HREF } from '@/constants/download';
import { ArrowNine } from '@/svg/ArrowIcons';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type ShowcaseItem = {
    id: number;
    eyebrow: string;
    title: string;
    description: string;
    points: string[];
    image: StaticImageData;
    reverse?: boolean;
};

const showcaseItems: ShowcaseItem[] = [
    {
        id: 1,
        eyebrow: 'Stok & Depo',
        title: 'Offline stok takibiyle deponuzu kontrol altında tutun',
        description:
            'Ürün, depo ve stok hareketlerini internete ihtiyaç duymadan yönetin. Kritik stokları anında görün.',
        points: ['Ürün ve barkod yönetimi', 'Çoklu depo desteği', 'Anlık stok hareketleri'],
        image: project1,
    },
    {
        id: 2,
        eyebrow: 'Cari & Fatura',
        title: 'Cari hesaplar ve faturalar tek akışta',
        description:
            'Müşteri / tedarikçi carilerini takip edin, satış ve alış faturalarını saniyeler içinde oluşturun.',
        points: ['Borç / alacak özeti', 'Hızlı fatura kesimi', 'Tahsilat kayıtları'],
        image: project2,
        reverse: true,
    },
    {
        id: 3,
        eyebrow: 'Kasa & Rapor',
        title: 'Kasa durumunu ve performansı net görün',
        description:
            'Nakit ve banka hareketlerini kaydedin; satış, stok ve cari raporlarıyla işletmenizi ölçün.',
        points: ['Günlük kasa özeti', 'Satış performans raporları', 'KOBİ odaklı analiz'],
        image: project3,
    },
];

const ITSolutionFeatureShowcase = () => {
    return (
        <div className="it-feature-showcase-area pb-80" style={{ backgroundColor: '#FDF7F4' }}>
            <div className="container container-1230">
                <div className="row justify-content-center mb-80">
                    <div className="col-xl-8 text-center">
                        <span className="tp-section-subtitle-platform platform-text-black mb-15 d-inline-block tp_fade_anim" data-delay=".3">
                            Ekran Görüntüleri
                        </span>
                        <h3 className="tp-section-title-platform platform-text-black fs-84 tp-split-text tp-split-right">
                            Gerçek arayüz, gerçek iş akışı
                        </h3>
                    </div>
                </div>

                {showcaseItems.map((item) => (
                    <div key={item.id} className={`it-feature-showcase-row row align-items-center mb-100 ${item.reverse ? 'flex-lg-row-reverse' : ''}`}>
                        <div className="col-lg-6">
                            <div className="it-feature-showcase-thumb tp_fade_anim">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className={`it-feature-showcase-content ${item.reverse ? 'pe-xl-5' : 'ps-xl-5'} tp_fade_anim`}>
                                <span className="tp-section-subtitle-platform platform-text-black mb-15 d-inline-block">
                                    {item.eyebrow}
                                </span>
                                <h4 className="tp-section-title-platform platform-text-black mb-20">
                                    {item.title}
                                </h4>
                                <p>{item.description}</p>
                                <ul className="it-feature-showcase-points">
                                    {item.points.map((point) => (
                                        <li key={point}>{point}</li>
                                    ))}
                                </ul>
                                <Link
                                    className="tp-btn-black-radius btn-blue-bg d-inline-flex align-items-center justify-content-between mt-25"
                                    href={DIJITAL_ERP_DOWNLOAD_HREF}
                                    download={DIJITAL_ERP_DOWNLOAD_FILENAME}
                                >
                                    <span>
                                        <span className="text-1">Ücretsiz İndir</span>
                                        <span className="text-2">Ücretsiz İndir</span>
                                    </span>
                                    <i>
                                        <span>
                                            <ArrowNine />
                                            <ArrowNine />
                                        </span>
                                    </i>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ITSolutionFeatureShowcase;
