import benifitsShape from '../../../public/assets/img/home-11/feature/benifits-shape.png';
import { GrowthChartIcon, CostSavingsIcon, PerformanceIcon } from '@/svg/BenefitsIcons';
import { DIJITAL_ERP_DOWNLOAD_HREF } from '@/constants/download';
import { BenefitItemDT } from '@/types/custom-d-t';
import Image from 'next/image';
import Link from 'next/link';

const ITSolutionBenifit = () => {

    // Create benefits data array
    const benefitsData: BenefitItemDT[] = [
        {
            id: 1,
            icon: <GrowthChartIcon />,
            title: "İşinizi büyütün",
            description: "Offline stok takip ve cari yönetim ile satışlarınızı kontrol altında tutun.",
            link: DIJITAL_ERP_DOWNLOAD_HREF
        },
        {
            id: 2,
            icon: <CostSavingsIcon />,
            title: "Maliyetten tasarruf",
            description: "Ücretsiz ERP ile abonelik yükü olmadan fatura yazılımı kullanın.",
            link: DIJITAL_ERP_DOWNLOAD_HREF
        },
        {
            id: 3,
            icon: <PerformanceIcon />,
            title: "Performansı artırın",
            description: "KOBİ ERP raporlarıyla kasa, stok ve cari süreçlerinizi hızlandırın.",
            link: DIJITAL_ERP_DOWNLOAD_HREF
        }
    ];

    return (
        <div className="it-benifit-area p-relative pt-120 pb-120">
            <div className="container container-1230">
                <div className="it-benifit-bg z-index-1" style={{ backgroundColor: "#ffede3" }}>
                    <div className="it-benifit-shape">
                        <Image className="tp-zoom-in-out" src={benifitsShape} alt="benifit-image" />
                    </div>
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="it-benifit-title-box mb-55">
                                <span className="tp-section-subtitle-platform platform-text-black mb-20 tp-split-text tp-split-right">Avantajlar</span>
                                <h4 className="tp-section-title-platform platform-text-black mb-20 tp-split-text tp-split-right">Sadece Yazılım Değil, Gerçek Çözüm</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {benefitsData.map((benefit) => (
                            <div className="col-lg-4" key={benefit.id}>
                                <div className="it-benifit-item">
                                    <div className="it-benifit-icon">
                                        <span>{benefit.icon}</span>
                                    </div>
                                    <div className="it-benifit-content">
                                        <h4 className="it-benifit-title">
                                            <Link href={benefit.link}>{benefit.title}</Link>
                                        </h4>
                                        <p>{benefit.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ITSolutionBenifit;
