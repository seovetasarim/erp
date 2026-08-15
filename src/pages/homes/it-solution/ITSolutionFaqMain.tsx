import CursorAndBackgroundProvider from '@/components/provider/CustomCursorProvider';
import ITSolutionInnerBreadcrumb from '@/components/shared/ITSolutionInnerBreadcrumb';
import ITSolutionFaqList from '@/components/faq/ITSolutionFaqList';
import ScrollSmoothProvider from '@/components/provider/ScrollSmoothProvider';
import AnimationWrapper from '@/components/shared/Animation/AnimationWrapper';
import ITSolutionFooter from '@/layouts/footers/ITSolutionFooter';
import ITSolutionHeader from '@/layouts/headers/ITSolutionHeader';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import SearchArea from '@/components/search-area/SearchArea';

const ITSolutionFaqMain = () => {
    return (
        <ScrollSmoothProvider>
            <CursorAndBackgroundProvider bgColor="#FDF7F4">
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
                                <ITSolutionInnerBreadcrumb title="Sık Sorulan Sorular" current="SSS" />
                                <ITSolutionFaqList />
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
