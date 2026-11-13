import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../data/testimonials';
import { useReveal } from '../../hooks/useReveal';
import { cn } from '../../lib/utils';
import { SectionHeading } from '../ui/SectionHeading';

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  useReveal(sectionRef);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const visiblePair = [
    TESTIMONIALS[activeIndex],
    TESTIMONIALS[(activeIndex + 1) % TESTIMONIALS.length],
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-28 bg-[#0B0D0C] border-t border-[#F2F5F1]/8 concrete-grain"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          data-reveal
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <SectionHeading
            index="07"
            eyebrow="Client Feedback"
            title="Built on Straightforward Work"
            description="What homeowners and property managers across Eastern Nebraska say after their pour cures."
          />

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-md bg-[#161A17] border border-[#F2F5F1]/15 flex items-center justify-center text-[#F2F5F1] hover:border-[#7CFF3A] hover:text-[#7CFF3A] transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-md bg-[#161A17] border border-[#F2F5F1]/15 flex items-center justify-center text-[#F2F5F1] hover:border-[#7CFF3A] hover:text-[#7CFF3A] transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div data-reveal className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visiblePair.map((review) => (
            <blockquote
              key={review.id}
              className="p-6 sm:p-8 rounded-md metallic-bevel-card flex flex-col justify-between min-h-[230px]"
            >
              <div>
                <Quote className="w-7 h-7 text-[#7CFF3A]/75 mb-4" aria-hidden="true" />
                <p className="text-base sm:text-lg text-[#F2F5F1] leading-relaxed">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              <footer className="mt-6 pt-4 border-t border-[#F2F5F1]/10 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="font-semibold text-[#F2F5F1]">
                  {review.name} · <span className="text-[#7CFF3A]">{review.city}</span>
                </div>
                <span className="text-[#9AA39C]">{review.projectType}</span>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Indicator Dots (interactive slide controls) */}
        <div className="mt-8 flex items-center justify-center gap-2" role="tablist" aria-label="Testimonials navigation">
          {TESTIMONIALS.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={idx === activeIndex}
              aria-label={`View review ${idx + 1}`}
              onClick={() => setActiveIndex(idx)}
              className={cn(
                'h-2 rounded-full transition-all cursor-pointer',
                idx === activeIndex
                  ? 'w-8 metallic-green-gradient'
                  : 'w-2.5 bg-[#252A27] hover:bg-[#9AA39C]'
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
