import React from 'react';

import { clientTestimonials } from '@baodk-site/data/testimonials';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="section bg-[var(--color-dark)] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title section-title--accent">What Clients Say</h2>
          {/* <p className="section-subtitle section-subtitle--inverse">
            Trusted by industry leaders and recognized for technical excellence and delivery
          </p> */}
        </div>

        {/* Testimonials Grid */}
        <div className="testimonial-grid">
          {clientTestimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              {/* Quote Icon */}
              <div className="quote-icon">"</div>

              {/* Testimonial Content */}
              <p className="testimonial-content">
                {testimonial.content}
              </p>

              {/* Client Info */}
              <div className="flex items-center space-x-4 mb-4">
                {/* Logo/Avatar */}
                <div className="client-avatar">
                  {testimonial.logo}
                </div>

                {/* Client Details */}
                <div>
                  <h4 className="client-name">
                    {testimonial.name}
                  </h4>
                  <p className="client-role">
                    {testimonial.role}
                  </p>
                  <p className="client-company">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Rating Stars */}
              <div className="star-rating">
                {[...Array(5)].map((_, starIndex) => (
                  <span key={starIndex} className="star">
                    ⭐
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="stats-grid">
          <div className="transition-transform hover:scale-110">
            <div className="stat-number text-accent">50+</div>
            <div className="stat-label">Projects Delivered</div>
          </div>
          <div className="transition-transform hover:scale-110">
            <div className="stat-number text-primary">99.9%</div>
            <div className="stat-label">Uptime Achieved</div>
          </div>
          <div className="transition-transform hover:scale-110">
            <div className="stat-number text-accent">70%</div>
            <div className="stat-label">Avg. Performance Gain</div>
          </div>
          <div className="transition-transform hover:scale-110">
            <div className="stat-number text-primary">6+</div>
            <div className="stat-label">Years Experience</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-base md:text-xl mb-4 md:mb-6 text-light">
            Ready to join these satisfied clients?
          </p>
          <a href="#contact" className="btn-primary btn-lg">
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
