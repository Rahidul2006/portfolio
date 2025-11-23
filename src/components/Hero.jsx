import React from 'react';
import './Hero.css';
import profilePhoto from '../assets/photo.png';
import linkedinIcon from '../assets/linkedin-svgrepo-com.svg';
import instagramIcon from '../assets/instagram-alt-svgrepo-com.svg';
import githubIcon from '../assets/github-svgrepo-com.svg';
import emailIcon from '../assets/email-contact-ui-web-svgrepo-com.svg';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="welcome">WELCOME</h1>
          <div className="greeting">
            <span className="wave">👋</span>
            <h2>I'm Rahidul</h2>
          </div>
          <p className="tagline">Full Stack Developer | Web Designer | App Developer</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/rahidul-khan-6a3922269" target="_blank" rel="noopener noreferrer" className="social-icon"><img className='icon' src={linkedinIcon} alt="" /></a>
            <a href="https://www.instagram.com/epic._.soul._.196/" target="_blank" rel="noopener noreferrer" className="social-icon"><img className='icon' src={instagramIcon} alt="" /></a>
            <a href="https://github.com/Rahidul2006" target="_blank" rel="noopener noreferrer" className="social-icon"><img className='icon' src={githubIcon} alt="" /></a>
            <a href="mailto:krahidul869@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon"><img className='icon' src={emailIcon} alt="" /></a>
              </div>
        </div>
        <div className="hero-image">
          <div className="profile-placeholder">
            <span><img src={profilePhoto} alt="Profile Photo" className='Profile-img' /></span>
          </div>
        </div>
      </div>
    </section>
  );
}
