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
        <div className="campus-photo-frame">
          <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
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

function CampusLeadCard({ role, photo, index, total }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const lines = role.description.split('\n').filter(Boolean);
  const [intro, ...details] = lines;
  const chapterNumber = String(index + 1).padStart(2, '0');

  return (
    <motion.article 
      className="campus-lead"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } }
      }}
    >
      <motion.figure className="campus-lead-photo" variants={itemVariants}>
        <div className="campus-photo-frame">
          <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
        </div>
        {photo.caption && (
          <figcaption className="campus-photo-caption">{photo.caption}</figcaption>
        )}
      </motion.figure>

      <div className="campus-lead-copy">
        <motion.div className="campus-label-row" variants={itemVariants}>
          <span className="campus-chapter" aria-hidden="true">
            chapter {chapterNumber} / {String(total).padStart(2, '0')}
          </span>
          <span className="campus-dot" aria-hidden="true" />
          <span className="campus-label">{role.year}</span>
        </motion.div>

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

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div 
              className="campus-lead-details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              {details.length > 0 && (
                <ul className="campus-lead-list">
                  {details.map((detail, idx) => (
                    <li key={idx} className="campus-lead-item">{detail}</li>
                  ))}
                </ul>
              )}

              {role.highlights && role.highlights.length > 0 && (
                <div className="campus-tags" style={{ marginTop: '0.75rem' }}>
                  {role.highlights.map((tag) => (
                    <span key={tag} className="campus-tag">{tag}</span>
                  ))}
                </div>
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

          <div className="campus-lead-list">
            {leadershipList.map((lead, idx) => (
              <CampusLeadCard 
                key={lead.degree + idx}
                role={lead}
                photo={idx === 0 ? campusPhotos.leadership1 : campusPhotos.leadership2}
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
