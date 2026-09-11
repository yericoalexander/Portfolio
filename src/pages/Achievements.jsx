import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { achievements, scrapbookEntries } from '../data/portfolioData';

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

function getAchievementTag(item) {
  const text = `${item.event || item.competition} ${item.title}`.toLowerCase();
  if (text.includes('hackathon')) return 'hackathon';
  if (text.includes('competition')) return 'competition';
  if (text.includes('pitching')) return 'pitching';
  return 'recognition';
}

function ScrapbookPhoto({ photo, onOpen, className = '', floating = false }) {
  return (
    <motion.figure 
      className={`scrapbook-photo ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={itemVariants}
    >
      <motion.div 
        className="scrapbook-photo-float"
        animate={floating ? { y: [0, -8, 0] } : undefined}
        transition={floating ? { duration: 6, ease: 'easeInOut', repeat: Infinity } : undefined}
      >
        <button 
          type="button" 
          className="scrapbook-photo-btn"
          onClick={onOpen}
          aria-label={`Open ${photo.alt}`}
        >
          <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
        </button>
        {photo.caption && (
          <figcaption className="scrapbook-photo-caption">
            {photo.caption}
          </figcaption>
        )}
      </motion.div>
    </motion.figure>
  );
}

function ScrapbookEntry({ achievement, entry, index, onOpen }) {
  const allPhotos = [entry.main, ...(entry.support || [])];

  return (
    <motion.article 
      className={`scrapbook-entry scrapbook-entry--${entry.layout}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } }
      }}
    >
      <span className="scrapbook-index" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>

      {entry.layout === 'full' && (
        <div className="scrapbook-media scrapbook-media--full">
          <ScrapbookPhoto photo={entry.main} onOpen={() => onOpen(0)} floating={true} />
        </div>
      )}

      <div className="scrapbook-copy">
        <motion.p className="scrapbook-date" variants={itemVariants}>
          <span className="scrapbook-pin" aria-hidden="true">📍</span>
          {achievement.year}
        </motion.p>
        <motion.h2 className="scrapbook-title" variants={itemVariants}>
          {achievement.title}
        </motion.h2>
        <motion.p className="scrapbook-event" variants={itemVariants}>
          {achievement.event || achievement.competition}
        </motion.p>
        <motion.p className="scrapbook-desc" variants={itemVariants}>
          {achievement.description}
        </motion.p>
        <motion.div className="scrapbook-tags" variants={itemVariants}>
          <span className="scrapbook-tag">{getAchievementTag(achievement)}</span>
        </motion.div>
      </div>

      {(entry.layout === 'split-left' || entry.layout === 'split-right') && (
        <div className="scrapbook-media scrapbook-media--split">
          <ScrapbookPhoto photo={entry.main} onOpen={() => onOpen(0)} />
        </div>
      )}

      {entry.layout === 'featured' && (
        <div className="scrapbook-media scrapbook-media--featured">
          <ScrapbookPhoto photo={entry.main} onOpen={() => onOpen(0)} className="is-featured" />
          {entry.support && entry.support.length > 0 && (
            <div className="scrapbook-media-stack">
              {entry.support.map((suppPhoto, idx) => (
                <ScrapbookPhoto 
                  key={suppPhoto.src} 
                  photo={suppPhoto} 
                  onOpen={() => onOpen(idx + 1)} 
                />
              ))}
            </div>
          )}
        </div>
      )}

      {entry.layout === 'offset' && (
        <div className="scrapbook-media scrapbook-media--offset">
          <ScrapbookPhoto photo={entry.main} onOpen={() => onOpen(0)} className="is-main" />
          {entry.support?.map((suppPhoto, idx) => (
            <ScrapbookPhoto 
              key={suppPhoto.src} 
              photo={suppPhoto} 
              onOpen={() => onOpen(idx + 1)} 
              className="is-overlap" 
            />
          ))}
        </div>
      )}
    </motion.article>
  );
}

function ScrapbookLightbox({ item, onClose, onPrev, onNext, hasPrev, hasNext }) {
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft' && hasPrev) onPrev();
    if (e.key === 'ArrowRight' && hasNext) onNext();
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  useEffect(() => {
    if (!item) return;
    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [item, handleKeyDown]);

  if (!item) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div 
        className="scrapbook-lightbox"
        role="dialog"
        aria-modal="true"
        aria-label={item.alt}
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.figure 
          className="scrapbook-lightbox-figure"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.94, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <button 
            type="button" 
            className="scrapbook-lightbox-close" 
            onClick={onClose} 
            aria-label="Close photo"
          >
            ×
          </button>

          {hasPrev && (
            <button 
              type="button" 
              className="scrapbook-lightbox-nav is-prev" 
              onClick={onPrev}
              aria-label="Previous photo"
            >
              ←
            </button>
          )}

          {hasNext && (
            <button 
              type="button" 
              className="scrapbook-lightbox-nav is-next" 
              onClick={onNext}
              aria-label="Next photo"
            >
              →
            </button>
          )}

          <img className="scrapbook-lightbox-image" src={item.src} alt={item.alt} decoding="async" />
          {item.caption && (
            <figcaption className="scrapbook-lightbox-caption">{item.caption}</figcaption>
          )}
        </motion.figure>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}

export default function Achievements({ fullPage = false, onNavigate }) {
  const [lightboxState, setLightboxState] = useState(null); // { entryIndex, photoIndex }

  // Preview Mode for Home / About Me
  if (!fullPage) {
    return (
      <section className="about-section story-panel" id="achievements">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-header-top">
              <p className="section-marker">03 — achievements</p>
              <button 
                type="button" 
                className="section-header-link" 
                onClick={() => onNavigate?.('achievements')}
              >
                View All →
              </button>
            </div>
            <h2 className="section-title">milestones &amp; recognition</h2>
          </div>

          <div className="exp-table">
            {achievements.slice(0, 3).map((item, index) => (
              <div 
                key={index} 
                className="exp-row"
                onClick={() => onNavigate?.('achievements')}
                style={{ cursor: 'pointer' }}
              >
                <div className="exp-info">
                  <span className="exp-role">{item.title}</span>
                  <span className="exp-divider">·</span>
                  <span className="exp-company">{item.event || item.competition}</span>
                </div>
                <span className="exp-period">{item.year}</span>
              </div>
            ))}

            <button 
              type="button" 
              className="exp-row exp-row-more" 
              onClick={() => onNavigate?.('achievements')}
            >
              <div className="exp-info">
                <span className="exp-role">view all achievements</span>
              </div>
              <span className="exp-period">→</span>
            </button>
          </div>
        </div>
      </section>
    );
  }

  // Full Scrapbook Page
  const currentEntry = lightboxState !== null ? (scrapbookEntries[lightboxState.entryIndex] || scrapbookEntries[0]) : null;
  const currentPhotos = currentEntry ? [currentEntry.main, ...(currentEntry.support || [])] : [];
  const activePhoto = lightboxState !== null ? currentPhotos[lightboxState.photoIndex] : null;

  const handlePrev = () => {
    setLightboxState((prev) => {
      if (!prev) return null;
      const nextIdx = (prev.photoIndex - 1 + currentPhotos.length) % currentPhotos.length;
      return { ...prev, photoIndex: nextIdx };
    });
  };

  const handleNext = () => {
    setLightboxState((prev) => {
      if (!prev) return null;
      const nextIdx = (prev.photoIndex + 1) % currentPhotos.length;
      return { ...prev, photoIndex: nextIdx };
    });
  };

  return (
    <section className="about-section story-panel scrapbook-section">
      <div className="section-inner">
        <p className="section-marker">achievements</p>
        <h1 className="section-title">milestones &amp; recognition</h1>
        <p className="section-lead">
          Hackathon wins, competition placements, and notable achievements.
        </p>

        <div className="scrapbook">
          {achievements.map((item, idx) => (
            <ScrapbookEntry 
              key={item.title + idx}
              achievement={item}
              entry={scrapbookEntries[idx] || scrapbookEntries[0]}
              index={idx}
              onOpen={(photoIdx) => setLightboxState({ entryIndex: idx, photoIndex: photoIdx })}
            />
          ))}
        </div>

        <div className="scrapbook-outro">
          <span className="scrapbook-dotted" aria-hidden="true" />
          <p className="scrapbook-outro-text">
            and more — every milestone is a chapter worth keeping.
          </p>
          <span className="scrapbook-sparkle" aria-hidden="true">✦</span>
        </div>
      </div>

      <ScrapbookLightbox 
        item={activePhoto}
        onClose={() => setLightboxState(null)}
        onPrev={handlePrev}
        onNext={handleNext}
        hasPrev={currentPhotos.length > 1}
        hasNext={currentPhotos.length > 1}
      />
    </section>
  );
}
