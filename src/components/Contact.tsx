import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple alert for now - can be replaced with actual form submission
    alert(`Thank you ${formData.name}! I'll get back to you within 24 hours.`);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="section-header">
            <h2 className="section-title">Contact Me</h2>
            <p className="section-subtitle">
              Let's discuss how I can help transform your data strategy and deliver scalable solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block font-semibold mb-2 text-[var(--color-dark)]">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 md:p-4 border-2 border-[var(--color-light-gray)] rounded-lg focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-semibold mb-2 text-[var(--color-dark)]">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 md:p-4 border-2 border-[var(--color-light-gray)] rounded-lg focus:outline-none transition-colors"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block font-semibold mb-2 text-[var(--color-dark)]">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-3 md:p-4 border-2 border-[var(--color-light-gray)] rounded-lg focus:outline-none transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-semibold mb-2 text-[var(--color-dark)]">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-4 border-2 border-[var(--color-light-gray)] rounded-lg focus:outline-none transition-colors resize-vertical"
                    placeholder="Tell me about your project, challenges, and goals..."
                  />
                </div>

                <button type="submit" className="btn-primary btn-lg w-full">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="card">
                <h3 className="text-2xl font-bold mb-6 text-[var(--color-dark)]">
                  Let's Connect
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">📧</div>
                    <div>
                      <h4 className="font-semibold mb-1 text-[var(--color-dark)]">Email</h4>
                      <p className="text-[var(--color-text-light)]">mrbaodk@hotmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">⏰</div>
                    <div>
                      <h4 className="font-semibold mb-1 text-[var(--color-dark)]">Response Time</h4>
                      <p className="text-[var(--color-text-light)]">Within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">🌍</div>
                    <div>
                      <h4 className="font-semibold mb-1 text-[var(--color-dark)]">Availability</h4>
                      <p className="text-[var(--color-text-light)]">Remote & On-site consultations</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">💼</div>
                    <div>
                      <h4 className="font-semibold mb-1 text-[var(--color-dark)]">Project Types</h4>
                      <p className="text-[var(--color-text-light)]">Data engineering, AI integration, quality assurance, full-stack development</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t">
                  <h4 className="font-semibold mb-4 text-[var(--color-dark)]">
                    Connect on Social
                  </h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://linkedin.com/in/baodk" 
                      className="text-2xl hover:scale-110 transition-transform text-[var(--color-primary)]"
                    >
                      💼
                    </a>
                    <a 
                      href="https://github.com/mrbaodk" 
                      className="text-2xl hover:scale-110 transition-transform text-[var(--color-dark)]"
                    >
                      💻
                    </a>
                    <a 
                      href="https://twitter.com/mrbaodk" 
                      className="text-2xl hover:scale-110 transition-transform text-[var(--color-primary)]"
                    >
                      🐦
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
