import ProtectedDownloadLink from '@/components/download/ProtectedDownloadLink';
import { ArrowNine } from '@/svg/ArrowIcons';
import Link from 'next/link';

const ITSolutionModulesCta = () => {
    return (
        <div className="it-modules-cta-area pt-40 pb-140" style={{ backgroundColor: '#FDF7F4' }}>
            <div className="container container-1230">
                <div className="it-modules-cta-box text-center tp_fade_anim">
                    <span className="tp-section-subtitle-platform mb-20 d-inline-block" style={{ color: 'rgba(255,255,255,0.7)' }}>
                        Hemen başlayın
                    </span>
                    <h3 className="tp-section-title-platform text-white mb-25">
                        Tüm modüller ücretsiz.<br />Kurulum dakikalar sürer.
                    </h3>
                    <p className="it-modules-cta-text mx-auto mb-40">
                        Offline Windows ERP ile stok, cari, fatura ve kasayı tek programda yönetin.
                        Abonelik yok — indirin, kurun, kullanın.
                    </p>
                    <ProtectedDownloadLink
                        className="tp-btn-black-radius d-inline-flex align-items-center justify-content-between it-modules-cta-btn"
                    >
                        <span>
                            <span className="text-1">Ücretsiz İndir</span>
                            <span className="text-2">Ücretsiz İndir</span>
                        </span>
                        <i>
                            <span>
                                <ArrowNine />
                                <ArrowNine />
                            </span>
                        </i>
                    </ProtectedDownloadLink>
                </div>
            </div>
        </div>
    );
};

export default ITSolutionModulesCta;
