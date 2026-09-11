import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experiences, coreTechSet } from '../data/portfolioData';

const isCurrent = (period) => period.toLowerCase().includes('present');

function splitDescription(desc) {
  const sentences = desc.match(/[^.!?]+[.!?]+/g) ?? [desc];
  const trimmed = sentences.map((s) => s.trim()).filter(Boolean);
  const [intro, ...bullets] = trimmed;
  return { intro, bullets };
}

function ExperienceStoryItem({ item, index, isActive, onActiveChange, onRegister }) {
  const itemRef = useRef(null);

  useEffect(() => {
    onRegister(index, itemRef.current);
  }, [index, onRegister]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onActiveChange(index);
        }
      },
      { threshold: 0.4, rootMargin: '0px 0px -15% 0px' }
    );
    if (itemRef.current) observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, [index, onActiveChange]);

  const { intro, bullets } = splitDescription(item.description);

  return (
    <article 
      ref={itemRef} 
      id={`exp-${index}`}
      className={`exp-story-section ${isActive ? 'is-active' : ''}`}
    >
      <div className="exp-story-orb" aria-hidden="true" />
      
      <motion.div 
        className="exp-story-content"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="exp-story-index">{String(index + 1).padStart(2, '0')}</p>
        <h3 className="exp-story-role">{item.role}</h3>
        
        <div className="exp-story-meta">
          <span className="exp-story-company">{item.company}</span>
          <span className="exp-story-divider" aria-hidden="true">·</span>
          <span className="exp-story-period">{item.period}</span>
        </div>

        <p className="exp-story-intro">{intro}</p>

        {bullets.length > 0 && (
          <motion.ul 
            className="exp-story-bullets"
            initial="hidden"
            animate={isActive ? 'visible' : 'hidden'}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } }
            }}
          >
            {bullets.map((bullet, idx) => (
              <motion.li 
                key={idx}
                className="exp-story-bullet"
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
                }}
              >
                {bullet}
              </motion.li>
            ))}
          </motion.ul>
        )}

        {item.highlights && item.highlights.length > 0 && (
          <div className="exp-story-tags">
            {item.highlights.map((tag) => (
              <span 
                key={tag} 
                className={`tech-item ${coreTechSet.has(tag) ? 'tech-item-core' : ''}`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </article>
  );
}

export default function Experience({ fullPage = false, onNavigate }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);

  const currentItem = experiences[activeIndex] || experiences[0];
  const progressPercent = ((activeIndex + 1) / experiences.length) * 100;

  const handleSelect = (idx) => {
    setActiveIndex(idx);
    itemRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Preview Mode for Home / About Me
  if (!fullPage) {
    return (
      <section className="about-section story-panel" id="experience">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-header-top">
              <p className="section-marker">02 — experience</p>
              <button 
                type="button" 
                className="section-header-link" 
                onClick={() => onNavigate?.('experience')}
              >
                Full History →
              </button>
            </div>
            <h2 className="section-title">the journey so far</h2>
          </div>

          <div className="exp-table">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="exp-row"
                onClick={() => onNavigate?.('experience')}
                style={{ cursor: 'pointer' }}
              >
                <div className="exp-info">
                  <span className="exp-role">{exp.role}</span>
                  <span className="exp-divider">·</span>
                  <span className="exp-company">{exp.company}</span>
                </div>
                <span className="exp-period">{exp.period}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Full Standalone Story Page
  return (
    <section className="about-section story-panel">
      <div className="section-inner">
        <p className="section-marker">experience</p>
        <h1 className="section-title">the journey so far</h1>
        <p className="section-lead">
          From enterprise system architectures to high-impact products — here's where I've been and what I've worked on.
        </p>

        <div className="exp-story-layout">
          {/* Sticky Left Navigation Panel */}
          <aside className="exp-story-panel" aria-label="Experience navigation">
            <div className="exp-panel-inner">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div 
                  key={currentItem.company}
                  className="exp-panel-hero"
                  initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -14, filter: 'blur(4px)' }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="exp-panel-titles">
                    <h2 className="exp-panel-company">{currentItem.company}</h2>
                    <p className="exp-panel-role">{currentItem.role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="exp-panel-meta">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span 
                    key={currentItem.company}
                    className={`exp-panel-status ${isCurrent(currentItem.period) ? 'is-current' : ''}`}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.4 }}
                  >
                    <span className="exp-status-dot" aria-hidden="true" />
                    {isCurrent(currentItem.period) ? 'current' : 'past'}
                  </motion.span>
                </AnimatePresence>

                <span className="exp-panel-count" aria-hidden="true">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(experiences.length).padStart(2, '0')}
                </span>
              </div>

              {/* Progress Bar */}
              <div 
                className="exp-panel-progress" 
                role="progressbar" 
                aria-valuenow={activeIndex + 1} 
                aria-valuemin={0} 
                aria-valuemax={experiences.length}
              >
                <motion.span 
                  className="exp-progress-fill" 
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>

              {/* Jump list */}
              <nav className="exp-panel-list" aria-label="Jump to experience">
                {experiences.map((exp, idx) => (
                  <button 
                    key={exp.company}
                    type="button" 
                    className={`exp-panel-item ${idx === activeIndex ? 'is-active' : ''}`}
                    onClick={() => handleSelect(idx)}
                    aria-current={idx === activeIndex ? 'true' : undefined}
                  >
                    <span className="exp-panel-arrow" aria-hidden="true">→</span>
                    <span className="exp-panel-name">{exp.company}</span>
                    <span className="exp-panel-item-period">{exp.period}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Right Scrollable Story Articles */}
          <div className="exp-story-scroll">
            {experiences.map((exp, idx) => (
              <ExperienceStoryItem 
                key={exp.company}
                item={exp}
                index={idx}
                isActive={activeIndex === idx}
                onActiveChange={setActiveIndex}
                onRegister={(i, el) => { itemRefs.current[i] = el; }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
