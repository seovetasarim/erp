import ITSolutionFeaturesMain from '@/pages/homes/it-solution/ITSolutionFeaturesMain';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbJsonLd, buildPageMetadata } from '@/constants/seo';

export const metadata = buildPageMetadata({
    title: 'ERP Özellikleri: Offline Stok, Cari, Fatura ve Kasa',
    description:
        'DijitalERP özellikleri: offline stok takip, cari hesap yönetimi, fatura yazılımı, kasa, barkod okuma, düşük stok uyarısı ve raporlama. Windows KOBİ ERP’yi keşfedin.',
    path: '/ozellikler',
    keywords: [
        'ERP özellikleri',
        'stok takip özellikleri',
        'cari yönetim yazılımı',
        'barkod stok takip',
        'düşük stok uyarısı',
    ],
});

const page = () => {
    return (
        <>
            <JsonLd
                data={breadcrumbJsonLd([
                    { name: 'Ana Sayfa', path: '/' },
                    { name: 'Özellikler', path: '/ozellikler' },
                ])}
            />
            <ITSolutionFeaturesMain />
        </>
    );
};

export default page;
