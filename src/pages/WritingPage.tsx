import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { FiExternalLink } from 'react-icons/fi';
import NavbarSection from '../components/NavbarSection';
import { WRITING_ENTRIES } from '../data/writingData';
import type { Theme } from '../theme';
import { fetchWritingCover, type WritingCover } from '../utils/writingCovers';
import './WritingPage.css';

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

type WritingPageProps = {
  theme: Theme;
  onToggleTheme: () => void;
};

const WritingPage = ({ theme, onToggleTheme }: WritingPageProps) => {
  const pageRef = useRef<HTMLElement | null>(null);
  const [featuredCover, setFeaturedCover] = useState<WritingCover | null>(null);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    const page = pageRef.current;
    if (!page || typeof window === 'undefined') {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const context = gsap.context(() => {
      const heroCopy = page.querySelector<HTMLElement>('.writing-hero__copy');
      const heroRail = page.querySelector<HTMLElement>('.writing-hero__rail');
      const featuredSection = page.querySelector<HTMLElement>('.writing-feature, .writing-empty');
      const archiveSection = page.querySelector<HTMLElement>('.writing-archive');
      const introItems = [
        heroCopy,
        heroRail,
        featuredSection,
        archiveSection,
      ].filter((item): item is HTMLElement => Boolean(item));

      gsap.set(introItems, { autoAlpha: 0, y: 18 });

      const timeline = gsap.timeline({ defaults: { duration: 0.64, ease: 'power2.out' } });

      if (heroCopy) {
        timeline.to(heroCopy, { autoAlpha: 1, y: 0 });
      }

      if (heroRail) {
        timeline.to(heroRail, { autoAlpha: 1, y: 0 }, '-=0.42');
      }

      if (featuredSection) {
        timeline.to(featuredSection, { autoAlpha: 1, y: 0 }, '-=0.34');
      }

      if (archiveSection) {
        timeline.to(archiveSection, { autoAlpha: 1, y: 0 }, '-=0.28');
      }
    }, page);

    return () => {
      context.revert();
    };
  }, []);

  const featuredEntry = WRITING_ENTRIES.find((entry) => entry.featured) ?? WRITING_ENTRIES[0] ?? null;
  const archiveEntries = WRITING_ENTRIES.filter((entry) => entry.id !== featuredEntry?.id);
  const featuredCoverImage = featuredEntry?.coverImage ?? featuredCover?.coverImage ?? null;
  const featuredCoverAlt = featuredEntry?.coverAlt ?? featuredCover?.coverAlt ?? null;
  const hasFeaturedMedia = Boolean(featuredCoverImage);

  useEffect(() => {
    if (!featuredEntry || featuredEntry.coverImage) {
      setFeaturedCover(null);
      return;
    }

    const controller = new AbortController();
    setFeaturedCover(null);

    const loadFeaturedCover = async () => {
      try {
        const resolvedCover = await fetchWritingCover(
          featuredEntry.url,
          controller.signal,
        );

        if (!controller.signal.aborted) {
          setFeaturedCover(resolvedCover);
        }
      } catch {
        if (!controller.signal.aborted) {
          setFeaturedCover(null);
        }
      }
    };

    void loadFeaturedCover();

    return () => {
      controller.abort();
    };
  }, [featuredEntry]);

  return (
    <>
      <NavbarSection theme={theme} onToggleTheme={onToggleTheme} />
      <main className="page-main writing-page" ref={pageRef}>
        <section className="writing-hero">
          <div className="site-container site-container--work writing-hero__inner">
            <div className="writing-hero__grid">
              <div className="writing-hero__copy">
                <p className="section-label">Writing</p>
                <h1 className="section-title--sheen">Notes on frontend craft and product thinking.</h1>
                <p className="writing-hero__summary">
                  A curated archive for essays, teardown notes, and longer reasoning pulled from the
                  places I publish. It is where the implementation decisions behind the work get
                  explained properly.
                </p>
              </div>

              <aside className="writing-hero__rail" aria-label="Writing archive details">
                <div className="writing-hero__stat">
                  <span className="writing-hero__stat-value">{String(WRITING_ENTRIES.length).padStart(2, '0')}</span>
                  <p>Published pieces currently in the archive.</p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="writing-collection">
          <div className="site-container site-container--work writing-collection__inner">
            {featuredEntry ? (
              <article className="writing-feature">
                <a
                  href={featuredEntry.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="writing-feature__link"
                >
                  <div className="writing-feature__meta">
                    <span>{featuredEntry.platform}</span>
                    <span>{featuredEntry.publishedAt}</span>
                    <span>{featuredEntry.readTime}</span>
                  </div>

                  <div className="writing-feature__body">
                    <div className="writing-feature__copy">
                      <p className="section-label">Featured essay</p>
                      <h2>{featuredEntry.title}</h2>
                      <p className="writing-feature__excerpt">{featuredEntry.excerpt}</p>
                    </div>

                    <div className={`writing-feature__rail${hasFeaturedMedia ? ' writing-feature__rail--with-media' : ''}`}>
                      {hasFeaturedMedia ? (
                        <div className="writing-feature__media">
                          <img
                            src={featuredCoverImage ?? undefined}
                            alt={featuredCoverAlt ?? `${featuredEntry.title} cover image`}
                            loading="eager"
                            decoding="async"
                          />
                        </div>
                      ) : null}

                      <div className="writing-feature__details">
                        <ul className="tag-list">
                          {featuredEntry.tags.map((tag) => (
                            <li key={tag}>{tag}</li>
                          ))}
                        </ul>

                        <div className="action-pill writing-feature__action" aria-hidden="true">
                          <span>Read essay</span>
                          <span className="action-pill__icon">
                            <LinkArrowIcon />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </article>
            ) : (
              <section className="writing-empty" aria-label="Writing archive status">
                <div className="writing-empty__panel">
                  <p className="section-label">Archive status</p>
                  <h2>The writing archive is ready.</h2>
                  <p>
                    Add entries to the curated writing data and published essays will appear here with
                    featured placement, archive cards, and external links back to the original post.
                  </p>
                </div>
              </section>
            )}

            {archiveEntries.length > 0 ? (
              <section className="writing-archive">
                <div className="writing-archive__header">
                  <p className="section-label">Archive</p>
                  <p className="writing-archive__eyebrow">Selected external writing, kept in one place.</p>
                </div>

                <div className="writing-grid">
                  {archiveEntries.map((entry) => (
                    <a
                      key={entry.id}
                      href={entry.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="writing-card"
                    >
                      <div className="writing-card__meta">
                        <span>{entry.platform}</span>
                        <span>{entry.publishedAt}</span>
                        <span>{entry.readTime}</span>
                      </div>

                      <h2>{entry.title}</h2>
                      <p className="writing-card__excerpt">{entry.excerpt}</p>

                      <div className="writing-card__footer">
                        <ul className="tag-list">
                          {entry.tags.map((tag) => (
                            <li key={tag}>{tag}</li>
                          ))}
                        </ul>

                        <span className="text-link writing-card__action" aria-hidden="true">
                          <span>Open article</span>
                          <FiExternalLink />
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        </section>
      </main>
    </>
  );
};

export default WritingPage;
