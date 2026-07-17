import aboutShape from '../../../public/assets/img/about-us/about-us-4/about-us-4-shape-1.png';
import { CareerShape } from '@/svg/HeroShape';
import { ArrowTwenty } from '@/svg/ArrowIcons';
import Image from 'next/image';
import Link from 'next/link';

type ITSolutionBlogHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbLabel: string;
  publishedAt?: string;
  readMinutes?: number;
  category?: string;
};

const ITSolutionBlogHero = ({
  eyebrow,
  title,
  description,
  breadcrumbLabel,
  publishedAt,
  readMinutes,
  category,
}: ITSolutionBlogHeroProps) => {
  return (
    <div className="it-sss-hero-area p-relative" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="it-sss-hero-shape">
        <span><CareerShape /></span>
      </div>
      <div className="container container-1230">
        <div className="it-sss-hero-ptb">
          <div className="it-sss-hero-breadcrumb tp_fade_anim" data-delay=".2">
            <Link href="/">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/blog">Blog</Link>
            {breadcrumbLabel !== 'Blog' && (
              <>
                <span>/</span>
                <em>{breadcrumbLabel}</em>
              </>
            )}
          </div>

          <div className="row">
            <div className="col-xl-12">
              <div className="it-sss-hero-title-box tp_fade_anim" data-delay=".3">
                <div className="ar-about-us-4-title-box d-flex align-items-center mb-25">
                  <span className="tp-section-subtitle pre">{eyebrow}</span>
                  <div className="ar-about-us-4-icon">
                    <ArrowTwenty />
                  </div>
                </div>
                <h1 className="tp-career-title it-sss-hero-title">
                  {title}{' '}
                  <span className="shape-1">
                    <Image src={aboutShape} alt="" />
                  </span>
                </h1>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-5"></div>
            <div className="col-lg-7">
              <div className="it-sss-hero-text tp_fade_anim" data-delay=".5">
                <p>{description}</p>
                {(publishedAt || readMinutes || category) && (
                  <div className="it-sss-hero-meta d-flex flex-wrap">
                    {category && <span>{category}</span>}
                    {publishedAt && <span>{publishedAt}</span>}
                    {readMinutes && <span>{readMinutes} dk okuma</span>}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITSolutionBlogHero;
