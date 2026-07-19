"use client"
import { brandMarqueeSwiperParams } from '@/constants/swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { StarIconEight } from '@/svg/StarIcons';

// Türkçe büyük harfler doğrudan yazılıyor (CSS text-transform: uppercase
// İngilizce kuralla İ/ı/Ü/Ö karakterlerini bozar).
const BRAND_TITLES = [
    "OFFLINE STOK TAKİP",
    "CARİ YÖNETİM",
    "FATURA YAZILIMI",
    "KASA MODÜLÜ",
    "ÜCRETSİZ ERP",
    "KOBİ ERP",
    "RAPORLAMA",
    "CARİ YÖNETİM",
    "FATURA YAZILIMI",
    "KASA MODÜLÜ",
    "ÜCRETSİZ ERP",
    "FATURA YAZILIMI",
    "KASA MODÜLÜ",
    "ÜCRETSİZ ERP",
    "KOBİ ERP",
];

const brandItems = BRAND_TITLES.map((title, id) => ({
    id: id + 1,
    title,
}));

const ITSolutionBrandTwo = () => {
    return (
        <div className="tp-brand-area it-brand-style it-brand-tr pt-200 pb-120" lang="tr">
            {/* First Brand Wrapper */}
            <div className="tp-brand-wrapper" style={{ backgroundColor: "#FFC4C0" }}>
                <Swiper
                    className='tp-brand-active fix slide-transtion'
                    {...brandMarqueeSwiperParams}
                >
                    {brandItems.map((item) => (
                        <SwiperSlide key={`first-${item.id}`}>
                            <div className="tp-brand-item">
                                <span className="tp-brand-title">{item.title}</span>{" "}
                                <span><StarIconEight /></span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Second Brand Wrapper (RTL) */}
            <div className="tp-brand-wrapper tp-brand-style-2" style={{ backgroundColor: "#DACBFF" }}>
                <Swiper
                    dir="rtl"
                    className='tp-brand-active fix slide-transtion'
                    {...brandMarqueeSwiperParams}
                >
                    {brandItems.map((item) => (
                        <SwiperSlide key={`second-${item.id}`}>
                            <div className="tp-brand-item">
                                <span className="tp-brand-title">{item.title}</span>{" "}
                                <span><StarIconEight /></span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ITSolutionBrandTwo;
