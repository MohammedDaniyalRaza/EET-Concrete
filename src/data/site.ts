export interface NavItem {
  label: string;
  to: string;
}

export const SITE_CONFIG = {
  brandName: 'EET Concrete',
  legalName: 'EET Concrete LLC',
  phoneDisplay: '402-203-6793',
  phoneHref: 'tel:+14022036793',
  facebookUrl: 'https://www.facebook.com/p/EET-Concrete-61575217922086/',
  logoPath: '/images/logo.png',
  regionTitle: 'Eastern Nebraska',
  regionDescription:
    'Serving homeowners, builders, and commercial properties across the eastern half of Nebraska — including Omaha, Lincoln, Bellevue, Papillion, Fremont, and surrounding communities.',
  communities: [
    'Omaha',
    'Lincoln',
    'Bellevue',
    'Papillion',
    'La Vista',
    'Fremont',
    'Gretna',
    'Elkhorn',
    'Columbus',
    'Norfolk',
    'Nebraska City',
    'Beatrice',
  ],
  highlights: [
    { value: '15 Services', detail: 'Residential, commercial, decorative & repair' },
    { value: 'Eastern Nebraska', detail: 'Serving communities across the eastern half' },
    { value: 'Free Estimates', detail: 'Clear, straightforward on-site quotes' },
    { value: 'Residential & Commercial', detail: 'Driveways, patios, slabs & ADA entries' },
  ],
  navLinks: [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Projects', to: '/projects' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ] as NavItem[],
};
