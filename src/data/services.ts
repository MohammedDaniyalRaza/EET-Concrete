export type ServiceCategory = 'Residential' | 'Commercial' | 'Decorative' | 'Repair';

export type ServiceIconName =
  | 'Car'
  | 'Footprints'
  | 'Sun'
  | 'Layers'
  | 'ParkingSquare'
  | 'ArrowUpRight'
  | 'Stamp'
  | 'Sparkles'
  | 'Wrench'
  | 'RefreshCw'
  | 'Landmark'
  | 'ShieldCheck'
  | 'Maximize2'
  | 'Warehouse'
  | 'Waves';

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ConcreteService {
  id: string;
  slug: string;
  name: string;
  category: ServiceCategory;
  featured?: boolean;
  icon: ServiceIconName;
  shortDescription: string;
  headline: string;
  overview: string;
  image: string | null;
  imagePosition?: string;
  whatsIncluded: string[];
  process: Array<{ step: string; detail: string }>;
  benefits: string[];
  faqs: ServiceFAQ[];
  relatedSlugs: string[];
}

export const SERVICE_CATEGORIES: Array<'All' | ServiceCategory> = [
  'All',
  'Residential',
  'Commercial',
  'Decorative',
  'Repair',
];

export const SERVICES: ConcreteService[] = [
  {
    id: '01',
    slug: 'concrete-driveways',
    name: 'Concrete Driveways',
    category: 'Residential',
    featured: true,
    icon: 'Car',
    shortDescription:
      'Heavy-duty, properly graded driveways reinforced for daily vehicles and Nebraska freeze-thaw cycles.',
    headline: 'Built to Handle Heavy Vehicles and Harsh Nebraska Winters',
    overview:
      'A lasting driveway starts beneath the surface. We excavate soft soils, compact a clean crushed rock base, reinforce with steel rebar or mesh, and pour air-entrained concrete sloped for clean drainage away from your garage.',
    image: '/images/projects/ramp-approach-walkway.jpg',
    imagePosition: 'center 60%',
    whatsIncluded: [
      'Full tear-out and haul-away of cracked or settled asphalt and concrete',
      'Subgrade excavation, compaction, and crushed aggregate base prep',
      'Rebar reinforcement and proper slab thickness for daily traffic',
      'Precision forming, broom finish traction, and saw-cut control joints',
    ],
    process: [
      { step: 'Site & Grade Evaluation', detail: 'Check drainage slope toward the street and inspect existing base conditions.' },
      { step: 'Excavation & Base Prep', detail: 'Remove unstable soil and compact crushed limestone for uniform support.' },
      { step: 'Forming & Reinforcement', detail: 'Set straight perimeter forms, expansion material, and steel rebar grid.' },
      { step: 'Pour, Finish & Saw-Cut', detail: 'Pour air-entrained mix, apply non-slip broom texture, and cut control joints.' },
    ],
    benefits: [
      'Resists heaving, scaling, and spalling through freeze-thaw winters',
      'Clean apron transitions at both the garage threshold and curb',
      'Low-maintenance surface that boosts curb appeal and property value',
    ],
    faqs: [
      {
        question: 'How soon can I drive on a new concrete driveway?',
        answer:
          'Foot traffic is typically safe after 24 to 48 hours. We recommend waiting at least 7 days before parking passenger vehicles on the slab and longer for heavy trucks or trailers.',
      },
      {
        question: 'Do you tear out old broken driveways first?',
        answer:
          'Yes. We handle complete demolition, haul-away, and subgrade re-compaction before forming the new pour.',
      },
    ],
    relatedSlugs: ['concrete-garage-floors', 'concrete-sidewalks', 'concrete-sealing'],
  },
  {
    id: '02',
    slug: 'concrete-sidewalks',
    name: 'Concrete Sidewalks',
    category: 'Residential',
    featured: true,
    icon: 'Footprints',
    shortDescription:
      'Clean, level walkways linking front entries, gates, garages, and commercial storefronts.',
    headline: 'Safe, Even Walkways Framed for Long-Term Stability',
    overview:
      'Whether connecting a front porch to the driveway or tying a backyard shop to the main residence, our sidewalks are graded to shed water and finished with crisp broom traction and clean control joints.',
    image: '/images/projects/curved-walkway-shop.jpg',
    imagePosition: 'center center',
    whatsIncluded: [
      'Removal of sunken, root-heaved slabs or loose stepping stones',
      'Compacted base layer and gentle cross-slope for drainage',
      'Smooth curves or crisp straight edges with clean tooling',
      'Control joints spaced cleanly to minimize random cracking',
    ],
    process: [
      { step: 'Layout & String Lining', detail: 'Stake the exact path, curves, and elevations around existing landscaping.' },
      { step: 'Trenching & Base Compaction', detail: 'Excavate turf or old pavers and compact a solid gravel bed.' },
      { step: 'Pour & Broom Texture', detail: 'Place concrete, edge neatly, and finish with even traction.' },
    ],
    benefits: [
      'Eliminates trip hazards from settled slabs or uneven pavers',
      'Mud-free access between homes, garages, and outbuildings',
      'ADA-compliant slope options for commercial and accessible entries',
    ],
    faqs: [
      {
        question: 'Can you replace an old brick or stone path with poured concrete?',
        answer:
          'Yes. We pull old pavers or settled flagstones, re-grade the base, and pour a continuous, weed-free concrete sidewalk.',
      },
      {
        question: 'How wide should a residential sidewalk be?',
        answer:
          'Most residential walkways are 36 to 48 inches wide depending on foot traffic and entry layout.',
      },
    ],
    relatedSlugs: ['concrete-steps-stairs', 'concrete-patios', 'decorative-concrete'],
  },
  {
    id: '03',
    slug: 'concrete-patios',
    name: 'Concrete Patios',
    category: 'Residential',
    featured: true,
    icon: 'Sun',
    shortDescription:
      'Custom backyard gathering spaces built with clean drainage, crisp borders, and weather-ready finishes.',
    headline: 'Outdoor Living Slabs Poured for Gatherings and Years of Use',
    overview:
      'From covered porch extensions to open backyard entertaining slabs, we build patios tailored to your home layout, furniture footprint, and grade. Every patio is reinforced and sloped away from your foundation.',
    image: '/images/hero/patio-finish-hero.jpg',
    imagePosition: 'center center',
    whatsIncluded: [
      'Old deck or cracked patio demolition using compact track equipment',
      'Positive drainage grade away from siding and door thresholds',
      'Clean broom finish, picture-frame borders, or decorative options',
      'Precision saw-cut joints and clean perimeter backfill prep',
    ],
    process: [
      { step: 'Design & Footprint', detail: 'Confirm dimensions, post clearances, door elevations, and sun exposure.' },
      { step: 'Prep & Compaction', detail: 'Clear old concrete or turf and compact aggregate for an even base.' },
      { step: 'Pour, Finish & Cure', detail: 'Place, float, trowel, and apply crisp joints for a uniform look.' },
    ],
    benefits: [
      'No rotting boards, loose pavers, or weeds growing between joints',
      'Engineered slope prevents water pooling against your house',
      'Ready for patio furniture, grills, fire pits, and covered pergolas',
    ],
    faqs: [
      {
        question: 'Can you match the height of our back sliding door or existing porch?',
        answer:
          'Yes. We shoot elevations carefully so your patio sits cleanly below siding and thresholds while sloping gently away from the home.',
      },
      {
        question: 'Do you protect surrounding grass and siding during tear-out?',
        answer:
          'We use compact track loaders and protective boards to minimize yard disturbance during demolition and prep.',
      },
    ],
    relatedSlugs: ['stamped-concrete', 'concrete-steps-stairs', 'concrete-sealing'],
  },
  {
    id: '04',
    slug: 'concrete-slabs',
    name: 'Concrete Slabs',
    category: 'Residential',
    icon: 'Layers',
    shortDescription:
      'Flat, level structural slabs for shops, sheds, hot tubs, equipment pads, and additions.',
    headline: 'Level, Reinforced Structural Slabs for Any Build',
    overview:
      'When you are framing a detached shop, building a shed, or setting heavy equipment, your slab has to be square, flat, and load-ready. We pour engineered monolithic and floating slabs with thickened edges where needed.',
    image: '/images/projects/garage-slab-framing.jpg',
    imagePosition: 'center center',
    whatsIncluded: [
      'Laser-leveled grade and compacted granular subbase',
      'Vapor barrier installation where required by build specs',
      'Rebar grid and thickened perimeter edges for framing loads',
      'Smooth power-troweled or clean broom surface finish',
    ],
    process: [
      { step: 'Square & Level Layout', detail: 'Verify exact square diagonals and anchor elevations to building plans.' },
      { step: 'Subbase & Vapor Barrier', detail: 'Compact rock base and lay moisture barrier prior to steel placement.' },
      { step: 'Pour & Power Trowel', detail: 'Finish flat and dense for framing, anchor bolts, or storage.' },
    ],
    benefits: [
      'Accurate squareness makes framing walls faster and cleaner',
      'Reinforced for vehicle lifts, workshops, and heavy storage',
      'Built to resist settling on Eastern Nebraska clay soils',
    ],
    faqs: [
      {
        question: 'Can you thicken the slab edges for a framed garage or shed?',
        answer:
          'Yes. We regularly form monolithic slabs with thickened perimeter footings ready for sill plates and anchor bolts.',
      },
      {
        question: 'What finish do you recommend for an outbuilding slab?',
        answer:
          'A dense steel-troweled interior finish makes sweeping and rolling toolboxes effortless.',
      },
    ],
    relatedSlugs: ['concrete-garage-floors', 'concrete-foundations', 'concrete-sidewalks'],
  },
  {
    id: '05',
    slug: 'concrete-parking-lots',
    name: 'Concrete Parking Lots',
    category: 'Commercial',
    featured: true,
    icon: 'ParkingSquare',
    shortDescription:
      'High-load commercial paving, approach aprons, dumpster pads, and ADA stall transitions.',
    headline: 'Commercial Paving Built for Daily Fleet and Customer Traffic',
    overview:
      'Commercial lots take constant punishment from delivery trucks, snow plows, and freeze-thaw weather. We prep deep compacted bases, pour heavy-section concrete, and schedule work cleanly to keep your property accessible.',
    image: '/images/projects/commercial-ada-ramp-pour.jpg',
    imagePosition: 'center 70%',
    whatsIncluded: [
      'Heavy-duty slab thickness and rebar reinforcement for truck loads',
      'ADA-compliant ramp transitions, approaches, and curb cuts',
      'Dumpster pads and loading bay concrete reinforcement',
      'Clean drainage grading to prevent standing ice in winter',
    ],
    process: [
      { step: 'Traffic & Drainage Review', detail: 'Plan pour sections and slopes to keep business access uninterrupted.' },
      { step: 'Subgrade Stabilization', detail: 'Remove failed pavement and compact heavy commercial aggregate base.' },
      { step: 'Reinforced Pour & Joints', detail: 'Pour high-strength commercial mix and saw-cut tight grid joints.' },
    ],
    benefits: [
      'Far longer service life than thin asphalt patches under heavy loads',
      'Cleaner winter snow removal without rutting or pothole blowout',
      'Improved storefront safety and accessibility for visitors',
    ],
    faqs: [
      {
        question: 'Can you replace just the damaged apron or loading section of our lot?',
        answer:
          'Yes. We frequently saw-cut and replace failed high-traffic zones, dumpster pads, and entry approaches without disrupting the whole lot.',
      },
      {
        question: 'Do you build ADA ramps connecting parking lots to storefronts?',
        answer:
          'Yes. We form and pour compliant concrete ramps, landings, and flared curbs.',
      },
    ],
    relatedSlugs: ['concrete-curbing', 'concrete-steps-stairs', 'concrete-repair'],
  },
  {
    id: '06',
    slug: 'concrete-steps-stairs',
    name: 'Concrete Steps & Stairs',
    category: 'Commercial',
    featured: true,
    icon: 'ArrowUpRight',
    shortDescription:
      'Uniform risers, crisp treads, and safe entry landings for homes and commercial buildings.',
    headline: 'Consistent Rise, Solid Footing, and Clean Architectural Lines',
    overview:
      'Crumbling entry steps create immediate liability and water damage risks. We rebuild residential porch steps and commercial stairways with consistent riser heights, proper footing depth, and non-slip finishes ready for handrails.',
    image: '/images/hero/commercial-steps-hero.jpg',
    imagePosition: 'center center',
    whatsIncluded: [
      'Demolition of spalled, leaning, or separating entry steps',
      'Deep frost-protected footings and structural rebar doweling',
      'Consistent riser and tread geometry for safe footing',
      'Clean broom-textured treads ready for iron or aluminum handrails',
    ],
    process: [
      { step: 'Demolition & Footing Prep', detail: 'Remove failing masonry or concrete and excavate to stable bearing depth.' },
      { step: 'Precision Step Forming', detail: 'Build braced step forms with exact riser heights and gentle pitch.' },
      { step: 'Pour & Rubbed Face Finish', detail: 'Strip forms early to rub and dress vertical risers cleanly.' },
    ],
    benefits: [
      'Eliminates uneven risers and crumbling stair nosings',
      'Anchors solidly so steps do not pull away from entry doors',
      'Clean architectural look that complements brick, siding, and ironwork',
    ],
    faqs: [
      {
        question: 'Can you replace commercial entry steps and integrate existing railings?',
        answer:
          'Yes. We core or set anchors cleanly for ornamental iron and steel handrails on both residential porches and commercial entries.',
      },
      {
        question: 'Why do concrete steps pull away from houses over time?',
        answer:
          'Steps poured without deep footings or proper base compaction settle during freeze-thaw cycles. We build proper support underneath every flight.',
      },
    ],
    relatedSlugs: ['concrete-sidewalks', 'concrete-repair', 'concrete-foundations'],
  },
  {
    id: '07',
    slug: 'stamped-concrete',
    name: 'Stamped Concrete',
    category: 'Decorative',
    icon: 'Stamp',
    shortDescription:
      'Textured stone, slate, and plank patterns poured in solid concrete without shifting weeds.',
    headline: 'Natural Stone Character With the Strength of Monolithic Concrete',
    overview:
      'Get the look of slate, cobblestone, or flagstone without loose pavers sinking or sprouting weeds every spring. Our stamped patios, borders, and walkways combine rich texture with sealed durability.',
    image: '/images/projects/decorative-paver-walkway.jpg',
    imagePosition: 'center center',
    whatsIncluded: [
      'Pattern and accent border planning for patios and front walks',
      'Color hardener or integral tinting for depth and contrast',
      'Seamless texture stamping and crisp hand-dressed edges',
      'High-solids concrete sealer to protect color and surface',
    ],
    process: [
      { step: 'Pattern & Color Selection', detail: 'Choose stamp texture, base tone, and release highlight.' },
      { step: 'Base Prep & Reinforced Pour', detail: 'Pour full-strength concrete over compacted rock and steel reinforcement.' },
      { step: 'Stamp, Wash & Seal', detail: 'Imprint pattern at peak set window, detail seams, and apply protective sealer.' },
    ],
    benefits: [
      'No shifting individual stones or weeds pushing through seams',
      'Custom visual border options to frame patios and entries',
      'Sealed finish resists staining and winter moisture intrusion',
    ],
    faqs: [
      {
        question: 'Does stamped concrete get slippery when wet?',
        answer:
          'We can blend non-slip grit directly into the final sealer coat to keep textured patios and walkways safe around rain or snow.',
      },
      {
        question: 'How often should stamped concrete be resealed?',
        answer:
          'Most outdoor stamped surfaces benefit from a fresh coat of breathable sealer every 2 to 3 years.',
      },
    ],
    relatedSlugs: ['decorative-concrete', 'concrete-patios', 'concrete-sealing'],
  },
  {
    id: '08',
    slug: 'decorative-concrete',
    name: 'Decorative Concrete',
    category: 'Decorative',
    icon: 'Sparkles',
    shortDescription:
      'Picture-frame borders, exposed aggregate, colored finishes, and custom walkways that elevate curb appeal.',
    headline: 'Refined Concrete Finishes That Frame Your Home or Storefront',
    overview:
      'Decorative concrete goes beyond full-pattern stamping. From smooth picture-frame borders around broom-finished patios to tinted walkways and exposed-aggregate entries, we deliver subtle architectural contrast that lasts.',
    image: '/images/projects/commercial-walkway-after.jpg',
    imagePosition: 'center center',
    whatsIncluded: [
      'Custom troweled picture-frame bands and contrasting control joints',
      'Integral concrete coloring and subtle surface textures',
      'Clean curved walkway layouts around landscaping beds',
      'Protective sealing to preserve color clarity and surface density',
    ],
    process: [
      { step: 'Finish Consultation', detail: 'Match border widths, joint geometry, and tones to your exterior materials.' },
      { step: 'Precision Forming', detail: 'Set smooth radius bends or crisp architectural corners.' },
      { step: 'Artisan Finishing', detail: 'Hand-tool borders and cure properly before sealing.' },
    ],
    benefits: [
      'Custom architectural look without fragile surface veneers',
      'Clean visual transitions between brick, siding, and landscaping',
      'Durable enough for daily Nebraska foot traffic and weather',
    ],
    faqs: [
      {
        question: 'What is a picture-frame border on a concrete patio?',
        answer:
          'A smooth hand-troweled band around the perimeter contrasting with a textured broom center—clean, timeless, and easy to maintain.',
      },
      {
        question: 'Can decorative concrete be used on front entryways?',
        answer:
          'Yes. Front walks, stoops, and patio borders are among the highest-impact places to add decorative detail.',
      },
    ],
    relatedSlugs: ['stamped-concrete', 'concrete-patios', 'concrete-sealing'],
  },
  {
    id: '09',
    slug: 'concrete-repair',
    name: 'Concrete Repair',
    category: 'Repair',
    featured: true,
    icon: 'Wrench',
    shortDescription:
      'Targeted saw-cut replacement, structural patching, and crumbling edge restoration done right.',
    headline: 'Stop Deterioration Early and Restore Structural Integrity',
    overview:
      'Spalled steps, cracked aprons, and frost-damaged walkways don’t always require tearing out an entire property. We evaluate what can be soundly repaired or selectively saw-cut and replaced for a clean, lasting fix.',
    image: '/images/projects/commercial-steps-before.jpg',
    imagePosition: 'center center',
    whatsIncluded: [
      'Honest evaluation of repair vs. selective panel replacement',
      'Clean saw-cutting and demolition of failed concrete sections',
      'Rebar doweling into sound adjacent slabs to prevent differential settling',
      'Structural patching and surface tie-ins that hold up outdoors',
    ],
    process: [
      { step: 'Damage Assessment', detail: 'Identify root causes like poor drainage, tree roots, or salt scaling.' },
      { step: 'Clean Cut & Removal', detail: 'Saw-cut straight relief lines and remove loose, delaminated concrete.' },
      { step: 'Dowel, Pour & Match', detail: 'Pin new steel into sound concrete and finish flush.' },
    ],
    benefits: [
      'Fixes trip hazards and water intrusion before winter makes them worse',
      'Saves money by replacing only compromised panels when surrounding concrete is solid',
      'Protects adjacent foundations, block walls, and railings',
    ],
    faqs: [
      {
        question: 'How do I know if my concrete should be repaired or replaced?',
        answer:
          'If damage is isolated to a few slabs or step edges and the base is sound, targeted replacement works well. Widespread heaving or deep settlement usually calls for full replacement.',
      },
      {
        question: 'Do you dowel new concrete into existing slabs?',
        answer:
          'Yes, when tying into sound adjacent concrete we drill and pin rebar dowels so panels stay level with each other.',
      },
    ],
    relatedSlugs: ['concrete-resurfacing', 'concrete-steps-stairs', 'concrete-sealing'],
  },
  {
    id: '10',
    slug: 'concrete-resurfacing',
    name: 'Concrete Resurfacing',
    category: 'Repair',
    icon: 'RefreshCw',
    shortDescription:
      'Renew worn, pitted, or surface-scaled concrete slabs with bonded polymer-modified overlays.',
    headline: 'Bring Tired, Salt-Pitted Concrete Back to a Clean Finish',
    overview:
      'When your concrete slab is structurally sound underneath but weathered, pitted, or discolored on top, resurfacing restores a fresh, uniform surface without full demolition.',
    image: '/images/projects/commercial-walkway-repair-before.jpg',
    imagePosition: 'center 70%',
    whatsIncluded: [
      'Mechanical surface profiling and thorough pressure cleaning',
      'Crack chasing and structural filler prep before overlay application',
      'High-bond polymer-modified concrete resurfacing system',
      'Optional broom texture or decorative finish and protective sealer',
    ],
    process: [
      { step: 'Slab Soundness Check', detail: 'Confirm base stability and absence of active structural heaving.' },
      { step: 'Deep Prep & Crack Fill', detail: 'Grind and clean the surface so the overlay bonds mechanically.' },
      { step: 'Overlay & Seal', detail: 'Apply uniform resurfacer coat, texture for grip, and seal.' },
    ],
    benefits: [
      'Faster turnaround and less mess than full tear-out when slabs are sound',
      'Covers minor surface pitting, light spalling, and mismatched patches',
      'Delivers a crisp uniform appearance across patios, porches, and walks',
    ],
    faqs: [
      {
        question: 'Can severely heaved or sunken concrete be resurfaced?',
        answer:
          'No—resurfacing is for structurally intact slabs with surface wear. If a slab is fractured and shifting, we recommend selective or full replacement.',
      },
      {
        question: 'Will a resurfaced patio stand up to Nebraska winters?',
        answer:
          'With proper mechanical prep, breathable sealing, and avoiding harsh de-icing salts, polymer-modified overlays perform reliably outdoors.',
      },
    ],
    relatedSlugs: ['concrete-repair', 'concrete-sealing', 'decorative-concrete'],
  },
  {
    id: '11',
    slug: 'concrete-foundations',
    name: 'Concrete Foundations',
    category: 'Commercial',
    icon: 'Landmark',
    shortDescription:
      'Footings, frost walls, stem walls, and structural pads poured to exact elevation and spec.',
    headline: 'True, Level Foundations Built to Anchor What Comes Next',
    overview:
      'Every reliable structure depends on accurate footings and stem walls. We excavate to frost depth, tie continuous rebar cages, verify squareness and elevations, and pour high-strength structural concrete for additions, garages, and outbuildings.',
    image: '/images/projects/eet-yard-sign-sidewalk.jpg',
    imagePosition: 'center 35%',
    whatsIncluded: [
      'Footing trenching to local frost-depth requirements',
      'Continuous horizontal and vertical rebar reinforcement',
      'Formed stem walls, retaining curbs, and anchor bolt layout',
      'Clean grade verification ready for framing or slab pour',
    ],
    process: [
      { step: 'Layout & Staking', detail: 'Set batter boards or laser benchmarks to confirm square corners and wall lines.' },
      { step: 'Excavation & Rebar', detail: 'Dig clean trenches, place rebar on chairs, and verify bearing soil.' },
      { step: 'Form, Pour & Strip', detail: 'Pour footings and walls to spec and prepare for backfill or framing.' },
    ],
    benefits: [
      'Square, level bearing surfaces save framing crews time and headaches',
      'Deep frost footings prevent seasonal movement and wall cracking',
      'Ideal for home additions, detached garages, porches, and retaining walls',
    ],
    faqs: [
      {
        question: 'Do you pour footings for detached garages and room additions?',
        answer:
          'Yes. We handle footings, stem walls, and interior slabs for residential additions, shops, and detached garages.',
      },
      {
        question: 'Do you coordinate with builders and framers on anchor bolt placement?',
        answer:
          'Yes. We place sill anchors and verify dimensions directly against your framing layout.',
      },
    ],
    relatedSlugs: ['concrete-slabs', 'concrete-garage-floors', 'concrete-curbing'],
  },
  {
    id: '12',
    slug: 'concrete-sealing',
    name: 'Concrete Sealing',
    category: 'Repair',
    icon: 'ShieldCheck',
    shortDescription:
      'Penetrating and acrylic sealers that shield driveways, patios, and walkways from moisture and salt.',
    headline: 'Protect Your Concrete Investment Against Moisture, Salt, and Freeze-Thaw',
    overview:
      'Unsealed concrete absorbs water and de-icing brine from snow tires, leading to surface flaking when temperatures drop below freezing. Proper cleaning and sealing locks out moisture and preserves your concrete’s clean finish.',
    image: null,
    whatsIncluded: [
      'Thorough surface wash and debris removal prior to sealing',
      'Penetrating silane/siloxane sealers for driveways and broom finishes',
      'Enhancer acrylic sealers for stamped and decorative surfaces',
      'Even application with clean edge cut-in around masonry and siding',
    ],
    process: [
      { step: 'Surface Wash & Dry', detail: 'Deep clean concrete and allow complete moisture dry-down before coating.' },
      { step: 'Sealer Selection', detail: 'Match breathable penetrating or film-forming sealer to your finish type.' },
      { step: 'Uniform Application', detail: 'Spray and back-roll evenly for consistent protection without pooling.' },
    ],
    benefits: [
      'Significantly reduces water absorption and winter salt scaling',
      'Helps resist oil drips, leaf tannins, and dirt embedding in pores',
      'Extends the clean, sharp look of both new and existing pours',
    ],
    faqs: [
      {
        question: 'When should new concrete be sealed for the first time?',
        answer:
          'Most new exterior concrete should cure for about 28 days before applying a penetrating sealer so moisture can escape properly.',
      },
      {
        question: 'Does penetrating sealer change how a driveway looks?',
        answer:
          'No. Penetrating sealers soak into the pores and leave a natural, matte concrete appearance without adding a slick film.',
      },
    ],
    relatedSlugs: ['concrete-driveways', 'stamped-concrete', 'concrete-resurfacing'],
  },
  {
    id: '13',
    slug: 'concrete-curbing',
    name: 'Concrete Curbing',
    category: 'Commercial',
    icon: 'Maximize2',
    shortDescription:
      'Clean-lined barrier curbs, parking lot edges, and landscape borders that hold grade and define space.',
    headline: 'Crisp Edges That Define Lots, Approaches, and Landscapes',
    overview:
      'Whether protecting lawn edges from vehicle tires, directing stormwater runoff along a commercial lot, or framing landscape beds, poured concrete curbing delivers clean geometry that never shifts like plastic or timber edging.',
    image: '/images/projects/shop-sidewalk-new.jpg',
    imagePosition: 'center 75%',
    whatsIncluded: [
      'Commercial barrier curbing and parking island containment',
      'Continuous poured landscape borders and apron curbs',
      'Steel pin or rebar tie-ins where curbing meets existing pavement',
      'Clean radius bends and smooth troweled face finish',
    ],
    process: [
      { step: 'Alignment & Elevation', detail: 'Lay out clean lines and drainage grades along drives or beds.' },
      { step: 'Base Prep & Reinforcement', detail: 'Compact trench and install continuous reinforcement steel.' },
      { step: 'Form, Pour & Tool', detail: 'Pour dense curbing mix and dress smooth joints.' },
    ],
    benefits: [
      'Keeps gravel, mulch, and vehicles cleanly inside designated zones',
      'Directs stormwater runoff cleanly toward drains instead of undermining slabs',
      'Zero rot, warping, or mower damage compared to timber or vinyl edging',
    ],
    faqs: [
      {
        question: 'Do you repair broken commercial parking lot curbs as well as new pours?',
        answer:
          'Yes. We saw-cut out damaged curb sections, pin new rebar, and pour matching replacement profiles.',
      },
      {
        question: 'Can curbing handle snow plow bumps along a lot edge?',
        answer:
          'Properly pinned and reinforced poured concrete curbing stands up far better than unanchored precast parking stops.',
      },
    ],
    relatedSlugs: ['concrete-parking-lots', 'concrete-driveways', 'concrete-foundations'],
  },
  {
    id: '14',
    slug: 'concrete-garage-floors',
    name: 'Concrete Garage Floors',
    category: 'Residential',
    icon: 'Warehouse',
    shortDescription:
      'Smooth, dense garage slabs pitched cleanly toward the door with heavy-load reinforcement.',
    headline: 'Dense, Level-Troweled Garage Floors Built for Years of Daily Use',
    overview:
      'Garage slabs endure hot tires, road salt meltwater, floor jacks, and heavy tool cabinets. We prep a tightly compacted base, reinforce the slab, pitch carefully toward the garage apron, and steel-trowel a dense, easy-to-sweep floor.',
    image: '/images/projects/garage-slab-framing.jpg',
    imagePosition: 'center 75%',
    whatsIncluded: [
      'Tear-out of settled or severely cracked garage concrete',
      'Compacted crushed rock subbase and vapor barrier option',
      'Steel rebar grid and thickened door-apron transitions',
      'Precision slope toward the overhead door and power-troweled finish',
    ],
    process: [
      { step: 'Tear-Out & Subgrade Prep', detail: 'Remove broken slab, check footings, and compact gravel base.' },
      { step: 'Grade & Steel Grid', detail: 'Set floor drains or door slope and tie rebar on chairs.' },
      { step: 'Pour & Power Trowel', detail: 'Finish smooth and dense, then saw-cut clean control joints.' },
    ],
    benefits: [
      'Meltwater drains cleanly out the door instead of pooling under stored items',
      'Dense steel-troweled finish resists dusting and makes cleanup easy',
      'Built to handle heavy SUVs, trucks, and workshop equipment',
    ],
    faqs: [
      {
        question: 'Can you replace a sunken garage floor without moving the walls?',
        answer:
          'Yes. Using compact track equipment, we carefully saw-cut and remove the interior slab while protecting existing stem walls and framing.',
      },
      {
        question: 'Should a garage floor be completely flat or slightly sloped?',
        answer:
          'We recommend a subtle, controlled slope toward the overhead door so snowmelt and rain run outside rather than sitting against drywall.',
      },
    ],
    relatedSlugs: ['concrete-driveways', 'concrete-slabs', 'concrete-sealing'],
  },
  {
    id: '15',
    slug: 'concrete-pool-decks',
    name: 'Concrete Pool Decks',
    category: 'Decorative',
    icon: 'Waves',
    shortDescription:
      'Cool, slip-resistant pool surrounds graded cleanly away from coping for bare feet and drainage.',
    headline: 'Slip-Resistant Pool Surrounds Built for Bare Feet and Clean Drainage',
    overview:
      'Pool decks have to stay comfortable underfoot, provide reliable wet traction, and drain splash water away from both the pool shell and nearby structures. We build custom brushed, textured, and decorative pool aprons that hold up season after season.',
    image: '/images/projects/backyard-patio-finished.jpg',
    imagePosition: 'center 65%',
    whatsIncluded: [
      'Careful grading away from pool coping toward perimeter drainage',
      'Reinforced pours around skimmers, ladders, and deck anchors',
      'Slip-resistant broom or lightly textured decorative finishes',
      'Clean expansion joints isolating the deck from pool coping',
    ],
    process: [
      { step: 'Coping & Drain Layout', detail: 'Establish elevations around pool edges and plan deck drainage.' },
      { step: 'Subbase & Bonding Prep', detail: 'Compact rock base cleanly around plumbing lines and bond wires.' },
      { step: 'Pour, Texture & Joint', detail: 'Apply comfortable non-slip finish and tool clean perimeter joints.' },
    ],
    benefits: [
      'Even, splinter-free surface comfortable for bare feet all summer',
      'Proper drainage prevents puddles and slippery algae buildup',
      'Resists pool splash chemicals when properly cured and sealed',
    ],
    faqs: [
      {
        question: 'What concrete finish is best around a swimming pool?',
        answer:
          'A light broom finish or lightly textured stamped/colored surface with non-slip sealer gives great wet traction without feeling harsh on bare feet.',
      },
      {
        question: 'Do you leave expansion space between the deck and pool coping?',
        answer:
          'Yes. Proper isolation joints protect both the pool shell and surrounding concrete from thermal movement.',
      },
    ],
    relatedSlugs: ['concrete-patios', 'stamped-concrete', 'concrete-sealing'],
  },
];

export function getServiceBySlug(slug: string): ConcreteService | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
