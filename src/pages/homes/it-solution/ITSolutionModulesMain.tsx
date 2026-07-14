import CursorAndBackgroundProvider from '@/components/provider/CustomCursorProvider';
import ITSolutionModulesHero from '@/components/hero-banner/ITSolutionModulesHero';
import ITSolutionModulesMetro from '@/components/project/ITSolutionModulesMetro';
import ITSolutionModulesGrid from '@/components/project/ITSolutionModulesGrid';
import ITSolutionModulesCta from '@/components/project/ITSolutionModulesCta';
import ScrollSmoothProvider from '@/components/provider/ScrollSmoothProvider';
import AnimationWrapper from '@/components/shared/Animation/AnimationWrapper';
import ITSolutionTestimonial from '@/components/testimonial/ITSolutionTestimonial';
import ITSolutionProject from '@/components/project/ITSolutionProject';
import ITSolutionFooter from '@/layouts/footers/ITSolutionFooter';
import ITSolutionHeader from '@/layouts/headers/ITSolutionHeader';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import ITSolutionStep from '@/components/step/ITSolutionStep';
import SearchArea from '@/components/search-area/SearchArea';

const ITSolutionModulesMain = () => {
    return (
        <ScrollSmoothProvider>
            <CursorAndBackgroundProvider bgColor="#08041D">
                <AnimationWrapper>
                    <div id="magic-cursor">
                        <div id="ball"></div>
                    </div>

                    <BackToTop />
                    <SearchArea />
                    <ITSolutionHeader />

                    <div id="smooth-wrapper" style={{ backgroundColor: '#FDF7F4' }}>
                        <div id="smooth-content">
                            <main>
                                <ITSolutionModulesHero />
                                <ITSolutionModulesGrid />
                                <ITSolutionModulesMetro />
                                <ITSolutionProject showTitle={false} sectionId="moduller-slider" />
                                <ITSolutionStep />
                                <ITSolutionTestimonial />
                                <ITSolutionModulesCta />
                            </main>
                            <ITSolutionFooter />
                        </div>
                    </div>
                </AnimationWrapper>
            </CursorAndBackgroundProvider>
        </ScrollSmoothProvider>
    );
};

export default ITSolutionModulesMain;
