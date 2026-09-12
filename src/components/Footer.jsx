import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onNavigate }) {
  const handleNav = (e, page) => {
    e.preventDefault();
    onNavigate?.(page);
  };

  return (
    <footer className="site-footer story-panel final-chapter" id="contact">
      {/* Background with glow, orbs, and watermark */}
      <div className="footer-bg" aria-hidden="true">
        <div className="footer-glow" style={{ opacity: 0.2 }}></div>
        <div className="footer-orb footer-orb--1" style={{ transform: 'translateY(90px)' }}></div>
        <div className="footer-orb footer-orb--2" style={{ transform: 'translateY(-70px)' }}></div>
        <div className="footer-orb footer-orb--3" style={{ transform: 'translateY(-2px)' }}></div>
        <p className="footer-giant" aria-hidden="true">thank you</p>
      </div>

      <motion.div 
        className="section-inner footer-stage"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } }
        }}
      >
        <div className="footer-chapter">
          <span className="footer-chapter-num">chapter 05</span>
          <span className="footer-chapter-line" aria-hidden="true"></span>
          <span className="footer-chapter-title">the beginning</span>
        </div>

        <h2 className="footer-statement">
          {personalInfo.footerStatementTop}
          <span className="footer-statement-accent">{personalInfo.footerStatementAccent}</span>
        </h2>

        <div className="footer-identity">
          <p className="footer-name">{personalInfo.name}</p>
          <p className="footer-role">{personalInfo.footerRole}</p>
        </div>

        <nav className="footer-nav" aria-label="Explore">
          <span className="footer-nav-label">explore</span>
          <ul className="footer-nav-list">
            <li>
              <a className="footer-link" href="/experience" onClick={(e) => handleNav(e, 'experience')}>
                Experience<span className="footer-link-arrow" aria-hidden="true">→</span>
              </a>
            </li>
            <li>
              <a className="footer-link" href="/projects" onClick={(e) => handleNav(e, 'projects')}>
                Projects<span className="footer-link-arrow" aria-hidden="true">→</span>
              </a>
            </li>
            <li>
              <a className="footer-link" href="/stack" onClick={(e) => handleNav(e, 'stack')}>
                Stack<span className="footer-link-arrow" aria-hidden="true">→</span>
              </a>
            </li>
            <li>
              <a className="footer-link" href="/education" onClick={(e) => handleNav(e, 'education')}>
                Education<span className="footer-link-arrow" aria-hidden="true">→</span>
              </a>
            </li>
            <li>
              <a className="footer-link" href="/contact" onClick={(e) => handleNav(e, 'contact')}>
                Contact<span className="footer-link-arrow" aria-hidden="true">→</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="footer-cta-wrap">
          <a className="footer-cta" href={`mailto:${personalInfo.email}`}>
            start a conversation
            <svg className="footer-cta-arrow" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </a>

          <ul className="footer-social" aria-label="Contact links">
            <li>
              <a className="footer-social-link" href={`mailto:${personalInfo.email}`}>Email</a>
            </li>
            {personalInfo.socials.map((s, idx) => (
              <li key={idx}>
                <a className="footer-social-link" href={s.url} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <div className="section-inner footer-bottom">
        <motion.div 
          className="footer-divider" 
          aria-hidden="true"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div 
          className="footer-meta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <p className="footer-location">{personalInfo.footerLocation}</p>
          <p className="footer-signature-line">designed &amp; built with curiosity, creativity &amp; code</p>
          <p className="footer-copy">{personalInfo.footerCopy}</p>
        </motion.div>
      </div>
    </footer>
  );
}
