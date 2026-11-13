import { useRef } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import { Button } from '../ui/Button';
import { SafeImage } from '../ui/SafeImage';
import { SectionHeading } from '../ui/SectionHeading';

const PILLARS = [
  'Thorough subgrade excavation & crushed aggregate compaction',
  'Air-entrained mixes engineered for Eastern Nebraska freeze-thaw cycles',
  'Clean, respectful jobsite cleanup from demo through final saw-cut',
];

export function AboutTeaser() {
  const sectionRef = useRef<HTMLElement>(null);
  useReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-28 bg-[#0B0D0C] concrete-grain overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Asymmetric Image Collage with Metallic Green Frame */}
          <div data-reveal className="lg:col-span-6 relative">
            <div className="relative p-3 sm:p-4 rounded-md metallic-bevel-green bg-[#121513]">
              <div className="aspect-[4/3] rounded-sm overflow-hidden">
                <SafeImage
                  src="/images/hero/patio-finish-hero.jpg"
                  alt="Crisp newly poured covered concrete patio by EET Concrete"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlapping Inset Detail Photo */}
              <div className="hidden sm:block absolute -bottom-6 right-3 lg:-right-5 w-44 lg:w-56 aspect-[4/3] rounded-md overflow-hidden border-2 border-[#7CFF3A]/55 shadow-2xl bg-[#0B0D0C]">
                <SafeImage
                  src="/images/projects/eet-yard-sign-sidewalk.jpg"
                  alt="EET Concrete LLC jobsite sign beside finished sidewalk"
                  objectPosition="80% 55%"
                />
              </div>
            </div>
          </div>

          {/* Editorial Copy */}
          <div data-reveal className="lg:col-span-6 lg:pl-4">
            <SectionHeading
              index="01"
              eyebrow="Who We Are"
              title="Concrete Work That Holds Up After Winter Hits"
              description="In Eastern Nebraska, concrete isn’t tested in July — it’s tested every January and March when frost heaves soft clay and de-icing brine finds every shortcut. EET Concrete builds from the base up so your driveways, patios, slabs, and steps stay level and sound."
            />

            <ul className="mt-7 space-y-3">
              {PILLARS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm sm:text-base text-[#DCE5DB]">
                  <span className="mt-1 w-5 h-5 rounded-sm bg-[#2FB30F]/20 border border-[#7CFF3A]/45 flex items-center justify-center text-[#7CFF3A] shrink-0">
                    <Check className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button to="/about" variant="secondary" size="md">
                <span>About EET Concrete</span>
                <ArrowRight className="w-4 h-4 text-[#7CFF3A]" aria-hidden="true" />
              </Button>
              <Button to="/projects" variant="ghost" size="md">
                <span>Browse Completed Work</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
