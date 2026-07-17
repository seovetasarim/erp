import ITSolutionPricingMain from '@/pages/homes/it-solution/ITSolutionPricingMain';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbJsonLd, buildPageMetadata } from '@/constants/seo';

export const metadata = buildPageMetadata({
    title: 'ERP Fiyatları: Ücretsiz, Tek Seferlik ve Aylık Kiralama',
    description:
        'DijitalERP fiyatlandırma: ücretsiz sürümle başlayın. Tek seferlik lisans (49.900₺) veya aylık kiralama (1.990₺/ay) seçenekleriyle tüm modüllere geçin.',
    path: '/fiyatlandirma',
    keywords: [
        'ERP fiyatları',
        'ücretsiz ERP lisansı',
        'tek seferlik ERP',
        'aylık ERP kiralama',
        'Pro ERP lisansı',
    ],
});

const page = () => {
    return (
        <>
            <JsonLd
                data={breadcrumbJsonLd([
                    { name: 'Ana Sayfa', path: '/' },
                    { name: 'Fiyatlandırma', path: '/fiyatlandirma' },
                ])}
            />
            <ITSolutionPricingMain />
        </>
    );
};

export default page;
