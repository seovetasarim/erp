import ITSolutionContactMain from '@/pages/homes/it-solution/ITSolutionContactMain';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbJsonLd, buildPageMetadata, SITE } from '@/constants/seo';

export const metadata = buildPageMetadata({
    title: 'İletişim: Demo, Destek ve Pro Lisans',
    description:
        `DijitalERP iletişim: demo, kurulum desteği ve Pro lisans için yazın. ${SITE.phoneDisplay} · WhatsApp ${SITE.whatsappDisplay} · ${SITE.email}`,
    path: '/iletisim',
    keywords: [
        'DijitalERP iletişim',
        'ERP demo talep',
        'ERP teknik destek',
        'ERP lisans satın al',
    ],
});

const page = () => {
    return (
        <>
            <JsonLd
                data={breadcrumbJsonLd([
                    { name: 'Ana Sayfa', path: '/' },
                    { name: 'İletişim', path: '/iletisim' },
                ])}
            />
            <ITSolutionContactMain />
        </>
    );
};

export default page;
