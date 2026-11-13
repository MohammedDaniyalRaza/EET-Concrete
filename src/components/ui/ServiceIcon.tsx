import {
  ArrowUpRight,
  Car,
  Footprints,
  Landmark,
  Layers,
  Maximize2,
  ParkingSquare,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Stamp,
  Sun,
  Warehouse,
  Waves,
  Wrench,
} from 'lucide-react';
import type { ServiceIconName } from '../../data/services';

const ICON_MAP = {
  Car,
  Footprints,
  Sun,
  Layers,
  ParkingSquare,
  ArrowUpRight,
  Stamp,
  Sparkles,
  Wrench,
  RefreshCw,
  Landmark,
  ShieldCheck,
  Maximize2,
  Warehouse,
  Waves,
} as const;

interface ServiceIconProps {
  name: ServiceIconName;
  className?: string;
}

export function ServiceIcon({ name, className = 'w-5 h-5' }: ServiceIconProps) {
  const Icon = ICON_MAP[name];
  return <Icon className={className} aria-hidden="true" />;
}
