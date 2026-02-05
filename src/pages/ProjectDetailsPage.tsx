import { useParams, Link } from 'react-router-dom';
import { getProjectById } from '../data/projectsData';
import NavbarSection from '../components/NavbarSection';
import FooterSection from '../components/FooterSection';
import './ProjectDetailsPage.css';

const ProjectDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(Number(id));
  

  if (!project) {
    return (
      <div style={{ color: 'red', textAlign: 'center', margin: '2rem' }}>
        Project not found.
        <br />
        <Link to="/projects">Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="project-details-page">
      <NavbarSection />

      {/* Hero Section */}
      <section className="project-details-hero">
        <div className="project-details-container">
          <Link to="/projects" className="back-to-projects">
            &larr; Back to Projects
          </Link>
          <div className="project-header">
            <div className="project-meta-badge">
              <span className="project-year">{project.year || "N/A"}</span>
              <span className="meta-dot">·</span>
              <span className="project-category-text">{project.category || "N/A"}</span>
            </div>
            <h1 className="project-details-title">{project.title || "Untitled Project"}</h1>
            <p className="project-tagline">{project.description || "No description available."}</p>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="project-image-section">
        <div className="project-details-container">
          <div className="project-main-image">
            <img src={project.image || "https://via.placeholder.com/300"} alt={project.title} />
          </div>
        </div>
      </section>

      {/* Project Content & Sidebar */}
      <section className="project-content-section">
        <div className="project-details-container">
          <div className="project-content-grid">
            {/* Main Content */}
            <div className="project-main-content">
              {/* Overview */}
              <div className="content-block">
                <h2 className="content-heading">Project Overview</h2>
                <p className="content-text">
                  {project.longDescription || project.description || "No overview available."}
                </p>
              </div>

              {/* Features */}
              {Array.isArray(project.features) && project.features.length > 0 && (
                <div className="content-block">
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
                <div className="content-block">
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
              <div className="sidebar-block">
                <h3 className="sidebar-heading">Technologies Used</h3>
                <div className="tech-stack-list">
                  {Array.isArray(project.technologies) && project.technologies.length > 0 ? (
                    project.technologies.map((tech, index) => (
                      <span key={index} className="tech-item">{tech}</span>
                    ))
                  ) : (
                    <span>No technologies listed.</span>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="sidebar-block">
                <h3 className="sidebar-heading">Project Info</h3>
                <div className="info-list">
                  <div className="info-item">
                    <span className="info-label">Year</span>
                    <span className="info-value">{project.year || "N/A"}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Category</span>
                    <span className="info-value">{project.category || "N/A"}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Status</span>
                    <span className={`info-value ${project.liveUrl ? 'status-live' : 'status-development'}`}>
                      {project.liveUrl ? 'Live' : 'In Development'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Links/CTA */}
              <div className="sidebar-cta">
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
                    project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn-primary"
                      >
                        Visit Site
                      </a>
                    )
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn-outline"
                    >
                      GitHub Repo
                    </a>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Navigation Button */}
      <section className="project-navigation">
        <div className="project-details-container" style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Link to="/projects" className="view-all-projects-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ verticalAlign: 'middle', marginRight: 4 }}>
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
            </svg>
            View All Projects
          </Link>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default ProjectDetailsPage;