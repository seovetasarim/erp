import ITSolutionLegalMain from '@/components/legal/ITSolutionLegalMain';
import JsonLd from '@/components/seo/JsonLd';
import { TERMS_OF_SERVICE } from '@/data/legalContent';
import { breadcrumbJsonLd, buildPageMetadata } from '@/constants/seo';

export const metadata = buildPageMetadata({
  title: TERMS_OF_SERVICE.metaTitle,
  description: TERMS_OF_SERVICE.metaDescription,
  path: '/hizmet-sartlari',
  keywords: TERMS_OF_SERVICE.keywords,
});

const page = () => {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Ana Sayfa', path: '/' },
          { name: 'Hizmet Şartları', path: '/hizmet-sartlari' },
        ])}
      />
      <ITSolutionLegalMain
        content={TERMS_OF_SERVICE}
        breadcrumbLabel="Hizmet Şartları"
      />
    </>
  );
};

export default page;
