import { Check, Hammer, MapPin, Phone, ShieldCheck, Snowflake } from 'lucide-react';
import { CTABanner } from '../components/home/CTABanner';
import { ServiceArea } from '../components/home/ServiceArea';
import { PageTransition } from '../components/layout/PageTransition';
import { Button } from '../components/ui/Button';
import { PageHero } from '../components/ui/PageHero';
import { SafeImage } from '../components/ui/SafeImage';
import { SITE_CONFIG } from '../data/site';

const VALUES = [
  {
    icon: Hammer,
    title: 'Site Prep Comes First',
    detail:
      'Every durable slab depends on what sits underneath it. We remove unstable organic soil, compact clean crushed aggregate, and set grades carefully before setting forms.',
  },
  {
    icon: Snowflake,
    title: 'Eastern Nebraska Climate Ready',
    detail:
      'Nebraska winters swing hard between rain, freeze, thaw, and de-icing brine. Air-entrained mixes, proper rebar, and timely control joints keep your concrete sound.',
  },
  {
    icon: ShieldCheck,
    title: 'Direct Communication',
    detail:
      'From your initial estimate call to the final saw-cut and yard cleanup, you deal directly with a contractor who stands behind every yard poured.',
  },
];

export default function About() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="About EET Concrete"
        title="Hard Work Beneath Every Pour"
        subtitle="Serving residential homeowners and commercial properties across the eastern half of Nebraska with honest prep, straight forms, and durable finishes."
        image="/images/projects/garage-slab-framing.jpg"
        imageAlt="Structural concrete slab prepared for framing by EET Concrete"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
      />

      {/* Story Split */}
      <section className="py-16 sm:py-24 bg-[#0B0D0C] concrete-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-8 bg-[#7CFF3A]" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7CFF3A]">
                  Our Approach
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#F2F5F1] leading-[1.02]">
                We Build Concrete That Earns Its Keep Year After Year
              </h2>

              <p className="text-base sm:text-lg text-[#9AA39C] leading-relaxed">
                EET Concrete was built around a simple standard: show up on time, prep the
                subgrade properly, reinforce every slab for real loads, and leave the
                property cleaner than we found it.
              </p>

              <p className="text-base text-[#9AA39C] leading-relaxed">
                Whether we are tearing out a settled backyard patio with compact track
                equipment, framing and pouring a detached garage slab, or rebuilding
                crumbling commercial entry steps, we treat every project with the same
                respect for drainage, elevation, and clean tooling.
              </p>

              <ul className="space-y-3 pt-2">
                {[
                  'Full tear-out and haul-away using compact track loaders & breakers',
                  'Residential driveways, patios, sidewalks, steps & garage floors',
                  'Commercial ADA ramps, entryways, curbing & parking lot repairs',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm sm:text-base text-[#DCE5DB]">
                    <span className="mt-1 w-5 h-5 rounded-sm bg-[#2FB30F]/20 border border-[#7CFF3A]/45 flex items-center justify-center text-[#7CFF3A] shrink-0">
                      <Check className="w-3.5 h-3.5" aria-hidden="true" />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-3 flex flex-wrap items-center gap-3.5">
                <Button href={SITE_CONFIG.phoneHref} variant="primary" size="md">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>Call {SITE_CONFIG.phoneDisplay}</span>
                </Button>
                <Button to="/contact" variant="secondary" size="md">
                  <span>Request Free Estimate</span>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="col-span-2 rounded-md overflow-hidden metallic-bevel-green aspect-[16/10]">
                <SafeImage
                  src="/images/projects/bobcat-patio-prep.jpg"
                  alt="Compact track loader prepping backyard concrete site"
                />
              </div>
              <div className="rounded-md overflow-hidden metallic-bevel-card aspect-[4/3]">
                <SafeImage
                  src="/images/projects/concrete-demo-breaker.jpg"
                  alt="Hydraulic concrete breaker removing old patio slab"
                />
              </div>
              <div className="rounded-md overflow-hidden metallic-bevel-card aspect-[4/3]">
                <SafeImage
                  src="/images/projects/backyard-patio-finished.jpg"
                  alt="Finished backyard concrete patio"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-24 bg-[#121513] border-t border-[#F2F5F1]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7CFF3A]">
              How We Work
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#F2F5F1]">
              Three Standards on Every Jobsite
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div key={val.title} className="p-7 rounded-md metallic-bevel-card">
                  <div className="w-11 h-11 rounded-sm bg-[#1B241A] border border-[#7CFF3A]/35 flex items-center justify-center text-[#7CFF3A] mb-5">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-[#F2F5F1]">
                    {val.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#9AA39C] leading-relaxed">
                    {val.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coverage Banner inside About */}
      <ServiceArea />

      {/* Direct Territory Summary */}
      <section className="py-12 bg-[#0B0D0C] border-t border-[#F2F5F1]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm text-[#DCE5DB]">
            <MapPin className="w-5 h-5 text-[#7CFF3A] shrink-0" aria-hidden="true" />
            <span>
              <strong>Service Territory:</strong> Eastern half of Nebraska — Omaha, Lincoln,
              Bellevue, Papillion, Fremont &amp; surrounding communities.
            </span>
          </div>
          <Button to="/projects" variant="ghost" size="sm">
            <span>See Our Work →</span>
          </Button>
        </div>
      </section>

      <CTABanner />
    </PageTransition>
  );
}
