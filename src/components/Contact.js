import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';

export default function Contact() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const emailAddress = 'nkhabumaisa@gmail.com';

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

  const handleChange = event => setFormData(prev => ({ ...prev, [event.target.name]: event.target.value }));

  const handleSubmit = async event => {
    event.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${emailAddress}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `Portfolio contact: ${formData.subject}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (!response.ok) {
        throw new Error('Unable to send message right now.');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (submitError) {
      setError('The form could not send right now. Please try again or email me directly at nkhabumaisa@gmail.com.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <p className="reveal section-label">Contact</p>
          <h2 className="reveal section-title">Let's Work Together</h2>
          <p className="reveal section-subtitle">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
          <div className="reveal section-divider" />
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="reveal contact-card card">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <span className="contact-label">Email</span>
                  <a href={`mailto:${emailAddress}`} className="contact-value">{emailAddress}</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </div>
                <div>
                  <span className="contact-label">GitHub</span>
                  <a href="https://github.com/Maisa11nkhabu" target="_blank" rel="noopener noreferrer" className="contact-value">
                    github.com/Maisa11nkhabu
                  </a>
                </div>
              </div>
            </div>

            <div className="reveal availability-card card">
              <div className="avail-dot" />
              <div>
                <h4 className="avail-title">Currently Available</h4>
                <p className="avail-text">Open to internships, part-time roles, and freelance projects.</p>
              </div>
            </div>
          </div>

          <div className="reveal contact-form-wrap">
            {submitted ? (
              <div className="success-message">
                <div className="success-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                  />
                </div>
                <button type="submit" className="btn-primary submit-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
                <p className="contact-helper">
                  Messages are sent directly to {emailAddress}.
                </p>
                {error && <p className="contact-error">{error}</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
