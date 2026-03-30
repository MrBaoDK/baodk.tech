import React, { useState, useMemo } from 'react';
import * as SiIcons from 'react-icons/si';
import * as FaIcons from 'react-icons/fa';
import * as VscIcons from 'react-icons/vsc';
import * as IoIcons from 'react-icons/io5';

import { capabilities } from '@baodk-site/data/capabilities';
import { Technology } from '@baodk-site/types';

const Capabilities: React.FC = () => {
    const categories = useMemo(() => ['All', ...capabilities.map((s) => s.title)], []);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const getIcon = (slug: string) => {
        if (!slug) return null;
        if (slug.startsWith('Si')) return (SiIcons as any)[slug];
        if (slug.startsWith('Fa')) return (FaIcons as any)[slug];
        if (slug.startsWith('Vsc')) return (VscIcons as any)[slug];
        if (slug.startsWith('Io')) return (IoIcons as any)[slug];
        return (SiIcons as any)[slug]; // Fallback
    };

    const filteredCoreTechs = useMemo(() => {
        if (selectedCategory === 'All') {
            const allCore: Technology[] = [];
            const seen = new Set<string>();
            capabilities.forEach((capability) => {
                capability.core.forEach((tech) => {
                    if (!seen.has(tech.name)) {
                        allCore.push(tech);
                        seen.add(tech.name);
                    }
                });
            });
            return allCore;
        }
        const capability = capabilities.find((s) => s.title === selectedCategory);
        return capability ? capability.core : [];
    }, [selectedCategory]);

    const filteredUtilityTechs = useMemo(() => {
        if (selectedCategory === 'All') {
            const allUtility = new Set<string>();
            capabilities.forEach((capability) => {
                capability.utility.forEach((tech) => allUtility.add(tech));
            });
            return Array.from(allUtility);
        }
        const capability = capabilities.find((capa) => capa.title === selectedCategory);
        return capability ? capability.utility : [];
    }, [selectedCategory]);

    return (
        <section className='section py-20 relative'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='section-header max-w-3xl mx-auto mb-16'>
                    <h2 className='text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight'>
                        Technical <span className='text-[var(--color-primary)]'>Capabilities</span>
                    </h2>
                    <p className='text-lg text-white/50 font-medium'>
                        Core expertise areas delivering enterprise-grade solutions with measurable business
                        impact. Specialized in AI integration and scale-focused engineering.
                    </p>
                </div>

                {/* Category Filter */}
                <div className='tech-filter-bar mb-12'>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`tech-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Pure Logo Grid - Core Stack */}
                <div className='pure-logo-grid'>
                    {filteredCoreTechs.map((tech) => {
                        const IconComponent = getIcon(tech.logoSlug || '');
                        return (
                            <div key={tech.name} className='pure-logo-item group'>
                                <div className='tech-logo-wrapper'>
                                    {IconComponent ? (
                                        <IconComponent className='tech-logo-svg' />
                                    ) : (
                                        <div className='w-8 h-8 rounded bg-white/5 flex items-center justify-center text-[10px] text-white/20'>
                                            {tech.name.substring(0, 2)}
                                        </div>
                                    )}
                                </div>
                                <div className='tech-name-reveal'>{tech.name}</div>
                            </div>
                        );
                    })}
                </div>

                {/* Utility Tag Cloud - Secondary Ecosystem */}
                <div className='utility-cloud'>
                    {filteredUtilityTechs.map((tech) => (
                        <span key={tech} className='utility-tag'>
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Strategic Tier */}
                <div className='max-w-5xl mt-12 mx-auto p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 relative overflow-hidden'>
                    <h3 className='text-3xl font-extrabold mb-6 text-white text-center'>
                        Strategic <span className='text-[var(--color-primary)]'>Advantage</span>
                    </h3>
                    <div className='mt-6 grid gap-4 md:grid-cols-3'>
                        <div className='text-center'>
                            <span className='material-symbols-custom mb-4'>target</span>
                            <h4 className='text-xs font-black uppercase tracking-widest text-white/60 mb-2'>
                                ROI Centric
                            </h4>
                            <p className='text-[10px] text-white/20 uppercase font-bold'>
                                Business-first engineering
                            </p>
                        </div>
                        <div className='text-center'>
                            <span className='material-symbols-custom mb-4'>bolt</span>
                            <h4 className='text-xs font-black uppercase tracking-widest text-white/60 mb-2'>
                                High Velocity
                            </h4>
                            <p className='text-[10px] text-white/20 uppercase font-bold'>
                                Performance-tuned architecture
                            </p>
                        </div>
                        <div className='text-center'>
                            <span className='material-symbols-custom mb-4'>verified_user</span>
                            <h4 className='text-xs font-black uppercase tracking-widest text-white/60 mb-2'>
                                Zero Failure
                            </h4>
                            <p className='text-[10px] text-white/20 uppercase font-bold'>
                                Production-grade reliability
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className='text-center mt-12 md:mt-16'>
                    <p className='text-lg text-[var(--color-text-light)] mb-4 md:mb-6'>
                        Ready to leverage these capabilities for your next project?
                    </p>
                    <a href='/#/about#contact' className='btn-primary'>
                        Discuss Your Requirements
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Capabilities;
