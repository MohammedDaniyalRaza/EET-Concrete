export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const GENERAL_FAQS: FAQItem[] = [
  {
    id: 'f1',
    question: 'What areas of Nebraska do you serve?',
    answer:
      'EET Concrete serves the entire eastern half of Nebraska — including Omaha, Lincoln, Bellevue, Papillion, Fremont, Gretna, and surrounding rural and metro communities. Call 402-203-6793 to confirm scheduling for your town.',
  },
  {
    id: 'f2',
    question: 'How do you prepare concrete to survive Nebraska freeze-thaw winters?',
    answer:
      'Durability in Eastern Nebraska comes down to base prep, drainage, and mix quality. We excavate soft soils, compact crushed aggregate base, reinforce with rebar or mesh, pour air-entrained concrete, and place control joints cleanly so freeze-thaw cycles do not heave or spall your slab.',
  },
  {
    id: 'f3',
    question: 'Are estimates really free, and what happens during an on-site quote?',
    answer:
      'Yes — estimates are always free. We walk the site with you, measure the footprint, check grade and drainage slopes, discuss finish options, and provide a clear, straightforward written quote.',
  },
  {
    id: 'f4',
    question: 'Do you handle tear-out and haul-away of old broken concrete?',
    answer:
      'Yes. We use compact track loaders and hydraulic breakers to demolish and haul away cracked driveways, settled patios, and crumbling steps while protecting your lawn and nearby structures.',
  },
  {
    id: 'f5',
    question: 'How long before we can walk or park on new concrete?',
    answer:
      'You can usually walk carefully on new concrete after 24 to 48 hours. For driveways and parking slabs, wait at least 7 days before driving passenger vehicles onto the surface and avoid heavy trucks for the first few weeks.',
  },
  {
    id: 'f6',
    question: 'Do you take on both residential and commercial concrete jobs?',
    answer:
      'Yes. We handle everything from residential patios, driveways, garage floors, and walkways to commercial ADA ramps, entry steps, curbing, and parking lot panel replacements.',
  },
];
