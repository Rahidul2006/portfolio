import React, { useState } from 'react';
import './Contact.css';
import instagramIcon from '../assets/instagram-alt-svgrepo-com.svg';
import linkedinIcon from '../assets/linkedin-svgrepo-com.svg';
import githubIcon from '../assets/github-svgrepo-com.svg';

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

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('http://localhost:4000/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        alert('Message sent! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        alert('Failed to send message. Please try again.');
        console.error('Error:', data.errors || data.error);
      }
    } catch (error) {
      setStatus('error');
      console.error('Error:', error);
      alert('Connection error. Make sure the server is running on port 4000.');
    } finally {
      setLoading(false);
    }
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
                <a href="mailto:krahidul869@gmail.com">krahidul869@gmail.com</a>
              </div>
              <div className="detail-item">
                <span className="detail-label">LinkedIn:</span>
                <a href="https://linkedin.com/in/rahidul-khan-6a3922269" target="_blank" rel="noopener noreferrer">linkedin.com/in/rahidul-khan-6a3922269</a>
              </div>
              <div className="detail-item">
                <span className="detail-label">GitHub:</span>
                <a href="https://github.com/Rahidul2006" target="_blank" rel="noopener noreferrer">github.com/Rahidul2006</a>
              </div>
            </div>

            <div className="social-icons">
              <a href="https://www.instagram.com/epic._.soul._.196/" target="_blank" rel="noopener noreferrer" title="Instagram"><img src={instagramIcon} alt="Instagram" /></a>
              <a href="https://www.linkedin.com/in/rahidul-khan-6a3922269" target="_blank" rel="noopener noreferrer" title="LinkedIn"><img src={linkedinIcon} alt="LinkedIn" /></a>
             
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub"><img src={githubIcon} alt="GitHub" /></a>
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
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
