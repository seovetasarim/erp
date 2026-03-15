export default function PolicyHero({ title }: { title: string }) {
  return (
    <div className="policy-hero">
      <div className="policy-hero-bg" />
      <div className="policy-hero-inner">
        <h1>{title}</h1>
      </div>
    </div>
  );
}
