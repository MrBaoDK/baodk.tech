import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import GenericIcon, { GenericIconProps } from '@baodk-site/components/GenericIcon';

interface GenericModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  description?: string;
  icon?: GenericIconProps['icon'];
  className?: string;
  showCloseButton?: boolean;
}

const GenericModal: React.FC<GenericModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  description,
  icon,
  className = 'max-w-md',
  showCloseButton = true,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const portalRoot = document.getElementById('portal-root');

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleFocusTrap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const focusableElements = modalRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusableElements || focusableElements.length === 0) return;

      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('keydown', handleFocusTrap);

    // Focus first focusable element or the modal itself
    const firstFocusable = modalRef.current?.querySelector(
      'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])',
    ) as HTMLElement;
    if (firstFocusable) {
      firstFocusable.focus();
    } else {
      modalRef.current?.focus();
    }

    // Scroll Lock
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleFocusTrap);
      document.body.style.overflow = originalStyle;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const content = (
    <div
      className='fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 font-sans'
      role='dialog'
      aria-modal='true'
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      <div
        className='fixed inset-0 bg-black/60 backdrop-blur-xl transition-opacity duration-300'
        onClick={onClose}
        aria-hidden='true'
      />

      <div
        ref={modalRef}
        tabIndex={-1}
        className={`relative w-full ${className} bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 focus:outline-none`}
      >
        <div className='absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)]/10 blur-3xl pointer-events-none' />

        {showCloseButton && (
          <button
            onClick={onClose}
            className='absolute top-6 right-6 text-white/20 hover:text-white transition-colors z-20 focus:outline-none focus:text-white'
            aria-label='Close modal'
          >
            <span className='material-symbols-outlined'>close</span>
          </button>
        )}

        <div className='relative z-10 flex flex-col items-center text-center'>
          {icon && (
            <div className='w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6'>
              <GenericIcon icon={icon} className='text-[var(--color-primary)]' size='lg' />
            </div>
          )}
          {title && (
            <h3 id='modal-title' className='text-2xl font-black text-white mb-2 tracking-tight'>
              {title}
            </h3>
          )}
          {description && <p className='text-white/40 font-medium mb-8 text-sm'>{description}</p>}
          {children}
        </div>
      </div>
    </div>
  );

  return createPortal(content, portalRoot || document.body);
};

export default GenericModal;
