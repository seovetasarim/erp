import CursorAndBackgroundProvider from "@/components/provider/CustomCursorProvider";
import ScrollSmoothProvider from "@/components/provider/ScrollSmoothProvider";
import AnimationWrapper from "@/components/shared/Animation/AnimationWrapper";
import ITSolutionFooter from "@/layouts/footers/ITSolutionFooter";
import ITSolutionHeader from "@/layouts/headers/ITSolutionHeader";
import BackToTop from "@/components/shared/BackToTop/BackToTop";
import SearchArea from "@/components/search-area/SearchArea";
import AdminLoginForm from "@/components/admin/AdminLoginForm";

const AdminLoginMain = () => {
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
                <section className="admin-login-area tp-login-area pt-180 pb-140 p-relative z-index-1 fix">
                  <div className="container container-1230">
                    <div className="row justify-content-center">
                      <div className="col-xl-6 col-lg-8">
                        <AdminLoginForm />
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

export default AdminLoginMain;
