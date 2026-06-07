import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import AnimateSection from '../../AnimateSection';
import Footer from '../../Footer';
import PolicyHero from '../../PolicyHero';
import CitySeoContent from '../_shared/CitySeoContent';
import {
  buildCitySeoSlug,
  getAllCitySeoSlugs,
  PRIMARY_CITY_SEO_SUFFIX,
  resolveCitySeoSlug,
} from '../../../data/city-seo-slugs';
import { getIlBySlug } from '../../../data/turkiye-illeri';
import { getCityLocative } from '../../../lib/city-locative';

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllCitySeoSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const resolved = resolveCitySeoSlug(params.slug);
  if (!resolved) return {};

  const { city, variant } = resolved;
  const il = city.name;
  const ilde = getCityLocative(il);
  const title = variant.metaTitle(il);
  const description = variant.metaDescription(il, ilde);
  const canonical = `https://www.dijitalerp.com.tr/sehirler/${params.slug}`;

  return {
    title,
    description,
    keywords: variant.keywords(il),
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
    },
  };
}

export default function SehirPage({ params }: Props) {
  const resolved = resolveCitySeoSlug(params.slug);

  if (!resolved) {
    const city = getIlBySlug(params.slug);
    if (city) {
      redirect(`/sehirler/${buildCitySeoSlug(city.slug, PRIMARY_CITY_SEO_SUFFIX)}`);
    }
    notFound();
  }

  const { city, variant } = resolved;
  const ilde = getCityLocative(city.name);

  return (
    <div className="site-wrap policy-page">
      <PolicyHero title={variant.heroTitle(city.name, ilde)} />
      <AnimateSection sectionType="seo" delay={80}>
        <CitySeoContent city={city} />
      </AnimateSection>
      <AnimateSection sectionType="footer" delay={100}>
        <Footer />
      </AnimateSection>
    </div>
  );
}
