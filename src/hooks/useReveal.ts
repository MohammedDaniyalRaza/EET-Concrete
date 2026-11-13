import { useEffect, RefObject } from 'react';
import { ensureGsapRegistered, gsap } from '../lib/gsap';

interface RevealOptions {
  y?: number;
  duration?: number;
  stagger?: number;
  selector?: string;
}

export function useReveal(ref: RefObject<HTMLElement | null>, options: RevealOptions = {}) {
  const { y = 26, duration = 0.7, stagger = 0.08, selector = '[data-reveal]' } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    ensureGsapRegistered();

    const ctx = gsap.context(() => {
      const targets = el.querySelectorAll(selector);
      if (targets.length === 0) return;

      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: el,
            start: 'top 86%',
            once: true,
          },
        }
      );
    }, el);

    return () => {
      ctx.revert();
    };
  }, [ref, y, duration, stagger, selector]);
}
