import Link from "next/link";

type ITSolutionInnerBreadcrumbProps = {
  title: string;
  current: string;
};

export default function ITSolutionInnerBreadcrumb({
  title,
  current,
}: ITSolutionInnerBreadcrumbProps) {
  return (
    <section className="erp-inner-breadcrumb">
      <div className="container container-1230">
        <h1 className="erp-inner-breadcrumb__title">{title}</h1>
        <nav className="erp-inner-breadcrumb__nav" aria-label="Breadcrumb">
          <Link href="/">Ana Sayfa</Link>
          <span aria-hidden>/</span>
          <em>{current}</em>
        </nav>
      </div>
    </section>
  );
}
