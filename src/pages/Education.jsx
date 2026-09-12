import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { educationList, leadershipList, campusPhotos } from '../data/portfolioData';

const itemVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

function CampusEduCard({ education, photo, variant = 'secondary' }) {
  const lines = education.description.split('\n').filter(Boolean);

  return (
    <motion.article 
      className={`campus-edu campus-edu--${variant}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } }
      }}
    >
      <motion.figure className="campus-edu-photo" variants={itemVariants}>
        <div className="campus-photo-frame campus-logo-frame">
          <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" className="campus-logo-img" />
        </div>
        {photo.caption && (
          <figcaption className="campus-photo-caption">{photo.caption}</figcaption>
        )}
      </motion.figure>

      <div className="campus-edu-copy">
        <motion.div className="campus-label-row" variants={itemVariants}>
          <span className="campus-label campus-label--year">{education.year}</span>
          <span className="campus-dot" aria-hidden="true" />
          <span className="campus-label">
            {variant === 'hero' ? 'undergraduate' : 'foundation'}
          </span>
        </motion.div>

        <motion.h2 className="campus-school" variants={itemVariants}>
          {education.school}
        </motion.h2>

        <motion.p className="campus-degree" variants={itemVariants}>
          {education.degree}
        </motion.p>

        <motion.p className="campus-desc" variants={itemVariants}>
          {lines.join(' ')}
        </motion.p>

        {education.highlights && education.highlights.length > 0 && (
          <motion.div className="campus-tags" variants={itemVariants}>
            {education.highlights.map((tag) => (
              <span key={tag} className="campus-tag">
                {tag}
              </span>
            ))}
          </motion.div>
        )}
      </div>
    </motion.article>
  );
}

function CampusLeadCard({ role, index, total }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const lines = role.description.split('\n').filter(Boolean);
  const [intro, ...details] = lines;
  const chapterNumber = String(index + 1).padStart(2, '0');

  return (
    <motion.article 
      className="campus-lead campus-lead--card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } }
      }}
    >
      <div className="campus-lead-header">
        <div className="campus-lead-meta">
          <span className="campus-lead-icon" aria-hidden="true">
            {index === 0 ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            )}
          </span>
          <div className="campus-label-row" style={{ marginBottom: 0 }}>
            <span className="campus-chapter" aria-hidden="true">
              chapter {chapterNumber} / {String(total).padStart(2, '0')}
            </span>
            <span className="campus-dot" aria-hidden="true" />
            <span className="campus-label">{role.year}</span>
          </div>
        </div>
      </div>

      <div className="campus-lead-main">
        <motion.h3 className="campus-role" variants={itemVariants}>
          {role.degree}
        </motion.h3>

        <motion.p className="campus-org" variants={itemVariants}>
          {role.school}
        </motion.p>

        {intro && (
          <motion.p className="campus-lead-intro" variants={itemVariants}>
            {intro}
          </motion.p>
        )}

        {role.highlights && role.highlights.length > 0 && (
          <motion.div className="campus-tags" variants={itemVariants}>
            {role.highlights.map((tag) => (
              <span key={tag} className="campus-tag">{tag}</span>
            ))}
          </motion.div>
        )}

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div 
              className="campus-lead-details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {details.length > 0 && (
                <ul className="campus-lead-list" style={{ marginTop: '1rem' }}>
                  {details.map((detail, idx) => (
                    <li key={idx} className="campus-lead-item">{detail}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {details.length > 0 && (
          <motion.button 
            type="button" 
            className="campus-lead-toggle"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            variants={itemVariants}
          >
            {isExpanded ? 'read less' : 'read the full story'} →
          </motion.button>
        )}
      </div>
    </motion.article>
  );
}

export default function Education({ fullPage = false, onNavigate }) {
  // Preview Mode for Home / About Me
  if (!fullPage) {
    return (
      <section className="about-section story-panel" id="education">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-header-top">
              <p className="section-marker">04 — education &amp; leadership</p>
              <button 
                type="button" 
                className="section-header-link" 
                onClick={() => onNavigate?.('education')}
              >
                View Details →
              </button>
            </div>
            <h2 className="section-title">learning never stops</h2>
          </div>

          <div className="exp-table">
            {educationList.map((item, index) => (
              <div 
                key={index} 
                className="exp-row"
                onClick={() => onNavigate?.('education')}
                style={{ cursor: 'pointer' }}
              >
                <div className="exp-info">
                  <span className="exp-role">{item.degree}</span>
                  <span className="exp-divider">·</span>
                  <span className="exp-company">{item.school}</span>
                </div>
                <span className="exp-period">{item.year}</span>
              </div>
            ))}

            <div className="exp-section-label">Leadership</div>

            {leadershipList.map((item, index) => (
              <div 
                key={index} 
                className="exp-row"
                onClick={() => onNavigate?.('education')}
                style={{ cursor: 'pointer' }}
              >
                <div className="exp-info">
                  <span className="exp-role">{item.degree}</span>
                  <span className="exp-divider">·</span>
                  <span className="exp-company">{item.school}</span>
                </div>
                <span className="exp-period">{item.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Full Standalone Campus Page
  return (
    <section className="about-section story-panel campus-section">
      <div className="section-inner">
        {/* Education Block */}
        <div className="campus-education-block campus-education-block--first">
          <div className="campus-section-heading">
            <span className="campus-heading-index" aria-hidden="true">01</span>
            <div>
              <p className="section-marker">education</p>
              <h2 className="campus-heading-title">the foundation</h2>
            </div>
          </div>

          <div className="campus-edu-list">
            {educationList.map((edu, idx) => (
              <CampusEduCard 
                key={edu.degree + idx}
                education={edu}
                photo={idx === 0 ? campusPhotos.primary : campusPhotos.secondary}
                variant={idx === 0 ? 'hero' : 'secondary'}
              />
            ))}
          </div>
        </div>

        {/* Leadership Block */}
        <div className="campus-leadership-block">
          <div className="campus-section-heading">
            <span className="campus-heading-index" aria-hidden="true">02</span>
            <div>
              <p className="section-marker">leadership</p>
              <h2 className="campus-heading-title">the impact</h2>
            </div>
          </div>

          <div className="campus-leadership-grid">
            {leadershipList.map((lead, idx) => (
              <CampusLeadCard 
                key={lead.degree + idx}
                role={lead}
                index={idx}
                total={leadershipList.length}
              />
            ))}
          </div>
        </div>

        <div className="campus-outro">
          <span className="campus-dotted" aria-hidden="true" />
          <p className="campus-outro-text">
            this is where i learned — and this is the community i grew with.
          </p>
        </div>
      </div>
    </section>
  );
}
