"use client"
import { useState } from 'react';

const topics = [
    'Ücretsiz Demo',
    'Lisans / Satın Alma',
    'Kurulum Desteği',
    'Teknik Destek',
    'Kurumsal Teklif',
    'E-Fatura',
    'Eğitim',
];

const ITSolutionContactForm = () => {
    const [activeTopics, setActiveTopics] = useState<string[]>(['Ücretsiz Demo']);
    const [sent, setSent] = useState(false);

    const toggleTopic = (item: string) => {
        setActiveTopics((prev) =>
            prev.includes(item) ? prev.filter((t) => t !== item) : [...prev, item]
        );
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        const name = String(data.get('name') || '').trim();
        const email = String(data.get('email') || '').trim();
        const phone = String(data.get('phone') || '').trim();
        const message = String(data.get('message') || '').trim();
        const subject = activeTopics.join(', ') || 'İletişim';

        try {
            const res = await fetch('/api/support/tickets', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, phone, subject, message }),
            });
            const json = (await res.json()) as { error?: string; ticketCode?: string };
            if (!res.ok) {
                throw new Error(json.error || 'Mesaj gönderilemedi.');
            }
            setSent(true);
            form.reset();
            setActiveTopics(['Ücretsiz Demo']);
        } catch (err: unknown) {
            alert(err instanceof Error ? err.message : 'Mesaj gönderilemedi.');
        }
    };

    return (
        <div id="iletisim-form" className="tp-contact-me-interest-ptb p-relative" style={{ backgroundColor: '#FFFFFF' }}>
            <div className="container container-1230">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="tp-contact-me-interest-wrapper pb-70">
                            <h3 className="tp-contact-me-interest-title">Ne hakkında yazıyorsun?</h3>
                            <div className="tp-contact-me-interest-category">
                                {topics.map((item) => (
                                    <span
                                        key={item}
                                        className={`tp-contact-category-btn${activeTopics.includes(item) ? ' active' : ''}`}
                                        onClick={() => toggleTopic(item)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') toggleTopic(item);
                                        }}
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="tp-contact-me-interest-form">
                            <h3 className="tp-contact-me-interest-title">Mesaj gönder</h3>
                            <div className="tp-contact-me-interest-form-wrap">
                                <form id="contact-form" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="tp-contact-form-input mb-20">
                                                <label>Ad soyad*</label>
                                                <input name="name" type="text" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="tp-contact-form-input mb-20">
                                                <label>E-posta*</label>
                                                <input name="email" type="email" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="tp-contact-form-input mb-20">
                                                <label>Telefon</label>
                                                <input name="phone" type="tel" placeholder="05xx xxx xx xx" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="tp-contact-form-input mb-20">
                                                <label>Mesajın*</label>
                                                <textarea
                                                    name="message"
                                                    required
                                                    placeholder="Kısaca ihtiyacını yaz..."
                                                ></textarea>
                                            </div>
                                            <div className="tp-contact-form-btn">
                                                <button className="w-100" type="submit">
                                                    <span>
                                                        <span className="text-1">Mesajı Gönder</span>
                                                        <span className="text-2">Mesajı Gönder</span>
                                                    </span>
                                                </button>
                                                {sent && (
                                                    <p className="ajax-response mt-5">
                                                        Mesajın alındı. En kısa sürede dönüş yapacağız.
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ITSolutionContactForm;
