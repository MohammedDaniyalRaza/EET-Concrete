import { useEffect, useRef } from 'react';
import { ArrowDown, ArrowRight, Phone } from 'lucide-react';
import { SITE_CONFIG } from '../../data/site';
import { ensureGsapRegistered, gsap } from '../../lib/gsap';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { SafeImage } from '../ui/SafeImage';

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    const bg = bgRef.current;
    if (!el || !bg) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    if (prefersReduced || isMobile) return;

    ensureGsapRegistered();

    const ctx = gsap.context(() => {
      gsap.to(bg, {
        yPercent: 14,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100svh] flex flex-col justify-between pt-24 sm:pt-32 pb-20 md:pb-8 overflow-hidden bg-[#0B0D0C]"
    >
      {/* Sharp Project Backdrop Image (no blur on hero!) */}
      <div
        ref={bgRef}
        className="absolute inset-0 -top-10 -bottom-10 pointer-events-none select-none will-change-transform"
      >
        <SafeImage
          src="/images/hero/commercial-steps-hero.jpg"
          alt="Freshly poured commercial concrete steps and entry landing by EET Concrete in Eastern Nebraska"
          priority
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Measured contrast gradient overlays + subtle metallic green glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(105deg, rgba(11,13,12,0.94) 0%, rgba(11,13,12,0.82) 48%, rgba(11,13,12,0.45) 100%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(11,13,12,0.72) 0%, transparent 25%, rgba(11,13,12,0.55) 75%, #0B0D0C 100%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 45% at 22% 45%, rgba(47, 179, 15, 0.2), transparent 72%)',
        }}
        aria-hidden="true"
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 my-auto py-6 sm:py-12">
        <div className="max-w-3xl">
          <Badge className="mb-5 sm:mb-6">Serving Eastern Nebraska · Free Estimates</Badge>

          <h1 className="font-display text-[44px] sm:text-7xl lg:text-[84px] font-extrabold uppercase tracking-tight text-[#F2F5F1] leading-[0.94]">
            Built Solid.{' '}
            <span className="block metallic-green-text">Poured Right.</span>
          </h1>

          <p className="mt-5 sm:mt-6 text-base sm:text-xl text-[#DCE5DB] max-w-xl leading-relaxed">
            Residential and commercial concrete contractor serving the eastern half of
            Nebraska. Engineered base prep, clean reinforcement, and crisp finishes built
            to handle Midwest freeze-thaw winters.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-4">
            <Button
              href={SITE_CONFIG.phoneHref}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>Call {SITE_CONFIG.phoneDisplay}</span>
            </Button>

            <Button
              to="/contact"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4 text-[#7CFF3A]" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Capabilities Strip + Scroll Indicator */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-[#F2F5F1]/12">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-8 flex-1">
            {SITE_CONFIG.highlights.map((item) => (
              <div key={item.value} className="min-w-0">
                <div className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F2F5F1] tabular-nums">
                  {item.value}
                </div>
                <div className="text-xs text-[#9AA39C] mt-0.5 leading-snug">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>

          <a
            href="#services-showcase"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#9AA39C] hover:text-[#7CFF3A] transition-colors shrink-0"
          >
            <span>Scroll to explore</span>
            <ArrowDown className="w-4 h-4 text-[#7CFF3A]" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
