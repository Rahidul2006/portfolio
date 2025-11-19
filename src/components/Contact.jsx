import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">LET'S TALK</h2>
        <p className="section-subtitle">Get in Touch</p>

        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Let's Collaborate</h3>
            <p>If you have any questions or would like to discuss opportunities, don't hesitate to reach out. I'm always happy to hear from you.</p>
            
            <div className="contact-details">
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <a href="mailto:rahidul@example.com">rahidul@example.com</a>
              </div>
              <div className="detail-item">
                <span className="detail-label">LinkedIn:</span>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">linkedin.com/in/rahidul</a>
              </div>
              <div className="detail-item">
                <span className="detail-label">GitHub:</span>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">github.com/rahidul</a>
              </div>
            </div>

            <div className="social-icons">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">📷</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">in</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" title="YouTube">▶</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">⭐</a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
