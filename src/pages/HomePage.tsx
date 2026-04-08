import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavbarSection from '../components/NavbarSection';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import type { Theme } from '../theme';

type HomePageProps = {
  theme: Theme;
  onToggleTheme: () => void;
};

function HomePage({ theme, onToggleTheme }: HomePageProps) {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      return;
    }

    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));

      if (target) {
        window.requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }

      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.hash, location.pathname]);

  return (
    <>
      <NavbarSection theme={theme} onToggleTheme={onToggleTheme} />
      <main className="site-main">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  );
}

export default HomePage;
