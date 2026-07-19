import CursorAndBackgroundProvider from '@/components/provider/CustomCursorProvider';
import ITSolutionBlogHero from '@/components/blog/ITSolutionBlogHero';
import ITSolutionBlogPostContent from '@/components/blog/ITSolutionBlogPostContent';
import ScrollSmoothProvider from '@/components/provider/ScrollSmoothProvider';
import AnimationWrapper from '@/components/shared/Animation/AnimationWrapper';
import ITSolutionFooter from '@/layouts/footers/ITSolutionFooter';
import ITSolutionHeader from '@/layouts/headers/ITSolutionHeader';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import SearchArea from '@/components/search-area/SearchArea';
import type { BlogPostContent } from '@/data/blog';

type ITSolutionBlogDetailMainProps = {
  post: BlogPostContent;
};

const ITSolutionBlogDetailMain = ({ post }: ITSolutionBlogDetailMainProps) => {
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
                <ITSolutionBlogHero
                  eyebrow={post.heroEyebrow}
                  title={post.title}
                  description={post.heroDescription}
                  breadcrumbLabel={post.category}
                  publishedAt={post.publishedAt}
                  readMinutes={post.readMinutes}
                  category={post.category}
                />
                <ITSolutionBlogPostContent post={post} />
              </main>
              <ITSolutionFooter />
            </div>
          </div>
        </AnimationWrapper>
      </CursorAndBackgroundProvider>
    </ScrollSmoothProvider>
  );
};

export default ITSolutionBlogDetailMain;
