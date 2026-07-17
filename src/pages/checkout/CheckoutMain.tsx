import CursorAndBackgroundProvider from "@/components/provider/CustomCursorProvider";
import ScrollSmoothProvider from "@/components/provider/ScrollSmoothProvider";
import AnimationWrapper from "@/components/shared/Animation/AnimationWrapper";
import ITSolutionFooter from "@/layouts/footers/ITSolutionFooter";
import ITSolutionHeader from "@/layouts/headers/ITSolutionHeader";
import BackToTop from "@/components/shared/BackToTop/BackToTop";
import SearchArea from "@/components/search-area/SearchArea";

type CheckoutMainProps = {
  children: React.ReactNode;
};

const CheckoutMain = ({ children }: CheckoutMainProps) => {
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

          <div id="smooth-wrapper" style={{ backgroundColor: "#FDF7F4" }}>
            <div id="smooth-content">
              <main>
                <section className="it-checkout-area pt-180 pb-120">
                  <div className="container container-1230">{children}</div>
                </section>
              </main>
              <ITSolutionFooter />
            </div>
          </div>
        </AnimationWrapper>
      </CursorAndBackgroundProvider>
    </ScrollSmoothProvider>
  );
};

export default CheckoutMain;
