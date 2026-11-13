import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Facebook, Phone, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { SITE_CONFIG } from '../../data/site';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!isOpen) return;

    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-navigation-drawer"
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 h-[100dvh] w-full z-[70] lg:hidden bg-[#0B0D0C] flex flex-col overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          {/* Top Header */}
          <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3.5 border-b border-[#F2F5F1]/10 bg-[#0E110F] shrink-0">
            <Link
              to="/"
              onClick={onClose}
              className="flex items-center gap-2.5 min-w-0"
            >
              <img
                src={SITE_CONFIG.logoPath}
                alt="EET Concrete Logo"
                width={44}
                height={44}
                className="w-10 h-10 object-contain shrink-0"
              />
              <span className="font-display text-xl sm:text-2xl font-extrabold uppercase tracking-wider text-[#F2F5F1] truncate">
                EET Concrete
              </span>
            </Link>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="w-11 h-11 rounded-md bg-[#1A1D1B] border border-[#7CFF3A]/45 flex items-center justify-center text-[#F2F5F1] hover:text-[#7CFF3A] transition-colors cursor-pointer shrink-0"
            >
              <X className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>

          {/* Scrollable Nav Links */}
          <nav
            className="flex-1 overflow-y-auto px-4 sm:px-6 py-5 flex flex-col gap-2.5"
            aria-label="Mobile Menu Links"
          >
            {SITE_CONFIG.navLinks.map((item, idx) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={onClose}
                className={({ isActive }) =>
                  cn(
                    'flex items-center justify-between py-3.5 px-4 rounded-md border transition-colors min-h-[54px] shrink-0',
                    isActive
                      ? 'bg-[#172115] border-[#7CFF3A]/50 text-[#7CFF3A]'
                      : 'bg-[#121513] border-[#F2F5F1]/10 text-[#F2F5F1] hover:border-[#7CFF3A]/35'
                  )
                }
              >
                <div className="flex items-baseline gap-3.5">
                  <span className="font-display text-sm font-bold text-[#7CFF3A]/85 tabular-nums">
                    0{idx + 1}
                  </span>
                  <span className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight">
                    {item.label}
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 opacity-75 shrink-0" aria-hidden="true" />
              </NavLink>
            ))}
          </nav>

          {/* Bottom Actions */}
          <div className="p-4 sm:p-6 border-t border-[#F2F5F1]/10 bg-[#0E110F] space-y-2.5 shrink-0">
            <div className="hidden md:grid md:grid-cols-2 gap-2.5">
              <Button
                href={SITE_CONFIG.phoneHref}
                variant="primary"
                size="md"
                className="w-full"
                onClick={onClose}
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>Call {SITE_CONFIG.phoneDisplay}</span>
              </Button>
              <Button
                to="/contact"
                variant="secondary"
                size="md"
                className="w-full"
                onClick={onClose}
              >
                <span>Free Quote</span>
              </Button>
            </div>

            <Button
              href={SITE_CONFIG.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="md"
              className="w-full"
              onClick={onClose}
            >
              <Facebook className="w-4 h-4 text-[#7CFF3A]" aria-hidden="true" />
              <span>Follow on Facebook</span>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
