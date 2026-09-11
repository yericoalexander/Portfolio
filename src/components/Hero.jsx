import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onNavigate }) {
  return (
    <section className="hero story-panel" id="about">
      <div className="hero-grid">
        <div className="hero-left">
          <p className="hero-meta">
            <svg className="hero-meta-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M11.54 22.351a.75.75 0 0 0 .92 0c1.898-1.55 7.04-6.566 7.04-11.351a7.5 7.5 0 1 0-15 0c0 4.785 5.142 9.8 7.04 11.351ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="currentColor"></path>
            </svg>
            <span>{personalInfo.location}</span>
          </p>

          <h1 className="hero-title">
            <span className="hero-greeting">{personalInfo.greeting}</span>
            <span className="hero-name">{personalInfo.name}</span>
          </h1>

          <p className="hero-position">{personalInfo.headline || personalInfo.bio}</p>

          <div className="hero-actions">
            <a 
              className="btn btn-primary" 
              href="/projects" 
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.('projects');
              }}
            >
              View Projects
            </a>
            <a 
              className="btn btn-secondary" 
              href="/contact" 
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.('contact');
              }}
            >
              Get in touch
            </a>
          </div>

          <div className="hero-social" aria-label="Social links">
            {personalInfo.socials.map((s, idx) => (
              <a key={idx} href={s.url} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-image-wrapper">
            <div className="hero-image-frame" />
            <div className="hero-image-img-wrap">
              <img 
                className="hero-image-img" 
                alt={personalInfo.name} 
                src={personalInfo.avatar} 
                fetchpriority="high"
                decoding="async"
              />
              <p className="hero-image-caption">{personalInfo.avatarCaption}</p>
            </div>
            <img className="hero-sticker hero-sticker-tl" alt="" src="/props/left-bubble.webp" loading="lazy" decoding="async" />
            <img className="hero-sticker hero-sticker-tr" alt="" src="/props/right-bubble.webp" loading="lazy" decoding="async" />
            <img className="hero-sticker hero-sticker-bl" alt="" src="/props/memoji.webp" loading="lazy" decoding="async" />
            <img className="hero-sticker hero-sticker-br" alt="" src="/props/smiley.webp" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  );
}
