import React, { useEffect, useRef } from 'react';
import './TechStack.css';

const icons = {
  react: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3" /><path d="M12 2c3 4 3 16 0 20" /><path d="M2 12c4-3 16-3 20 0" /><path d="M4.93 4.93c2.83 2.83 13.24 2.83 16.07 0" /><path d="M4.93 19.07c2.83-2.83 13.24-2.83 16.07 0" /></svg>,
  js: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 18l6-6-6-6" /><path d="M8 6l-6 6 6 6" /></svg>,
  html: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 4l2 16 8 4 8-4 2-16H2z" /><path d="M12 18l-6-1.5L5 7h14" /><path d="M16 11H8" /></svg>,
  css: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 4l2 16 8 4 8-4 2-16H2z" /><path d="M12 18l-6-1.5L5 7h14" /><path d="M12 11v8" /><path d="M15 11l-3 4-3-4" /></svg>,
  java: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 8c0 2 1 3 3 3s3-1 3-3" /><path d="M9 11v3" /><path d="M9 16c-3 1-5 3-5 5" /><path d="M15 16c3 1 5 3 5 5" /></svg>,
  design: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>,
  node: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" /><path d="M12 12v10" /><path d="M12 12L3 7" /><path d="M12 12l9-5" /></svg>,
  db: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" /></svg>,
  fire: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22c4.97 0 9-4.03 9-9-2-3-3-7-9-11-6 4-7 8-9 11 0 4.97 4.03 9 9 9z" /><path d="M12 17l-1-5 2-3" /><path d="M9 17a3 3 0 0 1 3-3" /></svg>,
  image: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>,
  word: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><line x1="10" y1="9" x2="8" y2="9" /></svg>,
  chart: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 12l4-4 4 4" /><path d="M8 16l4-4 4 4" /></svg>,
};

const techCategories = [
  {
    name: 'Frontend',
    color: '#61dafb',
    techs: [
      { name: 'React', icon: icons.react },
      { name: 'JavaScript', icon: icons.js },
      { name: 'HTML5', icon: icons.html },
      { name: 'CSS3', icon: icons.css },
      { name: 'JavaFX', icon: icons.java },
      { name: 'Scene Builder', icon: icons.design },
    ],
  },
  {
    name: 'Backend',
    color: '#68a063',
    techs: [
      { name: 'Node.js', icon: icons.node },
      { name: 'MongoDB', icon: icons.db },
      { name: 'Firebase', icon: icons.fire },
      { name: 'MySQL', icon: icons.db },
    ],
  },
  {
    name: 'Tools & Design',
    color: '#a855f7',
    techs: [
      { name: 'Photoshop', icon: icons.image },
      { name: 'Illustrator', icon: icons.design },
      { name: 'MS Word', icon: icons.word },
      { name: 'PowerPoint', icon: icons.chart },
    ],
  },
];

function TechCard({ tech, index }) {
  return (
    <div className="tech-card reveal" style={{ transitionDelay: `${index * 0.06}s` }}>
      <div className="tech-icon">{tech.icon}</div>
      <div className="tech-info">
        <span className="tech-name">{tech.name}</span>
      </div>
    </div>
  );
}

export default function TechStack() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      }),
      { threshold: 0.08 }
    );

    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="tech" className="tech-stack" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <p className="reveal section-label">Tech Stack</p>
          <h2 className="reveal section-title">Tools I Work With</h2>
          <p className="reveal section-subtitle">
            A curated set of technologies I use to bring ideas to life, from frontend interfaces to backend systems.
            I have minimal experience in other programming languages like java, python and css
          </p>
          <div className="reveal section-divider" />
        </div>

        <div className="tech-categories">
          {techCategories.map(cat => (
            <div key={cat.name} className="tech-category">
              <h3 className="reveal category-title" style={{ '--cat-color': cat.color }}>
                <span className="category-dot" style={{ background: cat.color }} />
                {cat.name}
              </h3>
              <div className="tech-grid">
                {cat.techs.map((tech, i) => (
                  <TechCard key={tech.name} tech={tech} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
