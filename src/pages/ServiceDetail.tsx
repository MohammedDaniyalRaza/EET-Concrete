import { ArrowLeft, ArrowRight, Check, Phone } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { CTABanner } from '../components/home/CTABanner';
import { PageTransition } from '../components/layout/PageTransition';
import { Accordion } from '../components/ui/Accordion';
import { Button } from '../components/ui/Button';
import { PageHero } from '../components/ui/PageHero';
import { SafeImage } from '../components/ui/SafeImage';
import { ServiceCard } from '../components/ui/ServiceCard';
import { ServiceIcon } from '../components/ui/ServiceIcon';
import { getServiceBySlug, SERVICES } from '../data/services';
import { SITE_CONFIG } from '../data/site';
import NotFound from './NotFound';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <NotFound />;
  }

  const relatedServices = SERVICES.filter((s) =>
    service.relatedSlugs.includes(s.slug)
  ).slice(0, 3);

  return (
    <PageTransition>
      <PageHero
        eyebrow={`${service.id} · ${service.category}`}
        title={service.name}
        subtitle={service.headline}
        image={service.image || '/images/hero/patio-finish-hero.jpg'}
        imageAlt={service.name}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: service.name },
        ]}
      />

      {/* Overview & Photo Split */}
      <section className="py-16 sm:py-24 bg-[#0B0D0C] concrete-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-6">
              <div className="rounded-md overflow-hidden metallic-bevel-green aspect-[4/3]">
                <SafeImage
                  src={service.image}
                  alt={service.name}
                  objectPosition={service.imagePosition || 'center center'}
                  fallbackLabel={service.name}
                  priority
                />
              </div>

              <div className="mt-6 p-5 rounded-md metallic-bevel-card flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-[#1B241A] border border-[#7CFF3A]/35 flex items-center justify-center text-[#7CFF3A] shrink-0">
                    <ServiceIcon name={service.icon} className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#7CFF3A]">
                      Free On-Site Estimate
                    </div>
                    <div className="text-sm font-medium text-[#F2F5F1]">
                      Eastern Nebraska · Residential &amp; Commercial
                    </div>
                  </div>
                </div>

                <Button
                  to={`/contact?service=${service.slug}`}
                  variant="primary"
                  size="sm"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-8">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#F2F5F1]">
                  Scope &amp; Craftsmanship
                </h2>
                <p className="mt-4 text-base sm:text-lg text-[#9AA39C] leading-relaxed">
                  {service.overview}
                </p>
              </div>

              {/* What's Included */}
              <div className="p-6 rounded-md metallic-bevel-card">
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-[#F2F5F1] mb-4">
                  What&apos;s Included
                </h3>
                <ul className="space-y-3">
                  {service.whatsIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-[#DCE5DB]">
                      <span className="mt-1 w-5 h-5 rounded-sm bg-[#2FB30F]/20 border border-[#7CFF3A]/40 flex items-center justify-center text-[#7CFF3A] shrink-0">
                        <Check className="w-3.5 h-3.5" aria-hidden="true" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Benefits */}
              <div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-[#F2F5F1] mb-3">
                  Long-Term Benefits
                </h3>
                <ul className="space-y-2.5 text-sm sm:text-base text-[#9AA39C]">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5">
                      <span className="text-[#7CFF3A] font-bold" aria-hidden="true">
                        —
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <Button href={SITE_CONFIG.phoneHref} variant="primary" size="lg">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>Call {SITE_CONFIG.phoneDisplay}</span>
                </Button>
                <Button
                  to={`/contact?service=${service.slug}`}
                  variant="secondary"
                  size="lg"
                >
                  <span>Schedule Estimate</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-16 sm:py-20 bg-[#101411] border-t border-[#F2F5F1]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7CFF3A]">
              How We Build It
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#F2F5F1]">
              {service.name} Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.process.map((item, idx) => (
              <div key={item.step} className="p-6 rounded-md metallic-bevel-card">
                <span className="font-display text-3xl font-extrabold text-[#7CFF3A] tabular-nums">
                  0{idx + 1}
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold uppercase tracking-tight text-[#F2F5F1]">
                  {item.step}
                </h3>
                <p className="mt-2 text-sm text-[#9AA39C] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service FAQs */}
      <section className="py-16 sm:py-20 bg-[#0B0D0C] border-t border-[#F2F5F1]/8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7CFF3A]">
              Service Questions
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#F2F5F1]">
              {service.name} FAQ
            </h2>
          </div>
          <Accordion items={service.faqs} />
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 sm:py-20 bg-[#121513] border-t border-[#F2F5F1]/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7CFF3A]">
                  Related Scope
                </span>
                <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#F2F5F1]">
                  Often Paired Together
                </h2>
              </div>

              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#7CFF3A] hover:text-[#A6FF75]"
              >
                <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
                <span>All 15 Services</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((rel) => (
                <ServiceCard key={rel.slug} service={rel} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        title={`Ready for a ${service.name} Estimate?`}
        subtitle="Call 402-203-6793 or submit your project details online. Free estimates across Eastern Nebraska."
      />
    </PageTransition>
  );
}
