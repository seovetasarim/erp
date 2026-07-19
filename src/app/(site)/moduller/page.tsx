import ITSolutionModulesMain from '@/pages/homes/it-solution/ITSolutionModulesMain';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbJsonLd, buildPageMetadata } from '@/constants/seo';

export const metadata = buildPageMetadata({
    title: 'ERP Modülleri: Stok, Cari, Fatura, Kasa ve Raporlar',
    description:
        'DijitalERP modülleri: ürün/stok, hareketler, cariler, faturalar, kasa, siparişler, sayım ve raporlar. Offline Windows ERP ile tüm süreçleri tek programda yönetin.',
    path: '/moduller',
    keywords: [
        'ERP modülleri',
        'stok modülü',
        'cari modülü',
        'fatura modülü',
        'kasa modülü',
        'stok sayım programı',
    ],
});

const page = () => {
    return (
        <>
            <JsonLd
                data={breadcrumbJsonLd([
                    { name: 'Ana Sayfa', path: '/' },
                    { name: 'Modüller', path: '/moduller' },
                ])}
            />
            <ITSolutionModulesMain />
        </>
    );
};

export default page;
