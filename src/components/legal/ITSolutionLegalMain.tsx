import CursorAndBackgroundProvider from '@/components/provider/CustomCursorProvider';
import ITSolutionLegalContent from '@/components/legal/ITSolutionLegalContent';
import ITSolutionLegalHero from '@/components/legal/ITSolutionLegalHero';
import ScrollSmoothProvider from '@/components/provider/ScrollSmoothProvider';
import AnimationWrapper from '@/components/shared/Animation/AnimationWrapper';
import ITSolutionFooter from '@/layouts/footers/ITSolutionFooter';
import ITSolutionHeader from '@/layouts/headers/ITSolutionHeader';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import SearchArea from '@/components/search-area/SearchArea';
import type { LegalPageContent } from '@/data/legalContent';

type ITSolutionLegalMainProps = {
  content: LegalPageContent;
  breadcrumbLabel: string;
};

const ITSolutionLegalMain = ({ content, breadcrumbLabel }: ITSolutionLegalMainProps) => {
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
                <ITSolutionLegalHero content={content} breadcrumbLabel={breadcrumbLabel} />
                <ITSolutionLegalContent content={content} />
              </main>
              <ITSolutionFooter />
            </div>
          </div>
        </AnimationWrapper>
      </CursorAndBackgroundProvider>
    </ScrollSmoothProvider>
  );
};

export default ITSolutionLegalMain;
