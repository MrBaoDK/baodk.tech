import React from 'react';

import GenericIcon from '@baodk-site/components/GenericIcon';
import GenericModal from '@baodk-site/components/GenericModal';
import type { Project } from '@baodk-site/types';

interface ProjectCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const cs = project.caseStudy;

  return (
    <GenericModal isOpen={!!project} onClose={onClose} className='max-w-2xl' showCloseButton={true}>
      {/* Left-aligned header — override GenericModal's centered layout */}
      <div className='w-full text-left'>
        {/* Meta row */}
        <div className='flex flex-wrap items-center gap-3 mb-4'>
          {project.category && (
            <span className='text-[10px] font-black uppercase tracking-[0.2em] text-[var(--color-primary)] bg-[var(--color-primary)]/10 px-3 py-1 rounded-full border border-[var(--color-primary)]/20'>
              {project.category}
            </span>
          )}
          {project.year && (
            <span className='flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-white/30'>
              <GenericIcon icon='calendar_today' size='sm' />
              {project.year}
            </span>
          )}
          {project.company && (
            <span className='flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-white/30'>
              <GenericIcon icon='corporate_fare' size='sm' />
              {project.company}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className='text-2xl font-black text-white mb-2 tracking-tight leading-tight'>
          {project.title}
        </h3>
        <p className='text-white/50 text-sm mb-8 leading-relaxed'>{project.description}</p>

        {cs ? (
          <div className='space-y-6'>
            {/* Problem */}
            <div>
              <p className='text-[10px] font-black uppercase tracking-[0.2em] text-[var(--color-primary)] mb-2'>
                The Problem
              </p>
              <p className='text-white/70 text-sm leading-relaxed'>{cs.problem}</p>
            </div>

            {/* Solution */}
            <div>
              <p className='text-[10px] font-black uppercase tracking-[0.2em] text-[var(--color-primary)] mb-2'>
                The Solution
              </p>
              <p className='text-white/70 text-sm leading-relaxed'>{cs.solution}</p>
            </div>

            {/* Architecture */}
            {cs.architecture && (
              <div className='p-4 rounded-2xl bg-white/[0.03] border border-white/10'>
                <p className='text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-2'>
                  Architecture
                </p>
                <p className='text-white/60 text-xs leading-relaxed font-mono'>{cs.architecture}</p>
              </div>
            )}

            {/* Results */}
            <div>
              <p className='text-[10px] font-black uppercase tracking-[0.2em] text-[var(--color-primary)] mb-3'>
                Results
              </p>
              <ul className='space-y-2'>
                {cs.results.map((result, i) => (
                  <li key={i} className='flex items-start gap-3'>
                    <GenericIcon
                      icon='check_circle'
                      className='text-[var(--color-primary)] mt-0.5 shrink-0'
                      size='sm'
                    />
                    <span className='text-white text-sm font-bold leading-relaxed'>{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Extra sections */}
            {cs.sections?.map((section, i) => (
              <div key={i}>
                <p className='text-[10px] font-black uppercase tracking-[0.2em] text-[var(--color-primary)] mb-2'>
                  {section.heading}
                </p>
                <p className='text-white/70 text-sm leading-relaxed'>{section.body}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className='text-white/30 text-sm italic'>Case study details coming soon.</p>
        )}

        {/* Technology chips */}
        <div className='flex flex-wrap gap-2 mt-8 pt-6 border-t border-white/5'>
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className='px-3 py-1 rounded-md bg-white/5 text-white/40 text-[10px] font-bold border border-white/5 uppercase tracking-tighter'
            >
              {tech}
            </span>
          ))}
        </div>

        {/* External link */}
        {project.link && (
          <a
            href={project.link}
            target='_blank'
            rel='noopener noreferrer'
            className='mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-primary)] text-white text-xs font-black uppercase tracking-widest hover:opacity-90 transition-all hover:scale-105 no-underline'
          >
            <GenericIcon icon='open_in_new' size='sm' />
            {project.linkLabel ?? 'View Project'}
          </a>
        )}
      </div>
    </GenericModal>
  );
};

export default ProjectCaseStudyModal;
