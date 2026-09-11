import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Topbar({ theme, onToggleTheme, onToggleMenu, onNavigate }) {
  const isDark = theme === 'dark';

  return (
    <div className="topbar">
      <a 
        className="topbar-brand" 
        href="/about-me"
        onClick={(e) => {
          e.preventDefault();
          onNavigate?.('about-me');
        }}
      >
        {personalInfo.name}
      </a>
      <div className="topbar-actions">
        <button 
          className="layout-theme-toggle" 
          onClick={onToggleTheme}
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          type="button"
        >
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
        </button>

        <button 
          className="topbar-menu-btn" 
          onClick={onToggleMenu}
          aria-label="Toggle menu"
          type="button"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <line x1="4" y1="7" x2="20" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></line>
            <line x1="12" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></line>
            <line x1="4" y1="17" x2="20" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></line>
          </svg>
        </button>
      </div>
    </div>
  );
}
