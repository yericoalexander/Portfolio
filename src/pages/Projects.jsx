import React from 'react';
import FeaturedProjects from '../components/FeaturedProjects';
import { allProjects } from '../data/portfolioData';

export default function Projects({ onNavigate }) {
  return (
    <section className="about-section story-panel">
      <div className="section-inner">
        <p className="section-marker">projects</p>
        <h1 className="section-title">everything i've built</h1>
        <p className="section-lead">
          A collection of products, platforms, and tools I've designed and built from the ground up.
        </p>

        {/* Compact Featured Interactive Cards */}
        <FeaturedProjects onNavigate={onNavigate} compact={true} />

        {/* Full Projects Grid */}
        <div className="projects-grid-full">
          {allProjects.map((project) => (
            <article key={project.slug} className="project-card-full">
              <button 
                type="button" 
                className="project-card-media"
                onClick={() => onNavigate?.(`project/${project.slug}`)}
                aria-label={`View ${project.title} details`}
              >
                <img 
                  className="project-card-banner" 
                  src={project.banner} 
                  alt={`${project.title} banner`} 
                  loading="lazy" 
                  decoding="async"
                />
              </button>

              <div className="project-card-body">
                <div className="project-card-body-head">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-desc">{project.description}</p>
                </div>

                <p className="project-card-long">{project.longDescription}</p>

                {project.highlights && project.highlights.length > 0 && (
                  <div className="project-card-tags">
                    {project.highlights.map((tag) => (
                      <span key={tag} className="project-card-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="project-card-links">
                  <button 
                    type="button" 
                    className="project-card-link"
                    onClick={() => onNavigate?.(`project/${project.slug}`)}
                  >
                    View Details →
                  </button>
                  {project.links?.live && project.links.live !== '#' && (
                    <a 
                      href={project.links.live} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="project-card-link"
                    >
                      Live Site →
                    </a>
                  )}
                  {project.links?.code && project.links.code !== '#' && (
                    <a 
                      href={project.links.code} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="project-card-link"
                    >
                      Source Code →
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
