import React, { useEffect, useRef } from 'react';
import './About.css';

const skills = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Web Development',
    desc: 'Building modern, responsive web applications with cutting-edge frameworks and best practices.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    title: 'Frontend Development',
    desc: 'Creating responsive website experiences with React, JavaScript, and clean component-based design.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: 'UI/UX Prototyping',
    desc: 'Designing intuitive interfaces and interactive prototypes with tools like Figma and Scene Builder.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <polyline points="8 21 12 17 16 21"/>
      </svg>
    ),
    title: 'Desktop Applications',
    desc: 'Developing robust desktop apps using JavaFX, Scene Builder, and other desktop frameworks.',
  },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          <div className="about-left">
            <p className="reveal section-label">About Me</p>
            <h2 className="reveal section-title">Turning Ideas Into <span className="text-accent">Reality</span></h2>
            <div className="reveal section-divider" />
            <p className="reveal about-text">
              I'm a passionate Software Engineering student from Lesotho Maseru with a strong drive for building applications that make a difference. My journey in tech started after i changed courses from Electrical engineering which i was persuing in the SouthWest Gauteng College to Software engineering in the Limkokwing University of Creative Technology.
            </p>
            <p className="reveal about-text">
              Beyond coding, I stay current with industry trends and continuously sharpen my skills across web, mobile, and desktop platforms. I quote there is no master of programming just and endless cycles of learning and improving.
            </p>
            <div className="reveal about-tools">
              <span className="tools-label">Also proficient in:</span>
              <div className="tools-badges">
                {['MySQL', 'Workbench', 'MS Word', 'PowerPoint', 'Photoshop', 'Illustrator'].map(t => (
                  <span key={t} className="tool-badge">{t}</span>
                ))}
              </div>
            </div>
            <div className="reveal about-actions">
              <a href="#contact" className="btn-primary">Get In Touch</a>
              <a
                href="https://github.com/Maisa11Nkhabu"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View GitHub
              </a>
            </div>
          </div>

          <div className="about-right">
            {skills.map((skill, i) => (
              <div
                key={skill.title}
                className="reveal skill-card card"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <div>
                  <h3 className="skill-title">{skill.title}</h3>
                  <p className="skill-desc">{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
