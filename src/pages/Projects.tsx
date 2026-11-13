import { useState } from 'react';
import { Expand, Layers } from 'lucide-react';
import { CTABanner } from '../components/home/CTABanner';
import { PageTransition } from '../components/layout/PageTransition';
import { Lightbox } from '../components/ui/Lightbox';
import { PageHero } from '../components/ui/PageHero';
import { SafeImage } from '../components/ui/SafeImage';
import {
  PROJECT_CATEGORIES,
  PROJECTS,
  type ProjectCategory,
} from '../data/projects';
import { cn } from '../lib/utils';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <PageTransition>
      <PageHero
        eyebrow="Project Gallery"
        title="Built Across Eastern Nebraska"
        subtitle="Browse residential patios, sidewalks, garage slabs, decorative front entries, and commercial concrete work — including tear-out and before/after transformations."
        image="/images/hero/commercial-steps-hero.jpg"
        imageAlt="Completed concrete stairs and landing by EET Concrete"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Projects' }]}
      />

      <section className="py-16 sm:py-24 bg-[#0B0D0C] concrete-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-10 mb-10 border-b border-[#F2F5F1]/10">
            <div
              className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-md bg-[#121513] border border-[#F2F5F1]/10"
              role="tablist"
              aria-label="Filter projects by category"
            >
              {PROJECT_CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => {
                      setActiveCategory(category);
                      setLightboxIndex(null);
                    }}
                    className={cn(
                      'px-4 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer',
                      isActive
                        ? 'metallic-green-gradient text-[#081006]'
                        : 'text-[#9AA39C] hover:text-[#F2F5F1]'
                    )}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <p className="text-xs text-[#9AA39C]">
              Click any photo to open full view &amp; before/after comparisons
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <button
                key={project.id}
                type="button"
                onClick={() => setLightboxIndex(idx)}
                className="group text-left rounded-md overflow-hidden metallic-bevel-card shine-sweep flex flex-col cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7CFF3A]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-[#F2F5F1]/8">
                  <SafeImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#0B0D0C]/85 via-transparent to-transparent"
                    aria-hidden="true"
                  />

                  <div className="absolute top-3.5 right-3.5 flex items-center gap-2">
                    {project.beforeImage && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-sm bg-[#0B0D0C]/85 border border-[#7CFF3A]/40 text-[11px] font-semibold uppercase tracking-wider text-[#7CFF3A]">
                        <Layers className="w-3 h-3" aria-hidden="true" />
                        <span>Before / After</span>
                      </span>
                    )}
                    <span className="w-8 h-8 rounded-sm bg-[#0B0D0C]/85 border border-[#F2F5F1]/20 flex items-center justify-center text-[#F2F5F1] group-hover:border-[#7CFF3A] group-hover:text-[#7CFF3A] transition-colors">
                      <Expand className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#9AA39C] mb-1.5">
                      <span className="text-[#7CFF3A] font-semibold uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{project.location}</span>
                    </div>

                    <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-[#F2F5F1] group-hover:text-[#7CFF3A] transition-colors leading-tight">
                      {project.title}
                    </h2>

                    <p className="mt-2.5 text-sm text-[#9AA39C] leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3.5 border-t border-[#F2F5F1]/8 flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#DCE5DB]">
                    {project.highlights.map((h, i) => (
                      <span key={h} className="inline-flex items-center gap-2">
                        {i > 0 && <span className="text-[#7CFF3A]" aria-hidden="true">·</span>}
                        <span>{h}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        projects={filteredProjects}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onSelectIndex={(index) => setLightboxIndex(index)}
      />

      <CTABanner />
    </PageTransition>
  );
}
