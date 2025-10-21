import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavbarSection from '../components/NavbarSection';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import FooterSection from '../components/FooterSection';

function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-quart',
      offset: 100,
      once: true
    });
  }, []);

  return (
    <>
      <NavbarSection />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}

export default HomePage;
