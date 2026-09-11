import React from 'react';

const sampleBlogs = [
  {
    title: "Building High-Concurrency Microservices with Rust and Actix-Web",
    description: "A deep dive into building memory-safe, ultra-low-latency backend systems, handling async I/O, and optimizing database connection pooling.",
    url: "https://github.com/yericoalexander",
    date: "2025-11-10",
    tags: ["Rust", "Actix-Web", "Backend", "Systems"]
  },
  {
    title: "Fine-Grained Reactivity: Why SolidJS Outperforms Virtual DOM in Enterprise Dashboards",
    description: "Exploring SolidJS's fine-grained reactive primitives and signals to eliminate re-renders in real-time geospatial tracking applications.",
    url: "https://github.com/yericoalexander",
    date: "2025-08-22",
    tags: ["SolidJS", "TypeScript", "Performance"]
  },
  {
    title: "Modern Database Modeling: Graph vs Relational with SurrealDB",
    description: "How multi-model databases can simplify schema design and live queries in real-time operational platforms.",
    url: "https://github.com/yericoalexander",
    date: "2025-05-14",
    tags: ["SurrealDB", "Database", "Architecture"]
  }
];

export default function Blogs() {
  return (
    <section className="about-section story-panel">
      <div className="section-inner">
        <p className="section-marker">blogs</p>
        <h1 className="section-title">thoughts &amp; writing</h1>
        <p className="section-lead">
          Articles and guides on software engineering, distributed systems, and modern web design.
        </p>

        <div className="exp-page-list">
          {sampleBlogs.map((blog) => (
            <article key={blog.title} className="exp-page-card blog-card">
              <div className="exp-page-header">
                <div className="exp-page-meta">
                  <h3 className="exp-page-role">{blog.title}</h3>
                  <span className="exp-page-company">{blog.date}</span>
                </div>
                <a 
                  className="btn btn-secondary btn-sm" 
                  href={blog.url} 
                  target="_blank" 
                  rel="noreferrer"
                >
                  Read ↗
                </a>
              </div>
              <p className="exp-page-desc">{blog.description}</p>
              <div className="exp-page-tags">
                {blog.tags.map((tag) => (
                  <span key={tag} className="exp-page-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
