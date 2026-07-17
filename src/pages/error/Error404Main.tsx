import Error404Section from "@/components/error/Error404Section";
import CursorAndBackgroundProvider from "@/components/provider/CustomCursorProvider";
import ScrollSmoothProvider from "@/components/provider/ScrollSmoothProvider";
import AnimationWrapper from "@/components/shared/Animation/AnimationWrapper";
import ITSolutionFooter from "@/layouts/footers/ITSolutionFooter";
import ITSolutionHeader from "@/layouts/headers/ITSolutionHeader";
import BackToTop from "@/components/shared/BackToTop/BackToTop";
import SearchArea from "@/components/search-area/SearchArea";

const Error404Main = () => {
  return (
    <ScrollSmoothProvider>
      <CursorAndBackgroundProvider bgColor="#F4F0EA">
        <AnimationWrapper>
          <div id="magic-cursor">
            <div id="ball"></div>
          </div>

          <BackToTop />
          <SearchArea />
          <ITSolutionHeader />

          <div id="smooth-wrapper" style={{ backgroundColor: "#F4F0EA" }}>
            <div id="smooth-content">
              <main>
                <Error404Section />
              </main>
              <ITSolutionFooter />
            </div>
          </div>
        </AnimationWrapper>
      </CursorAndBackgroundProvider>
    </ScrollSmoothProvider>
  );
};

export default Error404Main;
