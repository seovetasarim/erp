import CursorAndBackgroundProvider from '@/components/provider/CustomCursorProvider';
import ITSolutionFeaturesHero from '@/components/hero-banner/ITSolutionFeaturesHero';
import ITSolutionFeatureShowcase from '@/components/features/ITSolutionFeatureShowcase';
import ITSolutionFeatureDetails from '@/components/features/ITSolutionFeatureDetails';
import ITSolutionComparison from '@/components/comparison/ITSolutionComparison';
import ScrollSmoothProvider from '@/components/provider/ScrollSmoothProvider';
import AnimationWrapper from '@/components/shared/Animation/AnimationWrapper';
import ITSolutionBenifit from '@/components/benefits/ITSolutionBenifit';
import ITSolutionBrandTwo from '@/components/brand/ITSolutionBrandTwo';
import ITSolutionFeature from '@/components/features/ITSolutionFaq';
import ITSolutionFooter from '@/layouts/footers/ITSolutionFooter';
import ITSolutionHeader from '@/layouts/headers/ITSolutionHeader';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import SearchArea from '@/components/search-area/SearchArea';
import ITSolutionFaq from '@/components/faq/ITSolutionFaq';

const ITSolutionFeaturesMain = () => {
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
                                <ITSolutionFeaturesHero />
                                <ITSolutionFeature showTitle={false} compact sectionId="ozellikler-grid" />
                                <ITSolutionFeatureDetails />
                                <ITSolutionFeatureShowcase />
                                <ITSolutionBrandTwo />
                                <ITSolutionComparison />
                                <ITSolutionBenifit />
                                <ITSolutionFaq />
                            </main>
                            <ITSolutionFooter />
                        </div>
                    </div>
                </AnimationWrapper>
            </CursorAndBackgroundProvider>
        </ScrollSmoothProvider>
    );
};

export default ITSolutionFeaturesMain;
