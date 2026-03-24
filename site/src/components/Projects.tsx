import React, { useState } from 'react';
import { projects } from '@baodk-site/data/projects';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI & Analytics', 'Data Engineering', 'Quality Engineering', 'DevOps', 'AI Integration', 'Full Stack'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="section bg-[var(--color-background)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Real-world solutions that demonstrate technical excellence and measurable business impact
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full font-medium transition-all duration-300 ${selectedCategory === category
                  ? 'bg-[var(--color-primary)] text-white shadow-lg'
                  : 'bg-white text-[var(--color-text)] hover:bg-[var(--color-primary)] hover:text-white border border-[var(--color-light-gray)]'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div key={index} className="card group transition-all duration-300 hover:scale-[1.02]">
              {/* Project Header */}
              <div className="mb-3 md:mb-4">
                <div className="flex justify-between items-start mb-2 md:mb-3">
                  <span className="text-xs md:text-sm font-semibold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2.5 py-1 md:px-3 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="card-title group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="card-subtitle mb-3 md:mb-4">
                {project.description}
              </p>

              {/* Impact */}
              <div className="mb-5 md:mb-6 p-3 md:p-4 bg-[var(--color-primary)]/5 rounded-lg border-l-4 border-[var(--color-primary)]">
                <p className="text-[var(--color-primary)] font-semibold text-xs md:text-sm">
                  📈 Impact: {project.impact}
                </p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-5 md:mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="tech-badge text-[10px] md:text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <button className="w-full text-[var(--color-primary)] font-semibold hover:text-[var(--color-accent)] transition-colors duration-300 flex items-center justify-center space-x-2 py-2">
                <span>View Details</span>
                <span>→</span>
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-lg text-[var(--color-text-light)] mb-4 md:mb-6">
            Interested in similar results for your organization?
          </p>
          <button className="btn-primary btn-lg">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
