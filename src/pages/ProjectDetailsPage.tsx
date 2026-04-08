import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link, useParams } from 'react-router-dom';
import NavbarSection from '../components/NavbarSection';
import { getProjectByIdentifier } from '../data/projectsData';
import { getFocusableElements, setElementInert, trapFocusInContainer } from '../utils/focus';
import { getLeadSentence } from '../utils/text';
import { attachInteractiveSheen } from '../utils/interactiveSheen';
import { FiArrowLeft, FiGithub, FiX } from 'react-icons/fi';
import type { Theme } from '../theme';
import './ProjectDetailsPage.css';

gsap.registerPlugin(ScrollTrigger);

const LinkArrowIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 14L14 6M8.5 6H14V11.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);


const splitParagraphs = (text: string) =>
  text.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);

const stripLeadSentence = (text: string) => {
  const normalized = text.trim();
  if (!normalized) return '';
  const lead = getLeadSentence(normalized);
  return normalized.slice(lead.length).trim().replace(/^[\s,.-]+/, '').trim();
};

type ProjectDetailsPageProps = {
  theme: Theme;
  onToggleTheme: () => void;
};

const ProjectDetailsPage = ({ theme, onToggleTheme }: ProjectDetailsPageProps) => {
  const { id } = useParams<{ id: string }>();
  const shellRef = useRef<HTMLDivElement | null>(null);
  const pageRef = useRef<HTMLElement | null>(null);
  const heroTitleRef = useRef<HTMLHeadingElement | null>(null);
  const lightboxRef = useRef<HTMLDivElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const lightboxImageRef = useRef<HTMLImageElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const previousFocusedElementRef = useRef<HTMLElement | null>(null);
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);
  const [isLightboxClosing, setIsLightboxClosing] = useState(false);
  const project = getProjectByIdentifier(id ?? '');

  const closeLightbox = () => {
    if (!activeImage || isLightboxClosing) {
      return;
    }

    if (
      typeof window === 'undefined'
      || window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setActiveImage(null);
      return;
    }

    setIsLightboxClosing(true);
  };

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.body.classList.add('project-page-active');
    return () => { document.body.classList.remove('project-page-active'); };
  }, []);

  useEffect(() => {
    const shell = shellRef.current;

    if (!activeImage) {
      document.body.classList.remove('case-study-lightbox-open');
      setElementInert(shell, false);
      const previousFocusedElement = previousFocusedElementRef.current;

      if (previousFocusedElement?.isConnected) {
        previousFocusedElement.focus();
      }

      previousFocusedElementRef.current = null;
      return;
    }

    previousFocusedElementRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.classList.add('case-study-lightbox-open');

    const dialog = dialogRef.current;
    const focusableElements = dialog ? getFocusableElements(dialog) : [];
    (closeButtonRef.current ?? focusableElements[0] ?? dialog)?.focus();
    setElementInert(shell, true);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (!isLightboxClosing) {
          if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setActiveImage(null);
          } else {
            setIsLightboxClosing(true);
          }
        }
        return;
      }

      if (dialog) {
        trapFocusInContainer(event, dialog);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('case-study-lightbox-open');
      setElementInert(shell, false);
    };
  }, [activeImage, isLightboxClosing]);

  useLayoutEffect(() => {
    if (!activeImage || typeof window === 'undefined') {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const lightbox = lightboxRef.current;
    const dialog = dialogRef.current;
    const image = lightboxImageRef.current;

    if (!lightbox || !dialog || !image) {
      return;
    }

    gsap.killTweensOf([lightbox, dialog, image]);

    const timeline = gsap.timeline({
      defaults: {
        ease: 'power3.out',
      },
    });

    if (isLightboxClosing) {
      timeline
        .to(
          image,
          { autoAlpha: 0.68, scale: 1.028, duration: 0.28, ease: 'power2.inOut' },
          0.02,
        )
        .to(
          dialog,
          { autoAlpha: 0, y: 26, scale: 0.984, duration: 0.34, ease: 'power3.inOut' },
          0.06,
        )
        .to(
          lightbox,
          {
            autoAlpha: 0,
            duration: 0.28,
            onComplete: () => {
              setIsLightboxClosing(false);
              setActiveImage(null);
            },
          },
          0.14,
        );
    } else {
      timeline
        .fromTo(
          lightbox,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.22, delay: 0.08 },
        )
        .fromTo(
          dialog,
          { autoAlpha: 0, y: 24, scale: 0.985 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.34 },
          0.14,
        )
        .fromTo(
          image,
          { autoAlpha: 0.78, scale: 1.03 },
          { autoAlpha: 1, scale: 1, duration: 0.46, ease: 'power2.out' },
          0.2,
        );
    }

    return () => {
      timeline.kill();
    };
  }, [activeImage, isLightboxClosing]);

  useLayoutEffect(() => {
    if (!project || typeof window === 'undefined') return;

    const page = pageRef.current;
    const heroTitle = heroTitleRef.current;
    if (!page) return;

    const detachInteractiveSheen = heroTitle ? attachInteractiveSheen(heroTitle) : () => {};

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return detachInteractiveSheen;
    }

    const context = gsap.context(() => {
      const revealItems = page.querySelectorAll(
        '.case-study-story__intro, .case-study-story__body > p, .case-study-panel',
      );

      gsap.utils.toArray<HTMLElement>(revealItems).forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.78,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          },
        );
      });

      // Engineering intro reveal
      const engIntro = page.querySelector('.case-study-engineering__intro');
      if (engIntro) {
        gsap.fromTo(
          engIntro,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.72,
            ease: 'power3.out',
            scrollTrigger: { trigger: engIntro, start: 'top 88%', once: true },
          },
        );
      }
    }, page);

    return () => {
      detachInteractiveSheen();
      context.revert();
    };
  }, [project]);

  if (!project) {
    return (
      <>
        <NavbarSection theme={theme} onToggleTheme={onToggleTheme} />
        <main className="page-main empty-state">
          <div className="site-container">
            <div className="empty-state__panel">
              <p className="section-label">Project</p>
              <h1>Case study not found.</h1>
              <p>The project you are looking for does not exist in the current archive.</p>
              <Link to="/#projects" className="button-link button-link--primary">Back to projects</Link>
            </div>
          </div>
        </main>
      </>
    );
  }

  const storySource = project.longDescription
    ? stripLeadSentence(project.longDescription) || project.longDescription
    : project.description;
  const overviewParagraphs = splitParagraphs(storySource);
  const heroSummary = project.showcase?.blurb ?? getLeadSentence(project.description);
  const showcaseCaption = project.showcase?.why;
  const featuredStack = project.showcase?.stack ?? project.technologies.slice(0, 3);
  const heroTitleClassName = [
    'section-title--sheen',
    project.mobileTitleSize === 'compact' ? 'case-study-hero__title--compact' : '',
  ].filter(Boolean).join(' ');
  const spotlight = project.spotlight ?? {
    role: project.category,
    focus: heroSummary,
    outcome: getLeadSentence(project.solution || project.challenges || project.description),
  };
  const engineeringPanels = [
    project.challenges ? { label: 'Challenge', title: 'What had to hold together', copy: project.challenges } : null,
    project.solution ? { label: 'Approach', title: 'How the product was shaped', copy: project.solution } : null,
    !project.challenges && !project.solution
      ? { label: 'Outcome', title: 'What the experience delivers', copy: spotlight.outcome }
      : null,
  ].filter((p): p is { label: string; title: string; copy: string } => Boolean(p));

  const statusLabel = project.liveUrl === 'demo' ? 'Private demo' : 'Live';

  const showcaseFrames = [
    { id: 'lead', className: 'case-study-showcase__tile case-study-showcase__tile--lead', alt: `${project.title} primary interface` },
    { id: 'side-top', className: 'case-study-showcase__tile case-study-showcase__tile--side-top', alt: `${project.title} detail view` },
    { id: 'side-main', className: 'case-study-showcase__tile case-study-showcase__tile--side-main', alt: `${project.title} workflow view` },
    { id: 'base', className: 'case-study-showcase__tile case-study-showcase__tile--base', alt: `${project.title} supporting state` },
  ];
  const showcaseImages = showcaseFrames.map((_, index) => project.galleryImages?.[index] ?? project.image);

  return (
    <>
      <div ref={shellRef}>
        <NavbarSection theme={theme} onToggleTheme={onToggleTheme} />
        <main className="page-main case-study-page" ref={pageRef}>

        {/* ── Hero ── */}
        <section className="case-study-hero">
          <div className="site-container site-container--work case-study-hero__inner">

            {/* Mast row: back link + meta */}
            <div className="case-study-hero__mast">
              <Link to="/#projects" className="back-link case-study-hero__back-link">
                <span className="case-study-hero__back-link-icon" aria-hidden="true">
                  <FiArrowLeft />
                </span>
                <span>Back to projects</span>
              </Link>
              <div className="case-study-hero__meta" aria-label="Project metadata">
                <span>{project.year}</span>
                <span>{project.category}</span>
                <span>{statusLabel}</span>
              </div>
            </div>

            {/* Main hero grid */}
            <div className="case-study-hero__grid">

              {/* Left col — copy */}
              <div className="case-study-hero__copy">
                <p className="section-label">Case study</p>
                <h1 className={heroTitleClassName} ref={heroTitleRef}>{project.title}</h1>
                <p className="case-study-hero__summary">{heroSummary}</p>
                <div className="case-study-hero__actions">
                  {project.liveUrl !== 'demo' && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="action-pill case-study-hero__action">
                      <span>Visit Live Site</span>
                      <span className="action-pill__icon"><LinkArrowIcon /></span>
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-pill case-study-hero__source-link"
                    aria-label={`View ${project.title} source on GitHub`}
                    title="View source on GitHub"
                  >
                    <span className="case-study-hero__source-icon">
                      <FiGithub />
                    </span>
                  </a>
                </div>
              </div>

              {/* Right col — media + caption */}
              <div className="case-study-hero__media">
                {showcaseCaption && (
                  <div className="case-study-hero__caption">
                    <p className="section-label">Screens</p>
                    <p>{showcaseCaption}</p>
                  </div>
                )}
                <div className="case-study-showcase__gallery" aria-label="Project screenshots">
                  {showcaseFrames.map((frame, i) => {
                    const imageSrc = showcaseImages[i];
                    const imageAlt = project.galleryLabels?.[i] ?? frame.alt;

                    return (
                      <figure key={frame.id} className={frame.className}>
                        <button
                          type="button"
                          className="case-study-showcase__button"
                          onClick={() => setActiveImage({ src: imageSrc, alt: imageAlt })}
                          aria-label={`Open ${imageAlt}`}
                        >
                          <img src={imageSrc} alt={imageAlt} loading={i === 0 ? 'eager' : 'lazy'} decoding="async" />
                        </button>
                      </figure>
                    );
                  })}
                </div>
              </div>

              {/* Bottom-left — stack + tags */}
              <div className="case-study-hero__rail">
                <section className="case-study-proof" aria-label="Project proof">
                  <p className="section-label">Core stack</p>
                  <p className="case-study-proof__stack">{featuredStack.join(' · ')}</p>
                  <ul className="tag-list">
                    {project.technologies.slice(0, 6).map((tech: string) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </section>
              </div>

            </div>
          </div>
        </section>

        {/* ── Story ── */}
        <section className="case-study-story">
          <div className="site-container site-container--work case-study-story__grid">
            <div className="case-study-story__intro">
              <p className="section-label">Overview</p>
              <h2>Inside the build.</h2>
            </div>
            <div className="case-study-story__body">
              {overviewParagraphs.map((paragraph, i) => (
                <p key={`${project.id}-overview-${i + 1}`}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* ── Engineering panels ── */}
        {engineeringPanels.length > 0 && (
          <section className="case-study-engineering">
            <div className="site-container site-container--work case-study-engineering__grid">
              <div className="case-study-engineering__intro">
                <p className="section-label">Engineering</p>
                <h2>Constraints, tradeoffs, and the decisions behind the surface.</h2>
              </div>
              <div className="case-study-engineering__panels">
                {engineeringPanels.map((panel) => (
                  <article key={panel.label} className="case-study-panel">
                    <div className="case-study-panel__header">
                      <p className="case-study-panel__label">{panel.label}</p>
                      <h3>{panel.title}</h3>
                    </div>
                    <div className="case-study-panel__body">
                      {splitParagraphs(panel.copy).map((paragraph, index) => (
                        <p key={`${panel.label}-${index + 1}`}>{paragraph}</p>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        </main>
      </div>

      {activeImage && (
        <div
          ref={lightboxRef}
          className="case-study-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded project screenshot"
          onClick={closeLightbox}
        >
          <div
            ref={dialogRef}
            className="case-study-lightbox__dialog"
            tabIndex={-1}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="case-study-lightbox__header">
              <div className="case-study-lightbox__copy">
                <p>{project.title}</p>
                <h2>{activeImage.alt}</h2>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                className="case-study-lightbox__close"
                onClick={closeLightbox}
                aria-label="Close screenshot viewer"
              >
                <span>Close</span>
                <span className="case-study-lightbox__close-icon" aria-hidden="true">
                  <FiX />
                </span>
              </button>
            </div>
            <img
              ref={lightboxImageRef}
              className="case-study-lightbox__image"
              src={activeImage.src}
              alt={activeImage.alt}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectDetailsPage;
