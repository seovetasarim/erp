"use client"
import { faqItems } from '@/data/faqData';
import { useMemo, useState } from 'react';

type FaqCategory = 'all' | 'genel' | 'lisans' | 'teknik' | 'destek';

const categories: { key: FaqCategory; label: string; desc: string }[] = [
    { key: 'all', label: 'Tümü', desc: 'Tüm sorular' },
    { key: 'genel', label: 'Genel', desc: 'Ürün ve kullanım' },
    { key: 'lisans', label: 'Lisans', desc: 'Paket ve ödeme' },
    { key: 'teknik', label: 'Teknik', desc: 'Kurulum ve veri' },
    { key: 'destek', label: 'Destek', desc: 'İletişim ve yardım' },
];

const ITSolutionFaqList = () => {
    const [active, setActive] = useState<FaqCategory>('all');

    const filtered = useMemo(() => {
        if (active === 'all') return faqItems;
        return faqItems.filter((item) => item.category === active);
    }, [active]);

    const counts = useMemo(() => {
        const map: Record<FaqCategory, number> = {
            all: faqItems.length,
            genel: 0,
            lisans: 0,
            teknik: 0,
            destek: 0,
        };
        faqItems.forEach((item) => {
            map[item.category] += 1;
        });
        return map;
    }, []);

    return (
        <div className="it-sss-board-area pb-140" style={{ backgroundColor: '#FFFFFF' }}>
            <div className="container container-1230">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="it-sss-sidebar tp_fade_anim" data-delay=".3">
                            <span className="it-sss-sidebar-label">Kategoriler</span>
                            <nav className="it-sss-sidebar-nav" aria-label="SSS kategorileri">
                                {categories.map((cat) => (
                                    <button
                                        key={cat.key}
                                        type="button"
                                        className={`it-sss-sidebar-btn${active === cat.key ? ' is-active' : ''}`}
                                        onClick={() => setActive(cat.key)}
                                    >
                                        <span className="it-sss-sidebar-btn-text">
                                            <strong>{cat.label}</strong>
                                            <em>{cat.desc}</em>
                                        </span>
                                        <span className="it-sss-sidebar-count">{counts[cat.key]}</span>
                                    </button>
                                ))}
                            </nav>
                            <div className="it-sss-sidebar-note">
                                <p>
                                    Aradığını bulamadın mı?{' '}
                                    <a href="mailto:info@dijitalerp.com.tr">info@dijitalerp.com.tr</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className="it-sss-board tp_fade_anim" data-delay=".4" data-fade-from="right">
                            <div className="it-sss-board-head">
                                <h3>
                                    {categories.find((c) => c.key === active)?.label}
                                </h3>
                                <p>{filtered.length} soru listeleniyor</p>
                            </div>

                            <div className="app-faq-wrap faq-inner-style">
                                <div className="ai-faq-accordion-wrap">
                                    <div className="accordion" id="itSssAccordion">
                                        {filtered.map((item, index) => {
                                            const open = index === 0;
                                            return (
                                                <div className="accordion-items" key={`${active}-${item.id}`}>
                                                    <h2 className="accordion-header">
                                                        <button
                                                            className={`accordion-buttons${open ? '' : ' collapsed'}`}
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target={`#${item.id}`}
                                                            aria-expanded={open ? 'true' : 'false'}
                                                            aria-controls={item.id}
                                                        >
                                                            {item.question}
                                                            <span className="accordion-icon"></span>
                                                        </button>
                                                    </h2>
                                                    <div
                                                        id={item.id}
                                                        className={`accordion-collapse collapse${open ? ' show' : ''}`}
                                                        data-bs-parent="#itSssAccordion"
                                                    >
                                                        <div className="accordion-body">
                                                            <p>{item.answer}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ITSolutionFaqList;
