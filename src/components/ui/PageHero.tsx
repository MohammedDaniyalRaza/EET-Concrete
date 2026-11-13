import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SafeImage } from './SafeImage';

interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  breadcrumbs: BreadcrumbItem[];
  eyebrow?: string;
}

export function PageHero({
  title,
  subtitle,
  image,
  imageAlt,
  breadcrumbs,
  eyebrow,
}: PageHeroProps) {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden border-b border-[#F2F5F1]/10 bg-[#0B0D0C]">
      {/* Blurred/dimmed project image strictly for secondary pages */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <SafeImage
          src={image}
          alt={imageAlt}
          priority
          className="w-full h-full object-cover scale-105 blur-[3px] opacity-35"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(11,13,12,0.88) 0%, rgba(11,13,12,0.72) 50%, rgba(11,13,12,0.98) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 65% 55% at 75% 30%, rgba(47, 179, 15, 0.14), transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-[#9AA39C]">
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <li key={crumb.label} className="inline-flex items-center gap-1.5">
                  {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-[#7CFF3A]/60" aria-hidden="true" />}
                  {crumb.to && !isLast ? (
                    <Link
                      to={crumb.to}
                      className="hover:text-[#7CFF3A] transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-[#F2F5F1]" aria-current={isLast ? 'page' : undefined}>
                      {crumb.label}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        {eyebrow && (
          <div className="flex items-center gap-3 mb-3">
            <span className="h-[1px] w-7 bg-[#7CFF3A]" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7CFF3A]">
              {eyebrow}
            </span>
          </div>
        )}

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#F2F5F1] leading-[0.98] max-w-3xl">
          {title}
        </h1>

        <p className="mt-4 text-base sm:text-lg text-[#9AA39C] max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
