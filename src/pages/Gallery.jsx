import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryItems } from '../data/portfolioData';

function GalleryItem({ item, index, onOpen }) {
  return (
    <motion.button
      type="button"
      className={`gallery-archive-item gallery-archive-item--${item.size || 'standard'}`}
      onClick={onOpen}
      aria-label={`Open ${item.title} photo`}
      initial={{ opacity: 0, y: 22, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.6, 
        delay: Math.min(index * 0.04, 0.4), 
        ease: [0.22, 1, 0.36, 1] 
      }}
    >
      <img 
        className="gallery-archive-img" 
        src={item.src} 
        alt={item.alt} 
        loading="lazy" 
        decoding="async" 
      />
      <span className="gallery-archive-scrim" aria-hidden="true" />
      <span className="gallery-archive-meta">
        <span className="gallery-archive-index" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="gallery-archive-caption">
          <span className="gallery-archive-title">{item.title}</span>
          <span className="gallery-archive-sub">
            {[item.tag, item.location, item.year].filter(Boolean).join(' · ')}
          </span>
        </span>
        <span className="gallery-archive-open" aria-hidden="true">+</span>
      </span>
    </motion.button>
  );
}

function GalleryLightbox({ item, onClose, onPrev, onNext, hasPrev, hasNext }) {
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft' && hasPrev) onPrev();
    if (e.key === 'ArrowRight' && hasNext) onNext();
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  useEffect(() => {
    if (!item) return;
    document.addEventListener('keydown', handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [item, handleKeyDown]);

  if (!item) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div 
        className="gallery-page-overlay gallery-archive-overlay"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`${item.title} photo viewer`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div 
          className="gallery-page-modal gallery-archive-modal" 
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            type="button" 
            className="gallery-page-close gallery-archive-close" 
            onClick={onClose}
            aria-label="Close photo"
          >
            ×
          </button>

          {hasPrev && (
            <button 
              type="button" 
              className="gallery-archive-nav gallery-archive-nav--prev" 
              onClick={onPrev}
              aria-label="Previous photo"
            >
              ←
            </button>
          )}

          {hasNext && (
            <button 
              type="button" 
              className="gallery-archive-nav gallery-archive-nav--next" 
              onClick={onNext}
              aria-label="Next photo"
            >
              →
            </button>
          )}

          <motion.img 
            key={item.src}
            className="gallery-page-image gallery-archive-image"
            src={item.src} 
            alt={item.alt}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />

          <p className="gallery-page-caption gallery-archive-caption">
            <span className="gallery-archive-caption-title">{item.title}</span>
            {[item.tag, item.location, item.year].filter(Boolean).length > 0 && (
              <span className="gallery-archive-caption-sub">
                {[item.tag, item.location, item.year].filter(Boolean).join(' · ')}
              </span>
            )}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const activeItem = selectedIndex !== null ? galleryItems[selectedIndex] : null;

  const handlePrev = useCallback(() => {
    setSelectedIndex((idx) => (idx === null ? null : (idx - 1 + galleryItems.length) % galleryItems.length));
  }, []);

  const handleNext = useCallback(() => {
    setSelectedIndex((idx) => (idx === null ? null : (idx + 1) % galleryItems.length));
  }, []);

  return (
    <section className="about-section story-panel gallery-archive-section">
      <div className="section-inner">
        <p className="section-marker">gallery</p>
        <h1 className="section-title">moments &amp; memories</h1>
        <p className="section-lead">
          A curated archive of the places, builds, and moments that shaped the journey.
        </p>

        <div className="gallery-archive-grid">
          {galleryItems.map((item, idx) => (
            <GalleryItem 
              key={item.src + idx} 
              item={item} 
              index={idx} 
              onOpen={() => setSelectedIndex(idx)} 
            />
          ))}
        </div>

        <div className="gallery-archive-outro">
          <span className="gallery-archive-dotted" aria-hidden="true" />
          <p className="gallery-archive-outro-text">
            and more — every frame is a memory worth keeping.
          </p>
        </div>
      </div>

      <GalleryLightbox 
        item={activeItem}
        onClose={() => setSelectedIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
        hasPrev={galleryItems.length > 1}
        hasNext={galleryItems.length > 1}
      />
    </section>
  );
}
