import { useRef } from 'react';
import { Phone } from 'lucide-react';
import { GENERAL_FAQS } from '../../data/faqs';
import { SITE_CONFIG } from '../../data/site';
import { useReveal } from '../../hooks/useReveal';
import { Accordion } from '../ui/Accordion';
import { Button } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';

export function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  useReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-28 bg-[#121513] border-t border-[#F2F5F1]/8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div data-reveal className="lg:col-span-5">
            <SectionHeading
              index="08"
              eyebrow="Common Questions"
              title="Straight Answers Before You Pour"
              description="Planning a driveway replacement, new backyard patio, or commercial entry rebuild? Here is what homeowners and builders ask most often."
            />

            <div className="mt-8 p-6 rounded-md metallic-bevel-green bg-[#0E110F]">
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-[#F2F5F1]">
                Have a Specific Site Question?
              </h3>
              <p className="mt-2 text-sm text-[#9AA39C] leading-relaxed">
                Call directly to discuss your grade, tear-out access, or timeline with EET
                Concrete.
              </p>
              <div className="mt-5">
                <Button href={SITE_CONFIG.phoneHref} variant="primary" size="md">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>Call {SITE_CONFIG.phoneDisplay}</span>
                </Button>
              </div>
            </div>
          </div>

          <div data-reveal className="lg:col-span-7">
            <Accordion items={GENERAL_FAQS} />
          </div>
        </div>
      </div>
    </section>
  );
}
