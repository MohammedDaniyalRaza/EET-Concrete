import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../../data/services';
import { useReveal } from '../../hooks/useReveal';
import { Button } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';
import { ServiceCard } from '../ui/ServiceCard';

export function ServicesShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  useReveal(sectionRef);

  const featuredServices = SERVICES.filter((s) => s.featured).slice(0, 6);

  return (
    <section
      id="services-showcase"
      ref={sectionRef}
      className="relative py-20 sm:py-28 bg-[#101311] border-t border-[#F2F5F1]/8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          data-reveal
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12"
        >
          <SectionHeading
            index="02"
            eyebrow="Our Craft"
            title="Core Concrete Services"
            description="From residential tear-out and replacement to heavy commercial ramps, entries, and decorative finishes — built to spec across Eastern Nebraska."
          />

          <Button to="/services" variant="primary" size="md" className="self-start lg:self-end">
            <span>View All 15 Services</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service, index) => (
            <div
              key={service.slug}
              data-reveal
              className={index === 0 || index === 4 ? 'lg:translate-y-0' : ''}
            >
              <ServiceCard service={service} variant="featured" className="h-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
