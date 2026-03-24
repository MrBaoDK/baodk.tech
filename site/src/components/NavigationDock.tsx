import React from 'react';

const navItems = [
  { id: 'experience', icon: 'work', title: 'Experience', desc: 'Experience and written experience and work.' },
  { id: 'skills', icon: 'monitoring', title: 'Technical Skills', desc: 'Uses and engineering technical skills.' },
  { id: 'projects', icon: 'rocket_launch', title: 'Featured Projects', desc: 'High-quality your AI featured projects.' },
  { id: 'testimonials', icon: 'chat', title: 'Testimonials', desc: 'We have questions, news testimonials.' },
  { id: 'contact', icon: 'contact_page', title: 'Get in Touch', desc: 'Get in touch a contact person for you.' },
];

interface NavigationDockProps {
  onSelectTopic: (topic: string) => void;
}

const NavigationDock: React.FC<NavigationDockProps> = ({ onSelectTopic }) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-2 pb-6 md:pb-16 transition-all duration-500">
      <div className="flex overflow-x-auto md:grid md:grid-cols-5 gap-2 md:gap-4 hide-scrollbar snap-x snap-mandatory px-4 -mx-4 md:px-0 md:mx-0">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelectTopic(item.id)}
            className="group flex items-center gap-3 md:block text-left p-3 md:p-6 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-xl hover:bg-white/[0.1] hover:border-[var(--color-primary)]/50 transition-all duration-300 min-w-[160px] md:min-w-0 snap-center shrink-0 shadow-2xl"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-white/5 flex items-center justify-center md:mb-4 group-hover:bg-[var(--color-primary)]/20 transition-colors shrink-0">
              <span className="material-symbols-outlined text-white/60 group-hover:text-[var(--color-primary)] transition-colors text-lg md:text-xl">
                {item.icon}
              </span>
            </div>
            <div className="flex flex-col">
              <h3 className="text-white font-bold text-[10px] md:text-sm uppercase tracking-wider leading-none md:leading-normal">{item.title}</h3>
              <p className="hidden md:block text-white/40 text-[10px] leading-relaxed line-clamp-2 mt-2">
                {item.desc}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavigationDock;
