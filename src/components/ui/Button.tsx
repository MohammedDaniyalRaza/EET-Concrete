import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: undefined;
    href?: undefined;
  };

type ButtonAsLink = BaseProps & {
  to: string;
  href?: undefined;
  onClick?: () => void;
};

type ButtonAsAnchor = BaseProps & {
  href: string;
  to?: undefined;
  target?: string;
  rel?: string;
  onClick?: () => void;
};

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'metallic-green-gradient text-[#081006] font-bold tracking-wide border border-[#A6FF75]/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_10px_28px_-10px_rgba(47,179,15,0.6)] hover:brightness-110 active:scale-[0.985]',
  secondary:
    'bg-[#1A1D1B] text-[#F2F5F1] font-semibold border border-[#F2F5F1]/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-[#7CFF3A]/45 hover:bg-[#222724] active:scale-[0.985]',
  ghost:
    'bg-transparent text-[#F2F5F1] font-medium border border-transparent hover:text-[#7CFF3A] hover:bg-[#1A1D1B]/60',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-xs rounded-md',
  md: 'px-5 py-2.5 text-sm rounded-md',
  lg: 'px-7 py-3.5 text-sm sm:text-base rounded-md',
};

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...rest
}: ButtonProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2 max-w-full sm:whitespace-nowrap text-center shrink-0 transition-all duration-200 shine-sweep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7CFF3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D0C] cursor-pointer',
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    className
  );

  if ('to' in rest && rest.to !== undefined) {
    return (
      <Link to={rest.to} onClick={rest.onClick} className={baseClasses}>
        {children}
      </Link>
    );
  }

  if ('href' in rest && rest.href !== undefined) {
    return (
      <a
        href={rest.href}
        target={rest.target}
        rel={rest.rel}
        onClick={rest.onClick}
        className={baseClasses}
      >
        {children}
      </a>
    );
  }

  const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button {...buttonProps} className={baseClasses}>
      {children}
    </button>
  );
}
