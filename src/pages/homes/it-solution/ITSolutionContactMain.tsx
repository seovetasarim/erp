import CursorAndBackgroundProvider from '@/components/provider/CustomCursorProvider';
import ITSolutionContactHero from '@/components/contacts/ITSolutionContactHero';
import ITSolutionContactForm from '@/components/contacts/ITSolutionContactForm';
import ITSolutionContactChannels from '@/components/contacts/ITSolutionContactChannels';
import ScrollSmoothProvider from '@/components/provider/ScrollSmoothProvider';
import AnimationWrapper from '@/components/shared/Animation/AnimationWrapper';
import ITSolutionFooter from '@/layouts/footers/ITSolutionFooter';
import ITSolutionHeader from '@/layouts/headers/ITSolutionHeader';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import SearchArea from '@/components/search-area/SearchArea';

const ITSolutionContactMain = () => {
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
                                <ITSolutionContactHero />
                                <ITSolutionContactForm />
                                <ITSolutionContactChannels />
                            </main>
                            <ITSolutionFooter />
                        </div>
                    </div>
                </AnimationWrapper>
            </CursorAndBackgroundProvider>
        </ScrollSmoothProvider>
    );
};

export default ITSolutionContactMain;
