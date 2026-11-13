import { useRef, useState } from 'react';
import { ArrowRight, Expand } from 'lucide-react';
import { PROJECTS } from '../../data/projects';
import { useReveal } from '../../hooks/useReveal';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';
import { Lightbox } from '../ui/Lightbox';
import { SafeImage } from '../ui/SafeImage';
import { SectionHeading } from '../ui/SectionHeading';

export function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  useReveal(sectionRef);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const featured = PROJECTS.slice(0, 6);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-28 bg-[#0B0D0C] border-t border-[#F2F5F1]/8 concrete-grain"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          data-reveal
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12"
        >
          <SectionHeading
            index="05"
            eyebrow="Recent Work"
            title="Real Pours Across Eastern Nebraska"
            description="Every job shown here was prepped, formed, and poured by our crew — from compact residential tear-outs to commercial ADA ramps and entry steps."
          />

          <Button to="/projects" variant="secondary" size="md" className="self-start lg:self-end">
            <span>View Full Gallery</span>
            <ArrowRight className="w-4 h-4 text-[#7CFF3A]" aria-hidden="true" />
          </Button>
        </div>

        {/* Staggered Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {featured.map((project, idx) => {
            const spanClass =
              idx === 0 || idx === 3
                ? 'lg:col-span-7'
                : idx === 1 || idx === 2
                  ? 'lg:col-span-5'
                  : 'lg:col-span-6';

            return (
              <button
                key={project.id}
                type="button"
                data-reveal
                onClick={() => setLightboxIndex(idx)}
                className={cn(
                  'group relative text-left rounded-md overflow-hidden metallic-bevel-card shine-sweep cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7CFF3A]',
                  spanClass
                )}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <SafeImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#090B0A] via-[#090B0A]/35 to-transparent"
                    aria-hidden="true"
                  />

                  <div className="absolute top-4 right-4 w-9 h-9 rounded-sm bg-[#0B0D0C]/80 border border-[#F2F5F1]/20 flex items-center justify-center text-[#F2F5F1] group-hover:border-[#7CFF3A] group-hover:text-[#7CFF3A] transition-colors">
                    <Expand className="w-4 h-4" aria-hidden="true" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#DCE5DB]/90 mb-1.5">
                      <span className="text-[#7CFF3A] font-semibold uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{project.location}</span>
                      {project.beforeImage && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="text-[#DCE5DB]">Includes Before &amp; After</span>
                        </>
                      )}
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#F2F5F1] group-hover:text-[#7CFF3A] transition-colors leading-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <Lightbox
        projects={featured}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onSelectIndex={(index) => setLightboxIndex(index)}
      />
    </section>
  );
}
