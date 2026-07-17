import project1 from '../../../public/assets/img/home-11/project/project-1.jpg';
import project2 from '../../../public/assets/img/home-11/project/project-2.jpg';
import project3 from '../../../public/assets/img/home-11/project/project-3.jpg';
import project4 from '../../../public/assets/img/home-11/project/project-4.jpg';
import ProtectedDownloadLink from '@/components/download/ProtectedDownloadLink';
import { ArrowNine } from '@/svg/ArrowIcons';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type ModuleCase = {
    id: number;
    number: string;
    category: string;
    title: string;
    description: string;
    tags: string[];
    image: StaticImageData;
    reverse?: boolean;
};

const cases: ModuleCase[] = [
    {
        id: 1,
        number: '01',
        category: 'Stok Modülü',
        title: 'Depo ve ürünleri anlık yönetin',
        description:
            'Offline stok takip ile ürün kartları, depo hareketleri ve kritik stok uyarılarını internetsiz kullanın.',
        tags: ['Ürün kartı', 'Depo', 'Hareket'],
        image: project1,
    },
    {
        id: 2,
        number: '02',
        category: 'Cari Modülü',
        title: 'Müşteri ve tedarikçi carileri tek ekranda',
        description:
            'Borç, alacak ve tahsilatları takip edin. Cari hesap özetine saniyeler içinde ulaşın.',
        tags: ['Borç / Alacak', 'Tahsilat', 'Cari özet'],
        image: project2,
        reverse: true,
    },
    {
        id: 3,
        number: '03',
        category: 'Fatura Modülü',
        title: 'Satış ve alış faturasını hızlı kesin',
        description:
            'Hızlı fatura yazılımı ile belgeleri oluşturun, yazdırın ve stok / cariyi otomatik güncelleyin.',
        tags: ['Satış', 'Alış', 'Yazdırma'],
        image: project3,
    },
    {
        id: 4,
        number: '04',
        category: 'Kasa Modülü',
        title: 'Nakit ve bankayı gün boyu net görün',
        description:
            'Kasa giriş-çıkışlarını kaydedin, günlük kasa durumunu takip edin, raporlarla doğrulayın.',
        tags: ['Nakit', 'Banka', 'Günlük özet'],
        image: project4,
        reverse: true,
    },
];

const ITSolutionModulesMetro = () => {
    return (
        <div className="it-modules-metro-area pt-40 pb-60" style={{ backgroundColor: '#FFEEE6' }}>
            <div className="container container-1230">
                <div className="row mb-80">
                    <div className="col-xl-7">
                        <span className="tp-section-subtitle-platform platform-text-black mb-15 d-inline-block tp_fade_anim" data-delay=".3">
                            Yakından bakın
                        </span>
                        <h3 className="tp-section-title-platform platform-text-black fs-84 tp-split-text tp-split-right">
                            Modül bazında iş akışı
                        </h3>
                    </div>
                    <div className="col-xl-5 d-flex align-items-end">
                        <p className="it-modules-metro-intro tp_fade_anim" data-delay=".5">
                            Her modül bağımsız kullanılabilir; birlikte çalıştığında stok, cari, fatura ve kasa tek süreç olur.
                        </p>
                    </div>
                </div>

                {cases.map((item) => (
                    <div
                        key={item.id}
                        className={`it-modules-metro-row row align-items-center mb-90 ${item.reverse ? 'flex-lg-row-reverse' : ''}`}
                    >
                        <div className="col-lg-7">
                            <div className="it-modules-metro-thumb tp_fade_anim">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className={`it-modules-metro-content ${item.reverse ? 'pe-xl-4' : 'ps-xl-4'} tp_fade_anim`}>
                                <div className="it-modules-metro-meta d-flex align-items-center gap-3 mb-20">
                                    <span className="it-modules-metro-num">{item.number}</span>
                                    <span className="it-modules-metro-cat">{item.category}</span>
                                </div>
                                <h4 className="it-modules-metro-title">{item.title}</h4>
                                <p>{item.description}</p>
                                <div className="it-modules-metro-tags">
                                    {item.tags.map((tag) => (
                                        <span key={tag}>{tag}</span>
                                    ))}
                                </div>
                                <ProtectedDownloadLink
                                    className="tp-btn-black-radius btn-blue-bg d-inline-flex align-items-center justify-content-between mt-30"
                                >
                                    <span>
                                        <span className="text-1">Detaylı İncele</span>
                                        <span className="text-2">Detaylı İncele</span>
                                    </span>
                                    <i>
                                        <span>
                                            <ArrowNine />
                                            <ArrowNine />
                                        </span>
                                    </i>
                                </ProtectedDownloadLink>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ITSolutionModulesMetro;
