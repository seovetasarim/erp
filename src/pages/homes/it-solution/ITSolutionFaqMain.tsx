import CursorAndBackgroundProvider from '@/components/provider/CustomCursorProvider';
import ITSolutionFaqHero from '@/components/hero-banner/ITSolutionFaqHero';
import ITSolutionFaqList from '@/components/faq/ITSolutionFaqList';
import ITSolutionFaqHelp from '@/components/faq/ITSolutionFaqHelp';
import ScrollSmoothProvider from '@/components/provider/ScrollSmoothProvider';
import AnimationWrapper from '@/components/shared/Animation/AnimationWrapper';
import ITSolutionFooter from '@/layouts/footers/ITSolutionFooter';
import ITSolutionHeader from '@/layouts/headers/ITSolutionHeader';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import SearchArea from '@/components/search-area/SearchArea';

const ITSolutionFaqMain = () => {
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
                                <ITSolutionFaqHero />
                                <ITSolutionFaqList />
                                <ITSolutionFaqHelp />
                            </main>
                            <ITSolutionFooter />
                        </div>
                    </div>
                </AnimationWrapper>
            </CursorAndBackgroundProvider>
        </ScrollSmoothProvider>
    );
};

export default ITSolutionFaqMain;
