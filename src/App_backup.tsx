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
import emailjs from 'emailjs-com';

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
    <Container className="py-5">
      <div className="d-flex flex-column align-items-start text-start homepage-hero" data-aos="fade-up" data-aos-duration="800">
        <h2 className="mb-2 hero-hello" data-aos="fade-right" data-aos-delay="200">Hello, I'm</h2>
        <h1 className="display-4 fw-bold mb-1 hero-name" data-aos="fade-right" data-aos-delay="400">
          <span className="typing-effect">Tobiloba Ayomide!</span>
        </h1>
        <h3 className="mb-3 hero-title" data-aos="fade-right" data-aos-delay="600"><em>Frontend Developer</em></h3>
        <p className="lead mb-4 hero-summary" style={{maxWidth: 600}} data-aos="fade-up" data-aos-delay="800">
          Creative and detail-oriented Frontend Developer with a passion for building beautiful, user-friendly web experiences. Experienced in React, TypeScript, and modern UI design. I love turning ideas into interactive, accessible, and high-performance websites.
        </p>
        <div className="d-flex align-items-center gap-3 mb-4" style={{alignSelf: 'flex-start'}} data-aos="fade-up" data-aos-delay="1000">
          <a
            href="/resume.pdf"
            className="btn btn-primary btn-lg"
            style={{ minWidth: 140 }}
            download
          >
            Resume
          </a>
          <div className="d-flex align-items-center gap-3">
            <a href="https://github.com/hunkymanie" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link">
              <svg width="32" height="32" fill="#fff" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
            </a>
            <a href="https://linkedin.com/in/tobiloba-ayomide-923628256" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="4" fill="#fff"/>
                <path d="M6.94 8.5C7.62 8.5 8.19 7.93 8.19 7.25C8.19 6.57 7.62 6 6.94 6C6.26 6 5.69 6.57 5.69 7.25C5.69 7.93 6.26 8.5 6.94 8.5ZM7.99 10.25H5.89V18H7.99V10.25ZM10.89 10.25H8.89V18H10.89V14.25C10.89 13.01 11.89 12 13.13 12C14.37 12 15.13 12.76 15.13 14.25V18H17.13V13.75C17.13 11.75 15.88 10.25 13.88 10.25C12.88 10.25 12.13 10.75 11.89 11.25H11.87V10.25H10.89Z" fill="#18181b"/>
              </svg>
            </a>
            <a href="https://twitter.com/hunkymanieee" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-link">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="4" fill="#fff"/>
                <path d="M19.633 7.997c.013.176.013.353.013.53 0 5.39-4.104 11.61-11.61 11.61v-.003A11.54 11.54 0 0 1 2 18.13c.243.028.487.042.73.043a8.18 8.18 0 0 0 5.077-1.75 4.09 4.09 0 0 1-3.82-2.84c.246.047.497.072.75.073.366 0 .723-.048 1.065-.14a4.087 4.087 0 0 1-3.277-4.01v-.052a4.07 4.07 0 0 0 1.85.522 4.09 4.09 0 0 1-1.264-5.454 11.6 11.6 0 0 0 8.42 4.27 4.09 4.09 0 0 1 6.963-3.73 8.18 8.18 0 0 0 2.59-.988 4.1 4.1 0 0 1-1.797 2.26 8.19 8.19 0 0 0 2.35-.643 8.78 8.78 0 0 1-2.045 2.12z" fill="#18181b"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}

// Enhanced Contact Form Component
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Using a simple form submission for now - you can integrate EmailJS here later
      const formElement = document.createElement('form');
      formElement.action = 'https://formsubmit.co/oyetunjitobiloba82@gmail.com';
      formElement.method = 'POST';
      formElement.style.display = 'none';

      // Add form data
      Object.entries(formData).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
        formElement.appendChild(input);
      });

      document.body.appendChild(formElement);
      formElement.submit();
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="contact-form enhanced-form" onSubmit={handleSubmit} data-aos="fade-left" data-aos-delay="400">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input 
          type="text" 
          className="form-control enhanced-input" 
          id="name" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name}
          onChange={handleChange}
          required 
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input 
          type="email" 
          className="form-control enhanced-input" 
          id="email" 
          name="email" 
          placeholder="you@email.com" 
          value={formData.email}
          onChange={handleChange}
          required 
        />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea 
          className="form-control enhanced-input" 
          id="message" 
          name="message" 
          rows={4} 
          placeholder="Tell me about your project or just say hello!"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button 
        type="submit" 
        className="btn btn-primary enhanced-button" 
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            Sending...
          </>
        ) : 'Send Message'}
      </button>
      {submitStatus === 'success' && (
        <div className="alert alert-success mt-3" role="alert">
          Message sent successfully! I'll get back to you soon.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="alert alert-danger mt-3" role="alert">
          Oops! Something went wrong. Please try again.
        </div>
      )}
    </form>
  );
}
  return (
    <>
      <PortfolioNavbar />
      <main className="homepage">
        <HomePage />
        <section id="about" className="section about-section row gx-5 align-items-start">
          <div className="col-md-7 about-text">
            <h2 className="about-header">About Me</h2>
            <p className="about-summary">
              I’m a passionate Frontend Developer and Computer Science graduate with a strong foundation in both web technologies and machine learning. My expertise spans building beautiful, performant user interfaces, as well as applying data-driven solutions using modern ML frameworks. <br /><br />
              My experience includes developing responsive web applications, optimizing performance, and ensuring accessibility for all users. I'm eager to learn new technologies and tackle challenging web projects.
            </p>
          </div>
          <div className="col-md-5 about-skills-box" data-aos="fade-left" data-aos-delay="400">
            <h4 className="mb-3">Key Skills</h4>
            <div className="skills-container">
              <div className="skill-item mb-3" data-aos="fade-up" data-aos-delay="500">
                <div className="d-flex align-items-center mb-2">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="skill-icon me-2" />
                  <span className="skill-name">React</span>
                  <span className="skill-percentage ms-auto">90%</span>
                </div>
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{width: '90%'}} data-aos="slide-right" data-aos-delay="600"></div>
                </div>
              </div>
              <div className="skill-item mb-3" data-aos="fade-up" data-aos-delay="600">
                <div className="d-flex align-items-center mb-2">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="skill-icon me-2" />
                  <span className="skill-name">Next.js</span>
                  <span className="skill-percentage ms-auto">85%</span>
                </div>
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{width: '85%'}} data-aos="slide-right" data-aos-delay="700"></div>
                </div>
              </div>
              <div className="skill-item mb-3" data-aos="fade-up" data-aos-delay="700">
                <div className="d-flex align-items-center mb-2">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="skill-icon me-2" />
                  <span className="skill-name">TypeScript</span>
                  <span className="skill-percentage ms-auto">80%</span>
                </div>
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{width: '80%'}} data-aos="slide-right" data-aos-delay="800"></div>
                </div>
              </div>
              <div className="skill-item mb-3" data-aos="fade-up" data-aos-delay="800">
                <div className="d-flex align-items-center mb-2">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="skill-icon me-2" />
                  <span className="skill-name">JavaScript (ES6+)</span>
                  <span className="skill-percentage ms-auto">88%</span>
                </div>
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{width: '88%'}} data-aos="slide-right" data-aos-delay="900"></div>
                </div>
              </div>
              <div className="skill-item mb-3" data-aos="fade-up" data-aos-delay="900">
                <div className="d-flex align-items-center mb-2">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="skill-icon me-2" />
                  <span className="skill-name">Tailwind CSS</span>
                  <span className="skill-percentage ms-auto">85%</span>
                </div>
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{width: '85%'}} data-aos="slide-right" data-aos-delay="1000"></div>
                </div>
              </div>
              <div className="skill-item mb-3" data-aos="fade-up" data-aos-delay="1000">
                <div className="d-flex align-items-center mb-2">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="skill-icon me-2" />
                  <span className="skill-name">Python</span>
                  <span className="skill-percentage ms-auto">75%</span>
                </div>
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{width: '75%'}} data-aos="slide-right" data-aos-delay="1100"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="section projects-section" data-aos="fade-up">
          <h2 className="projects-header" data-aos="fade-up" data-aos-delay="200">Projects</h2>
          <div className="projects-list">
            <div className="project-card enhanced-card" data-aos="fade-up" data-aos-delay="300">
              <img src={bluepegImg} alt="Bluepeg Industrial Operations Website Screenshot" className="project-img mb-3" />
              <h5 style={{ textAlign: 'left' }}>Bluepeg Industrial Operations</h5>
              <p style={{ textAlign: 'left' }}>A cutting-edge industrial operations company website showcasing automation solutions and engineering expertise. Features interactive technology showcase, seamless navigation, and modern industrial design.</p>
              <div className="project-skills mb-2">
                <span className="badge skill-badge">Next.js 15</span>
                <span className="badge skill-badge">TypeScript</span>
                <span className="badge skill-badge">Tailwind CSS</span>
                <span className="badge skill-badge">React</span>
              </div>
              <a href="https://bluepeg.vercel.app" target="_blank" rel="noopener noreferrer" className="project-link enhanced-link">View Site</a> 
            </div>
            <div className="project-card enhanced-card" data-aos="fade-up" data-aos-delay="400">
              <img src={portfolioImg} alt="Portfolio Website Screenshot" className="project-img mb-3" />
              <h5 style={{ textAlign: 'left' }}>Portfolio Website</h5>
              <p style={{ textAlign: 'left' }}>A modern, responsive personal portfolio built with React, TypeScript, and Vite. Features smooth navigation, custom theming, and accessibility best practices.</p>
              <div className="project-skills mb-2">
                <span className="badge skill-badge">React</span>
                <span className="badge skill-badge">TypeScript</span>
                <span className="badge skill-badge">Vite</span>
                <span className="badge skill-badge">Bootstrap</span>
              </div>
              <a href="https://hunkymanie.vercel.app" target="_blank" rel="noopener noreferrer" className="project-link enhanced-link">View Site</a> 
            </div>
            <div className="project-card">
              <img src={ovarianImg} alt="Ovarian Cancer Subtype Classifier Screenshot" className="project-img mb-3" />
              <h5 style={{ textAlign: 'left' }}>Ovarian Cancer Subtype Classifier</h5>
              <p style={{ textAlign: 'left' }}>A web-based tool for classifying ovarian cancer subtypes from histopathology images using Convolutional Neural Networks (CNNs). Built with Streamlit for interactive exploration and visualization of model predictions.</p>
              <div className="project-skills mb-2">
                <span className="badge skill-badge">CNN</span>
                <span className="badge skill-badge">Streamlit</span>
                <span className="badge skill-badge">Python</span>
              </div>
              <a href="https://your-ovarian-cancer-classifier.com" target="_blank" rel="noopener noreferrer" className="project-link">View Site</a>
            </div>
            <div className="project-card">
              <img src="https://source.unsplash.com/random/400x200?cryptocurrency,finance" alt="CryptoTracker App Screenshot" className="project-img mb-3" />
              <h5 style={{ textAlign: 'left' }}>CryptoTracker App</h5>
              <p style={{ textAlign: 'left' }}>A real-time cryptocurrency tracker app with price charts, news, and portfolio management. Built with React, TypeScript, and Chart.js.</p>
              <div className="project-skills mb-2">
                <span className="badge skill-badge">React</span>
                <span className="badge skill-badge">TypeScript</span>
                <span className="badge skill-badge">Chart.js</span>
                <span className="badge skill-badge">API Integration</span>
              </div>
              <a href="https://your-cryptotracker-app.com" target="_blank" rel="noopener noreferrer" className="project-link">View Site</a>
            </div>
          </div>
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
        <footer className="site-footer mt-5 py-4">
          <div style={{ textAlign: 'center', color: '#b983ff', fontFamily: 'Space Grotesk, Inter, Arial, sans-serif', fontWeight: 600, fontSize: '1.08rem', letterSpacing: '0.04em' }}>
            © {new Date().getFullYear()} Tobiloba Ayomide
          </div>
        </footer>
      </main>
    </>
  );
}

export default App
