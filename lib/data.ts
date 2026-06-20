import {
  FlaskConical,
  Flame,
  Droplets,
  Atom,
  Wheat,
  Globe2,
  type LucideIcon,
} from "lucide-react";

export type Product = {
  name: string;
  note?: string;
};

export type Division = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  image: string;
  primary?: boolean;
  groups: {
    heading: string;
    products: Product[];
  }[];
  applications: string[];
  capability: string;
};

// High-end editorial photography (Unsplash)
const IMG = {
  fertilizer:
    "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1600&q=80",
  energy:
    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1600&q=80",
  oil: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?auto=format&fit=crop&w=1600&q=80",
  petrochem:
    "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=1600&q=80",
  grains:
    "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1600&q=80",
  solutions:
    "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1600&q=80",
};

export const divisions: Division[] = [
  {
    slug: "chemical-fertilizers",
    title: "Chemical Fertilizers",
    short: "Our flagship division — fertilizer trading & global supply.",
    description:
      "Chemical fertilizers are the cornerstone of NTA Group. We source, supply and distribute the full spectrum of nitrogen, phosphate, potash and specialty fertilizers to farmers, blenders and distributors across global agricultural markets.",
    icon: FlaskConical,
    image: IMG.fertilizer,
    primary: true,
    groups: [
      {
        heading: "Nitrogen Fertilizers",
        products: [
          { name: "Urea 46%" },
          { name: "Granular Urea" },
          { name: "Prilled Urea" },
          { name: "Ammonium Sulphate" },
          { name: "Ammonium Nitrate" },
          { name: "Calcium Ammonium Nitrate (CAN)" },
        ],
      },
      {
        heading: "Compound & Phosphate",
        products: [
          { name: "NPK Fertilizers" },
          { name: "DAP" },
          { name: "MAP" },
          { name: "SSP" },
          { name: "TSP" },
        ],
      },
      {
        heading: "Potassium & Sulphur",
        products: [
          { name: "Potash (MOP)" },
          { name: "SOP" },
          { name: "Sulphur" },
        ],
      },
      {
        heading: "Specialty & Soluble",
        products: [
          { name: "Micronutrient Fertilizers" },
          { name: "Water Soluble Fertilizers" },
          { name: "Specialty Fertilizers" },
          { name: "Agricultural Chemicals" },
        ],
      },
    ],
    applications: [
      "Broad-acre & row crop nutrition",
      "Bulk blending & distribution",
      "Greenhouse & fertigation",
      "Soil conditioning programs",
    ],
    capability:
      "Vessel and container shipments worldwide, with reliable origins across the Middle East, North Africa, CIS and Asia.",
  },
  {
    slug: "energy",
    title: "Energy Trading",
    short: "LNG, natural gas, LPG and industrial gas supply.",
    description:
      "We trade and supply natural gas and industrial gas products, connecting upstream producers with utilities, industrial off-takers and downstream markets through structured, reliable supply.",
    icon: Flame,
    image: IMG.energy,
    groups: [
      {
        heading: "Gas Products",
        products: [
          { name: "Industrial Gas" },
          { name: "LNG — Liquefied Natural Gas" },
          { name: "Natural Gas" },
          { name: "LPG" },
          { name: "Condensate" },
        ],
      },
    ],
    applications: [
      "Power generation feedstock",
      "Industrial heating & process",
      "Residential & commercial supply",
      "Marine & transport fuel",
    ],
    capability:
      "Cargo-scale LNG and structured gas supply with logistics coordination across GCC, Asia and Europe.",
  },
  {
    slug: "oil",
    title: "Oil Trading",
    short: "Crude oil and refined petroleum products.",
    description:
      "From crude oil to a complete slate of refined products, our oil desk delivers competitive, dependable supply to refiners, distributors and industrial consumers worldwide.",
    icon: Droplets,
    image: IMG.oil,
    groups: [
      {
        heading: "Crude & Refined",
        products: [
          { name: "Crude Oil" },
          { name: "Refined Oil Products" },
          { name: "Diesel" },
          { name: "Gasoil" },
          { name: "Fuel Oil" },
          { name: "Naphtha" },
          { name: "Base Oil" },
          { name: "Jet Fuel" },
          { name: "Marine Fuel" },
          { name: "Bitumen" },
        ],
      },
    ],
    applications: [
      "Refinery feedstock",
      "Transport & aviation fuel",
      "Marine bunkering",
      "Road construction & industry",
    ],
    capability:
      "Spot and term supply with full logistics, inspection and quality assurance across major trade routes.",
  },
  {
    slug: "petrochemicals",
    title: "Petrochemicals",
    short: "Polymers, aromatics, solvents and feedstocks.",
    description:
      "Our petrochemicals desk supplies the building blocks of modern industry — polymers, olefins, aromatics and industrial solvents — to manufacturers across diverse sectors.",
    icon: Atom,
    image: IMG.petrochem,
    groups: [
      {
        heading: "Petrochemical Products",
        products: [
          { name: "Methanol" },
          { name: "Polyethylene" },
          { name: "Polypropylene" },
          { name: "Ethylene" },
          { name: "Propylene" },
          { name: "Benzene" },
          { name: "Toluene" },
          { name: "Xylene" },
          { name: "Industrial Solvents" },
          { name: "Chemical Feedstocks" },
        ],
      },
    ],
    applications: [
      "Plastics & packaging",
      "Coatings, adhesives & solvents",
      "Automotive & construction",
      "Chemical manufacturing",
    ],
    capability:
      "Reliable polymer and chemical feedstock supply backed by quality documentation and global logistics.",
  },
  {
    slug: "grains-cereals",
    title: "Grains & Cereals",
    short: "Agriculture & food commodities trading.",
    description:
      "We connect agricultural producers with global food and feed markets, trading grains, cereals, pulses and animal feed with strict attention to quality and food-grade standards.",
    icon: Wheat,
    image: IMG.grains,
    groups: [
      {
        heading: "Grains & Cereals",
        products: [
          { name: "Grains" },
          { name: "Cereals" },
          { name: "Wheat" },
          { name: "Corn" },
          { name: "Barley" },
          { name: "Rice" },
        ],
      },
      {
        heading: "Legumes & Feed",
        products: [
          { name: "Legumes" },
          { name: "Pulses" },
          { name: "Soybean" },
          { name: "Animal Feed" },
        ],
      },
    ],
    applications: [
      "Human food supply",
      "Milling & processing",
      "Animal feed & nutrition",
      "Strategic food reserves",
    ],
    capability:
      "Bulk and containerized agri-commodity supply from leading origins to import-dependent markets.",
  },
  {
    slug: "commodity-solutions",
    title: "Commodity Solutions",
    short: "Trading, sourcing, logistics & supply chain.",
    description:
      "Beyond physical trading, NTA Group delivers end-to-end commodity solutions — strategic sourcing, procurement, logistics and risk management — for partners navigating complex global markets.",
    icon: Globe2,
    image: IMG.solutions,
    groups: [
      {
        heading: "Global Commodity Solutions",
        products: [
          { name: "International Commodity Trading" },
          { name: "Strategic Sourcing" },
          { name: "Procurement Management" },
          { name: "Global Supply Chain Solutions" },
          { name: "Export & Import Management" },
          { name: "Logistics Coordination" },
          { name: "Bulk Commodity Procurement" },
          { name: "Trade Facilitation" },
          { name: "Market Intelligence" },
          { name: "Risk Management Support" },
        ],
      },
    ],
    applications: [
      "Government & institutional buyers",
      "Industrial procurement",
      "Distributors & traders",
      "Producers seeking market access",
    ],
    capability:
      "A single, accountable partner across the entire commodity value chain — from origin to delivery.",
  },
];

export const services = [
  {
    title: "International Commodity Trading",
    desc: "Physical trading across energy, fertilizer and agri markets with global reach.",
  },
  {
    title: "Strategic Sourcing",
    desc: "Access to reliable origins and producers across multiple continents.",
  },
  {
    title: "Procurement Management",
    desc: "Structured procurement programs tailored to volume and quality needs.",
  },
  {
    title: "Global Supply Chain Solutions",
    desc: "Integrated supply chains engineered for resilience and efficiency.",
  },
  {
    title: "Export & Import Management",
    desc: "Full documentation, compliance and cross-border trade handling.",
  },
  {
    title: "Logistics Coordination",
    desc: "Vessel chartering, freight and inland logistics, end to end.",
  },
  {
    title: "Bulk Commodity Procurement",
    desc: "Large-scale procurement with competitive, dependable pricing.",
  },
  {
    title: "Trade Facilitation",
    desc: "Trade finance structuring and transaction facilitation support.",
  },
  {
    title: "Market Intelligence",
    desc: "Data-driven insight into pricing, demand and global flows.",
  },
  {
    title: "Risk Management Support",
    desc: "Hedging guidance and risk frameworks for volatile markets.",
  },
];

export const whyNta = [
  {
    title: "Global Network",
    desc: "Reliable sourcing partners worldwide, spanning producers, suppliers and manufacturers across continents.",
  },
  {
    title: "Trusted Supply Chain",
    desc: "Efficient procurement and logistics designed for reliability, transparency and on-time delivery.",
  },
  {
    title: "Quality Assurance",
    desc: "International quality standards with rigorous inspection and documentation on every shipment.",
  },
  {
    title: "Market Expertise",
    desc: "Deep commodity market knowledge across energy, fertilizer and agricultural sectors.",
  },
  {
    title: "Strategic Partnerships",
    desc: "Long-term supplier relationships built on trust, consistency and mutual growth.",
  },
  {
    title: "Sustainable Growth",
    desc: "Responsible global trade practices that balance commercial and environmental priorities.",
  },
];

export const markets = [
  {
    region: "United Arab Emirates",
    role: "Global headquarters & trading hub",
    blurb: "Our Dubai base anchors a strategically located trading operation at the crossroads of global commodity flows.",
  },
  {
    region: "GCC",
    role: "Regional supply network",
    blurb: "Deep integration with Gulf producers of energy, petrochemicals and fertilizers.",
  },
  {
    region: "Africa",
    role: "Growth & food security markets",
    blurb: "Supplying fertilizers and grains to support agricultural development across the continent.",
  },
  {
    region: "India",
    role: "High-demand import market",
    blurb: "A key destination for fertilizers, energy and agri-commodity supply.",
  },
  {
    region: "Southeast Asia",
    role: "Industrial & agri demand",
    blurb: "Serving fast-growing economies with petrochemicals, energy and food commodities.",
  },
  {
    region: "Europe",
    role: "Mature trading corridors",
    blurb: "Established corridors for refined products, petrochemicals and specialty commodities.",
  },
];

export const sustainability = [
  {
    title: "Responsible Sourcing",
    desc: "We partner with producers who uphold ethical, safe and compliant operating standards.",
  },
  {
    title: "Environmental Awareness",
    desc: "We work to minimize the environmental footprint of trade, logistics and supply chains.",
  },
  {
    title: "Supply Chain Transparency",
    desc: "Traceability and accountability across every link of the commodity value chain.",
  },
  {
    title: "Sustainable Agriculture",
    desc: "Supporting balanced fertilizer use and productive, sustainable farming systems.",
  },
  {
    title: "Long-Term Partnerships",
    desc: "Enduring relationships that create shared, sustainable value over time.",
  },
];

export const aboutPoints = [
  {
    title: "UAE-Based Trading Company",
    desc: "Headquartered in the United Arab Emirates, at the heart of global trade.",
  },
  {
    title: "International Market Presence",
    desc: "An active trading footprint across more than 40 markets worldwide.",
  },
  {
    title: "Global Sourcing Network",
    desc: "Direct access to producers and suppliers across multiple continents.",
  },
  {
    title: "Commitment to Quality",
    desc: "Uncompromising adherence to international quality and safety standards.",
  },
  {
    title: "Sustainable Partnerships",
    desc: "Responsible trade practices that protect people and the planet.",
  },
  {
    title: "Long-Term Relationships",
    desc: "Trust-based partnerships built to endure across market cycles.",
  },
];
