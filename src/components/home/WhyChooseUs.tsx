import { useRef } from 'react';
import {
  Clock,
  Hammer,
  Layers,
  ShieldCheck,
  Snowflake,
  Truck,
} from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import { SectionHeading } from '../ui/SectionHeading';

const REASONS = [
  {
    icon: Layers,
    title: 'Base Prep That Never Cuts Corners',
    detail:
      'We excavate soft topsoil and compact crushed rock before a single yard of concrete arrives—preventing future settlement and voids.',
  },
  {
    icon: Snowflake,
    title: 'Built for Nebraska Freeze-Thaw Winters',
    detail:
      'Air-entrained concrete mixes, clean drainage slopes, and properly spaced control joints protect against winter heaving and salt scaling.',
  },
  {
    icon: Hammer,
    title: 'Heavy Steel Reinforcement',
    detail:
      'From residential driveway aprons to commercial ADA ramps, we tie steel rebar properly on chairs so reinforcement sits where it works.',
  },
  {
    icon: Truck,
    title: 'Compact Equipment Access',
    detail:
      'Track loaders and hydraulic breakers fit cleanly into residential backyards and tight commercial entries without tearing up your whole property.',
  },
  {
    icon: Clock,
    title: 'On-Time Crew & Clean Cleanup',
    detail:
      'Clear scheduling, straight answers on timelines, and clean haul-away of old broken concrete, forms, and debris.',
  },
  {
    icon: ShieldCheck,
    title: 'Straightforward Free Estimates',
    detail:
      'Walk the project on-site with us, discuss finish options, and get a transparent quote before any work begins.',
  },
];

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  useReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-28 bg-[#121513] border-t border-[#F2F5F1]/8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div data-reveal className="lg:col-span-4 lg:sticky lg:top-28">
            <SectionHeading
              index="04"
              eyebrow="Why EET Concrete"
              title="Honest Prep. Sharp Finishes."
              description="Anyone can pour concrete flat for a photo on day one. We build slabs engineered to still look straight and solid years down the road."
            />
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {REASONS.map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  data-reveal
                  className="p-6 rounded-md metallic-bevel-card hover:border-[#7CFF3A]/35 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-sm bg-[#1C231B] border border-[#7CFF3A]/30 flex items-center justify-center text-[#7CFF3A]">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <span className="font-display text-lg font-bold text-[#9AA39C]/50 tabular-nums">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-[#F2F5F1]">
                      {reason.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-[#9AA39C] leading-relaxed">
                      {reason.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
