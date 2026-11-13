import { cn } from '../../lib/utils';

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'relative',
        align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl',
        className
      )}
    >
      <div
        className={cn(
          'flex items-center gap-4 mb-3',
          align === 'center' && 'justify-center'
        )}
      >
        <span
          className="font-display text-4xl sm:text-5xl font-extrabold leading-none outlined-index select-none tabular-nums"
          aria-hidden="true"
        >
          {index}
        </span>
        <div className="flex items-center gap-3">
          <span className="h-[1px] w-8 bg-gradient-to-r from-[#7CFF3A] to-transparent" />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7CFF3A]">
            {eyebrow}
          </span>
        </div>
      </div>

      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#F2F5F1] leading-[1.03]">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-[#9AA39C] text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
