import { Link } from 'react-router-dom';
import { getAllProjects } from '../data/projectsData';

const ProjectsSection = () => {
  const projects = getAllProjects();

  // Duplicate projects for infinite scroll effect
  const duplicatedProjects = [...projects, ...projects];

  return (
    <section id="projects" className="projects-modern">
      <div className="projects-container">
        {/* Page Header */}
        <div className="projects-header" data-aos="fade-up">
          <span className="projects-label">PROJECTS</span>
          <h2 className="projects-page-title">Featured Work</h2>
          <p className="projects-intro">
            A showcase of projects that highlight my passion for creating impactful digital products from modern web applications to blockchain-powered solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid-modern">
          <div className="projects-track">
            {duplicatedProjects.map((project, index) => (
            <div key={`${project.id}-${index}`} className="project-card-modern" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image-modern" />
                <div className="project-overlay">
                  <span className="project-category-modern">{project.category}</span>
                  {index === 0 && <span className="featured-badge">★ Featured</span>}
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title-modern">{project.title}</h3>
                <p className="project-desc-modern">{project.description}</p>
                <div className="project-tech-modern">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">{tech}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-badge">+{project.technologies.length - 4}</span>
                  )}
                </div>
                <div className="project-actions">
                  <Link to={`/projects/${project.id}`} className="project-btn project-btn-view">
                    View Project
                  </Link>
                  {project.liveUrl === 'demo' ? (
                    <button 
                      onClick={() => alert('This project requires local setup. Please check the GitHub repository for installation instructions and demo videos.')} 
                      className="project-btn project-btn-primary"
                    >
                      Live Site
                    </button>
                  ) : (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-btn project-btn-primary">
                      Live Site
                    </a>
                  )}
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-btn project-btn-secondary">
                    Code
                  </a>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>

        {/* View All Projects Button */}
        <div className="projects-view-all" data-aos="fade-up" data-aos-delay="200">
          <Link to="/projects" className="view-all-btn">
            <span>View All Projects</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
