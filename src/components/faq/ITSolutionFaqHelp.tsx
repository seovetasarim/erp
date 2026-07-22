import Link from 'next/link';
import { getWhatsAppUrl, SITE } from '@/constants/seo';

const ITSolutionFaqHelp = () => {
    return (
        <div className="it-sss-contact-area pb-140" style={{ backgroundColor: '#FFFFFF' }}>
            <div className="container container-1230">
                <div className="it-sss-contact tp_fade_anim" data-delay=".3">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <span className="it-sss-contact-label">Destek</span>
                            <h3 className="it-sss-contact-title">
                                Hâlâ netleşmeyen<br />bir nokta var mı?
                            </h3>
                        </div>
                        <div className="col-lg-6">
                            <div className="it-sss-contact-links">
                                <Link href={`tel:${SITE.phone}`} className="it-sss-contact-link">
                                    <em>Telefon</em>
                                    <strong>{SITE.phoneDisplay}</strong>
                                </Link>
                                <Link href={`mailto:${SITE.email}`} className="it-sss-contact-link">
                                    <em>E-posta</em>
                                    <strong>{SITE.email}</strong>
                                </Link>
                                <Link href={getWhatsAppUrl()} className="it-sss-contact-link">
                                    <em>WhatsApp</em>
                                    <strong>{SITE.whatsappDisplay}</strong>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ITSolutionFaqHelp;
