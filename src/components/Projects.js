import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';

const projectIcons = {
  ecommerce: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>,
  tasks: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>,
  student: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.66 4 3 8 3s8-1.34 8-3v-5"/></svg>,
  chat: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7A8.38 8.38 0 0 1 4 11.5a8.5 8.5 0 0 1 17 0z"/></svg>,
  portfolio: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>,
  expense: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/><line x1="1" y1="10" x2="23" y2="10"/></svg>,
};

const projects = [
  {
    title: 'Online Bouquet',
    description: 'A React-based bouquet ordering website focused on clean shopping experience and accessible product browsing. traditional garments and wedding Garments',
    tags: ['React', 'JavaScript', 'CSS3'],
    github: 'https://github.com/Maisa11nkhabu/oblinebuquet',
    demo: null,
    featured: true,
    color: '#00d4ff',
    icon: projectIcons.ecommerce,
  },
  {
    title: 'MountainHub',
    description: 'Digital flee markert inspired by takealot.',
    tags: ['React-Native', 'JavaScript'],
    github: 'https://github.com/Maisa11nkhabu/MountainHub',
    demo: null,
    featured: true,
    color: '#7c3aed',
    icon: projectIcons.portfolio,
  },
  {
    title: 'LUCT Reports Management System',
    description: 'A Limkokwing university management system for organizing, tracking, and managing academic or institutional report workflows.',
    tags: ['React-Native', 'JavaScript'],
    github: 'https://github.com/Maisa11nkhabu/LuctReportSManagementSystem',
    demo: null,
    featured: false,
    color: '#f59e0b',
    icon: projectIcons.student,
  },
  {
    title: 'TT Holdings Database System',
    description: 'A database-driven system for storing, organizing, and managing business records in a structured workflow.',
    tags: ['SQL database', 'MySQL', 'Workbench', 'draw io'],
    github: 'https://github.com/Maisa11nkhabu/TT-holdings-database-system',
    demo: null,
    featured: false,
    color: '#10b981',
    icon: projectIcons.expense,
  },
  {
    title: 'Maluti Airline',
    description: 'An airline-focused web project for presenting routes, travel information, and booking-related content in a clear interface.',
    tags: ['React', 'JavaScript', 'CSS3'],
    github: 'https://github.com/OliphantMofolo25/Maluti_Airline',
    demo: null,
    featured: false,
    color: '#ef4444',
    icon: projectIcons.chat,
  },
  {
    title: 'Mobile Device',
    description: 'A device-focused project demonstrating structured UI flows and application logic for product or system management.',
    tags: ['React', 'CSS3', 'JavaScript'],
    github: 'https://github.com/Maisa11nkhabu/MobileDevice',
    demo: null,
    featured: false,
    color: '#8b5cf6',
    icon: projectIcons.tasks,
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const [filter, setFilter] = useState('All');

  const allTags = ['All', 'React', 'JavaScript', 'CSS3', 'JavaFX', 'Java', 'MySQL', 'Workbench'];
  const filtered = filter === 'All' ? projects : projects.filter(p => p.tags.includes(filter));

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [filter]);

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <p className="reveal section-label">Projects</p>
          <h2 className="reveal section-title">What I've Built</h2>
          <p className="reveal section-subtitle">
            A selection of projects that showcase my skills across web, mobile, desktop development.
          </p>
          <div className="reveal section-divider" />
        </div>

        <div className="reveal project-filters">
          {allTags.map(tag => (
            <button
              key={tag}
              className={`filter-btn ${filter === tag ? 'active' : ''}`}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project, i) => (
            <article
              key={project.title}
              className={`reveal project-card card ${project.featured ? 'featured' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s`, '--project-color': project.color }}
            >
              <div className="project-header">
              <div className="project-icon">{project.icon}</div>
                {project.featured && <span className="featured-badge">Featured</span>}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link demo">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
              <div className="project-accent-bar" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
