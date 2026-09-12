import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { id: 'about-me', label: 'About Me', isPage: true },
  { id: 'contact', label: 'Contact', isPage: true },
  { id: 'projects', label: 'Projects', isPage: true },
  { id: 'experience', label: 'Experience', isPage: true },
  { id: 'education', label: 'Education', isPage: true },
  { id: 'stack', label: 'Stack', isPage: true }
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
      {id === 'education' && (
        <>
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </>
      )}
      {id === 'stack' && (
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      )}
    </svg>
  );
}

const itemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function Sidebar({ activeSection, theme, onToggleTheme, onNavigate }) {
  const isDark = theme === 'dark';

  const group1 = navItems.slice(0, 3); // about-me, contact, projects
  const group2 = navItems.slice(3);    // experience, education, stack

  const renderLink = (item) => {
    const isActive = activeSection === item.id;

    return (
      <motion.a
        key={item.id}
        href={`/${item.id}`}
        className={`sidebar-link ${isActive ? 'is-active' : ''}`}
        data-nav="true"
        onClick={(e) => {
          e.preventDefault();
          onNavigate(item.id);
        }}
        variants={itemVariants}
        whileHover={{ x: 3 }}
        whileTap={{ x: -1 }}
      >
        {isActive && (
          <motion.span
            className="sidebar-link-active"
            layoutId="sidebar-active-pill"
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          />
        )}
        <span className="sidebar-link-arrow" aria-hidden="true">→</span>
        <NavIcon id={item.id} />
        <span className="sidebar-link-label">{item.label}</span>
      </motion.a>
    );
  };

  return (
    <aside className="sidebar">
      {/* Ambient background orbs */}
      <div className="sidebar-ambient" aria-hidden="true">
        <span className="sidebar-orb sidebar-orb--1"></span>
        <span className="sidebar-orb sidebar-orb--2"></span>
      </div>

      {/* Brand / Logo */}
      <motion.div 
        className="sidebar-header"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <a 
          className="sidebar-brand" 
          href="/about-me" 
          onClick={(e) => {
            e.preventDefault();
            onNavigate('about-me');
          }}
        >
          <span className="sidebar-brand-dot" aria-hidden="true"></span>
          {personalInfo.name}
        </a>
      </motion.div>

      {/* Navigation Groups matching Kent Garcia */}
      <motion.nav 
        className="sidebar-nav"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
        }}
      >
        <div className="sidebar-group">
          {group1.map(renderLink)}
        </div>

        <div className="sidebar-group">
          {group2.map(renderLink)}
        </div>
      </motion.nav>

      {/* Sidebar Footer */}
      <div className="sidebar-footer">
        <div className="sidebar-email-block">
          <a className="sidebar-email" href={`mailto:${personalInfo.email}`}>
            {personalInfo.email}
          </a>
          <p className="sidebar-email-text">let's build something together.</p>
        </div>

        <button 
          type="button"
          className="sidebar-theme-toggle" 
          onClick={onToggleTheme}
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
          <span className="sidebar-theme-toggle-icon">
            {isDark ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.8"></circle>
                <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></line>
                <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></line>
                <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></line>
                <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></line>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            )}
          </span>
          <span className="sidebar-theme-toggle-label">{isDark ? 'light mode' : 'dark mode'}</span>
          <span className="sidebar-theme-toggle-arrow" aria-hidden="true">→</span>
        </button>
      </div>
    </aside>
  );
}
