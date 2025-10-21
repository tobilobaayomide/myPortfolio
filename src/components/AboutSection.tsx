const AboutSection = () => {
  const skills = [
    // Frontend Core
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Sass', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'Radix UI', icon: 'https://avatars.githubusercontent.com/u/75042455?s=200&v=4' },
    { name: 'Zustand', icon: 'https://raw.githubusercontent.com/pmndrs/zustand/main/docs/bear.jpg' },
    
    // Backend & APIs
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
    
    // Web3 & Blockchain
    { name: 'Ethers.js', icon: 'https://docs.ethers.org/v5/static/logo.svg' },
    { name: 'Hardhat', icon: 'https://hardhat.org/card.jpg' },
    { name: 'Wagmi', icon: 'https://wagmi.sh/logo-dark.svg' },
    
    // Tools & Workflow (using white/plain versions for dark logos)
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
    { name: 'Vite', icon: 'https://vitejs.dev/logo.svg' },
    { name: 'Vercel', icon: 'https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png' },
    { name: 'Netlify', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg' }
  ];

  // Duplicate skills for infinite loop effect
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section id="about" className="about-modern">
      <div className="about-container">
        {/* Page Header */}
        <div className="about-header" data-aos="fade-up">
          <h2 className="about-page-title">About Me</h2>
        </div>

        {/* Grid Layout - Who I Am (Left) & Education (Right) */}
        <div className="about-grid">
          {/* Who I Am - Left */}
          <div className="about-intro" data-aos="fade-right">
            <span className="about-label">WHO I AM</span>
            <h3 className="about-section-title">
              Turning Ideas Into Interactive Realities
            </h3>
            <p className="about-description">
              I’m a Computer Science graduate with a knack for turning ideas into interactive web and blockchain products. I enjoy that sweet spot between design and development where visuals meet logic and creativity meets performance. Always curious, always learning, I’m driven by the thrill of solving problems and building tools that people actually enjoy using.
            </p>
          </div>

          {/* Vertical Divider */}
          <div className="about-divider"></div>

          {/* Education - Right */}
          <div className="about-education" data-aos="fade-left">
            <span className="about-label">EDUCATION</span>
            <h3 className="about-section-title">Academic Background</h3>
            <div className="education-info">
              <svg className="education-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 14L21 9L12 4L3 9L12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 14L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 11.5V16.5C7 16.5 9 19 12 19C15 19 17 16.5 17 16.5V11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="education-details">
                <p className="education-degree">Bachelor of Science</p>
                <p className="education-major">Computer Science</p>
                <p className="education-school">University of Ilorin • 2019 - 2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Skills - Full Width Below */}
        <div className="about-skills" data-aos="fade-up" data-aos-delay="200">
          <span className="about-label">Technical Skills</span>
          <h3 className="skills-title">Tools & Technologies I Build With</h3>
          
          {/* Animated Skills Carousel */}
          <div className="skills-carousel">
            <div className="skills-track">
              {duplicatedSkills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-logo-wrapper">
                    <img src={skill.icon} alt={skill.name} className="skill-logo" />
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
