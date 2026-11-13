import { useState } from 'react';
import { Phone } from 'lucide-react';
import { CTABanner } from '../components/home/CTABanner';
import { PageTransition } from '../components/layout/PageTransition';
import { Button } from '../components/ui/Button';
import { PageHero } from '../components/ui/PageHero';
import { ServiceCard } from '../components/ui/ServiceCard';
import {
  SERVICE_CATEGORIES,
  SERVICES,
  type ServiceCategory,
} from '../data/services';
import { SITE_CONFIG } from '../data/site';
import { cn } from '../lib/utils';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<'All' | ServiceCategory>('All');

  const filteredServices =
    activeCategory === 'All'
      ? SERVICES
      : SERVICES.filter((svc) => svc.category === activeCategory);

  return (
    <PageTransition>
      <PageHero
        eyebrow="15 Concrete Services"
        title="Residential & Commercial Concrete"
        subtitle="From tear-out and subgrade prep to structural slabs, decorative finishes, and repairs across the eastern half of Nebraska."
        image="/images/hero/patio-finish-hero.jpg"
        imageAlt="EET Concrete poured patio finish"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
      />

      <section className="py-16 sm:py-24 bg-[#0B0D0C] concrete-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 pb-10 mb-10 border-b border-[#F2F5F1]/10">
            <div
              className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-md bg-[#121513] border border-[#F2F5F1]/10 self-start"
              role="tablist"
              aria-label="Filter services by category"
            >
              {SERVICE_CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                const count =
                  category === 'All'
                    ? SERVICES.length
                    : SERVICES.filter((s) => s.category === category).length;

                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                      'px-4 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer',
                      isActive
                        ? 'metallic-green-gradient text-[#081006] shadow-sm'
                        : 'text-[#9AA39C] hover:text-[#F2F5F1]'
                    )}
                  >
                    {category} ({count})
                  </button>
                );
              })}
            </div>

            <Button href={SITE_CONFIG.phoneHref} variant="secondary" size="sm">
              <Phone className="w-3.5 h-3.5 text-[#7CFF3A]" aria-hidden="true" />
              <span>Discuss Your Project: {SITE_CONFIG.phoneDisplay}</span>
            </Button>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Not Sure Which Scope Fits Your Property?"
        subtitle="Call 402-203-6793 or request an on-site walkthrough. We will inspect your grade and recommend the most durable, cost-effective fix."
      />
    </PageTransition>
  );
}
