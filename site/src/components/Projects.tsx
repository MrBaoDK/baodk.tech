import React, { useState } from 'react';

import { projects } from '@baodk-site/data/projects';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Data Engineering', 'Analytics', 'Process Automation', 'AI/Automation', 'Engineering Tools'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="section relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="section-header max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Featured <span className="text-[var(--color-primary)]">Projects</span>
          </h2>
          <p className="text-lg text-white/50 font-medium">
            Real-world solutions that demonstrate technical excellence and measurable business impact.
            From MLOps pipelines to high-scale indie tools.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 border ${selectedCategory === category
                ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-[0_0_20px_rgba(233,30,96,0.3)] scale-105'
                : 'bg-white/5 text-white/40 border-white/10 hover:border-white/30 hover:text-white'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div key={index} className="card group">
              {/* Project Header */}
              <div className="mb-6">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--color-primary)] bg-[var(--color-primary)]/10 px-4 py-1.5 rounded-full border border-[var(--color-primary)]/20">
                  {project.category}
                </span>
                <h3 className="card-title mt-6 group-hover:text-[var(--color-primary)] transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="card-subtitle mb-8 opacity-80">
                {project.description}
              </p>

              {/* Impact */}
              <div className="mb-8 p-5 bg-white/[0.02] rounded-2xl border border-white/5 border-l-4 border-l-[var(--color-primary)] group-hover:bg-white/[0.04] transition-all">
                <p className="text-white/40 text-[10px] uppercase font-black tracking-widest mb-1">Impact</p>
                <p className="text-white font-bold text-sm leading-relaxed">
                  {project.impact}
                </p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 rounded-md bg-white/5 text-white/40 text-[10px] font-bold border border-white/5 uppercase tracking-tighter"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <button className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest group/btn hover:text-[var(--color-primary)] transition-colors">
                <span>View Case Study</span>
                <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-24 reveal">
          <p className="text-xl text-white/40 mb-8 font-medium">
            Interested in similar results for your organization?
          </p>
          <a href="/#/about#contact" className="px-10 py-5 rounded-full bg-white text-black font-black text-sm uppercase tracking-widest hover:bg-[var(--color-primary)] hover:text-white transition-all hover:scale-105 shadow-xl">
            Book a Collaboration
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
