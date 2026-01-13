import React, { useEffect } from 'react';
import './styles.css';

function App() {
  // This effect runs once when the app loads to start the scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.1 });

    // Look for all elements with the 'reveal' class
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">Ashil Saji</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header id="home" className="hero-section reveal">
        <h1 className="hero-text">My Portfolio</h1>
        <h2 className="role-title">Data Science Engineer</h2>
        <p className="description">
          Specializing in building scalable data-driven applications.
        </p>
        <button className="explore-btn">Explore Now</button>
        <div className="project-tags">
          <span>Project Alpha</span> | <span>Data Model</span> | <span>Backend API</span>
        </div>
      </header>

      <section id="about" className="about-section reveal">
        <h3>About Me</h3>
        <div className="split-content">
          <div className="split-left">
            <h4>My Vision</h4>
            <p>Creating seamless user experiences through efficient code.</p>
          </div>
          <div className="split-right">
            <h4>My Mission</h4>
            <p>Merging the worlds of Computer Science and Data Analytics.</p>
          </div>
        </div>
      </section>

      <footer id="contact" className="contact-section reveal">
        <h3>My Contact</h3>
        <div className="contact-info">
          <p><strong>Phone:</strong> +91-XXX-XXX-XXXX</p>
          <p><strong>Website:</strong> <a href="http://www.ashilsaji.com">www.ashilsaji.com</a></p>
          <p><strong>Email:</strong> <a href="mailto:hello@ashilsaji.com">hello@ashilsaji.com</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
