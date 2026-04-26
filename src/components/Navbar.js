import React, { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Tech', href: '#tech' },
  { label: 'Projects', href: '#projects' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Services', href: '#services' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner container">
        <a href="#hero" className="navbar-logo" onClick={() => handleNav('')}>
          <span className="logo-bracket">&lt;</span>
          Dev
          <span className="logo-bracket">/&gt;</span>
        </a>

        <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${active === link.href ? 'active' : ''}`}
              onClick={() => handleNav(link.href)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary nav-cta" onClick={() => handleNav('#contact')}>
            Hire Me
          </a>
        </nav>

        <div className="navbar-controls">
          <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(m => !m)} aria-label="Menu">
            <span/><span/><span/>
          </button>
        </div>
      </div>
    </header>
  );
}
