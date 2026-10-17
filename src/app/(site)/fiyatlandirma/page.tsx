import ITSolutionPricingMain from '@/pages/homes/it-solution/ITSolutionPricingMain';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbJsonLd, buildPageMetadata } from '@/constants/seo';

export const metadata = buildPageMetadata({
    title: 'ERP Fiyatları: Yıllık ve Süresiz Lisans',
    description:
        'DijitalERP fiyatlandırma: yıllık lisans 4.990₺’den, süresiz lisans 12.900₺’den başlar. 1, 3 veya 5 bilgisayar.',
    path: '/fiyatlandirma',
    keywords: [
        'ERP fiyatları',
        'ücretsiz ERP lisansı',
        'tek seferlik ERP',
        'yıllık ERP lisansı',
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
