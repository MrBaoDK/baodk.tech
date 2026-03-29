import React from 'react';

import { technicalCapabilities } from '@baodk-site/data/capabilities';

const TechnicalCapabilities: React.FC = () => {
  return (
    <section id='capabilities' className='section bg-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='section-header'>
          <h2 className='section-title'>Technical Expertise</h2>
          <p className='section-subtitle'>
            Combining deep technical knowledge with practical experience to deliver robust, scalable
            solutions that drive business value
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className='grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {technicalCapabilities.map((capability, index) => (
            <div
              key={index}
              className='card border-2 border-transparent group hover:border-[var(--color-primary)]'
            >
              {/* Icon */}
              <div className='text-5xl md:text-6xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300'>
                {capability.icon}
              </div>

              {/* Title */}
              <h3 className='card-title group-hover:text-[var(--color-primary)] transition-colors duration-300'>
                {capability.title}
              </h3>

              {/* Description */}
              <p className='card-subtitle mb-5 md:mb-6'>{capability.description}</p>

              {/* Technologies */}
              <div className='flex flex-wrap gap-2'>
                {capability.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className='tech-badge text-xs hover:bg-[var(--color-primary)] hover:text-white transition-colors duration-300 cursor-default'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
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

export default TechnicalCapabilities;
