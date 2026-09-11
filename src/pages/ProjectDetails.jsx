import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { allProjects } from '../data/portfolioData';

export default function ProjectDetails({ slug, onNavigate }) {
  const project = allProjects.find((p) => p.slug === slug);
  const [activePhoto, setActivePhoto] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActivePhoto(null);
    };
    if (activePhoto) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activePhoto]);

  if (!project) {
    return (
      <section className="about-section story-panel">
        <div className="section-inner">
          <p className="section-marker">projects</p>
          <h1 className="section-title">project not found</h1>
          <p className="section-lead">That project doesn't exist or may have been removed.</p>
          <button 
            type="button" 
            className="btn btn-secondary" 
            onClick={() => onNavigate('projects')}
          >
            ← Back to Projects
          </button>
        </div>
      </section>
    );
  }

  const hasGallery = project.gallery && project.gallery.length > 0;
  const hasLogo = !!project.preview?.logo;

  return (
    <div className="page-content">
      {/* Project Overview Card */}
      <section className="about-section story-panel">
        <div className="section-inner">
          <button 
            type="button" 
            className="project-detail-back" 
            onClick={() => onNavigate('projects')}
          >
            ← All Projects
          </button>

          <div className="project-detail-hero">
            <img 
              className="project-detail-banner" 
              src={project.banner} 
              alt={`${project.title} banner`} 
              loading="lazy" 
            />
          </div>

          <div className="project-detail-head">
            <div>
              <p className="section-marker">projects</p>
              <h1 className="section-title">{project.title}</h1>
              <p className="section-lead">{project.description}</p>
              <p className="project-detail-about">{project.longDescription}</p>
            </div>
          </div>

          {project.highlights && project.highlights.length > 0 && (
            <div className="project-detail-tags">
              {project.highlights.map((tag) => (
                <span key={tag} className="project-detail-tag">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="project-detail-links">
            {project.links?.live && project.links.live !== '#' && (
              <a 
                className="btn btn-primary" 
                href={project.links.live} 
                target="_blank" 
                rel="noreferrer"
              >
                Live Site →
              </a>
            )}
            {project.links?.code && project.links.code !== '#' && (
              <a 
                className="btn btn-secondary" 
                href={project.links.code} 
                target="_blank" 
                rel="noreferrer"
              >
                Source Code →
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Logo Section */}
      {hasLogo && (
        <section className="about-section story-panel">
          <div className="section-inner">
            <div className="section-header">
              <p className="section-marker">logo</p>
              <h2 className="section-title">the logo</h2>
            </div>
            <div className="project-detail-preview">
              <img 
                className="project-detail-logo" 
                src={project.preview.logo} 
                alt={`${project.title} logo`} 
                loading="lazy" 
              />
            </div>
          </div>
        </section>
      )}

      {/* Gallery Screenshots */}
      {hasGallery && (
        <section className="about-section story-panel">
          <div className="section-inner">
            <div className="section-header">
              <p className="section-marker">gallery</p>
              <h2 className="section-title">screens & shots</h2>
            </div>
            <div className="project-detail-gallery">
              {project.gallery.map((imgSrc, idx) => (
                <button 
                  key={imgSrc + idx}
                  type="button" 
                  className="project-detail-gallery-item"
                  onClick={() => setActivePhoto(imgSrc)}
                  aria-label="Open screenshot"
                >
                  <img src={imgSrc} alt={`${project.title} screenshot ${idx + 1}`} loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      {activePhoto && createPortal(
        <div 
          className="gallery-page-overlay" 
          onClick={() => setActivePhoto(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="gallery-page-modal" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="gallery-page-close" 
              type="button" 
              onClick={() => setActivePhoto(null)}
              aria-label="Close screenshot"
            >
              ×
            </button>
            <img className="gallery-page-image" src={activePhoto} alt={`${project.title} screenshot`} />
            <p className="gallery-page-caption">{project.title}</p>
          </div>
        </div>,
        document.body
      )}

      {/* Bottom Navigation */}
      <section className="about-section story-panel">
        <div className="section-inner">
          <div className="section-footer-btn" style={{ justifyContent: 'flex-start' }}>
            <button 
              type="button" 
              className="btn btn-secondary" 
              onClick={() => onNavigate('projects')}
            >
              ← Back to Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
