import React, { useEffect, useRef } from 'react';
import './Services.css';

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Web Development',
    desc: 'Building responsive, fast, and modern web applications using React, Node.js, and modern web standards.',
    features: ['Responsive Design', 'API Intergration', 'MongoDB', 'Firebase'],
    color: '#00d4ff',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    title: 'Frontend Development',
    desc: 'Creating polished React websites with responsive layouts, reusable components, and smooth user experiences.',
    features: ['React Websites', 'Responsive Layouts', 'Interactive UI', 'Component-Based Design'],
    color: '#7c3aed',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: 'Prototyping',
    desc: 'Designing interactive UI and UX prototypes using Scene Builder and design tools to validate ideas quickly.',
    features: ['UI/UX Design', 'Wireframes', 'Interactive Mockups', 'User Testing'],
    color: '#f59e0b',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" /><polyline points="8 21 12 17 16 21" />
      </svg>
    ),
    title: 'Desktop Applications',
    desc: 'Developing robust, feature-rich desktop applications using JavaFX and Scene Builder with database integration.',
    features: ['JavaFX Apps', 'Scene Builder', 'MySQL Integration'],
    color: '#10b981',
  },
];

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      }),
      { threshold: 0.08 }
    );

    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="services" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <p className="reveal section-label">Services</p>
          <h2 className="reveal section-title">What I Offer</h2>
          <p className="reveal section-subtitle">
            End-to-end development services tailored to your needs, from design to deployment.
          </p>
          <div className="reveal section-divider" />
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="reveal service-card card"
              style={{ transitionDelay: `${i * 0.12}s`, '--svc-color': service.color }}
            >
              <div className="service-icon-wrap" style={{ background: `${service.color}15`, border: `1px solid ${service.color}30` }}>
                <span style={{ color: service.color }}>{service.icon}</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              <ul className="service-features">
                {service.features.map(feature => (
                  <li key={feature}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: service.color }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="service-cta">
                <a href="#contact" className="service-link" style={{ color: service.color }}>
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
