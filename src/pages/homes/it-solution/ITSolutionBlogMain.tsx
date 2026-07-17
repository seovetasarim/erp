import CursorAndBackgroundProvider from '@/components/provider/CustomCursorProvider';
import ITSolutionBlogGrid from '@/components/blog/ITSolutionBlogGrid';
import ITSolutionBlogHero from '@/components/blog/ITSolutionBlogHero';
import ScrollSmoothProvider from '@/components/provider/ScrollSmoothProvider';
import AnimationWrapper from '@/components/shared/Animation/AnimationWrapper';
import ITSolutionFooter from '@/layouts/footers/ITSolutionFooter';
import ITSolutionHeader from '@/layouts/headers/ITSolutionHeader';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import SearchArea from '@/components/search-area/SearchArea';
import { BLOG_POSTS } from '@/data/blog';

const ITSolutionBlogMain = () => {
  return (
    <ScrollSmoothProvider>
      <CursorAndBackgroundProvider bgColor="#FFFFFF">
        <AnimationWrapper>
          <div id="magic-cursor">
            <div id="ball"></div>
          </div>

          <BackToTop />
          <SearchArea />
          <ITSolutionHeader />

          <div id="smooth-wrapper" style={{ backgroundColor: '#FFFFFF' }}>
            <div id="smooth-content">
              <main>
                <ITSolutionBlogHero
                  eyebrow="DijitalERP Blog"
                  title="ERP, stok ve e-fatura rehberleri"
                  description="KOBİ'ler için offline Windows ERP, stok takibi, e-fatura süreçleri ve güvenli kurulum hakkında uzman içerikler."
                  breadcrumbLabel="Blog"
                />
                <ITSolutionBlogGrid posts={BLOG_POSTS} />
              </main>
              <ITSolutionFooter />
            </div>
          </div>
        </AnimationWrapper>
      </CursorAndBackgroundProvider>
    </ScrollSmoothProvider>
  );
};

export default ITSolutionBlogMain;
