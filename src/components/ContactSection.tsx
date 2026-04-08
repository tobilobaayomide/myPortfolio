import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  CONTACT_EMAIL,
  RESUME_URL,
  SOCIAL_LINKS,
} from '../data/siteContent';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const copyRef = useRef<HTMLDivElement | null>(null);
  const channelRef = useRef<HTMLDivElement | null>(null);
  const secondaryLinks = [
    { label: 'Resume', href: RESUME_URL },
    ...SOCIAL_LINKS.filter((link) => link.label !),
  ];
  const [localPart, domainPart] = CONTACT_EMAIL.split('@');

  useLayoutEffect(() => {
    if (
      typeof window === 'undefined'
      || window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const section = sectionRef.current;
    const copy = copyRef.current;
    const channel = channelRef.current;

    if (!section || !copy || !channel) {
      return;
    }

    const context = gsap.context(() => {
      const copyItems = copy.querySelectorAll(':scope > *');
      const email = channel.querySelector('.closing-strip__email');
      const linksGroup = channel.querySelector('.closing-strip__links');
      const links = channel.querySelectorAll('.text-link');

      if (!email || !linksGroup || links.length === 0) {
        return;
      }

      gsap.set(copyItems, {
        autoAlpha: 0,
        y: 28,
      });

      gsap.set(channel, {
        autoAlpha: 0,
        x: 26,
      });

      gsap.set(email, {
        clipPath: 'inset(0 0 100% 0)',
      });

      gsap.set(linksGroup, {
        autoAlpha: 0,
        y: 18,
      });

      gsap.set(links, {
        autoAlpha: 0,
        x: 18,
        y: 14,
      });

      gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          once: true,
        },
      })
        .to(copyItems, {
          autoAlpha: 1,
          y: 0,
          duration: 0.78,
          stagger: 0.1,
        }, 0)
        .to(channel, {
          autoAlpha: 1,
          x: 0,
          duration: 0.88,
          ease: 'power4.out',
        }, 0.12)
        .to(email, {
          clipPath: 'inset(0 0 0% 0)',
          duration: 0.82,
        }, 0.28)
        .to(linksGroup, {
          autoAlpha: 1,
          y: 0,
          duration: 0.48,
        }, 0.42)
        .to(links, {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: 0.54,
          stagger: 0.08,
        }, 0.48);
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section id="contact" className="closing-section" ref={sectionRef}>
      <div className="site-container site-container--work closing-strip">
        <div className="closing-strip__copy" ref={copyRef}>
          <p className="section-label">Contact</p>
          <h2>Say hello.</h2>
          <p>For projects that need clarity, craft, and care.</p>
        </div>

        <div className="closing-strip__channel" ref={channelRef}>
          <a href={`mailto:${CONTACT_EMAIL}`} className="closing-strip__email">
            <span>{localPart}</span>
            {domainPart ? (
              <span className="closing-strip__email-domain">{`@${domainPart}`}</span>
            ) : null}
          </a>

          <div className="closing-strip__links">
            {secondaryLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-link"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
