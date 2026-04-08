import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { METHOD_APPROACH, METHOD_PRINCIPLES } from '../data/siteContent';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const introRef = useRef<HTMLDivElement | null>(null);
  const boardRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (
      typeof window === 'undefined'
      || window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const section = sectionRef.current;
    const intro = introRef.current;
    const board = boardRef.current;

    if (!section || !intro || !board) {
      return;
    }

    const context = gsap.context(() => {
      const introItems = intro.querySelectorAll(':scope > *');
      const principles = board.querySelectorAll('.method-principle');

      gsap.set(introItems, {
        autoAlpha: 0,
        y: 24,
      });

      gsap.set(principles, {
        autoAlpha: 0,
        y: 34,
        x: (index) => (index % 2 === 0 ? -14 : 14),
      });

      gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
        scrollTrigger: {
          trigger: section,
          start: 'top 78%',
          once: true,
        },
      })
        .to(introItems, {
          autoAlpha: 1,
          y: 0,
          duration: 0.78,
          stagger: 0.1,
        })
        .to(principles, {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: 0.72,
          stagger: 0.12,
        }, 0.2);
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section id="about" className="method-section" ref={sectionRef}>
      <div className="site-container site-container--work method-layout">
        <div className="method-intro" ref={introRef}>
          <p className="section-label">{METHOD_APPROACH.label}</p>
          <div className="method-intro__body">
            <h2 className="section-title--sheen">{METHOD_APPROACH.title}</h2>
            <p>{METHOD_APPROACH.summary}</p>
          </div>
        </div>

        <div className="method-board" ref={boardRef}>
          {METHOD_PRINCIPLES.map((principle, index) => (
            <article key={principle.title} className="method-principle">
              <p className="method-principle__index">{`0${index + 1}`}</p>
              <div className="method-principle__main">
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
