import { Facebook, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { PageTransition } from '../components/layout/PageTransition';
import { PageHero } from '../components/ui/PageHero';
import { QuoteForm } from '../components/ui/QuoteForm';
import { SITE_CONFIG } from '../data/site';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service') || '';

  return (
    <PageTransition>
      <PageHero
        eyebrow="Free On-Site Estimates"
        title="Get a Concrete Quote"
        subtitle="Call 402-203-6793 directly or send your project details below. Serving homeowners and commercial properties across Eastern Nebraska."
        image="/images/projects/curved-walkway-shop.jpg"
        imageAlt="Completed residential concrete sidewalk by EET Concrete"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />

      <section className="py-16 sm:py-24 bg-[#0B0D0C] concrete-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Direct Contact Cards */}
            <div className="lg:col-span-5 space-y-5">
              {/* Phone Card */}
              <a
                href={SITE_CONFIG.phoneHref}
                className="block p-6 rounded-md metallic-bevel-green bg-[#121613] shine-sweep group transition-all hover:border-[#7CFF3A]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm metallic-green-gradient flex items-center justify-center text-[#081006] shrink-0">
                    <Phone className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7CFF3A]">
                      Call for Immediate Scheduling
                    </span>
                    <div className="mt-1 font-display text-3xl sm:text-4xl font-extrabold text-[#F2F5F1] group-hover:text-[#7CFF3A] transition-colors tabular-nums">
                      {SITE_CONFIG.phoneDisplay}
                    </div>
                    <p className="mt-1.5 text-sm text-[#9AA39C]">
                      Tap to call directly for free estimates on residential or commercial concrete work.
                    </p>
                  </div>
                </div>
              </a>

              {/* Facebook Card */}
              <a
                href={SITE_CONFIG.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-md metallic-bevel-card shine-sweep group transition-all hover:border-[#7CFF3A]/45"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm bg-[#1A1F1B] border border-[#7CFF3A]/35 flex items-center justify-center text-[#7CFF3A] shrink-0">
                    <Facebook className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9AA39C]">
                      Follow Recent Pours
                    </span>
                    <div className="mt-1 font-display text-2xl font-bold uppercase tracking-tight text-[#F2F5F1] group-hover:text-[#7CFF3A] transition-colors">
                      EET Concrete on Facebook
                    </div>
                    <p className="mt-1.5 text-sm text-[#9AA39C]">
                      See our latest jobsite updates and finished concrete projects across Eastern Nebraska.
                    </p>
                  </div>
                </div>
              </a>

              {/* Service Area Card */}
              <div className="p-6 rounded-md metallic-bevel-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm bg-[#1A1F1B] border border-[#F2F5F1]/12 flex items-center justify-center text-[#7CFF3A] shrink-0">
                    <MapPin className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9AA39C]">
                      Coverage Region
                    </span>
                    <h2 className="mt-1 font-display text-2xl font-bold uppercase tracking-tight text-[#F2F5F1]">
                      Eastern Half of Nebraska
                    </h2>
                    <p className="mt-2 text-sm text-[#9AA39C] leading-relaxed">
                      {SITE_CONFIG.regionDescription}
                    </p>
                  </div>
                </div>
              </div>

              {/* Estimate Note */}
              <div className="p-5 rounded-md border border-[#F2F5F1]/10 bg-[#101311] flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#7CFF3A] shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-xs sm:text-sm text-[#9AA39C] leading-relaxed">
                  Every quote includes an on-site grade and drainage inspection so there are
                  no surprises on pour day.
                </p>
              </div>
            </div>

            {/* Quote Request Form */}
            <div className="lg:col-span-7">
              <div className="mb-6">
                <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#F2F5F1]">
                  Request Your Free Estimate
                </h2>
                <p className="mt-2 text-sm sm:text-base text-[#9AA39C]">
                  Tell us what you are looking to pour, repair, or replace and we will get
                  back to you promptly.
                </p>
              </div>

              <QuoteForm defaultServiceSlug={serviceParam} />
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
