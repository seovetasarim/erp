"use client"
import project1 from '../../../public/assets/img/home-11/project/project-1.jpg';
import project2 from '../../../public/assets/img/home-11/project/project-2.jpg';
import project3 from '../../../public/assets/img/home-11/project/project-3.jpg';
import project4 from '../../../public/assets/img/home-11/project/project-4.jpg';
import project5 from '../../../public/assets/img/home-11/project/project-5.jpg';
import { DIJITAL_ERP_DOWNLOAD_FILENAME, DIJITAL_ERP_DOWNLOAD_HREF } from '@/constants/download';
import { ArrowNine } from '@/svg/ArrowIcons';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type ModuleItem = {
    id: string;
    number: string;
    title: string;
    description: string;
    image: StaticImageData;
};

const modules: ModuleItem[] = [
    {
        id: 'stok',
        number: '01',
        title: 'Offline Stok Takip',
        description: 'Ürün, depo ve hareketler tek panelde. Düşük stok uyarısıyla envanter kontrolü.',
        image: project1,
    },
    {
        id: 'cari',
        number: '02',
        title: 'Cari Hesap Yönetimi',
        description: 'Müşteri ve tedarikçi bakiyeleri, borç-alacak ve tahsilat özeti.',
        image: project2,
    },
    {
        id: 'fatura',
        number: '03',
        title: 'Hızlı Fatura Yazılımı',
        description: 'Satış ve alış faturalarını hızlı kes, yazdır, kaydet.',
        image: project3,
    },
    {
        id: 'kasa',
        number: '04',
        title: 'Kasa ve Nakit Takibi',
        description: 'Nakit giriş-çıkış ve günlük kasa özeti. Gün sonu netleşir.',
        image: project4,
    },
    {
        id: 'rapor',
        number: '05',
        title: 'Satış ve Stok Raporları',
        description: 'Dashboard ve raporlarla satış, stok ve cari performansı.',
        image: project5,
    },
];

type ITSolutionProjectProps = {
    showTitle?: boolean;
    sectionId?: string;
};

const ITSolutionProject = ({ showTitle = true, sectionId = 'moduller' }: ITSolutionProjectProps) => {
    const [active, setActive] = useState(0);
    const current = modules[active];

    return (
        <section className="it-modules-home paste-bg-2" id={sectionId}>
            <div className="container container-1230">
                <div className="it-modules-home-head text-center">
                    <span className="tp-section-subtitle-platform mb-20 d-inline-block">
                        {showTitle ? 'Modüller' : 'Modül önizleme'}
                    </span>
                    <h2 className="tp-section-title-platform platform-text-black it-modules-home-title">
                        {showTitle ? 'Tek programda tüm iş akışı' : 'Modüllere yakından bakın'}
                    </h2>
                    <p className="it-modules-home-lead">
                        Soldan modül seçin — sağda gerçek DijitalERP ekranını görün.
                    </p>
                </div>

                <div className="it-modules-home-panel">
                    <div className="it-modules-home-nav" role="tablist" aria-label="ERP modülleri">
                        {modules.map((mod, index) => {
                            const isActive = index === active;
                            return (
                                <button
                                    key={mod.id}
                                    type="button"
                                    role="tab"
                                    aria-selected={isActive}
                                    className={`it-modules-home-nav-item${isActive ? ' is-active' : ''}`}
                                    onClick={() => setActive(index)}
                                    onMouseEnter={() => setActive(index)}
                                >
                                    <span className="it-modules-home-nav-num">{mod.number}</span>
                                    <span className="it-modules-home-nav-body">
                                        <strong>{mod.title}</strong>
                                        <em>{mod.description}</em>
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    <div className="it-modules-home-preview" role="tabpanel">
                        <div className="it-modules-home-preview-frame">
                            <Image
                                key={current.id}
                                src={current.image}
                                alt={`${current.title} — DijitalERP ekranı`}
                                sizes="(max-width: 991px) 100vw, 640px"
                                priority
                            />
                        </div>
                        <div className="it-modules-home-preview-meta">
                            <span>{current.number}</span>
                            <strong>{current.title}</strong>
                        </div>
                    </div>
                </div>

                <div className="it-modules-home-cta">
                    <Link className="it-modules-home-cta-secondary" href="/moduller">
                        Tüm modülleri gör
                    </Link>
                    <Link
                        className="tp-btn-black-radius btn-blue-bg d-inline-flex align-items-center justify-content-between it-modules-home-cta-btn"
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
        </section>
    );
};

export default ITSolutionProject;
