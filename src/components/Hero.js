import React, { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    heroRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className="hero" ref={heroRef}>
      {/* Floating orbs */}
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />
      <div className="orb orb-3" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-content">
          <div className="reveal hero-badge">
            <span className="badge-dot" />
            Available for opportunities
          </div>

          <h1 className="reveal hero-name">
            Hi, I'm <br />
            <span className="name-gradient">Maisa Nkhabu</span>
          </h1>

          <div className="reveal hero-title-row">
            <span className="hero-title">Software Engineering Student</span>
          </div>

          <p className="reveal hero-desc">
            I am a 3rd year Student Passionate about building <strong>scalable</strong> and{' '}
            <strong>user-friendly</strong> applications that solve real-world problems.
            I believe i acquire enough knowlegge in the field of software engineering<strong>
              </strong> and i am open to work and ready to learn new things in the field of software engineering.
          </p>

          <div className="reveal hero-cta">
            <a href="#projects" className="btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14"/>
                <path d="M12 5l7 7-7 7"/>
              </svg>
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Contact Me
            </a>
          </div>

          <div className="reveal hero-stats">
            {[
              { value: '10+', label: 'Projects Built' },
              { value: '5+', label: 'Technologies' },
              { value: '2+', label: 'Years Coding' },
            ].map(stat => (
              <div key={stat.label} className="stat-item">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal hero-image-wrapper">
          <div className="hero-image-frame">
            <div className="hero-image-glow" aria-hidden="true" />
            <div className="hero-image-ring" aria-hidden="true" />
            <img
              src="/profile.jpeg"
              alt="Profile"
              className="hero-image"
            />
            <div className="hero-image-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Open to work
            </div>
          </div>

          {/* Tech tags */}
          <div className="hero-tech-tags">
            <div className="floating-tag tag-1">React</div>
            <div className="floating-tag tag-2">Node.js</div>
            <div className="floating-tag tag-3">Firebase</div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <span>Scroll to explore</span>
        <div className="scroll-arrow">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
