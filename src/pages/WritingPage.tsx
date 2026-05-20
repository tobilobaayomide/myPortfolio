import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import NavbarSection from '../components/NavbarSection';
import { WRITING_ENTRIES, type WritingEntry } from '../data/writingData';
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

type WritingArticleProps = {
  entry: WritingEntry;
  cover: WritingCover | null;
  label: string;
  imageLoading: 'eager' | 'lazy';
};

const WritingArticle = ({ entry, cover, label, imageLoading }: WritingArticleProps) => {
  const coverImage = entry.coverImage ?? cover?.coverImage ?? null;
  const coverAlt = entry.coverAlt ?? cover?.coverAlt ?? null;
  const hasMedia = Boolean(coverImage);

  return (
    <article className="writing-feature">
      <a
        href={entry.url}
        target="_blank"
        rel="noopener noreferrer"
        className="writing-feature__link"
      >
        <div className="writing-feature__meta">
          <span>{entry.platform}</span>
          <span>{entry.publishedAt}</span>
          <span>{entry.readTime}</span>
        </div>

        <div className="writing-feature__body">
          <div className="writing-feature__copy">
            <p className="section-label">{label}</p>
            <h2>{entry.title}</h2>
            <p className="writing-feature__excerpt">{entry.excerpt}</p>
          </div>

          <div className={`writing-feature__rail${hasMedia ? ' writing-feature__rail--with-media' : ''}`}>
            {hasMedia ? (
              <div className="writing-feature__media">
                <img
                  src={coverImage ?? undefined}
                  alt={coverAlt ?? `${entry.title} cover image`}
                  loading={imageLoading}
                  decoding="async"
                />
              </div>
            ) : null}

            <div className="writing-feature__details">
              <ul className="tag-list">
                {entry.tags.map((tag) => (
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
  );
};

const WritingPage = ({ theme, onToggleTheme }: WritingPageProps) => {
  const pageRef = useRef<HTMLElement | null>(null);
  const [resolvedCovers, setResolvedCovers] = useState<Record<string, WritingCover | null>>({});

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

  useEffect(() => {
    const entriesNeedingCovers = WRITING_ENTRIES.filter((entry) => !entry.coverImage);

    if (entriesNeedingCovers.length === 0) {
      setResolvedCovers({});
      return;
    }

    const controller = new AbortController();
    setResolvedCovers({});

    const loadArticleCovers = async () => {
      const coverEntries = await Promise.all(
        entriesNeedingCovers.map(async (entry) => {
          try {
            const cover = await fetchWritingCover(entry.url, controller.signal);
            return [entry.id, cover] as const;
          } catch {
            return [entry.id, null] as const;
          }
        }),
      );

      if (!controller.signal.aborted) {
        setResolvedCovers(Object.fromEntries(coverEntries));
      }
    };

    void loadArticleCovers();

    return () => {
      controller.abort();
    };
  }, []);

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
              <WritingArticle
                entry={featuredEntry}
                cover={resolvedCovers[featuredEntry.id] ?? null}
                label="Featured essay"
                imageLoading="eager"
              />
            ) : (
              <section className="writing-empty" aria-label="Writing archive status">
                <div className="writing-empty__panel">
                  <p className="section-label">Archive status</p>
                  <h2>The writing archive is ready.</h2>
                  <p>
                    Add entries to the curated writing data and published essays will appear here with
                    consistent feature layouts and external links back to the original post.
                  </p>
                </div>
              </section>
            )}

            {archiveEntries.length > 0 ? (
              <section className="writing-archive">

                <div className="writing-archive__list">
                  {archiveEntries.map((entry, index) => (
                    <WritingArticle
                      key={entry.id}
                      entry={entry}
                      cover={resolvedCovers[entry.id] ?? null}
                      label={`Essay ${String(index + 2).padStart(2, '0')}`}
                      imageLoading="lazy"
                    />
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
