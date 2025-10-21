import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import AOS from 'aos';
import NavbarSection from '../components/NavbarSection';
import FooterSection from '../components/FooterSection';
import { getProjectById } from '../data/projectsData';
import './ProjectDetailsPage.css';

const ProjectDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, [id]);

  // Get project data
  const project = getProjectById(Number(id));

  // If project not found, redirect to projects page
  useEffect(() => {
    if (!project) {
      navigate('/projects');
    }
  }, [project, navigate]);

  if (!project) {
    return null;
  }

  return (
    <div className="project-details-page">
      <NavbarSection />
      
      {/* Hero Section */}
      <section className="project-details-hero">
        <div className="project-details-container">
          {/* Back Button */}
          <Link to="/projects" className="back-to-projects" data-aos="fade-right">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg>
            Back to Projects
          </Link>

          {/* Project Header */}
          <div className="project-header" data-aos="fade-up">
            <div className="project-meta-badge">
              <span className="project-year">{project.year}</span>
              <span className="meta-dot">·</span>
              <span className="project-category-text">{project.category}</span>
            </div>
            <h1 className="project-details-title">{project.title}</h1>
            <p className="project-tagline">{project.description}</p>
          </div>

          {/* Action Buttons */}
        </div>
      </section>

      {/* Project Image */}
      <section className="project-image-section" data-aos="fade-up" data-aos-delay="200">
        <div className="project-details-container">
          <div className="project-main-image">
            <img src={project.image} alt={project.title} />
            <div className="image-overlay"></div>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="project-content-section">
        <div className="project-details-container">
          <div className="project-content-grid">
            
            {/* Main Content */}
            <div className="project-main-content">
              
              {/* Overview */}
              <div className="content-block" data-aos="fade-up">
                <h2 className="content-heading">Project Overview</h2>
                <p className="content-text">
                  {project.longDescription || project.description}
                </p>
              </div>

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div className="content-block" data-aos="fade-up">
                  <h2 className="content-heading">Key Features</h2>
                  <ul className="features-list">
                    {project.features.map((feature, index) => (
                      <li key={index} className="feature-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Challenges & Solutions */}
              {(project.challenges || project.solution) && (
                <div className="content-block" data-aos="fade-up">
                  <h2 className="content-heading">Challenges & Solutions</h2>
                  {project.challenges && (
                    <div className="challenge-solution">
                      <h3 className="subsection-heading">Challenge</h3>
                      <p className="content-text">{project.challenges}</p>
                    </div>
                  )}
                  {project.solution && (
                    <div className="challenge-solution">
                      <h3 className="subsection-heading">Solution</h3>
                      <p className="content-text">{project.solution}</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="project-sidebar">
              
              {/* Technologies */}
              <div className="sidebar-block" data-aos="fade-up" data-aos-delay="100">
                <h3 className="sidebar-heading">Technologies Used</h3>
                <div className="tech-stack-list">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-item">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Project Info */}
              <div className="sidebar-block" data-aos="fade-up" data-aos-delay="200">
                <h3 className="sidebar-heading">Project Info</h3>
                <div className="info-list">
                  <div className="info-item">
                    <span className="info-label">Year</span>
                    <span className="info-value">{project.year}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Category</span>
                    <span className="info-value">{project.category}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Status</span>
                    <span className={`info-value ${project.liveUrl ? 'status-live' : 'status-development'}`}>
                      {project.liveUrl ? 'Live' : 'In Development'}
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="sidebar-cta" data-aos="fade-up" data-aos-delay="300">
                <h3 className="cta-heading">Interested in this project?</h3>
                <p className="cta-text">Check out the live demo or explore the source code on GitHub.</p>
                <div className="cta-buttons">
                  {project.liveUrl === 'demo' ? (
                    <button 
                      onClick={() => alert('This project requires local setup. Check GitHub for installation instructions.')}
                      className="cta-btn cta-btn-primary"
                    >
                      View Demo
                    </button>
                  ) : (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn-primary"
                    >
                      Visit Site
                    </a>
                  )}
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn-outline"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Navigation to other projects */}
      <section className="project-navigation">
        <div className="project-details-container">
          <Link to="/projects" className="view-all-projects-btn" data-aos="fade-up">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
            </svg>
            View All Projects
          </Link>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default ProjectDetailsPage;
