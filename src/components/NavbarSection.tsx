import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NavbarSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    setActiveSection(id);
    
    // If not on home page, navigate home first
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          // Scroll to top of section (no offset for glass navbar)
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          // Scroll to top of section (no offset for glass navbar)
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, menuOpen ? 300 : 0);
    }
  };

  return (
    <>
      <nav className={`navbar-glass${isScrolled ? ' scrolled' : ''}`}>
        <div className="navbar-glass-content">
          <ul className="navbar-glass-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`} 
                  className={activeSection === item.id ? 'active' : ''}
                  onClick={e => { e.preventDefault(); handleNav(item.id); }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="navbar-glass-hamburger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      {menuOpen && (
        <div 
          className={`navbar-glass-backdrop ${menuOpen ? 'visible' : ''}`}
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div className={`navbar-glass-mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button
          className="navbar-glass-close"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>
        <ul className="navbar-glass-mobile-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
                onClick={e => { e.preventDefault(); handleNav(item.id); }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavbarSection;
