import React, { useEffect, useState } from 'react';
import './App.css';
import bluepegImg from './assets/bluepeg.png';
import portfolioImg from './assets/ovarian.png';
import ovarianImg from './assets/portfolio.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, menuOpen ? 400 : 0); // match overlay fade
  };

  return (
    <nav className={`navbar-modern${isScrolled ? ' scrolled' : ''}`}>
      <div className="navbar-modern-inner">
        <a href="#home" className="navbar-modern-brand" onClick={e => { e.preventDefault(); handleNav('home'); }}>tobi.dev</a>
        <ul className="navbar-modern-links">
          {navItems.map((item, idx) => (
            <li key={item.id} style={{animationDelay: `${0.1 * idx}s`}} className="navbar-link-animate">
              <a href={`#${item.id}`} onClick={e => { e.preventDefault(); handleNav(item.id); }}>{item.label}</a>
            </li>
          ))}
        </ul>
        <button
          className={`navbar-modern-hamburger${menuOpen ? ' open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(open => !open)}
        >
          {!menuOpen && <span className="hamburger-icon">≡</span>}
          {menuOpen && <span className="close-icon">×</span>}
        </button>
      </div>
      {/* Overlay */}
      {menuOpen && (
        <div className="navbar-modern-overlay" aria-modal="true" role="dialog">
          <ul className="navbar-modern-mobile-links">
            {navItems.map(item => (
              <li key={item.id}>
                <a href={`#${item.id}`} onClick={e => { e.preventDefault(); handleNav(item.id); }}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="hero-content" data-aos="fade-up" data-aos-duration="800">
        <div className="hero-subtitle">Frontend Developer</div>
        <h1 className="hero-title">
          Hi, I'm <span className="highlight typing">Tobiloba Ayomide</span>
        </h1>
        <p className="hero-description">
          I craft seamless digital experiences that bridge beautiful design with powerful functionality. 
          Specializing in React, TypeScript, and cutting-edge web technologies to transform your vision into reality.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Explore My Projects
          </a>
          <a href="/resume.pdf" className="btn btn-outline" download>
            Download Resume
          </a>
        </div>
        <div className="hero-tech-stack" data-aos="fade-up" data-aos-delay="400">
          <a href="https://github.com/hunkymanie" target="_blank" rel="noopener noreferrer" className="tech-icon" title="GitHub">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/tobiloba-ayomide-923628256" target="_blank" rel="noopener noreferrer" className="tech-icon" title="LinkedIn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://twitter.com/hunkymanieee" target="_blank" rel="noopener noreferrer" className="tech-icon" title="Twitter">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const stats = [
    { number: '20+', label: 'Projects Delivered' },
    { number: '3+', label: 'Years Building' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  const skills = [
    {
      category: 'Frontend Development',
      items: [
        { name: 'React', level: 'Expert', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'TypeScript', level: 'Advanced', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'Next.js', level: 'Advanced', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { name: 'JavaScript', level: 'Expert', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }
      ]
    },
    {
      category: 'Styling & Design',
      items: [
        { name: 'Tailwind CSS', level: 'Advanced', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'CSS3', level: 'Expert', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'Sass', level: 'Advanced', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
        { name: 'Figma', level: 'Intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' }
      ]
    },
    {
      category: 'Tools & Technologies',
      items: [
        { name: 'Git', level: 'Advanced', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'Vite', level: 'Advanced', icon: 'https://vitejs.dev/logo.svg' },
        { name: 'Node.js', level: 'Intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Python', level: 'Intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' }
      ]
    }
  ];

  return (
    <section id="about" className="section about">
      <div className="content-wrapper">
        <div className="section-header" data-aos="fade-up">
          <div className="section-subtitle">Get To Know Me</div>
          <h2 className="section-title">
            Building Tomorrow's <span className="highlight">Digital Experiences</span>
          </h2>
          <p className="section-description">
            Computer Science graduate turned frontend developer, passionate about creating intuitive, 
            scalable user interfaces that make a real impact. I blend technical expertise with creative vision 
            to deliver exceptional results.
          </p>
        </div>

        <div className="stats-grid" data-aos="fade-up" data-aos-delay="200">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="skills-grid">
          {skills.map((category, index) => (
            <div key={index} className="skill-category" data-aos="fade-up" data-aos-delay={300 + (index * 100)}>
              <h4>{category.category}</h4>
              {category.items.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <img src={skill.icon} alt={skill.name} className="skill-icon" />
                  <div className="skill-info">
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-level">{skill.level}</div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'Bluepeg Industrial Solutions',
      category: 'Industrial Web Platform',
      description: 'Enterprise-grade website for industrial automation company featuring real-time data visualization, interactive service showcases, and seamless user experience across all devices.',
      image: bluepegImg,
      technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'React'],
      liveUrl: 'https://bluepeg.vercel.app',
      githubUrl: 'https://github.com/hunkymanie/bluepeg'
    },
    {
      id: 2,
      title: 'Modern Portfolio Website',
      category: 'Personal Brand',
      description: 'Responsive personal portfolio showcasing advanced React patterns, TypeScript implementation, and modern design principles. Features smooth animations and optimal performance.',
      image: portfolioImg,
      technologies: ['React', 'TypeScript', 'Vite', 'CSS3'],
      liveUrl: 'https://hunkymanie.vercel.app',
      githubUrl: 'https://github.com/hunkymanie/portfolio'
    },
    {
      id: 3,
      title: 'AI Cancer Detection System',
      category: 'Machine Learning & Healthcare',
      description: 'Advanced medical imaging tool utilizing Convolutional Neural Networks for automated ovarian cancer classification. Features real-time analysis and intuitive medical interface.',
      image: ovarianImg,
      technologies: ['Python', 'Streamlit', 'CNN', 'TensorFlow'],
      liveUrl: '#',
      githubUrl: 'https://github.com/hunkymanie'
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="content-wrapper">
        <div className="section-header" data-aos="fade-up">
          <div className="section-subtitle">My Work</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            Each project represents a unique challenge solved with innovative thinking, clean code, 
            and user-centered design. From enterprise solutions to creative experiments.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card" data-aos="fade-up" data-aos-delay={200 + (index * 100)}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1h6zM21 3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"/>
                    </svg>
                    Live Demo
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="section contact">
      <div className="content-wrapper">
        <div className="section-header" data-aos="fade-up">
          <div className="section-subtitle">Get In Touch</div>
          <h2 className="section-title">Let's Create Something Amazing</h2>
          <p className="section-description">
            Ready to turn your ideas into digital reality? I'm always excited to discuss new projects, 
            creative collaborations, or innovative solutions. Let's build something extraordinary together.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info" data-aos="fade-right" data-aos-delay="200">
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4.7l-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"/>
                </svg>
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <p><a href="mailto:oyetunjitobiloba82@gmail.com">oyetunjitobiloba82@gmail.com</a></p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div className="contact-details">
                <h4>Phone</h4>
                <p><a href="tel:+2349079843907">+234 907 984 3907</a></p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div className="contact-details">
                <h4>Location</h4>
                <p>Lagos, Nigeria</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                  <path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"/>
                </svg>
              </div>
              <div className="contact-details">
                <h4>Response Time</h4>
                <p>Within 24 hours</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-left" data-aos-delay="300">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="What's your name?"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                placeholder="Share your project ideas, collaboration opportunities, or just say hello! I'd love to hear from you."
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Let's Connect
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const socialLinks = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/hunkymanie', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/in/tobiloba-ayomide-923628256', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    { 
      name: 'Twitter', 
      url: 'https://twitter.com/hunkymanieee', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="footer">
      <div className="content-wrapper">
        <div className="social-links">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} Tobiloba Ayomide. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-quart',
      offset: 100,
      once: true
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
