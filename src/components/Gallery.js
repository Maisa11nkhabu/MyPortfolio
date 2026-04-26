import React, { useEffect, useMemo, useRef, useState } from 'react';
import './Gallery.css';

const galleryProjects = [
  {
    id: 'quickbite',
    label: 'QuickBite',
    eyebrow: 'Uber Eats Inspired Application',
    description: 'A food ordering experience with polished mobile flows, restaurant browsing, and cart-driven ordering screens.',
    accent: '#e4572e',
    screenshots: [
      { src: '/gallery/IMG_3752.PNG', title: 'Menu listing', note: 'Restaurant cards and add-to-cart flow.' },
      { src: '/gallery/IMG_3746.PNG', title: 'Product feed', note: 'More menu exploration with strong food imagery.' },
      { src: '/gallery/IMG_3744.PNG', title: 'Browse menu', note: 'Franchise and category filtering in one screen.' },
      { src: '/gallery/IMG_3751.PNG', title: 'Landing screen', note: 'Splash and role entry point for the app.' },
    ],
  },
  {
    id: 'prospectors',
    label: 'Prospectors App',
    eyebrow: 'Student Discovery Application',
    description: 'An education-focused app concept for exploring faculties, course recommendations, and guided student journeys.',
    accent: '#4f74ff',
    screenshots: [
      { src: '/gallery/IMG_3331.PNG', title: 'Design faculty', note: 'Course discovery page for creative programmes.' },
      { src: '/gallery/IMG_3330.PNG', title: 'IT faculty', note: 'Technology programme listing and search interface.' },
      { src: '/gallery/IMG_3332.PNG', title: 'Interest quiz', note: 'Quiz-driven path for matching users to study areas.' },
      { src: '/gallery/IMG_3328.PNG', title: 'Dark mode home', note: 'High-contrast dashboard with faculty previews.' },
      { src: '/gallery/IMG_3327.PNG', title: 'Light mode home', note: 'Bright variant of the main explore screen.' },
      { src: '/gallery/IMG_3329.PNG', title: 'Dark mode faculties', note: 'Scrollable faculty cards with strong visual hierarchy.' },
    ],
  },
  {
    id: 'onlinebouquet',
    label: 'Online Bouquet',
    eyebrow: 'Online Bouquet Website',
    description: 'A boutique-style website concept with lifestyle photography, product browsing, and a soft editorial look.',
    accent: '#d64fd6',
    screenshots: [
      { src: '/gallery/IMG_3078.jpeg', title: 'Home page preview', note: 'Hero layout and product storytelling for the bouquet brand.' },
    ],
  },
];

export default function Gallery() {
  const sectionRef = useRef(null);
  const [activeProjectId, setActiveProjectId] = useState(galleryProjects[0].id);
  const [viewerImage, setViewerImage] = useState(null);

  const activeProject = useMemo(
    () => galleryProjects.find(project => project.id === activeProjectId) ?? galleryProjects[0],
    [activeProjectId]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      }),
      { threshold: 0.08 }
    );

    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [activeProjectId]);

  useEffect(() => {
    if (!viewerImage) return undefined;

    const handleEscape = event => {
      if (event.key === 'Escape') setViewerImage(null);
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [viewerImage]);

  const getCardClassName = (projectId, index) => {
    if (projectId === 'quickbite') return 'reveal gallery-card';
    if (projectId === 'prospectors' && index < 2) return 'reveal gallery-card gallery-card-large';
    if (index === 0) return 'reveal gallery-card gallery-card-large';
    return 'reveal gallery-card';
  };

  return (
    <section id="gallery" className="gallery-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header gallery-header">
          <p className="reveal section-label">Gallery</p>
          <h2 className="reveal section-title">Visual Case Studies</h2>
          <p className="reveal section-subtitle">
            A categorized look at the interfaces I designed and built, from food delivery ideas to education and lifestyle web experiences.
          </p>
          <div className="reveal section-divider" />
        </div>

        <div className="reveal gallery-tabs">
          {galleryProjects.map(project => (
            <button
              key={project.id}
              type="button"
              className={`gallery-tab ${activeProjectId === project.id ? 'active' : ''}`}
              onClick={() => setActiveProjectId(project.id)}
              style={{ '--gallery-accent': project.accent }}
            >
              <span className="gallery-tab-label">{project.label}</span>
              <span className="gallery-tab-count">{project.screenshots.length} shots</span>
            </button>
          ))}
        </div>

        <div className="gallery-showcase">
          <article className="reveal gallery-feature card" style={{ '--gallery-accent': activeProject.accent }}>
            <div className="gallery-feature-copy">
              <span className="gallery-feature-kicker">{activeProject.eyebrow}</span>
              <h3 className="gallery-feature-title">{activeProject.label}</h3>
              <p className="gallery-feature-text">{activeProject.description}</p>
            </div>
            <div className="gallery-feature-badge">
              <strong>{activeProject.screenshots.length}</strong>
              <span>Screens</span>
            </div>
          </article>

          <div className="gallery-grid">
            {activeProject.screenshots.map((image, index) => (
              <button
                key={image.src}
                type="button"
                className={getCardClassName(activeProject.id, index)}
                onClick={() => setViewerImage({ ...image, project: activeProject.label })}
              >
                <img src={image.src} alt={`${activeProject.label} - ${image.title}`} className="gallery-image" />
                <div className="gallery-overlay">
                  <span className="gallery-project-name">{activeProject.label}</span>
                  <h4>{image.title}</h4>
                  <p>{image.note}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {viewerImage && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" onClick={() => setViewerImage(null)}>
          <div className="gallery-lightbox-inner" onClick={event => event.stopPropagation()}>
            <button type="button" className="gallery-close" onClick={() => setViewerImage(null)} aria-label="Close image viewer">
              X
            </button>
            <img src={viewerImage.src} alt={`${viewerImage.project} - ${viewerImage.title}`} className="gallery-lightbox-image" />
            <div className="gallery-lightbox-copy">
              <span>{viewerImage.project}</span>
              <h3>{viewerImage.title}</h3>
              <p>{viewerImage.note}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
