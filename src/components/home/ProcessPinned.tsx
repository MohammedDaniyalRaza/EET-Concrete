import { useEffect, useRef, useState } from 'react';
import { ensureGsapRegistered, gsap, ScrollTrigger } from '../../lib/gsap';
import { cn } from '../../lib/utils';
import { SectionHeading } from '../ui/SectionHeading';

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Consult',
    subtitle: 'On-Site Walkthrough & Clear Estimate',
    description:
      'We inspect existing concrete, measure square footage, check drainage elevations, and give you a straightforward written estimate — no guesswork or hidden add-ons.',
  },
  {
    number: '02',
    title: 'Prep & Grade',
    subtitle: 'Excavation & Compacted Rock Base',
    description:
      'Old failing concrete is broken out and hauled away. Soft clay is excavated and replaced with compacted crushed limestone pitched cleanly away from buildings.',
  },
  {
    number: '03',
    title: 'Form & Reinforce',
    subtitle: 'True Forms & Steel Rebar Grid',
    description:
      'Straight lumber or radius forms are braced to laser elevation, expansion material is placed against foundations, and steel rebar is tied for structural load strength.',
  },
  {
    number: '04',
    title: 'Pour & Finish',
    subtitle: 'Air-Entrained Pour & Artisan Tooling',
    description:
      'We pour weather-rated mix, screed flat, bull-float, and hand-tool edges before applying crisp broom traction, power-trowel smoothness, or stamped textures.',
  },
  {
    number: '05',
    title: 'Cure & Seal',
    subtitle: 'Control Joints & Weather Protection',
    description:
      'Precision saw-cut control joints guide shrinkage cleanly. Once cured, protective sealers shield the slab against water intrusion and winter de-icing salts.',
  },
];

export function ProcessPinned() {
  const wrapperRef = useRef<HTMLElement>(null);
  const pinTargetRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const pinTarget = pinTargetRef.current;
    if (!wrapper || !pinTarget) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
    if (prefersReduced || !isDesktop) return;

    ensureGsapRegistered();

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: wrapper,
        start: 'top top+=84',
        end: '+=1600',
        pin: pinTarget,
        scrub: 0.4,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progressBarRef.current) {
            progressBarRef.current.style.transform = `scaleX(${Math.max(0.04, progress)})`;
          }
          const idx = Math.min(
            PROCESS_STEPS.length - 1,
            Math.floor(progress * PROCESS_STEPS.length)
          );
          setActiveStep(idx);
        },
      });
    }, wrapper);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="relative bg-[#0B0D0C] border-t border-[#F2F5F1]/8 concrete-grain"
    >
      <div ref={pinTargetRef} className="py-20 sm:py-24 lg:min-h-[88vh] flex flex-col justify-center">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <SectionHeading
              index="03"
              eyebrow="How We Pour"
              title="Five Disciplined Steps From Dirt to Cure"
              description="Shortcuts underneath concrete always show up after the first hard freeze. Every EET Concrete project follows this sequence."
            />

            <div className="hidden lg:flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-[#9AA39C] tabular-nums">
              <span>Step</span>
              <span className="font-display text-2xl text-[#7CFF3A]">
                0{activeStep + 1}
              </span>
              <span>/ 05</span>
            </div>
          </div>

          {/* Progress Line */}
          <div className="relative h-[3px] w-full bg-[#1C211E] rounded-full overflow-hidden mb-8">
            <div
              ref={progressBarRef}
              className="h-full w-full metallic-green-gradient origin-left transition-transform duration-150 lg:transition-none"
              style={{ transform: 'scaleX(0.2)' }}
            />
          </div>

          {/* Interactive / Scroll-Driven Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = idx === activeStep;
              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={cn(
                    'text-left p-5 rounded-md border transition-all duration-300 flex flex-col justify-between cursor-pointer',
                    isActive
                      ? 'bg-[#151D14] border-[#7CFF3A]/55 shadow-[0_14px_34px_-18px_rgba(47,179,15,0.4)]'
                      : 'bg-[#121513] border-[#F2F5F1]/10 hover:border-[#7CFF3A]/30'
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className={cn(
                          'font-display text-3xl font-extrabold tabular-nums transition-colors',
                          isActive ? 'text-[#7CFF3A]' : 'text-[#9AA39C]/55'
                        )}
                      >
                        {step.number}
                      </span>
                      <span
                        className={cn(
                          'h-[2px] w-8 transition-colors',
                          isActive ? 'bg-[#7CFF3A]' : 'bg-[#F2F5F1]/12'
                        )}
                      />
                    </div>

                    <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-[#F2F5F1]">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-[#7CFF3A]/90">
                      {step.subtitle}
                    </p>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-[#9AA39C] leading-relaxed">
                    {step.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
