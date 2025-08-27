import React from 'react';
import { skills } from '../data/skills';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <h2 className="section-title">Technical Capabilities</h2>
          <p className="section-subtitle">
            Core expertise areas delivering enterprise-grade solutions with measurable business impact
          </p>
        </div>
        
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div key={index} className="card text-center transition-all hover:scale-[1.02]">
              <div className="text-4xl mb-3 md:mb-4">{skill.icon}</div>
              <h3 className="card-title mb-2 md:mb-3">
                {skill.title}
              </h3>
              <p className="card-subtitle mb-3 md:mb-4">
                {skill.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 md:mt-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-[var(--color-dark)]">
              Why Choose My Expertise?
            </h3>
            <div className="grid gap-6 md:gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="text-3xl mb-2 md:mb-3">🎯</div>
                <h4 className="font-semibold mb-1.5 md:mb-2 text-[var(--color-dark)]">
                  Business-Focused
                </h4>
                <p className="text-sm text-[var(--color-text-light)]">
                  Solutions aligned with business objectives and measurable outcomes
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2 md:mb-3">⚡</div>
                <h4 className="font-semibold mb-1.5 md:mb-2 text-[var(--color-dark)]">
                  Performance-Driven
                </h4>
                <p className="text-sm text-[var(--color-text-light)]">
                  Optimized for speed, scalability, and reliability at enterprise scale
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2 md:mb-3">🔒</div>
                <h4 className="font-semibold mb-1.5 md:mb-2 text-[var(--color-dark)]">
                  Quality-First
                </h4>
                <p className="text-sm text-[var(--color-text-light)]">
                  Comprehensive testing and quality assurance built into every solution
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
