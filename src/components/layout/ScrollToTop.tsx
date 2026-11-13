import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from '../../lib/gsap';

export function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const timer = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 80);

    return () => window.clearTimeout(timer);
  }, [pathname, search]);

  return null;
}
