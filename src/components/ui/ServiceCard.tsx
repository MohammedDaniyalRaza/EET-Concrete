import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ConcreteService } from '../../data/services';
import { cn } from '../../lib/utils';
import { SafeImage } from './SafeImage';
import { ServiceIcon } from './ServiceIcon';

interface ServiceCardProps {
  service: ConcreteService;
  variant?: 'default' | 'featured';
  className?: string;
}

export function ServiceCard({
  service,
  variant = 'default',
  className,
}: ServiceCardProps) {
  const isFeatured = variant === 'featured';

  return (
    <article
      className={cn(
        'group relative flex flex-col justify-between rounded-md metallic-bevel-card shine-sweep overflow-hidden transition-all duration-300 hover:border-[#7CFF3A]/40',
        isFeatured ? 'min-h-[340px]' : 'min-h-[290px]',
        className
      )}
    >
      {/* Background image reveal on hover for featured cards, or subtle top visual strip */}
      <div
        className={cn(
          'relative overflow-hidden border-b border-[#F2F5F1]/8',
          isFeatured ? 'h-48 sm:h-52' : 'h-40'
        )}
      >
        <SafeImage
          src={service.image}
          alt={service.name}
          objectPosition={service.imagePosition || 'center center'}
          fallbackLabel={service.name}
          className="transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#111412] via-[#111412]/35 to-transparent pointer-events-none"
          aria-hidden="true"
        />
        {/* Top corner service number */}
        <div className="absolute top-3.5 left-4 flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#DCE5DB]/90">
          <span className="tabular-nums text-[#7CFF3A]">{service.id}</span>
          <span aria-hidden="true">·</span>
          <span>{service.category}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div>
          <div className="flex items-start justify-between gap-3">
            <Link
              to={`/services/${service.slug}`}
              className="font-display text-2xl font-bold uppercase tracking-tight text-[#F2F5F1] group-hover:text-[#7CFF3A] transition-colors leading-tight"
            >
              {service.name}
            </Link>
            <div className="p-2 rounded-sm bg-[#1D221F] border border-[#7CFF3A]/20 text-[#7CFF3A] shrink-0">
              <ServiceIcon name={service.icon} className="w-4 h-4" />
            </div>
          </div>

          <p className="mt-2.5 text-sm text-[#9AA39C] leading-relaxed line-clamp-2">
            {service.shortDescription}
          </p>
        </div>

        <div className="mt-5 pt-4 border-t border-[#F2F5F1]/8 flex items-center justify-between gap-4">
          <Link
            to={`/services/${service.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#DCE5DB] hover:text-[#7CFF3A] transition-colors whitespace-nowrap"
          >
            <span>Service Details</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>

          <Link
            to={`/contact?service=${service.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#7CFF3A] hover:text-[#A6FF75] transition-colors whitespace-nowrap"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
