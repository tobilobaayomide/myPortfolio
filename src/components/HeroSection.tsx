import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import portraitImage from '../assets/Bazaart.png';
import { attachInteractiveSheen } from '../utils/interactiveSheen';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const ledeRef = useRef<HTMLParagraphElement | null>(null);
  const visualRef = useRef<HTMLDivElement | null>(null);
  const portraitRef = useRef<HTMLImageElement | null>(null);

  useLayoutEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const section = sectionRef.current;
    const title = titleRef.current;
    const lede = ledeRef.current;
    const visual = visualRef.current;
    const portrait = portraitRef.current;

    if (!section || !title || !lede || !visual || !portrait) {
      return;
    }

    const detachInteractiveSheen = attachInteractiveSheen(title);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return detachInteractiveSheen;
    }

    const context = gsap.context(() => {
      const nameParts = title.querySelectorAll('.hero-intro__name-part');

      gsap.set(nameParts, {
        autoAlpha: 0,
        yPercent: 110,
      });

      gsap.set(lede, {
        autoAlpha: 0,
        y: 26,
      });

      gsap.set(visual, {
        autoAlpha: 0,
        x: 26,
        y: 30,
        clipPath: 'inset(0 0 0 38%)',
      });

      gsap.set(portrait, {
        autoAlpha: 0,
        xPercent: 10,
        scale: 1.22,
      });

      gsap.timeline({
        defaults: {
          ease: 'power4.out',
        },
      })
        .to(nameParts, {
          autoAlpha: 1,
          yPercent: 0,
          duration: 0.82,
          stagger: 0.12,
        }, 0)
        .to(visual, {
          autoAlpha: 1,
          x: 0,
          y: 0,
          clipPath: 'inset(0 0 0 0%)',
          duration: 1.02,
        }, 0.08)
        .to(portrait, {
          autoAlpha: 1,
          xPercent: 0,
          scale: 1.14,
          duration: 1.08,
        }, 0.08)
        .to(lede, {
          autoAlpha: 1,
          y: 0,
          duration: 0.56,
          ease: 'power3.out',
        }, 0.42);

      gsap.to(portrait, {
        yPercent: 7,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.9,
        },
      });
    }, section);

    return () => {
      detachInteractiveSheen();
      context.revert();
    };
  }, []);

  return (
    <section id="home" className="hero-intro" ref={sectionRef}>
      <div className="site-container site-container--work hero-intro__grid">
        <div className="hero-intro__copy">
          <h1 className="hero-intro__title" ref={titleRef}>
            <span className="hero-intro__name-part">Tobiloba</span>
            <span className="hero-intro__name-part">Ayomide</span>
          </h1>
          <p className="hero-intro__lede" ref={ledeRef}>
           I'm frontend engineer who builds digital products that feels as good as they look. I care about clarity, trust, and the small details that make interfaces memorable from the way a component is structured to the way a user moves through a page.
          </p>
        </div>

        <div className="hero-intro__visual" aria-hidden="true" ref={visualRef}>
          <img className="hero-intro__portrait" src={portraitImage} alt="" ref={portraitRef} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
