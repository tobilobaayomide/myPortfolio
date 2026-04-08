import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Link, useLocation } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMoon, FiSun } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import { RESUME_URL, SOCIAL_LINKS } from '../data/siteContent';
import type { Theme } from '../theme';
import { getFocusableElements, setElementInert, trapFocusInContainer } from '../utils/focus';

const NAV_ITEMS = [
  { id: 'projects', label: 'Projects', kind: 'section', href: '/#projects' },
  { id: 'writing', label: 'Writing', kind: 'route', href: '/writing' },
  { id: 'contact', label: 'Contact', kind: 'section', href: '/#contact' },
] as const;

const SECTION_NAV_ITEMS = NAV_ITEMS.filter(
  (item): item is (typeof NAV_ITEMS)[number] & { kind: 'section' } => item.kind === 'section',
);

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

const SOCIAL_ICON_MAP = {
  GitHub: FiGithub,
  LinkedIn: FiLinkedin,
  X: FaXTwitter,
} as const;

type NavbarSectionProps = {
  theme: Theme;
  onToggleTheme: () => void;
};

const NavbarSection = ({ theme, onToggleTheme }: NavbarSectionProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobileNav, setIsMobileNav] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 920 : false,
  );
  const panelRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const location = useLocation();
  const mobileSocialLinks = SOCIAL_LINKS.filter(
    (link): link is (typeof SOCIAL_LINKS)[number] & { label: keyof typeof SOCIAL_ICON_MAP } =>
      link.label === 'GitHub' || link.label === 'LinkedIn' || link.label === 'X',
  );
  const mobilePanelStateProps = isMobileNav && !menuOpen
    ? { 'aria-hidden': true }
    : {};

  useEffect(() => {
    const syncScrollState = () => setIsScrolled(window.scrollY > 12);
    syncScrollState();
    window.addEventListener('scroll', syncScrollState);
    return () => window.removeEventListener('scroll', syncScrollState);
  }, []);

  useEffect(() => {
    if (location.pathname !== '/') {
      if (location.pathname.startsWith('/projects')) {
        setActiveSection('projects');
        return;
      }

      if (location.pathname.startsWith('/writing')) {
        setActiveSection('writing');
        return;
      }

      setActiveSection('home');
      return;
    }

    const syncActiveSection = () => {
      const offset = window.scrollY + 160;
      for (let index = SECTION_NAV_ITEMS.length - 1; index >= 0; index -= 1) {
        const section = document.getElementById(SECTION_NAV_ITEMS[index].id);
        if (section && section.offsetTop <= offset) {
          setActiveSection(SECTION_NAV_ITEMS[index].id);
          return;
        }
      }
      setActiveSection('home');
    };

    syncActiveSection();
    window.addEventListener('scroll', syncActiveSection);
    return () => window.removeEventListener('scroll', syncActiveSection);
  }, [location.pathname]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(max-width: 920px)');
    const syncMobileNav = (event?: MediaQueryListEvent) => {
      setIsMobileNav(event ? event.matches : mediaQuery.matches);
    };
    syncMobileNav();
    mediaQuery.addEventListener('change', syncMobileNav);
    return () => mediaQuery.removeEventListener('change', syncMobileNav);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => { document.body.classList.remove('menu-open'); };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.hash, location.pathname]);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    const main = document.querySelector('main');
    const mainElement = main instanceof HTMLElement ? main : null;

    if (!isMobileNav) {
      setElementInert(mainElement, false);
      return;
    }

    setElementInert(mainElement, menuOpen);

    return () => {
      setElementInert(mainElement, false);
    };
  }, [isMobileNav, menuOpen]);

  // Reset focus back to toggle when menu closes
  useEffect(() => {
    if (menuOpen || !isMobileNav) return;
    const activeElement = document.activeElement;
    const panel = panelRef.current;
    if (activeElement && panel?.contains(activeElement)) {
      toggleRef.current?.focus();
    }
  }, [isMobileNav, menuOpen]);

  useEffect(() => {
    if (!menuOpen || !isMobileNav) {
      return;
    }

    const panel = panelRef.current;

    if (!panel) {
      return;
    }

    const focusableElements = getFocusableElements(panel);
    (focusableElements[0] ?? panel).focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        return;
      }

      trapFocusInContainer(event, panel);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileNav, menuOpen]);

  // Clean up GSAP inline styles when switching to desktop
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(min-width: 921px)');
    const handleViewportExit = (event: MediaQueryListEvent) => {
      if (!event.matches) return;
      setMenuOpen(false);
      const panel = panelRef.current;
      if (!panel) return;
      const items = panel.querySelectorAll('.site-nav__link, .site-nav__social-link, .site-nav__resume, .site-nav__theme-toggle');
      gsap.set([...items], { clearProps: 'all' });
    };
    mediaQuery.addEventListener('change', handleViewportExit);
    return () => mediaQuery.removeEventListener('change', handleViewportExit);
  }, []);

  // GSAP animates ONLY the inner contents — CSS owns panel visibility
  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.innerWidth > 920) return;

    const panel = panelRef.current;
    if (!panel) return;

    const navLinks = panel.querySelectorAll('.site-nav__link');
    const socialLinks = panel.querySelectorAll('.site-nav__social-link');
    const resumeButton = panel.querySelector('.site-nav__resume');
    const themeButton = panel.querySelector('.site-nav__theme-toggle');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const animatedItems = [
      ...navLinks,
      ...socialLinks,
      ...(resumeButton ? [resumeButton] : []),
      ...(themeButton ? [themeButton] : []),
    ];

    gsap.killTweensOf(animatedItems);

    if (prefersReducedMotion) {
      gsap.set(animatedItems, {
        autoAlpha: menuOpen ? 1 : 0,
        x: 0,
        y: 0,
        scale: 1,
      });
      return;
    }

    if (menuOpen) {
      // Panel is becoming visible via CSS — wait a frame so clip-path
      // transition has started before we animate the contents in
      gsap.set(navLinks, { autoAlpha: 0, x: 32, y: 18 });
      gsap.set(socialLinks, { autoAlpha: 0, y: 18, scale: 0.92 });
      gsap.set(resumeButton, { autoAlpha: 0, y: 26, scale: 0.92 });
      gsap.set(themeButton, { autoAlpha: 0, y: 22, scale: 0.96 });

      gsap.timeline({ delay: 0.18 })
        .to(navLinks, {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: 0.52,
          ease: 'power4.out',
          stagger: 0.08,
        })
        .to(socialLinks, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.38,
          ease: 'power3.out',
          stagger: 0.05,
        }, 0.08)
        .to(resumeButton, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.44,
          ease: 'power3.out',
        }, 0.12);

      gsap.to(themeButton, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: 'power3.out',
        delay: 0.26,
      });

      return;
    }

    // Animate contents out — CSS clip-path closes after
    gsap.timeline()
      .to(resumeButton, {
        autoAlpha: 0,
        y: 18,
        scale: 0.96,
        duration: 0.14,
        ease: 'power2.in',
      }, 0)
      .to(socialLinks, {
        autoAlpha: 0,
        y: 14,
        scale: 0.96,
        duration: 0.12,
        ease: 'power2.in',
        stagger: { each: 0.03, from: 'end' },
      }, 0.02)
      .to(themeButton, {
        autoAlpha: 0,
        y: 14,
        scale: 0.96,
        duration: 0.12,
        ease: 'power2.in',
      }, 0.02)
      .to(navLinks, {
        autoAlpha: 0,
        x: 20,
        y: 18,
        duration: 0.16,
        ease: 'power2.in',
        stagger: { each: 0.04, from: 'end' },
      }, 0.04);
  }, [menuOpen]);

  const isActive = (item: (typeof NAV_ITEMS)[number]) => {
    if (item.kind === 'route') {
      return location.pathname === item.href || location.pathname.startsWith(`${item.href}/`);
    }

    if (location.pathname !== '/') {
      return item.id === 'projects' && location.pathname.startsWith('/projects');
    }

    return activeSection === item.id;
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const nextThemeLabel = theme === 'dark' ? 'Light' : 'Dark';
  const ThemeIcon = theme === 'dark' ? FiSun : FiMoon;

  return (
    <header className="site-header">
      <nav className={`site-nav${isScrolled ? ' is-scrolled' : ''}`}>
        <div className="site-container site-container--work site-nav__inner">
          <div className="site-nav__frame">
            <Link to="/" className="site-brand" aria-label="Go to homepage">
              <span className="site-brand__script">
                <span className="site-brand__script-letter">T</span>
                <span className="site-brand__script-letter site-brand__script-letter--accent">A</span>
              </span>
            </Link>

            <button
              type="button"
              className="site-nav__toggle"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              ref={toggleRef}
              onClick={() => setMenuOpen((current) => !current)}
            >
              {menuOpen ? 'Close' : 'Menu'}
            </button>

            <div
              className={`site-nav__panel${menuOpen ? ' is-open' : ''}`}
              ref={panelRef}
              tabIndex={-1}
              {...mobilePanelStateProps}
            >
              <ul className="site-nav__links">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    {item.kind === 'route' ? (
                      <Link
                        to={item.href}
                        className={`site-nav__link${isActive(item) ? ' is-active' : ''}`}
                        onClick={handleLinkClick}
                      >
                        <span>{item.label}</span>
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className={`site-nav__link${isActive(item) ? ' is-active' : ''}`}
                        onClick={handleLinkClick}
                      >
                        <span>{item.label}</span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`site-nav__theme-toggle${theme === 'light' ? ' is-light' : ''}`}
                role="switch"
                aria-checked={theme === 'light'}
                aria-label={`Switch to ${nextThemeLabel.toLowerCase()} mode`}
                onClick={onToggleTheme}
              >
                <span className="site-nav__theme-icon" aria-hidden="true">
                  <ThemeIcon />
                </span>
                <span className="sr-only">{`Switch to ${nextThemeLabel.toLowerCase()} mode`}</span>
              </button>

              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="action-pill site-nav__resume"
                onClick={handleLinkClick}
              >
                <span>Resume</span>
                <span className="action-pill__icon">
                  <LinkArrowIcon />
                </span>
              </a>

              <div className="site-nav__socials" aria-label="Social links">
                {mobileSocialLinks.map((link) => {
                  const Icon = SOCIAL_ICON_MAP[link.label];

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="site-nav__social-link"
                      aria-label={link.label}
                      onClick={handleLinkClick}
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {isMobileNav && menuOpen && (
        <div
          className="site-nav__backdrop"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default NavbarSection;
