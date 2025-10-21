import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import NavbarSection from '../components/NavbarSection';
import FooterSection from '../components/FooterSection';
import { getAllProjects } from '../data/projectsData';
import './AllProjectsPage.css';

const AllProjectsPage = () => {
  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  const projects = getAllProjects();

  return (
    <div className="all-projects-page">
      <NavbarSection />
      
      {/* Compact Hero */}
      <section className="projects-compact-hero">
        <div className="compact-hero-container">
          <h1 className="compact-hero-title" data-aos="fade-up" data-aos-delay="100">
            All Projects
          </h1>
          <p className="compact-hero-desc" data-aos="fade-up" data-aos-delay="200">
            A collection of professional projects built with modern technologies, creative problem-solving, and a focus on seamless user experiences.
          </p>
        </div>
      </section>
      
      {/* Compact Projects List */}
      <section className="projects-compact-list-section">
        <div className="compact-list-container">
          {projects.map((project, index) => (
            <article 
              key={project.id} 
              className="compact-project-item" 
              data-aos="fade-up" 
              data-aos-delay={index * 80}
            >
              {/* Number Badge */}
              <div className="project-number-display">
                <span className="number-text">0{project.id}</span>
              </div>
              
              {/* Project Image */}
              <div className="project-image-block">
                <div className="image-wrapper-compact">
                  <img src={project.image} alt={project.title} className="compact-project-img" />
                  <div className="image-overlay-gradient"></div>
                </div>
                <div className="category-tag-absolute">
                  <span className="category-badge-compact">{project.category}</span>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="project-content-block">
                <div className="project-main-info">
                  <div className="project-meta-row">
                    <span className="meta-year">{project.year}</span>
                    <span className="meta-separator">·</span>
                    <span className="meta-category">{project.category}</span>
                  </div>
                  
                  <h2 className="compact-project-title">{project.title}</h2>
                  <p className="compact-project-desc">{project.description}</p>
                  
                  <div className="tech-badges-compact">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge-compact">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="project-actions-compact">
                  <Link 
                    to={`/projects/${project.id}`}
                    className="btn-primary-compact"
                  >
                    View Project
                  </Link>
                  
                  <div className="secondary-links-compact">
                    {project.liveUrl === 'demo' ? (
                      <button 
                        onClick={() => alert('This project requires local setup. Check GitHub for installation instructions.')} 
                        className="icon-btn-compact"
                        title="Demo"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1h6zM21 3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"/>
                        </svg>
                      </button>
                    ) : (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="icon-btn-compact"
                        title="Live Site"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1h6zM21 3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"/>
                        </svg>
                      </a>
                    )}
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="icon-btn-compact"
                      title="GitHub"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default AllProjectsPage;
