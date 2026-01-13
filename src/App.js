import React, { useEffect } from 'react';
import './styles.css';

function App() {
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
    <div className="App">
      <nav className="navbar">
        <div className="logo"><strong>Ashil</strong> Saji</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header id="home" className="hero-section reveal">
        <h1 className="hero-text">Ashil Saji</h1>
        <h2 className="role-title">Data Science Engineer</h2>
        <p>Building scalable data-driven applications and efficient code.</p>
        <button className="explore-btn">Explore Projects</button>
      </header>

      <section id="about" className="about-section reveal">
        <h3>About Me</h3>
        <div className="split-content">
          <div className="split-left">
            <h4>My Vision</h4>
            <p>Creating seamless user experiences through efficient, data-centric code.</p>
          </div>
          <div className="split-right">
            <h4>My Mission</h4>
            <p>Bridging the gap between complex Data Analytics and Software Engineering.</p>
          </div>
        </div>
      </section>

      <footer id="contact" className="contact-section reveal" style={{padding: '50px 10%', textAlign: 'center'}}>
        <h3>Get In Touch</h3>
        <p>Email: ashilsaji5612@gmail.com</p>
        <p>Location: Kerala, India</p>
      </footer >
    </div>
  );
}

export default App;
