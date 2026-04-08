import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { getHomeProjects } from '../data/projectsData';
import { getLeadSentence } from '../utils/text';

gsap.registerPlugin(ScrollTrigger);

const LinkArrowIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 14L14 6M8.5 6H14V11.5"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ProjectsSection = () => {
  const projects = getHomeProjects();
  const sectionRef = useRef<HTMLElement | null>(null);
  const introRef = useRef<HTMLDivElement | null>(null);
  const leadRef = useRef<HTMLAnchorElement | null>(null);
  const matrixRef = useRef<HTMLDivElement | null>(null);
  const [leadProject, ...supportProjects] = projects;

  useLayoutEffect(() => {
    if (
      typeof window === 'undefined'
      || window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const section = sectionRef.current;
    const intro = introRef.current;
    const lead = leadRef.current;
    const matrix = matrixRef.current;

    if (!section || !intro || !lead || !matrix) {
      return;
    }

    const context = gsap.context(() => {
      const introItems = intro.querySelectorAll(':scope > *');
      const tiles = matrix.querySelectorAll('.system-tile');

      gsap.set([...introItems, lead, ...tiles], { autoAlpha: 0 });

      gsap.fromTo(
        introItems,
        { y: 26 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: section,
            start: 'top 76%',
            once: true,
          },
        },
      );

      gsap.fromTo(
        lead,
        { x: -42, y: 30 },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: 0.94,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: lead,
            start: 'top 84%',
            once: true,
          },
        },
      );

      gsap.fromTo(
        tiles,
        {
          x: 22,
          y: 36,
        },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: matrix,
            start: 'top 86%',
            once: true,
          },
        },
      );
    }, section);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <section id="projects" className="systems-section" ref={sectionRef}>
      <div className="site-container site-container--work systems-layout">
        <div className="systems-intro" ref={introRef}>
          <div className="systems-intro__header">
            <h2 className="systems-intro__title section-title--sheen">Projects I&apos;ve shipped</h2>
          </div>
        </div>

        {leadProject ? (
          <Link
            ref={leadRef}
            to={`/projects/${leadProject.slug}`}
            className="system-feature"
          >
            <div className="system-feature__meta">
              <span>01</span>
              <span>{leadProject.year}</span>
              <span>{leadProject.category}</span>
            </div>

            <div className="system-feature__layout">
              <div className="system-feature__copy">
                <h3>{leadProject.title}</h3>
                <p className="system-feature__summary">
                  {leadProject.showcase?.blurb ?? getLeadSentence(leadProject.description)}
                </p>
              </div>

              <div className="system-feature__details">
                <p className="system-feature__note">
                  {leadProject.showcase?.why ?? getLeadSentence(leadProject.description)}
                </p>
                <div className="system-feature__footer">
                  <p className="system-feature__stack">
                    {(leadProject.showcase?.stack ?? leadProject.technologies.slice(0, 3)).join(' • ')}
                  </p>
                  <div className="system-feature__action" aria-hidden="true">
                    <span>View</span>
                    <span className="system-feature__action-icon">
                      <LinkArrowIcon />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ) : null}

        <div className="systems-grid" aria-label="Selected project matrix" ref={matrixRef}>
          {supportProjects.map((project, index) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className="system-tile"
            >
              <div className="system-tile__meta">
                <span>{`0${index + 2}`}</span>
                <span>{project.year}</span>
                <span>{project.category}</span>
              </div>

              <h3>{project.title}</h3>

              <p className="system-tile__summary">
                {project.showcase?.blurb ?? getLeadSentence(project.description)}
              </p>

              <div className="system-tile__footer">
                <p className="system-tile__stack">
                  {(project.showcase?.stack ?? project.technologies.slice(0, 3)).join(' • ')}
                </p>

                <div className="system-tile__action" aria-hidden="true">
                  <span>View</span>
                  <span className="system-tile__action-icon">
                    <LinkArrowIcon />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
