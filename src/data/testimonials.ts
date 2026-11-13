export interface Testimonial {
  id: string;
  name: string;
  city: string;
  projectType: string;
  quote: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Mark',
    city: 'Papillion, NE',
    projectType: 'Backyard Patio Replacement',
    quote:
      'They tore out our cracked old slab, re-graded the slope away from our sliding door, and poured a clean broom-finished patio in two days. No mess left in the yard.',
  },
  {
    id: 't2',
    name: 'Sarah',
    city: 'Lincoln, NE',
    projectType: 'Driveway & Front Walk',
    quote:
      'Communication was straightforward from the estimate through the final saw-cuts. The drainage apron at our garage finally sheds water instead of pooling every spring.',
  },
  {
    id: 't3',
    name: 'Dave',
    city: 'Omaha, NE',
    projectType: 'Commercial Entry Steps & Ramp',
    quote:
      'Our building’s front steps were crumbling and unsafe. EET Concrete ripped out the failing block, poured rock-solid steps, and lined up the handrail anchors cleanly.',
  },
  {
    id: 't4',
    name: 'Rachel',
    city: 'Bellevue, NE',
    projectType: 'Shop Sidewalk',
    quote:
      'We wanted a clean walkway from the back door out to our detached garage. Straight forms, smooth curves, and they showed up exactly when they said they would.',
  },
  {
    id: 't5',
    name: 'Kevin',
    city: 'Fremont, NE',
    projectType: 'Outbuilding Slab',
    quote:
      'When my framing crew snapped chalk lines on the new shop slab, every corner was dead square and flat. Solid prep work underneath made the whole build easier.',
  },
  {
    id: 't6',
    name: 'Laura',
    city: 'Gretna, NE',
    projectType: 'Concrete Repair & Sealing',
    quote:
      'Honest advice on what panels actually needed replacement versus what could be saved and sealed. Fair estimate with zero surprise add-ons.',
  },
];
