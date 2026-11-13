import { useRef, useState } from 'react';
import { MapPin, Phone } from 'lucide-react';
import { SITE_CONFIG } from '../../data/site';
import { useReveal } from '../../hooks/useReveal';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';

const MAP_CITIES = [
  { name: 'Norfolk', x: 432, y: 84 },
  { name: 'Columbus', x: 410, y: 142 },
  { name: 'Fremont', x: 472, y: 156 },
  { name: 'Omaha', x: 525, y: 174, primary: true },
  { name: 'Elkhorn', x: 495, y: 168 },
  { name: 'Papillion', x: 516, y: 192 },
  { name: 'Bellevue', x: 534, y: 194 },
  { name: 'Gretna', x: 496, y: 196 },
  { name: 'Lincoln', x: 454, y: 218, primary: true },
  { name: 'Nebraska City', x: 528, y: 242 },
  { name: 'Beatrice', x: 456, y: 274 },
];

export function ServiceArea() {
  const sectionRef = useRef<HTMLElement>(null);
  useReveal(sectionRef);
  const [selectedCity, setSelectedCity] = useState<string>('Omaha');

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-28 bg-[#101411] border-t border-[#F2F5F1]/8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Copy & Community Selector */}
          <div data-reveal className="lg:col-span-5">
            <SectionHeading
              index="06"
              eyebrow="Coverage"
              title="Serving the Eastern Half of Nebraska"
              description="From metro neighborhoods in Omaha and Lincoln to rural properties, acreages, and commercial sites across surrounding Eastern Nebraska communities."
            />

            <div className="mt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9AA39C] mb-3">
                Select a community to highlight on map
              </p>
              <div className="flex flex-wrap gap-2">
                {SITE_CONFIG.communities.map((city) => {
                  const active = selectedCity === city;
                  return (
                    <button
                      key={city}
                      type="button"
                      onClick={() => setSelectedCity(city)}
                      className={cn(
                        'px-3 py-1.5 rounded-sm text-xs font-medium border transition-colors cursor-pointer',
                        active
                          ? 'bg-[#2FB30F]/20 border-[#7CFF3A] text-[#F2F5F1]'
                          : 'bg-[#161A17] border-[#F2F5F1]/10 text-[#9AA39C] hover:text-[#F2F5F1] hover:border-[#7CFF3A]/40'
                      )}
                    >
                      {city}
                    </button>
                  );
                })}
              </div>
              <p className="mt-4 text-xs text-[#9AA39C] leading-relaxed">
                Don’t see your town listed? If you are in the eastern half of Nebraska,
                call{' '}
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="text-[#7CFF3A] font-semibold hover:underline"
                >
                  {SITE_CONFIG.phoneDisplay}
                </a>{' '}
                — we cover surrounding communities too.
              </p>
            </div>

            <div className="mt-7">
              <Button href={SITE_CONFIG.phoneHref} variant="primary" size="md">
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>Check Scheduling: {SITE_CONFIG.phoneDisplay}</span>
              </Button>
            </div>
          </div>

          {/* Right Stylized Eastern Nebraska SVG Graphic */}
          <div data-reveal className="lg:col-span-7">
            <div className="relative p-5 sm:p-8 rounded-md metallic-bevel-green bg-[#0B0E0C]">
              <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-[#F2F5F1]/10">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#DCE5DB]">
                  <MapPin className="w-4 h-4 text-[#7CFF3A]" aria-hidden="true" />
                  <span>Eastern Nebraska Service Territory</span>
                </div>
                <span className="text-xs font-semibold text-[#7CFF3A]">
                  Focused on: {selectedCity}
                </span>
              </div>

              <svg
                viewBox="0 0 600 320"
                className="w-full h-auto select-none"
                role="img"
                aria-label="Stylized map of Nebraska highlighting the eastern half service area"
              >
                <defs>
                  <linearGradient id="eastNeFill" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7CFF3A" stopOpacity="0.28" />
                    <stop offset="60%" stopColor="#2FB30F" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#145A08" stopOpacity="0.26" />
                  </linearGradient>
                  <linearGradient id="eastNeStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2FB30F" />
                    <stop offset="100%" stopColor="#7CFF3A" />
                  </linearGradient>
                  <pattern
                    id="gridPattern"
                    width="24"
                    height="24"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 24 0 L 0 0 0 24"
                      fill="none"
                      stroke="rgba(242,245,241,0.04)"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>

                {/* Subtle Engineering Grid */}
                <rect width="600" height="320" fill="url(#gridPattern)" rx="4" />

                {/* Full Nebraska Outline (Simplified Geographic Silhouette) */}
                <path
                  d="M 42 52 L 456 54 L 478 68 L 495 92 L 515 112 L 538 158 L 548 192 L 542 224 L 552 260 L 560 288 L 165 288 L 165 224 L 42 224 Z"
                  fill="#141815"
                  stroke="rgba(242,245,241,0.18)"
                  strokeWidth="1.5"
                />

                {/* Eastern Half Highlighted Region */}
                <path
                  d="M 320 53 L 456 54 L 478 68 L 495 92 L 515 112 L 538 158 L 548 192 L 542 224 L 552 260 L 560 288 L 320 288 Z"
                  fill="url(#eastNeFill)"
                  stroke="url(#eastNeStroke)"
                  strokeWidth="2"
                />

                {/* Dividing Meridian Line */}
                <line
                  x1="320"
                  y1="53"
                  x2="320"
                  y2="288"
                  stroke="#7CFF3A"
                  strokeWidth="1.2"
                  strokeDasharray="5 5"
                  strokeOpacity="0.6"
                />

                {/* Interstate Corridor Lines (I-80 / US-77 / US-275 approximation) */}
                <path
                  d="M 320 228 Q 400 226 454 218 T 525 174"
                  fill="none"
                  stroke="rgba(124,255,58,0.28)"
                  strokeWidth="1.5"
                />
                <path
                  d="M 454 218 L 456 274"
                  fill="none"
                  stroke="rgba(124,255,58,0.2)"
                  strokeWidth="1.2"
                />
                <path
                  d="M 525 174 L 472 156 L 432 84"
                  fill="none"
                  stroke="rgba(124,255,58,0.2)"
                  strokeWidth="1.2"
                />

                {/* Region Label */}
                <text
                  x="175"
                  y="150"
                  textAnchor="middle"
                  fill="rgba(154,163,156,0.45)"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="2"
                >
                  WESTERN NE
                </text>
                <text
                  x="388"
                  y="112"
                  textAnchor="middle"
                  fill="rgba(124,255,58,0.75)"
                  fontSize="11"
                  fontWeight="700"
                  letterSpacing="2"
                >
                  EASTERN NEBRASKA
                </text>

                {/* City Markers */}
                {MAP_CITIES.map((city) => {
                  const isSelected =
                    selectedCity.toLowerCase() === city.name.toLowerCase() ||
                    (selectedCity === 'La Vista' && city.name === 'Papillion');
                  return (
                    <g
                      key={city.name}
                      onClick={() => setSelectedCity(city.name)}
                      className="cursor-pointer"
                    >
                      {isSelected && (
                        <circle
                          cx={city.x}
                          cy={city.y}
                          r="12"
                          fill="rgba(124,255,58,0.18)"
                          stroke="#7CFF3A"
                          strokeWidth="1"
                        />
                      )}
                      <circle
                        cx={city.x}
                        cy={city.y}
                        r={isSelected ? 5 : city.primary ? 4.2 : 3.2}
                        fill={isSelected ? '#7CFF3A' : '#DCE5DB'}
                        stroke="#0B0D0C"
                        strokeWidth="1.5"
                      />
                      {(city.primary || isSelected) && (
                        <text
                          x={city.x - 10}
                          y={city.y + 4}
                          textAnchor="end"
                          fill={isSelected ? '#7CFF3A' : '#F2F5F1'}
                          fontSize={isSelected ? '12' : '11'}
                          fontWeight="700"
                        >
                          {city.name}
                        </text>
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
