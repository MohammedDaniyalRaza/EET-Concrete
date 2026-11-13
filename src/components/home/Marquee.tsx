import { Link } from 'react-router-dom';
import { SERVICES } from '../../data/services';

export function Marquee() {
  return (
    <div
      className="marquee-wrapper relative overflow-hidden bg-[#101411] border-y border-[#7CFF3A]/20 py-4 select-none"
      aria-label="Concrete Services Ticker"
    >
      <div className="animate-marquee flex items-center gap-8">
        {[...SERVICES, ...SERVICES].map((service, idx) => (
          <Link
            key={`${service.slug}-${idx}`}
            to={`/services/${service.slug}`}
            className="inline-flex items-center gap-8 group shrink-0"
          >
            <span className="font-display text-lg sm:text-xl font-bold uppercase tracking-wider text-[#DCE5DB] group-hover:text-[#7CFF3A] transition-colors whitespace-nowrap">
              {service.name}
            </span>
            <span
              className="w-2 h-2 rotate-45 bg-[#2FB30F] border border-[#7CFF3A]/70 shrink-0"
              aria-hidden="true"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
