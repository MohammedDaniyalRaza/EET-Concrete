import type { ReactNode } from 'react';
import { Shield } from 'lucide-react';
import { cn } from '../../lib/utils';

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-sm bg-[#121513]/90 border border-[#7CFF3A]/30 shadow-[inset_0_1px_0_rgba(124,255,58,0.16)] text-[11px] sm:text-xs font-semibold tracking-[0.1em] sm:tracking-[0.14em] uppercase text-[#DCE5DB] max-w-full',
        className
      )}
    >
      <Shield className="w-3.5 h-3.5 text-[#7CFF3A] shrink-0" aria-hidden="true" />
      <span className="leading-tight">{children}</span>
    </div>
  );
}
