import './App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import portfolioImg from './assets/portfolio.png';
import ovarianImg from './assets/ovarian.png';

function PortfolioNavbar() {
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
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); handleNavClick(); }}>
              Home
            </Nav.Link>
            <Nav.Link href="#about" onClick={e => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); handleNavClick(); }}>About</Nav.Link>
            <Nav.Link href="#projects" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); handleNavClick(); }}>Projects</Nav.Link>
            <Nav.Link href="#contact" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); handleNavClick(); }}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function HomePage() {
  return (
    <Container className="py-5">
      <div className="d-flex flex-column align-items-start text-start homepage-hero">
        <h2 className="mb-2 hero-hello">Hello, I'm</h2>
        <h1 className="display-4 fw-bold mb-1 hero-name">
          <span className="typing-effect">Tobiloba Ayomide!</span>
        </h1>
        <h3 className="mb-3 hero-title"><em>Frontend Developer</em></h3>
        <p className="lead mb-4 hero-summary" style={{maxWidth: 600}}>
          Creative and detail-oriented Frontend Developer with a passion for building beautiful, user-friendly web experiences. Experienced in React, TypeScript, and modern UI design. I love turning ideas into interactive, accessible, and high-performance websites.
        </p>
        <div className="d-flex align-items-center gap-3 mb-4" style={{alignSelf: 'flex-start'}}>
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

function App() {
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
          <div className="col-md-5 about-skills-box">
            <h4 className="mb-3">Key Skills</h4>
            <ul className="about-skills-list">
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="skill-icon" /> React</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="skill-icon" /> TypeScript</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="skill-icon" /> JavaScript (ES6+)</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="skill-icon" /> HTML5</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="skill-icon" /> CSS3</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" className="skill-icon" /> Bootstrap</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="skill-icon" /> Git & GitHub</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="skill-icon" /> Python</li>
            </ul>
          </div>
        </section>
        <section id="projects" className="section projects-section">
          <h2 className="projects-header">Projects</h2>
          <div className="projects-list">
            <div className="project-card">
              <img src={portfolioImg} alt="Portfolio Website Screenshot" className="project-img mb-3" />
              <h5 style={{ textAlign: 'left' }}>Portfolio Website</h5>
              <p style={{ textAlign: 'left' }}>A modern, responsive personal portfolio built with React, TypeScript, and Vite. Features smooth navigation, custom theming, and accessibility best practices.</p>
              <div className="project-skills mb-2">
                <span className="badge skill-badge">React</span>
                <span className="badge skill-badge">TypeScript</span>
                <span className="badge skill-badge">Vite</span>
                <span className="badge skill-badge">Bootstrap</span>
              </div>
              <a href="https://hunkymanie.vercel.app" target="_blank" rel="noopener noreferrer" className="project-link">View Site</a> 
            </div>
            <div className="project-card">
              <img src="https://source.unsplash.com/random/400x200?productivity,app" alt="Task Manager App Screenshot" className="project-img mb-3" />
              <h5 style={{ textAlign: 'left' }}>Task Manager App</h5>
              <p style={{ textAlign: 'left' }}>A productivity app for managing daily tasks, built with React, Redux, and Bootstrap. Includes drag-and-drop, filtering, and persistent storage.</p>
              <div className="project-skills mb-2">
                <span className="badge skill-badge">React</span>
                <span className="badge skill-badge">Redux</span>
                <span className="badge skill-badge">Bootstrap</span>
              </div>
              <a href="https://your-taskmanager-app.com" target="_blank" rel="noopener noreferrer" className="project-link">View Site</a>
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
        <section id="contact" className="section contact-section">
          <h2 className="contact-header">Contact</h2>
          <div className="contact-flex">
            <div className="contact-info">
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
            <form className="contact-form" action="https://formsubmit.co/oyetunjitobiloba82@gmail.com" method="POST">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="you@email.com" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" name="message" rows={4} placeholder="Type your message..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
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
