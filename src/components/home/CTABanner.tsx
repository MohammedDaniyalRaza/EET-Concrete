import { ArrowRight, Phone } from 'lucide-react';
import { SITE_CONFIG } from '../../data/site';
import { Button } from '../ui/Button';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export function CTABanner({
  title = 'Ready to Pour Something That Lasts?',
  subtitle = 'Serving homeowners, contractors, and businesses across the eastern half of Nebraska. Request your free on-site estimate today.',
}: CTABannerProps) {
  return (
    <section className="relative py-20 sm:py-24 overflow-hidden bg-[#0B0D0C] border-t border-[#7CFF3A]/25">
      {/* Subtle metallic green radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(47, 179, 15, 0.22) 0%, rgba(20, 90, 8, 0.08) 48%, transparent 80%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#7CFF3A] mb-3">
          Free Estimates · Eastern Nebraska
        </span>

        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#F2F5F1] leading-[0.98]">
          {title}
        </h2>

        <p className="mt-4 text-base sm:text-lg text-[#DCE5DB] max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
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
            <span>Request a Free Quote</span>
            <ArrowRight className="w-4 h-4 text-[#7CFF3A]" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
