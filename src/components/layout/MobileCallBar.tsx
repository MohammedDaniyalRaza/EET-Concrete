import { FileText, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../data/site';

export function MobileCallBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#0B0D0C]/95 backdrop-blur-md border-t border-[#7CFF3A]/25 px-3 py-2 shadow-[0_-10px_28px_rgba(0,0,0,0.85)]"
      role="region"
      aria-label="Quick Contact Actions"
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        <a
          href={SITE_CONFIG.phoneHref}
          className="h-11 rounded-md metallic-green-gradient text-[#081006] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] active:scale-[0.98] transition-transform"
        >
          <Phone className="w-4 h-4" aria-hidden="true" />
          <span>Call Now</span>
        </a>
        <Link
          to="/contact"
          className="h-11 rounded-md bg-[#1A1D1B] border border-[#F2F5F1]/20 text-[#F2F5F1] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:border-[#7CFF3A]/50 active:scale-[0.98] transition-all"
        >
          <FileText className="w-4 h-4 text-[#7CFF3A]" aria-hidden="true" />
          <span>Get Quote</span>
        </Link>
      </div>
    </div>
  );
}
