export default function MobileAppSection() {
  return (
    <section id="mobil-uygulama" className="mobile-app-section" aria-labelledby="mobile-app-title">
      <div className="mobile-app-bg" aria-hidden />
      <div className="mobile-app-inner">
        <div className="mobile-app-phone-wrap">
          <div className="mobile-app-phone-frame">
            <div className="mobile-app-phone-screen">
              <img
                src="/app-screenshot-placeholder.svg"
                alt="DijitalERP mobil uygulama ekran görüntüsü"
                className="mobile-app-screenshot"
              />
            </div>
          </div>
        </div>
        <div className="mobile-app-content">
          <h2 id="mobile-app-title" className="mobile-app-title">
            Mobil Uygulamamızı İndirin
          </h2>
          <p className="mobile-app-desc">
            DijitalERP mobil uygulaması ile işletmenizi her yerden yönetin.
          </p>
          <div className="mobile-app-badges">
            <a
              href="https://apps.apple.com/tr/search?term=DijitalERP"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-app-btn"
              title="App Store'dan İndir"
              aria-label="App Store'dan DijitalERP indir"
            >
              <img src="/app-store-badge.svg" alt="App Store'dan İndir" className="mobile-app-btn-img" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.dijitalerp"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-app-btn"
              title="Google Play'den İndir"
              aria-label="Google Play'den DijitalERP indir"
            >
              <img src="/google-play-badge.svg" alt="Google Play'den İndir" className="mobile-app-btn-img" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
