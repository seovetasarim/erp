import Link from 'next/link';

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
                                <Link href="tel:+902166061746" className="it-sss-contact-link">
                                    <em>Telefon</em>
                                    <strong>0216 606 17 46</strong>
                                </Link>
                                <Link href="mailto:info@dijitalerp.com.tr" className="it-sss-contact-link">
                                    <em>E-posta</em>
                                    <strong>info@dijitalerp.com.tr</strong>
                                </Link>
                                <Link href="https://wa.me/902166061746" className="it-sss-contact-link">
                                    <em>WhatsApp</em>
                                    <strong>Hemen yaz</strong>
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
