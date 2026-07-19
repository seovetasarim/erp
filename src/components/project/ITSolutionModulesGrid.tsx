"use client"
import { erpModules, erpModuleFilters } from '@/data/erpModules';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';

const filters = erpModuleFilters;

const ITSolutionModulesGrid = () => {
    const [active, setActive] = useState('all');
    const modules = erpModules;

    const filtered = useMemo(() => {
        if (active === 'all') return modules;
        return modules.filter((item) => item.category === active);
    }, [active, modules]);

    return (
        <div className="it-modules-grid-area pb-100" style={{ backgroundColor: '#FDF7F4' }}>
            <div className="container container-1230">
                <div className="row justify-content-center mb-50">
                    <div className="col-xl-8 text-center">
                        <span className="tp-section-subtitle-platform platform-text-black mb-15 d-inline-block tp_fade_anim" data-delay=".3">
                            Katalog
                        </span>
                        <h3 className="tp-section-title-platform platform-text-black fs-84 tp-split-text tp-split-right">
                            Tüm modülleri keşfedin
                        </h3>
                    </div>
                </div>

                <div className="it-modules-filter d-flex flex-wrap justify-content-center mb-50 tp_fade_anim" data-delay=".4">
                    {filters.map((filter) => (
                        <button
                            key={filter.key}
                            type="button"
                            className={`it-modules-filter-btn${active === filter.key ? ' is-active' : ''}`}
                            onClick={() => setActive(filter.key)}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                <div className="row">
                    {filtered.map((project) => (
                        <div key={project.id} className="col-xl-4 col-md-6 mb-30 tp_fade_anim">
                            <div className="it-modules-card">
                                <div className="it-modules-card-thumb fix">
                                    <Link href={project.link}>
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            style={{ width: '100%', height: 'auto' }}
                                        />
                                    </Link>
                                </div>
                                <div className="it-modules-card-content">
                                    <span className="it-modules-card-cat">{project.category}</span>
                                    <h4 className="it-modules-card-title">
                                        <Link className="tp-line-black" href={project.link}>
                                            {project.title}
                                        </Link>
                                    </h4>
                                    <p className="it-modules-card-desc">{project.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    {filtered.length === 0 && (
                        <div className="col-12 text-center py-5">
                            <p>Bu kategoride modül bulunamadı.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ITSolutionModulesGrid;
