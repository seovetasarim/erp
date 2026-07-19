import ITSolutionLegalMain from '@/components/legal/ITSolutionLegalMain';
import JsonLd from '@/components/seo/JsonLd';
import { PRIVACY_POLICY } from '@/data/legalContent';
import { breadcrumbJsonLd, buildPageMetadata } from '@/constants/seo';

export const metadata = buildPageMetadata({
  title: PRIVACY_POLICY.metaTitle,
  description: PRIVACY_POLICY.metaDescription,
  path: '/gizlilik-politikasi',
  keywords: PRIVACY_POLICY.keywords,
});

const page = () => {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Ana Sayfa', path: '/' },
          { name: 'Gizlilik Politikası', path: '/gizlilik-politikasi' },
        ])}
      />
      <ITSolutionLegalMain
        content={PRIVACY_POLICY}
        breadcrumbLabel="Gizlilik Politikası"
      />
    </>
  );
};

export default page;
