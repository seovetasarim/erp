import CursorAndBackgroundProvider from "@/components/provider/CustomCursorProvider";
import ScrollSmoothProvider from "@/components/provider/ScrollSmoothProvider";
import AnimationWrapper from "@/components/shared/Animation/AnimationWrapper";
import ITSolutionFooter from "@/layouts/footers/ITSolutionFooter";
import ITSolutionHeader from "@/layouts/headers/ITSolutionHeader";
import BackToTop from "@/components/shared/BackToTop/BackToTop";
import SearchArea from "@/components/search-area/SearchArea";
import LoginForm from "@/components/forms/LoginForm";
import { Suspense } from "react";

const LoginMain = () => {
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
                <section className="tp-login-area pt-180 pb-140 p-relative z-index-1 fix">
                  <div className="container container-1230">
                    <div className="row justify-content-center">
                      <div className="col-xl-6 col-lg-8">
                        <Suspense fallback={<div>Yükleniyor…</div>}>
                          <LoginForm />
                        </Suspense>
                      </div>
                    </div>
                  </div>
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

export default LoginMain;
