import { useState } from 'react';
import { Shield } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ScrollTrigger } from '../../lib/gsap';

interface SafeImageProps {
  src: string | null | undefined;
  alt: string;
  className?: string;
  containerClassName?: string;
  objectPosition?: string;
  priority?: boolean;
  fallbackLabel?: string;
  width?: number;
  height?: number;
}

export function SafeImage({
  src,
  alt,
  className,
  containerClassName,
  objectPosition = 'center center',
  priority = false,
  fallbackLabel,
  width,
  height,
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className={cn(
          'relative w-full h-full overflow-hidden bg-gradient-to-br from-[#1C211E] via-[#121513] to-[#0B0D0C] concrete-grain flex flex-col items-center justify-center p-6 text-center border border-[#F2F5F1]/10',
          containerClassName,
          className
        )}
        role="img"
        aria-label={alt}
      >
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 50% 35%, rgba(47, 179, 15, 0.28), transparent 65%)',
          }}
        />
        <Shield className="w-9 h-9 text-[#7CFF3A]/70 mb-2.5 relative z-10" aria-hidden="true" />
        <span className="font-display text-lg font-bold tracking-wider uppercase text-[#F2F5F1]/85 relative z-10">
          {fallbackLabel || 'EET Concrete'}
        </span>
        <span className="text-xs text-[#9AA39C] mt-1 relative z-10">
          Eastern Nebraska Concrete Craftsmanship
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      referrerPolicy="no-referrer"
      style={{ objectPosition }}
      onError={() => setFailed(true)}
      onLoad={() => {
        if (typeof window !== 'undefined') {
          ScrollTrigger.refresh();
        }
      }}
      className={cn('w-full h-full object-cover', className)}
    />
  );
}
