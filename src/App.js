import React, { useEffect } from 'react';
import RotatingTitles from './components/RotatingTitles';
import './styles.css';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-container">
      <nav className="navbar">
        <div className="logo">Ashil Saji</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="section hero reveal">
        <div className="split-left">
          <div className="image-placeholder main-photo">
            <img src="https://via.placeholder.com/800x1200" alt="Ashil Saji" />
          </div>
        </div>
        <div className="split-right">
          <div className="hero-text">
            <h1>My Portfolio</h1>
            <RotatingTitles titles={['BTech CSE Student', 'Data Science Engineer']} />
            <p className="hero-sub">Specializing in building scalable data-driven applications.</p>
            <button className="btn-primary">Explore Now</button>
          </div>
          <span className="page-num">Page | 01</span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about reveal">
        <div className="gallery-top">
          <div className="img-box">Project Alpha</div>
          <div className="img-box">Data Model</div>
          <div className="img-box">Backend API</div>
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <div className="about-grid">
            <div>
              <h3>My Vision</h3>
              <p>Creating seamless user experiences through efficient code.</p>
            </div>
            <div>
              <h3>My Mission</h3>
              <p>Merging the worlds of Computer Science and Data Analytics.</p>
            </div>
          </div>
        </div>
        <span className="page-num">Page | 03</span>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact reveal">
        <div className="split-left">
          <div className="image-placeholder secondary-photo">
            <img src="https://via.placeholder.com/800x1200" alt="Contact Visual" />
          </div>
        </div>
        <div className="split-right">
          <div className="contact-text">
            <h2>My Contact</h2>
            <div className="contact-details">
              <p><strong>Phone:</strong> +91-XXX-XXX-XXXX</p>
              <p><strong>Website:</strong> www.ashilsaji.com</p>
              <p><strong>Email:</strong> hello@ashilsaji.com</p>
              <p><strong>Location:</strong> Kerala, India</p>
            </div>
          </div>
          <span className="page-num">Page | 09</span>
        </div>
      </section>
    </div>
  );
}
