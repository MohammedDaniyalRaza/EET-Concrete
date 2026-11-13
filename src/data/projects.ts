export type ProjectCategory = 'All' | 'Residential' | 'Commercial' | 'Decorative' | 'Prep & Repair';

export interface ProjectItem {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'All'>;
  location: string;
  image: string;
  beforeImage?: string;
  description: string;
  highlights: string[];
}

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  'All',
  'Residential',
  'Commercial',
  'Decorative',
  'Prep & Repair',
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'commercial-entry-steps',
    title: 'Commercial Entry Steps & Guardrail Landing',
    category: 'Commercial',
    location: 'Eastern Nebraska',
    image: '/images/hero/commercial-steps-hero.jpg',
    beforeImage: '/images/projects/commercial-steps-before.jpg',
    description:
      'Complete tear-out of spalled commercial entry steps and failing block face, replaced with reinforced poured steps, uniform risers, and custom iron handrail integration.',
    highlights: ['Uniform Riser Geometry', 'Reinforced Structural Pour', 'Ornamental Railing Anchoring'],
  },
  {
    id: 'covered-porch-patio',
    title: 'Covered Porch & Patio Replacement',
    category: 'Residential',
    location: 'Eastern Nebraska',
    image: '/images/hero/patio-finish-hero.jpg',
    beforeImage: '/images/projects/concrete-demo-breaker.jpg',
    description:
      'Demolished settled patio concrete with a compact hydraulic breaker, re-graded the subbase away from the home, and poured a crisp broom-finished covered patio with saw-cut joints.',
    highlights: ['Full Hydraulic Tear-Out', 'Clean Saw-Cut Joints', 'Positive Drainage Grade'],
  },
  {
    id: 'backyard-patio-extension',
    title: 'Backyard Patio Expansion & Turf Tie-In',
    category: 'Residential',
    location: 'Omaha Metro Area',
    image: '/images/projects/backyard-patio-finished.jpg',
    beforeImage: '/images/projects/bobcat-patio-prep.jpg',
    description:
      'Expanded an existing backyard patio footprint with clean curved corners, proper slope away from sliding doors, and neat yard restoration.',
    highlights: ['Curved Corner Forming', 'Reinforced Patio Slab', 'Clean Finish Transitions'],
  },
  {
    id: 'commercial-ada-ramp',
    title: 'Commercial ADA Ramp & Retaining Pour',
    category: 'Commercial',
    location: 'Eastern Nebraska',
    image: '/images/projects/commercial-ada-ramp-pour.jpg',
    description:
      'Heavy-section commercial accessibility ramp and structural sidewall poured to meet compliant slope grades and heavy public foot traffic.',
    highlights: ['ADA Compliant Slope', 'Retaining Wall Integration', 'Commercial Mix Strength'],
  },
  {
    id: 'commercial-walkway-rebuild',
    title: 'Commercial Entry Walkway & Ramp Deck',
    category: 'Commercial',
    location: 'Eastern Nebraska',
    image: '/images/projects/commercial-walkway-after.jpg',
    beforeImage: '/images/projects/commercial-walkway-repair-before.jpg',
    description:
      'Replaced a cracked, weathered commercial entry walkway with clean, level concrete panels and precise railing post alignment.',
    highlights: ['Trip-Hazard Elimination', 'Clean Tooling & Edges', 'Railing Post Clearance'],
  },
  {
    id: 'garage-outbuilding-slab',
    title: 'Detached Shop Foundation Slab',
    category: 'Residential',
    location: 'Eastern Nebraska',
    image: '/images/projects/garage-slab-framing.jpg',
    beforeImage: '/images/projects/site-grading-prep.jpg',
    description:
      'Cleared and graded a wooded backyard site, formed thickened perimeter edges, and poured a dead-flat structural concrete slab ready for framing.',
    highlights: ['Site Clearing & Grading', 'Thickened Perimeter Footing', 'Troweled Structural Slab'],
  },
  {
    id: 'decorative-paver-walk',
    title: 'Interlocking Brick-Pattern Front Walkway',
    category: 'Decorative',
    location: 'Omaha Metro Area',
    image: '/images/projects/decorative-paver-walkway.jpg',
    description:
      'Sweeping curved front entryway walkway tying driveway apron to brick porch steps with clean soldier-course border detailing.',
    highlights: ['Curved Entry Geometry', 'Soldier Course Border', 'Porch Apron Integration'],
  },
  {
    id: 'curved-shop-sidewalk',
    title: 'House-to-Shop Curved Concrete Sidewalk',
    category: 'Residential',
    location: 'Eastern Nebraska',
    image: '/images/projects/curved-walkway-shop.jpg',
    beforeImage: '/images/projects/stone-path-before.jpg',
    description:
      'Replaced an uneven, weed-filled stone path with a continuous curved poured concrete walkway linking the main house to a detached workshop.',
    highlights: ['Smooth Radius Curves', 'Non-Slip Broom Texture', 'Weed-Free Durability'],
  },
  {
    id: 'shop-perimeter-walk',
    title: 'Outbuilding Gate & Sidewalk Pour',
    category: 'Residential',
    location: 'Eastern Nebraska',
    image: '/images/projects/shop-sidewalk-new.jpg',
    beforeImage: '/images/projects/sidewalk-before-gravel.jpg',
    description:
      'Converted a muddy gravel side yard into a clean, straight poured concrete walkway connecting the driveway, fence gate, and shop door.',
    highlights: ['Gravel Excavation & Prep', 'Crisp Control Joints', 'All-Weather Access'],
  },
  {
    id: 'ramp-approach-tie-in',
    title: 'Residential Accessibility Ramp Walkway',
    category: 'Prep & Repair',
    location: 'Eastern Nebraska',
    image: '/images/projects/ramp-approach-walkway.jpg',
    description:
      'Poured a smooth concrete approach connecting an existing asphalt driveway flush with an aluminum accessibility ramp for safe, bump-free entry.',
    highlights: ['Flush Asphalt Tie-In', 'Even Non-Slip Finish', 'Drainage Graded'],
  },
  {
    id: 'retaining-sidewalk-project',
    title: 'Neighborhood Sidewalk & Retaining Corner',
    category: 'Prep & Repair',
    location: 'Eastern Nebraska',
    image: '/images/projects/eet-yard-sign-sidewalk.jpg',
    description:
      'Clean residential sidewalk panels framed cleanly alongside tiered retaining block walls and mature tree root zones.',
    highlights: ['Root-Zone Prep', 'Clean Panel Joints', 'Retaining Edge Clearance'],
  },
];
