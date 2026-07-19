import ITSolutionMain from '@/pages/homes/it-solution/ITSolutionMain';
import { buildPageMetadata } from '@/constants/seo';

export const metadata = buildPageMetadata({
    title: 'Ücretsiz Offline ERP Programı | Stok Takip ve Cari Yönetim — DijitalERP',
    description:
        'DijitalERP ile ücretsiz offline ERP indirin. Windows masaüstü stok takip, cari yönetim, fatura yazılımı, kasa ve barkod tek panelde. İnternet zorunlu değil — veriler bilgisayarınızda.',
    path: '/',
    absoluteTitle: true,
    keywords: [
        'ücretsiz ERP indir',
        'offline ERP programı',
        'Windows stok takip',
        'masaüstü ERP',
        'barkod stok programı',
    ],
});

const page = () => {
    return <ITSolutionMain />;
};

export default page;
