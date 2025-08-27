import React from 'react';
import { careerTimeline } from '../data/timeline';

const Timeline: React.FC = () => {
  return (
    <section id="experience" className="section bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-subtitle">
            A career dedicated to excellence in data engineering, quality assurance, and AI integration
          </p>
        </div>
        
        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div 
              className="absolute left-8 top-0 bottom-0 w-1 -translate-x-1/2"
              style={{ backgroundColor: 'var(--color-primary)' }}
            ></div>
            
            {careerTimeline.map((item, index) => (
              <div key={index} className="relative flex items-start mb-10 md:mb-12 last:mb-0">
                {/* Timeline Dot */}
                <div 
                  className="absolute left-8 w-4 h-4 rounded-full -translate-x-1/2 z-10"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                ></div>
                
                {/* Content Card */}
                <div className="ml-16 flex-1">
                  <div className="card transition-all duration-300 hover:shadow-xl">
                    {/* Year and Title */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 md:mb-3">
                      <h3 className="card-title">
                        {item.title}
                      </h3>
                      <span 
                        className="text-xs md:text-sm font-semibold px-3 py-1 rounded-full"
                        style={{ 
                          backgroundColor: 'var(--color-accent)', 
                          color: 'white' 
                        }}
                      >
                        {item.year}
                      </span>
                    </div>
                    
                    {/* Company */}
                    <h4 className="card-subtitle mb-2 md:mb-3 text-[var(--color-primary)]">
                      {item.company}
                    </h4>
                    
                    {/* Description */}
                    <p className="card-subtitle mb-3 md:mb-4">
                      {item.description}
                    </p>
                    
                    {/* Key Achievements */}
                    <div>
                      <h5 className="font-semibold mb-2 md:mb-3 text-[var(--color-dark)]">
                        Key Achievements:
                      </h5>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start space-x-3">
                            <span 
                              className="mt-1 flex-shrink-0 text-sm text-[var(--color-primary)]"
                            >
                              ✓
                            </span>
                            <span className="text-sm leading-relaxed text-[var(--color-text-light)]">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-base md:text-lg mb-4 md:mb-6 text-[var(--color-text-light)]">
            Ready to add your success story to this timeline?
          </p>
          <a href="#contact" className="btn-primary">
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
