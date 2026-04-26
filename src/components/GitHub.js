import React, { useEffect, useRef } from 'react';
import './GitHub.css';

const repos = [
  {
    name: 'oblinebuquet',
    url: 'https://github.com/Maisa11nkhabu/oblinebuquet',
    desc: 'React website for an online bouquet shopping experience.',
    stars: 'Web',
    forks: 'React',
    lang: 'JavaScript',
    color: '#f1e05a',
  },
  {
    name: 'MountainHub',
    url: 'https://github.com/Maisa11nkhabu/MountainHub',
    desc: 'Travel-oriented website with a modern visual interface.',
    stars: 'UI',
    forks: 'Frontend',
    lang: 'JavaScript',
    color: '#f1e05a',
  },
  {
    name: 'LuctReportSManagementSystem',
    url: 'https://github.com/Maisa11nkhabu/LuctReportSManagementSystem',
    desc: 'Structured management system for reports and academic workflows.',
    stars: 'System',
    forks: 'Java',
    lang: 'Java',
    color: '#b07219',
  },
  {
    name: 'Maluti_Airline',
    url: 'https://github.com/OliphantMofolo25/Maluti_Airline',
    desc: 'Airline website project focused on travel presentation.',
    stars: 'Team',
    forks: 'Web',
    lang: 'JavaScript',
    color: '#f1e05a',
  },
];

export default function GitHub() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );

    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="github" className="github-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <p className="reveal section-label">GitHub</p>
          <h2 className="reveal section-title">Open Source Work</h2>
          <p className="reveal section-subtitle">
            A snapshot of the repositories that reflect my web and software development work.
          </p>
          <div className="reveal section-divider" />
        </div>

        <div className="github-profile-card reveal">
          <div className="github-profile-left">
            <div className="github-avatar">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
            <div>
              <h3 className="github-username">@Maisa11Nkhabu</h3>
              <p className="github-bio">Software Engineering Student building practical websites and systems.</p>
            </div>
          </div>
          <div className="github-stats">
            {[
              { label: 'Repos', value: '6' },
            ].map(stat => (
              <div key={stat.label} className="github-stat">
                <span className="gh-stat-value">{stat.value}</span>
                <span className="gh-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
          <a
            href="https://github.com/Maisa11nkhabu"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View All Repos
          </a>
        </div>

        <div className="repos-grid">
          {repos.map((repo, i) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal repo-card card"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="repo-top">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="repo-icon">
                  <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
                <span className="repo-name">{repo.name}</span>
              </div>
              <p className="repo-desc">{repo.desc}</p>
              <div className="repo-meta">
                <span className="repo-lang">
                  <span className="lang-dot" style={{ background: repo.color }} />
                  {repo.lang}
                </span>
                <span className="repo-stars">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                  {repo.stars}
                </span>
                <span className="repo-forks">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="6" y1="3" x2="6" y2="15" /><circle cx="18" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M18 9a9 9 0 0 1-9 9" /></svg>
                  {repo.forks}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
