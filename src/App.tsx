import './App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import bluepegImg from './assets/bluepeg.png';
import portfolioImg from './assets/portfolio.png';
import ovarianImg from './assets/ovarian.png';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function PortfolioNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNavClick = () => {
    const nav = document.getElementById('basic-navbar-nav');
    if (nav && nav.classList.contains('show')) {
      // Bootstrap collapse expects a click on the toggler
      const toggler = document.querySelector('.navbar-toggler') as HTMLElement | null;
      if (toggler) toggler.click();
    }
  };
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="md" sticky="top">
      <Container>
        <Navbar.Brand href="#home">tobi.code</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            // X icon
            <span style={{fontSize: 32, color: '#b983ff', lineHeight: 1}}>&#10005;</span>
          ) : (
            // Hamburger icon
            <span style={{fontSize: 32, color: '#b983ff', lineHeight: 1}}>&#9776;</span>
          )}
        </Navbar.Toggle>
        <Navbar.Collapse
          id="basic-navbar-nav"
          in={menuOpen}
          onExited={() => setMenuOpen(false)}
        >
          <Nav className="ms-auto">
            <Nav.Link href="#home" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); handleNavClick(); setMenuOpen(false); }}>
              Home
            </Nav.Link>
            <Nav.Link href="#about" onClick={e => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); handleNavClick(); setMenuOpen(false); }}>About</Nav.Link>
            <Nav.Link href="#projects" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); handleNavClick(); setMenuOpen(false); }}>Projects</Nav.Link>
            <Nav.Link href="#contact" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); handleNavClick(); setMenuOpen(false); }}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function HomePage() {
  return (
    <div className="hero-wrapper">
      <div className="hero-background">
        <div className="hero-particles"></div>
        <div className="hero-gradient"></div>
      </div>
      <Container className="py-5 position-relative">
        <div className="d-flex flex-column align-items-start text-start homepage-hero" data-aos="fade-up" data-aos-duration="800">
          <div className="hero-badge mb-3" data-aos="fade-down" data-aos-delay="100">
            <span className="badge-text">👋 Welcome to my portfolio</span>
          </div>
          <h2 className="mb-2 hero-hello" data-aos="fade-right" data-aos-delay="200">Hello, I'm</h2>
          <h1 className="display-3 fw-bold mb-1 hero-name" data-aos="fade-right" data-aos-delay="400">
            <span className="typing-effect">Tobiloba Ayomide</span>
            <div className="hero-cursor"></div>
          </h1>
          <h3 className="mb-4 hero-title" data-aos="fade-right" data-aos-delay="600">
            <span className="role-text">Frontend Developer</span>
            <span className="role-accent"> & UI Designer</span>
          </h3>
          <p className="lead mb-5 hero-summary" data-aos="fade-up" data-aos-delay="800">
            Creative and detail-oriented Frontend Developer with a passion for building 
            <span className="text-highlight"> beautiful, user-friendly web experiences</span>. 
            Experienced in React, TypeScript, and modern UI design. I love turning ideas into 
            <span className="text-highlight"> interactive, accessible, and high-performance websites</span>.
          </p>
          <div className="hero-actions d-flex align-items-center gap-4 mb-5" data-aos="fade-up" data-aos-delay="1000">
            <a
              href="/resume.pdf"
              className="btn btn-primary btn-lg hero-btn-primary"
              download
            >
              <span>📄 Download Resume</span>
            </a>
            <a
              href="#contact"
              className="btn btn-outline-light btn-lg hero-btn-secondary"
              onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              <span>💬 Let's Talk</span>
            </a>
          </div>
          <div className="hero-stats d-flex gap-4 mb-4" data-aos="fade-up" data-aos-delay="1200">
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
          <div className="hero-social d-flex align-items-center gap-3" data-aos="fade-up" data-aos-delay="1400">
            <span className="social-label">Connect with me:</span>
            <a href="https://github.com/hunkymanie" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link-modern">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
            </a>
            <a href="https://linkedin.com/in/tobiloba-ayomide-923628256" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link-modern">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://twitter.com/hunkymanieee" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-link-modern">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      offset: 120,
      delay: 100,
    });
  }, []);

  return (
    <>
      <PortfolioNavbar />
      <main>
        <HomePage />
        <section id="about" className="section about-section modern-section" data-aos="fade-up">
          <Container>
            <div className="section-header text-center mb-5" data-aos="fade-up" data-aos-delay="200">
              <h2 className="section-title">About Me</h2>
              <p className="section-subtitle">Passionate about creating digital experiences</p>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6 about-content" data-aos="fade-right" data-aos-delay="300">
                <div className="about-card">
                  <h3 className="about-card-title">My Journey</h3>
                  <p className="about-text">
                    I'm a passionate <strong>Frontend Developer</strong> and Computer Science graduate with a strong foundation in both web technologies and machine learning. My expertise spans building beautiful, performant user interfaces, as well as applying data-driven solutions using modern ML frameworks.
                  </p>
                  <p className="about-text">
                    My experience includes developing <em>responsive web applications</em>, optimizing performance, and ensuring accessibility for all users. I'm eager to learn new technologies and tackle challenging web projects.
                  </p>
                  <div className="about-highlights">
                    <div className="highlight-item">
                      <span className="highlight-icon">🎯</span>
                      <span>Goal-oriented problem solver</span>
                    </div>
                    <div className="highlight-item">
                      <span className="highlight-icon">🚀</span>
                      <span>Performance optimization enthusiast</span>
                    </div>
                    <div className="highlight-item">
                      <span className="highlight-icon">♿</span>
                      <span>Accessibility advocate</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 about-skills-box" data-aos="fade-left" data-aos-delay="400">
                <div className="skills-card">
                  <h4 className="skills-title">Technical Expertise</h4>
                  <div className="skills-container">
                    <div className="skill-item" data-aos="fade-up" data-aos-delay="500">
                      <div className="skill-header">
                        <div className="skill-info">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="skill-icon" />
                          <span className="skill-name">React</span>
                        </div>
                        <span className="skill-percentage">90%</span>
                      </div>
                      <div className="skill-progress">
                        <div className="skill-progress-bar" style={{width: '90%'}} data-aos="slide-right" data-aos-delay="600"></div>
                      </div>
                    </div>
                    <div className="skill-item" data-aos="fade-up" data-aos-delay="600">
                      <div className="skill-header">
                        <div className="skill-info">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="skill-icon" />
                          <span className="skill-name">Next.js</span>
                        </div>
                        <span className="skill-percentage">85%</span>
                      </div>
                      <div className="skill-progress">
                        <div className="skill-progress-bar" style={{width: '85%'}} data-aos="slide-right" data-aos-delay="700"></div>
                      </div>
                    </div>
                    <div className="skill-item" data-aos="fade-up" data-aos-delay="700">
                      <div className="skill-header">
                        <div className="skill-info">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="skill-icon" />
                          <span className="skill-name">TypeScript</span>
                        </div>
                        <span className="skill-percentage">80%</span>
                      </div>
                      <div className="skill-progress">
                        <div className="skill-progress-bar" style={{width: '80%'}} data-aos="slide-right" data-aos-delay="800"></div>
                      </div>
                    </div>
                    <div className="skill-item" data-aos="fade-up" data-aos-delay="800">
                      <div className="skill-header">
                        <div className="skill-info">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="skill-icon" />
                          <span className="skill-name">JavaScript (ES6+)</span>
                        </div>
                        <span className="skill-percentage">88%</span>
                      </div>
                      <div className="skill-progress">
                        <div className="skill-progress-bar" style={{width: '88%'}} data-aos="slide-right" data-aos-delay="900"></div>
                      </div>
                    </div>
                    <div className="skill-item" data-aos="fade-up" data-aos-delay="900">
                      <div className="skill-header">
                        <div className="skill-info">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="skill-icon" />
                          <span className="skill-name">Tailwind CSS</span>
                        </div>
                        <span className="skill-percentage">85%</span>
                      </div>
                      <div className="skill-progress">
                        <div className="skill-progress-bar" style={{width: '85%'}} data-aos="slide-right" data-aos-delay="1000"></div>
                      </div>
                    </div>
                    <div className="skill-item" data-aos="fade-up" data-aos-delay="1000">
                      <div className="skill-header">
                        <div className="skill-info">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="skill-icon" />
                          <span className="skill-name">Python</span>
                        </div>
                        <span className="skill-percentage">75%</span>
                      </div>
                      <div className="skill-progress">
                        <div className="skill-progress-bar" style={{width: '75%'}} data-aos="slide-right" data-aos-delay="1100"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section id="projects" className="section projects-section modern-section" data-aos="fade-up">
          <Container>
            <div className="section-header text-center mb-5" data-aos="fade-up" data-aos-delay="200">
              <h2 className="section-title">Featured Projects</h2>
              <p className="section-subtitle">Showcasing my latest work and technical expertise</p>
            </div>
            <div className="projects-grid">
              <div className="project-card modern-card" data-aos="fade-up" data-aos-delay="300">
                <div className="project-image-wrapper">
                  <img src={bluepegImg} alt="Bluepeg Industrial Operations Website Screenshot" className="project-img" />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href="https://bluepeg.vercel.app" target="_blank" rel="noopener noreferrer" className="project-link-btn">
                        <span>👁️ Live Demo</span>
                      </a>
                      <a href="https://github.com/hunkymanie/bluepeg" target="_blank" rel="noopener noreferrer" className="project-link-btn">
                        <span>💻 View Code</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-category">🏭 Industrial Web App</div>
                  <h3 className="project-title">Bluepeg Industrial Operations</h3>
                  <p className="project-description">
                    A cutting-edge industrial operations company website showcasing automation solutions and engineering expertise. Features interactive technology showcase, seamless navigation, and modern industrial design.
                  </p>
                  <div className="project-tech-stack">
                    <span className="tech-tag">Next.js 15</span>
                    <span className="tech-tag">TypeScript</span>
                    <span className="tech-tag">Tailwind CSS</span>
                    <span className="tech-tag">React</span>
                  </div>
                </div>
              </div>
              
              <div className="project-card modern-card" data-aos="fade-up" data-aos-delay="400">
                <div className="project-image-wrapper">
                  <img src={portfolioImg} alt="Portfolio Website Screenshot" className="project-img" />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href="https://hunkymanie.vercel.app" target="_blank" rel="noopener noreferrer" className="project-link-btn">
                        <span>👁️ Live Demo</span>
                      </a>
                      <a href="https://github.com/hunkymanie/portfolio" target="_blank" rel="noopener noreferrer" className="project-link-btn">
                        <span>💻 View Code</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-category">💼 Personal Portfolio</div>
                  <h3 className="project-title">Portfolio Website</h3>
                  <p className="project-description">
                    A modern, responsive personal portfolio built with React, TypeScript, and Vite. Features smooth navigation, custom theming, and accessibility best practices with beautiful animations.
                  </p>
                  <div className="project-tech-stack">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">TypeScript</span>
                    <span className="tech-tag">Vite</span>
                    <span className="tech-tag">Bootstrap</span>
                  </div>
                </div>
              </div>
              
              <div className="project-card modern-card" data-aos="fade-up" data-aos-delay="500">
                <div className="project-image-wrapper">
                  <img src={ovarianImg} alt="Ovarian Cancer Subtype Classifier Screenshot" className="project-img" />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href="#" target="_blank" rel="noopener noreferrer" className="project-link-btn">
                        <span>👁️ Live Demo</span>
                      </a>
                      <a href="https://github.com/hunkymanie" target="_blank" rel="noopener noreferrer" className="project-link-btn">
                        <span>💻 View Code</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-category">🔬 Machine Learning</div>
                  <h3 className="project-title">Ovarian Cancer Classifier</h3>
                  <p className="project-description">
                    A web-based tool for classifying ovarian cancer subtypes from histopathology images using Convolutional Neural Networks. Features interactive model predictions and data visualization.
                  </p>
                  <div className="project-tech-stack">
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">CNN</span>
                    <span className="tech-tag">Streamlit</span>
                    <span className="tech-tag">TensorFlow</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section id="contact" className="section contact-section" data-aos="fade-up">
          <h2 className="contact-header" data-aos="fade-up" data-aos-delay="200">Contact</h2>
          <div className="contact-flex">
            <div className="contact-info" data-aos="fade-right" data-aos-delay="300">
              <p className="contact-text mb-4">
                Interested in working together or have a question? Feel free to reach out!
              </p>
              <ul className="contact-list mb-4">
                <li><strong>Email:</strong> <a href="mailto:oyetunjitobiloba82@gmail.com" className="contact-link">oyetunjitobiloba82@gmail.com</a></li>
                <li><strong>Phone:</strong> <a href="tel:+2349079843907" className="contact-link">+234 907 9843 907</a></li>
                <li className="contact-socials">
                  <a href="https://linkedin.com/in/tobiloba-ayomide-923628256" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link ms-2">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#fff"/><path d="M6.94 8.5C7.62 8.5 8.19 7.93 8.19 7.25C8.19 6.57 7.62 6 6.94 6C6.26 6 5.69 6.57 5.69 7.25C5.69 7.93 6.26 8.5 6.94 8.5ZM7.99 10.25H5.89V18H7.99V10.25ZM10.89 10.25H8.89V18H10.89V14.25C10.89 13.01 11.89 12 13.13 12C14.37 12 15.13 12.76 15.13 14.25V18H17.13V13.75C17.13 11.75 15.88 10.25 13.88 10.25C12.88 10.25 12.13 10.75 11.89 11.25H11.87V10.25H10.89Z" fill="#18181b"/></svg>
                  </a>
                  <a href="https://github.com/hunkymanie" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link ms-2">
                    <svg width="28" height="28" fill="#fff" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
                  </a>
                  <a href="https://twitter.com/hunkymanieee" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-link ms-2">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#fff"/><path d="M19.633 7.997c.013.176.013.353.013.53 0 5.39-4.104 11.61-11.61 11.61v-.003A11.54 11.54 0 0 1 2 18.13c.243.028.487.042.73.043a8.18 8.18 0 0 0 5.077-1.75 4.09 4.09 0 0 1-3.82-2.84c.246.047.497.072.75.073.366 0 .723-.048 1.065-.14a4.087 4.087 0 0 1-3.277-4.01v-.052a4.07 4.07 0 0 0 1.85.522 4.09 4.09 0 0 1-1.264-5.454 11.6 11.6 0 0 0 8.42 4.27 4.09 4.09 0 0 1 6.963-3.73 8.18 8.18 0 0 0 2.59-.988 4.1 4.1 0 0 1-1.797 2.26 8.19 8.19 0 0 0 2.35-.643 8.78 8.78 0 0 1-2.045 2.12z" fill="#18181b"/></svg>
                  </a>
                </li>
              </ul>
            </div>
            <form className="contact-form enhanced-form" action="https://formsubmit.co/oyetunjitobiloba82@gmail.com" method="POST" data-aos="fade-left" data-aos-delay="400">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control enhanced-input" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control enhanced-input" id="email" name="email" placeholder="you@email.com" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control enhanced-input" id="message" name="message" rows={4} placeholder="Tell me about your project or just say hello!" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary enhanced-button">Send Message</button>
              <input type="hidden" name="_next" value="https://hunkymanie.vercel.app/#contact" />
              <input type="hidden" name="_subject" value="New Portfolio Contact!" />
            </form>
          </div>
        </section>
        <footer className="site-footer mt-5 py-4" data-aos="fade-up">
          <div style={{ textAlign: 'center', color: '#b983ff', fontFamily: 'Space Grotesk, Inter, Arial, sans-serif', fontWeight: 600, fontSize: '1.08rem', letterSpacing: '0.04em' }}>
            © {new Date().getFullYear()} Tobiloba Ayomide
          </div>
        </footer>
      </main>
    </>
  );
}

export default App
