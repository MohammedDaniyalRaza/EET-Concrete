import { ArrowLeft, Phone } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { Button } from '../components/ui/Button';
import { SITE_CONFIG } from '../data/site';

export default function NotFound() {
  return (
    <PageTransition>
      <section className="min-h-[82vh] pt-32 pb-20 flex items-center justify-center bg-[#0B0D0C] concrete-grain px-4">
        <div className="max-w-xl w-full text-center p-8 sm:p-12 rounded-md metallic-bevel-card">
          <img
            src={SITE_CONFIG.logoPath}
            alt="EET Concrete Shield Logo"
            className="w-24 h-24 mx-auto object-contain mb-6"
          />

          <div className="font-display text-6xl sm:text-7xl font-extrabold outlined-index leading-none tabular-nums">
            404
          </div>

          <h1 className="mt-3 font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#F2F5F1]">
            Page Not Found
          </h1>

          <p className="mt-3 text-sm sm:text-base text-[#9AA39C] leading-relaxed">
            The page you are looking for isn&apos;t here or may have moved. Head back to
            the home page or call us directly for an estimate.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Button to="/" variant="primary" size="md" className="w-full sm:w-auto">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Back to Home</span>
            </Button>

            <Button
              href={SITE_CONFIG.phoneHref}
              variant="secondary"
              size="md"
              className="w-full sm:w-auto"
            >
              <Phone className="w-4 h-4 text-[#7CFF3A]" aria-hidden="true" />
              <span>Call {SITE_CONFIG.phoneDisplay}</span>
            </Button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
