import ITSolutionFaqMain from '@/pages/homes/it-solution/ITSolutionFaqMain';
import JsonLd from '@/components/seo/JsonLd';
import { faqPageJsonLd } from '@/data/faqData';
import { breadcrumbJsonLd, buildPageMetadata } from '@/constants/seo';

export const metadata = buildPageMetadata({
    title: 'SSS: Ücretsiz ERP, Offline Kullanım ve Lisans',
    description:
        'DijitalERP SSS: ücretsiz ERP gerçekten ücretsiz mi, internet gerekir mi, kurulum nasıl, veriler nerede, abonelik var mı? Offline Windows ERP hakkında sık sorulan sorular.',
    path: '/sss',
    keywords: [
        'ERP SSS',
        'ücretsiz ERP soruları',
        'offline ERP kurulum',
        'ERP lisans farkı',
        'stok programı yardım',
    ],
});

const page = () => {
    return (
        <>
            <JsonLd
                data={[
                    faqPageJsonLd,
                    breadcrumbJsonLd([
                        { name: 'Ana Sayfa', path: '/' },
                        { name: 'SSS', path: '/sss' },
                    ]),
                ]}
            />
            <ITSolutionFaqMain />
        </>
    );
};

export default page;
