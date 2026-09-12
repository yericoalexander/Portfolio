import React from 'react';
import { motion } from 'framer-motion';
import { techCategories, currentlyExploring, coreTechSet } from '../data/portfolioData';

function StackToolCard({ tool }) {
  return (
    <motion.article 
      className={`stack-tool ${tool.core ? 'stack-tool--core' : ''}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="stack-tool-logo" aria-hidden="true">
        {tool.core && <span className="stack-tool-core-dot" />}
        {tool.logo ? (
          <img src={tool.logo} alt="" className="stack-tool-logo-img" loading="lazy" decoding="async" />
        ) : (
          <span className="stack-tool-initial">{tool.name.charAt(0).toUpperCase()}</span>
        )}
      </div>

      <div className="stack-tool-main">
        <div className="stack-tool-head">
          <h4 className="stack-tool-name">{tool.name}</h4>
          {tool.core && <span className="stack-tool-badge">core</span>}
        </div>
        <p className="stack-tool-role">{tool.role}</p>
        <p className="stack-tool-note">{tool.note}</p>
        {tool.projects && tool.projects.length > 0 && (
          <div className="stack-tool-projects">
            <span className="stack-tool-projects-label">used in</span>
            <span className="stack-tool-projects-list">
              {tool.projects.map((proj) => (
                <span key={proj} className="stack-tool-project">{proj}</span>
              ))}
            </span>
          </div>
        )}
      </div>
    </motion.article>
  );
}

function StackCategorySection({ category, index }) {
  return (
    <motion.section 
      className="stack-category"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.06 } }
      }}
    >
      <motion.div 
        className="stack-category-head"
        variants={{
          hidden: { opacity: 0, y: 18 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
        }}
      >
        <span className="stack-category-index" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="stack-category-title-wrap">
          <h2 className="stack-category-title">{category.name}</h2>
          <p className="stack-category-note">{category.note}</p>
        </div>
        <span className="stack-category-count">{category.tools.length}</span>
      </motion.div>

      <div className="stack-tool-grid">
        {category.tools.map((tool) => (
          <StackToolCard key={tool.name} tool={tool} />
        ))}
      </div>
    </motion.section>
  );
}

export default function Stack({ fullPage = false, onNavigate }) {
  // Preview Mode for Home / About Me
  if (!fullPage) {
    const previewTools = Array.from(coreTechSet);

    return (
      <section className="about-section story-panel" id="stack">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-header-top">
              <p className="section-marker">04 — stack</p>
              <button 
                type="button" 
                className="section-header-link" 
                onClick={() => onNavigate?.('stack')}
              >
                View All Tools →
              </button>
            </div>
            <h2 className="section-title">tools i trust</h2>
          </div>

          <div className="tech-list">
            <div className="tech-category-items">
              {previewTools.map((tech) => (
                <span key={tech} className="tech-item tech-item-core">
                  {tech}
                </span>
              ))}
              <button 
                type="button" 
                className="tech-item tech-item-more"
                onClick={() => onNavigate?.('stack')}
              >
                + more
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Full Standalone Toolbox Page
  return (
    <section className="about-section story-panel workspace-section">
      <div className="section-inner">
        <p className="section-marker">stack</p>
        <h1 className="section-title">the toolbox</h1>
        <p className="section-lead">
          Not just technologies I know — the tools I reach for to design, build, and ship real products.
        </p>

        <div className="stack-categories">
          {techCategories.map((category, idx) => (
            <StackCategorySection 
              key={category.key} 
              category={category} 
              index={idx} 
            />
          ))}
        </div>

        <motion.div 
          className="stack-exploring"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } }
          }}
        >
          <motion.h2 
            className="stack-exploring-title"
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
            }}
          >
            currently exploring
          </motion.h2>
          <p className="stack-exploring-lead">
            Always learning — these are the tools on my workbench right now.
          </p>
          <div className="stack-exploring-list">
            {currentlyExploring.map((tool) => (
              <motion.span 
                key={tool}
                className="stack-exploring-item"
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
                }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
