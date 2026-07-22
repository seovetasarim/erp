import contactShape from '../../../public/assets/img/contact/contact-us/contact-us-shape.png';
import { getWhatsAppUrl, SITE } from '@/constants/seo';
import Link from 'next/link';

const channels = [
    {
        title: 'Telefon',
        value: SITE.phoneDisplay,
        href: `tel:${SITE.phone}`,
        note: 'Hafta içi hızlı dönüş',
        cta: 'Ara',
    },
    {
        title: 'WhatsApp',
        value: SITE.whatsappDisplay,
        href: getWhatsAppUrl(),
        note: 'Anlık mesaj desteği',
        cta: 'Yaz',
    },
    {
        title: 'E-posta',
        value: SITE.email,
        href: `mailto:${SITE.email}`,
        note: 'Lisans ve kurumsal talepler',
        cta: 'Mail At',
    },
    {
        title: 'Adres',
        value: `${SITE.address.district} / ${SITE.address.city}`,
        href: SITE.address.mapsUrl,
        note: SITE.address.street,
        cta: 'Haritada Aç',
    },
];

const ITSolutionContactChannels = () => {
    return (
        <>
            <div className="cn-contactform-support-area mb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <div
                                className="cn-contactform-support-bg d-flex align-items-center justify-content-center"
                                style={{ backgroundImage: `url(${contactShape.src})` }}
                            >
                                <div className="cn-contactform-support-text text-center">
                                    <span>
                                        İstersen formu atla — aşağıdaki kanallardan
                                        doğrudan bize ulaş. Genelde 24 saat içinde dönüş yapıyoruz.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="it-contact-channels-area pb-140" style={{ backgroundColor: '#FFFFFF' }}>
                <div className="container container-1230">
                    <div className="row">
                        {channels.map((item) => (
                            <div key={item.title} className="col-lg-3 col-md-6 mb-30">
                                <div className="it-contact-channel tp_fade_anim">
                                    <span className="it-contact-channel-label">{item.title}</span>
                                    <h4 className="it-contact-channel-title">{item.value}</h4>
                                    <p>{item.note}</p>
                                    <Link
                                        className="tp-btn-yellow-green w-100"
                                        href={item.href}
                                        {...(item.title === 'Adres'
                                            ? { target: '_blank', rel: 'noopener noreferrer' }
                                            : {})}
                                    >
                                        <span>
                                            <span className="text-1">{item.cta}</span>
                                            <span className="text-2">{item.cta}</span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ITSolutionContactChannels;
