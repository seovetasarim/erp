import CursorAndBackgroundProvider from '@/components/provider/CustomCursorProvider';
import ITSolutionPricingHero from '@/components/hero-banner/ITSolutionPricingHero';
import ITSolutionPricingCompare from '@/components/price-area/ITSolutionPricingCompare';
import ITSolutionPricingPlans from '@/components/price-area/ITSolutionPricingPlans';
import ITSolutionPricingFaq from '@/components/price-area/ITSolutionPricingFaq';
import ITSolutionModulesCta from '@/components/project/ITSolutionModulesCta';
import ScrollSmoothProvider from '@/components/provider/ScrollSmoothProvider';
import { PricingBillingProvider } from '@/provider/PricingBillingProvider';
import AnimationWrapper from '@/components/shared/Animation/AnimationWrapper';
import ITSolutionBrandTwo from '@/components/brand/ITSolutionBrandTwo';
import ITSolutionFooter from '@/layouts/footers/ITSolutionFooter';
import ITSolutionHeader from '@/layouts/headers/ITSolutionHeader';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import SearchArea from '@/components/search-area/SearchArea';

const ITSolutionPricingMain = () => {
    return (
        <ScrollSmoothProvider>
            <CursorAndBackgroundProvider bgColor="#08041D">
                <AnimationWrapper>
                    <PricingBillingProvider>
                        <div id="magic-cursor">
                            <div id="ball"></div>
                        </div>

                        <BackToTop />
                        <SearchArea />
                        <ITSolutionHeader />

                        <div id="smooth-wrapper" style={{ backgroundColor: '#FDF7F4' }}>
                            <div id="smooth-content">
                                <main>
                                    <ITSolutionPricingHero />
                                    <ITSolutionPricingPlans />
                                    <ITSolutionPricingCompare />
                                    <ITSolutionBrandTwo />
                                    <ITSolutionPricingFaq />
                                    <ITSolutionModulesCta />
                                </main>
                                <ITSolutionFooter />
                            </div>
                        </div>
                    </PricingBillingProvider>
                </AnimationWrapper>
            </CursorAndBackgroundProvider>
        </ScrollSmoothProvider>
    );
};

export default ITSolutionPricingMain;
