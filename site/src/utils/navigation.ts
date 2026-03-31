import React from 'react';

/**
 * Smoothly scrolls to a DOM element by ID with an optional offset.
 */
export const scrollToSection = (id: string, offset = 100) => {
  const element = document.getElementById(id);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
    });
    return true;
  }
  return false;
};

/**
 * Common handler for navigation link clicks.
 * Supports external links, hash-based section scrolling, and fallback navigation.
 */
export const handleNavClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  id: string,
  onAfterNavigate?: (id: string) => void,
) => {
  const href = e.currentTarget.getAttribute('href');

  // External links
  if (href?.startsWith('http')) {
    e.preventDefault();
    window.open(href, '_blank');
    return;
  }

  // Hash links (SPA routing)
  if (href?.startsWith('/#')) {
    e.preventDefault();
    const success = scrollToSection(id);

    if (success) {
      // Update hash manually without triggering a full page reload or doubling history
      const newHash = id === 'about' ? '#/about' : `#/about#${id}`;
      // Use replaceState to keep history clean during section scrolling
      window.history.replaceState(null, '', newHash);

      if (onAfterNavigate) {
        onAfterNavigate(id);
      }
    } else if (href) {
      // Fallback: if element is not in DOM (e.g., navigating from a different route)
      // perform a full location change to let the router handle it
      window.location.href = href;
    }
  }
};
