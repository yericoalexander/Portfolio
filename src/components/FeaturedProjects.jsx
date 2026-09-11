import React, { useState } from 'react';
import { featuredProjects } from '../data/portfolioData';

export default function FeaturedProjects({ compact = false, onNavigate }) {
  const [hoveredId, setHoveredId] = useState(null);

  const handleCardClick = (project) => {
    if (project.slug && onNavigate) {
      onNavigate(`project/${project.slug}`);
    } else if (project.link) {
      window.open(project.link, '_blank');
    }
  };

  const content = (
    <>
      {!compact && (
        <div className="section-header">
          <div className="section-header-top">
            <p className="section-marker">01 — featured projects</p>
            <button 
              type="button" 
              className="section-header-link" 
              onClick={() => onNavigate?.('projects')}
            >
              All Projects →
            </button>
          </div>
          <h2 className="section-title">things i've built</h2>
        </div>
      )}

      <div className="featured-hover-note">hover over a card to preview</div>

      <div className="featured-projects-grid">
        {featuredProjects.map((project, index) => {
          const isHovered = hoveredId === project.id;
          const isEnviro = index === 1;

          if (isEnviro) {
            return (
              <div 
                key={project.id} 
                className={`featured-interactive-card ${isHovered ? 'is-hovered' : ''}`}
                tabIndex="0" 
                role="button"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                onFocus={() => setHoveredId(project.id)}
                onBlur={() => setHoveredId(null)}
                onClick={() => handleCardClick(project)}
              >
                <div className="enviro-icon-wrap">
                  <img alt={project.title} loading="lazy" decoding="async" src={project.icon} />
                  <span className="interactive-icon-label">{project.title}</span>
                </div>

                <div className="enviro-mockups">
                  <div className="enviro-mockup enviro-mockup-laptop">
                    <img alt={`${project.title} laptop`} loading="lazy" decoding="async" src={project.mockup1} />
                  </div>
                  <div className="enviro-mockup enviro-mockup-mobile">
                    <img alt={`${project.title} mobile`} loading="lazy" decoding="async" src={project.mockup2} />
                  </div>
                </div>

                <div className="enviro-orbs">
                  <span className="enviro-orb enviro-orb-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                    </svg>
                  </span>
                  <span className="enviro-orb enviro-orb-2">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path>
                    </svg>
                  </span>
                  <span className="enviro-orb enviro-orb-3">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 3v18h18"></path>
                      <path d="M7 16l4-8 4 4 4-6"></path>
                    </svg>
                  </span>
                  <span className="enviro-orb enviro-orb-4">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </span>
                  <span className="enviro-orb enviro-orb-5">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a4 4 0 014 4c0 2-2 4-4 6-2-2-4-4-4-6a4 4 0 014-4z"></path>
                      <path d="M5 22a7 7 0 0114 0"></path>
                    </svg>
                  </span>
                </div>

                <div className="enviro-text">
                  <img className="interactive-text-icon" alt="" loading="lazy" decoding="async" src={project.icon} />
                  <h3 className="interactive-text-title">{project.title}</h3>
                  <p className="interactive-text-sub">{project.sub}</p>
                  <button type="button" className="interactive-text-btn">{project.btnText}</button>
                </div>
              </div>
            );
          }

          return (
            <div 
              key={project.id} 
              className={`featured-interactive-card ${isHovered ? 'is-hovered' : ''}`}
              tabIndex="0" 
              role="button"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onFocus={() => setHoveredId(project.id)}
              onBlur={() => setHoveredId(null)}
              onClick={() => handleCardClick(project)}
            >
              <div className="interactive-icon-wrap">
                <img alt={project.title} loading="lazy" decoding="async" src={project.icon} />
                <span className="interactive-icon-label">{project.title}</span>
              </div>

              <div className="interactive-mockups">
                <div className="interactive-mockup interactive-mockup-left">
                  <img alt={`${project.title} left`} loading="lazy" decoding="async" src={project.mockup1} />
                </div>
                <div className="interactive-mockup interactive-mockup-right">
                  <img alt={`${project.title} right`} loading="lazy" decoding="async" src={project.mockup2} />
                </div>
              </div>

              <div className="interactive-text">
                <img className="interactive-text-icon" alt="" loading="lazy" decoding="async" src={project.icon} />
                <h3 className="interactive-text-title">{project.title}</h3>
                <p className="interactive-text-sub">{project.sub}</p>
                <button type="button" className="interactive-text-btn">{project.btnText}</button>
              </div>
            </div>
          );
        })}
      </div>

      {!compact && (
        <div className="section-footer-btn">
          <button 
            type="button" 
            className="btn btn-primary" 
            onClick={() => onNavigate?.('projects')}
          >
            View All Projects →
          </button>
        </div>
      )}
    </>
  );

  if (compact) {
    return content;
  }

  return (
    <section className="featured-projects-section story-panel" id="projects">
      <div className="section-inner">
        {content}
      </div>
    </section>
  );
}
