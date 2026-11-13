import { Facebook, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../../data/services';
import { SITE_CONFIG } from '../../data/site';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const topServices = SERVICES.slice(0, 8);

  return (
    <footer className="bg-[#080A09] border-t border-[#F2F5F1]/10 pt-16 pb-24 md:pb-12 concrete-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#F2F5F1]/10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-flex items-center gap-3.5 group">
              <img
                src={SITE_CONFIG.logoPath}
                alt="EET Concrete Shield Logo"
                width={64}
                height={64}
                className="h-16 w-auto object-contain"
              />
              <div>
                <span className="block font-display text-2xl font-extrabold uppercase tracking-wider text-[#F2F5F1]">
                  EET Concrete
                </span>
                <span className="block text-xs font-medium text-[#7CFF3A]">
                  Built Solid. Poured Right.
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#9AA39C] leading-relaxed max-w-sm">
              Residential and commercial concrete craftsmanship engineered for Eastern
              Nebraska soil conditions and freeze-thaw winters. Free on-site estimates.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={SITE_CONFIG.phoneHref}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#161A17] border border-[#7CFF3A]/35 text-sm font-bold text-[#F2F5F1] hover:border-[#7CFF3A] hover:text-[#7CFF3A] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#7CFF3A]" aria-hidden="true" />
                <span>{SITE_CONFIG.phoneDisplay}</span>
              </a>

              <a
                href={SITE_CONFIG.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="EET Concrete Facebook Page"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#161A17] border border-[#F2F5F1]/12 text-sm font-medium text-[#DCE5DB] hover:border-[#7CFF3A]/45 hover:text-[#7CFF3A] transition-colors"
              >
                <Facebook className="w-4 h-4 text-[#7CFF3A]" aria-hidden="true" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-lg font-bold uppercase tracking-wider text-[#F2F5F1] mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SITE_CONFIG.navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[#9AA39C] hover:text-[#7CFF3A] transition-colors inline-flex items-center gap-1"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  className="text-[#7CFF3A] font-semibold hover:text-[#A6FF75] transition-colors inline-flex items-center gap-1"
                >
                  <span>Request a Quote</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Services List */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-lg font-bold uppercase tracking-wider text-[#F2F5F1] mb-4">
              Core Services
            </h3>
            <ul className="grid grid-cols-1 gap-2 text-sm">
              {topServices.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    to={`/services/${svc.slug}`}
                    className="text-[#9AA39C] hover:text-[#7CFF3A] transition-colors"
                  >
                    {svc.name}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  to="/services"
                  className="text-xs font-bold uppercase tracking-wider text-[#DCE5DB] hover:text-[#7CFF3A] transition-colors"
                >
                  View All 15 Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Area */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-lg font-bold uppercase tracking-wider text-[#F2F5F1] mb-4">
              Service Area
            </h3>
            <div className="flex items-start gap-2.5 text-sm text-[#9AA39C] leading-relaxed">
              <MapPin className="w-4 h-4 text-[#7CFF3A] shrink-0 mt-1" aria-hidden="true" />
              <p>{SITE_CONFIG.regionDescription}</p>
            </div>
            <p className="mt-4 text-xs text-[#9AA39C]">
              Omaha · Lincoln · Bellevue · Papillion · Fremont &amp; surrounding communities
            </p>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9AA39C]">
          <p>
            &copy; {currentYear} {SITE_CONFIG.legalName}. All rights reserved.
          </p>
          <p>
            Serving Eastern Nebraska · Free Estimates ·{' '}
            <a href={SITE_CONFIG.phoneHref} className="text-[#DCE5DB] hover:text-[#7CFF3A]">
              {SITE_CONFIG.phoneDisplay}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
