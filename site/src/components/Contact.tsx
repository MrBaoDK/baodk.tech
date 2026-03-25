import React, { useState } from 'react';

import { SOCIALS } from '@baodk-site/data/socials';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const digitalNetworkSocials = Object.values(SOCIALS).filter((social) => social.labels?.includes('digital-network'));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
    <section id="contact" className="section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="section-header max-w-3xl mx-auto mb-20 text-center">
            <h2 className="text-4xl md:text-7xl font-extrabold text-white mb-6 tracking-tighter">
              Let's <span className="text-[var(--color-primary)]">Connect</span>
            </h2>
            <p className="text-xl text-white/40 font-medium">
              Ready to discuss your next breakthrough? Reach out for collaborations
              on AI engineering, MLOps, or high-performance systems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
            {/* Contact Form */}
            <div className="card !p-8 md:!p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)]/5 blur-3xl pointer-events-none" />

              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--color-primary)] ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full py-4 px-6 bg-white/[0.03] border border-white/10 rounded-2xl text-white focus:outline-none focus:border-[var(--color-primary)]/50 transition-all font-medium"
                      placeholder="e.g. John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--color-primary)] ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full py-4 px-6 bg-white/[0.03] border border-white/10 rounded-2xl text-white focus:outline-none focus:border-[var(--color-primary)]/50 transition-all font-medium"
                      placeholder="name@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-1">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full py-4 px-6 bg-white/[0.03] border border-white/10 rounded-2xl text-white focus:outline-none focus:border-[var(--color-primary)]/50 transition-all font-medium"
                    placeholder="Your Company Name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--color-primary)] ml-1">
                    Project Brief
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full py-6 px-6 bg-white/[0.03] border border-white/10 rounded-2xl text-white focus:outline-none focus:border-[var(--color-primary)]/50 transition-all font-medium resize-none"
                    placeholder="Describe your goals, tech stack, or specific challenges..."
                  />
                </div>

                <button type="submit" className="w-full py-6 rounded-2xl bg-white text-black font-black text-sm uppercase tracking-widest hover:bg-[var(--color-primary)] hover:text-white transition-all shadow-xl hover:scale-[1.01]">
                  Initialize Inquiry
                </button>
              </form>
            </div>

            {/* Direct Information */}
            <div className="flex flex-col justify-center space-y-12">
              <div className="space-y-4">
                <h3 className="text-3xl font-black text-white tracking-tight">Direct <span className="text-white/20">Access</span></h3>
                <p className="text-white/40 font-medium leading-relaxed max-w-sm">
                  Prefer a traditional channel? I'm available across these networks for deep-dive discussions.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[var(--color-primary)]/10 group-hover:border-[var(--color-primary)] transition-all">
                    <span className="material-symbols-outlined text-white text-2xl">mail</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 mb-1">Email</p>
                    <p className="text-white font-bold text-lg">mrbaodk@hotmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[var(--color-primary)]/10 group-hover:border-[var(--color-primary)] transition-all">
                    <span className="material-symbols-outlined text-white text-2xl">location_on</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 mb-1">Base</p>
                    <p className="text-white font-bold text-lg">Ho Chi Minh City, Vietnam</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[var(--color-primary)]/10 group-hover:border-[var(--color-primary)] transition-all">
                    <span className="material-symbols-outlined text-white text-2xl">schedule</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 mb-1">Availability</p>
                    <p className="text-white font-bold text-lg">Global (Remote / On-site)</p>
                  </div>
                </div>
              </div>

              <div className="pt-12 border-t border-white/5">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 mb-6">Digital Networks</p>
                <div className="flex gap-4">
                  {digitalNetworkSocials.map((social) => (
                    <a key={social.icon} href={social.href} className="px-6 py-3 rounded-xl bg-white/5 border border-white/5 text-white/40 font-bold text-[10px] uppercase tracking-widest hover:bg-white/10 hover:text-white transition-all">
                      {social.label}
                    </a>
                  ))}
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
