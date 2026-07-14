import ITSolutionPricingMain from '@/pages/homes/it-solution/ITSolutionPricingMain';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbJsonLd, buildPageMetadata } from '@/constants/seo';

export const metadata = buildPageMetadata({
    title: 'ERP Fiyatları: Ücretsiz Sürüm ve Tek Seferlik Lisans',
    description:
        'DijitalERP fiyatlandırma: ücretsiz sürümle başlayın, Pro ile fatura, sipariş, sayım, Excel ve entegrasyonları açın. Aylık abonelik yok — tek seferlik lisans.',
    path: '/fiyatlandirma',
    keywords: [
        'ERP fiyatları',
        'ücretsiz ERP lisansı',
        'tek seferlik ERP',
        'aboneliksiz ERP',
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
