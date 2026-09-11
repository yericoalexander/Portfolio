import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { id: 'about-me', label: 'About Me' },
  { id: 'contact', label: 'Contact' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'education', label: 'Education' },
  { id: 'stack', label: 'Stack' },
  { id: 'gallery', label: 'Gallery' }
];

function NavIcon({ id }) {
  return (
    <svg 
      className="sidebar-link-icon" 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.8" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      aria-hidden="true"
    >
      {id === 'about-me' && (
        <>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c0-4 4-7 8-7s8 3 8 7" />
        </>
      )}
      {id === 'contact' && (
        <>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M22 7l-10 7L2 7" />
        </>
      )}
      {id === 'projects' && (
        <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
      )}
      {id === 'experience' && (
        <>
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
        </>
      )}
      {id === 'achievements' && (
        <>
          <circle cx="12" cy="8" r="6" />
          <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
        </>
      )}
      {id === 'education' && (
        <>
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </>
      )}
      {id === 'stack' && (
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      )}
      {id === 'gallery' && (
        <>
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </>
      )}
    </svg>
  );
}

export default function OverlayMenu({ isOpen, onClose, onNavigate }) {
  return (
    <div className={`overlay-menu ${isOpen ? 'is-open' : ''}`}>
      <div className="overlay-menu-header">
        <button 
          className="overlay-menu-close" 
          onClick={onClose} 
          aria-label="Close menu"
          type="button"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <nav className="overlay-menu-nav">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {navItems.map((item, index) => (
            <motion.a
              key={item.id}
              className="overlay-menu-link"
              href={`/${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(item.id);
                onClose();
              }}
              initial={{ opacity: 0, x: -10 }}
              animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.4, delay: 0.08 + index * 0.04, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="sidebar-link-arrow" aria-hidden="true">→</span>
              <NavIcon id={item.id} />
              {item.label}
            </motion.a>
          ))}
        </motion.div>
      </nav>

      <div className="overlay-menu-actions">
        <a 
          className="overlay-menu-action" 
          href={`mailto:${personalInfo.email}`}
        >
          Send Email
        </a>
      </div>
    </div>
  );
}
