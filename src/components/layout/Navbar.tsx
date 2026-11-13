import { useCallback, useEffect, useState } from 'react';
import { Facebook, Menu, Phone } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { SITE_CONFIG } from '../../data/site';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-[60] w-full transition-all duration-300',
          scrolled
            ? 'bg-[#0B0D0C]/94 backdrop-blur-md border-b border-[#7CFF3A]/25 shadow-[0_12px_32px_-16px_rgba(0,0,0,0.9)] py-2.5'
            : 'bg-gradient-to-b from-[#0B0D0C]/90 via-[#0B0D0C]/50 to-transparent border-b border-transparent py-3 sm:py-3.5'
        )}
      >
        <div className="max-w-7xl w-full mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4 lg:gap-8">
          {/* Zone 1: Brand logo & single-line wordmark */}
          <Link
            to="/"
            className="flex items-center gap-2.5 sm:gap-3 min-w-0 shrink group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7CFF3A] rounded-sm"
          >
            <img
              src={SITE_CONFIG.logoPath}
              alt="EET Concrete Shield Logo"
              width={56}
              height={56}
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain shrink-0 drop-shadow-[0_4px_12px_rgba(47,179,15,0.3)] transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-display text-xl sm:text-2xl lg:text-[26px] font-extrabold uppercase tracking-wider text-[#F2F5F1] whitespace-nowrap truncate">
              EET Concrete
            </span>
          </Link>

          {/* Zone 2: Primary navigation links (Desktop lg+) */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-7 shrink-0"
          >
            {SITE_CONFIG.navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'relative py-1 text-sm font-medium tracking-wide whitespace-nowrap shrink-0 transition-colors',
                    isActive
                      ? 'text-[#7CFF3A]'
                      : 'text-[#DCE5DB] hover:text-[#F2F5F1]'
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    <span
                      className={cn(
                        'absolute left-0 right-0 -bottom-0.5 h-[2px] rounded-full metallic-green-gradient transition-transform duration-200 origin-left',
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      )}
                      aria-hidden="true"
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Zone 3: Tablet/Desktop Actions & Mobile/Tablet Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Tablet (md+) & Desktop Facebook Icon */}
            <a
              href={SITE_CONFIG.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit EET Concrete on Facebook"
              className="hidden md:inline-flex w-10 h-10 rounded-md bg-[#161A17] border border-[#F2F5F1]/12 items-center justify-center text-[#DCE5DB] hover:text-[#7CFF3A] hover:border-[#7CFF3A]/45 transition-colors shrink-0"
            >
              <Facebook className="w-4 h-4" aria-hidden="true" />
            </a>

            {/* Tablet (md+) & Desktop Call CTA (hidden on mobile where bottom MobileCallBar is fixed) */}
            <div className="hidden md:block shrink-0">
              <Button
                href={SITE_CONFIG.phoneHref}
                variant="primary"
                size="md"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>Call {SITE_CONFIG.phoneDisplay}</span>
              </Button>
            </div>

            {/* Mobile & Tablet Menu Toggle (< 1024px) */}
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation-drawer"
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-md bg-[#161A17] border border-[#F2F5F1]/18 text-[#F2F5F1] hover:border-[#7CFF3A]/55 hover:text-[#7CFF3A] transition-colors cursor-pointer shrink-0"
            >
              <Menu className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={closeMenu} />
    </>
  );
}
