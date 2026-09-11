import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, contactLinks } from '../data/portfolioData';

function ContactIcon({ name }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {name === 'email' && (
        <>
          <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M2 6l10 7 10-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
      {name === 'github' && (
        <>
          <polyline points="9 8 5 12 9 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="15 8 19 12 15 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="11" y1="6" x2="13" y2="18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </>
      )}
      {name === 'linkedin' && (
        <>
          <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="8" cy="9" r="1.2" fill="currentColor" />
          <line x1="8" y1="11" x2="8" y2="17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M12 17v-4.2c0-1.3 1-2.3 2.3-2.3S16.6 11.5 16.6 12.8V17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </>
      )}
      {name === 'call' && (
        <>
          <rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M8 2v4M16 2v4M3 9h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M8 13h3M8 16h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

function ContactLinkCard({ link }) {
  return (
    <a 
      className="letter-link" 
      href={link.href} 
      target={link.external ? '_blank' : undefined} 
      rel={link.external ? 'noreferrer' : undefined}
      aria-label={link.label}
    >
      <span className="letter-link-icon" aria-hidden="true">
        <ContactIcon name={link.icon} />
      </span>
      <span className="letter-link-label">{link.label}</span>
      <svg className="letter-link-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

const itemVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
  }
};

const staggerContainer = {
  hidden: {},
  visible: { 
    transition: { staggerChildren: 0.09, delayChildren: 0.05 } 
  }
};

export default function Contact() {
  return (
    <section className="about-section story-panel letter-section">
      <div className="section-inner letter-inner">
        {/* Letter Hero Header */}
        <motion.div 
          className="letter-hero"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={staggerContainer}
        >
          <motion.p className="letter-greeting" variants={itemVariant}>
            Dear Visitor,
          </motion.p>
          <motion.h1 className="letter-title" variants={itemVariant}>
            Thank you for taking the time to explore my work.
          </motion.h1>
          <motion.p className="letter-hero-sub" variants={itemVariant}>
            I am always excited to meet people who are passionate about building meaningful things.
          </motion.p>
        </motion.div>

        {/* Letter Story Body */}
        <motion.div 
          className="letter-body"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.p variants={itemVariant}>
            Through technology, design, and continuous learning, I enjoy turning ideas into meaningful experiences.
          </motion.p>
          <motion.p variants={itemVariant}>
            Scroll down to see how we can connect, or send me a message below.
          </motion.p>
        </motion.div>

        {/* Animated Divider Rule */}
        <motion.div 
          className="letter-rule"
          aria-hidden="true"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Connect Section */}
        <motion.div 
          className="letter-connect"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2 className="letter-connect-title" variants={itemVariant}>
            Let's stay connected
          </motion.h2>

          <div className="letter-links">
            {contactLinks.map((link) => (
              <motion.div key={link.label} variants={itemVariant}>
                <ContactLinkCard link={link} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Signature & Animated SVG Flourish */}
        <motion.div 
          className="letter-signature-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.p 
            className="letter-signature"
            variants={{
              hidden: { opacity: 0, x: -8 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
            }}
          >
            — {personalInfo.name.split(' ')[0]}
          </motion.p>

          <svg className="letter-flourish" viewBox="0 0 220 24" fill="none" aria-hidden="true">
            <motion.path 
              d="M4 14c28-8 54 4 84 0s60-8 96-4 20 12 32 8" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
