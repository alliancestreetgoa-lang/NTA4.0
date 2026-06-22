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

/* ------------------------------------------------------------------ */
/* Chemical fertilizers supplied by NTA Group                          */
/* Full range of nitrogen, phosphate, potash, compound and            */
/* micronutrient grades for global agricultural markets.              */
/* ------------------------------------------------------------------ */

export type Fertilizer = {
  name: string;
  formula: string;
  grade: string; // N-P-K or nutrient grade
  tier: "Major" | "Secondary" | "Micronutrient";
  image: string;
  uses: string;
  crops: string[];
  // Optional full-bleed infographic poster (local file in /public/fertilizers).
  // When set, the card renders the poster instead of the standard image+text.
  poster?: string;
};

const FIMG = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=72`;

export const bangladeshFertilizers: Fertilizer[] = [
  {
    name: "Urea",
    formula: "CO(NH₂)₂",
    grade: "46-0-0 · 46% N",
    tier: "Major",
    image: FIMG("photo-1710223221719-6251cb1b5c5b"),
    poster: "/fertilizers/urea.png",
    uses:
      "The world's most widely used fertilizer and primary nitrogen source. Drives vigorous vegetative growth, tillering and grain yield. Applied in splits during the season; deep placement as Urea Super Granule (USG) raises efficiency in rice.",
    crops: ["Rice", "Wheat", "Maize", "Vegetables"],
  },
  {
    name: "TSP — Triple Super Phosphate",
    formula: "Ca(H₂PO₄)₂",
    grade: "0-46-0 · 46% P₂O₅",
    tier: "Major",
    image: FIMG("photo-1542308744-011fa9a309f7"),
    poster: "/fertilizers/tsp.png",
    uses:
      "Concentrated phosphate applied as a basal dose. Promotes strong root development, early establishment, tillering and grain formation — essential on phosphorus-deficient soils.",
    crops: ["Rice", "Potato", "Oilseeds", "Pulses"],
  },
  {
    name: "DAP — Di-Ammonium Phosphate",
    formula: "(NH₄)₂HPO₄",
    grade: "18-46-0 · N + P",
    tier: "Major",
    image: FIMG("photo-1656581417767-5eb8ecd8bf3c"),
    poster: "/fertilizers/dap.png",
    uses:
      "A dual nitrogen-and-phosphorus fertilizer used widely as a basal application. Boosts early root growth and supplies starter nitrogen, reducing the separate urea requirement at planting.",
    crops: ["Rice", "Maize", "Vegetables", "Fruit"],
  },
  {
    name: "MoP — Muriate of Potash",
    formula: "KCl",
    grade: "0-0-60 · 60% K₂O",
    tier: "Major",
    image: FIMG("photo-1641543764196-f5e42a65a0db"),
    uses:
      "The principal potassium source. Improves disease and lodging resistance, water regulation, grain filling and tuber quality — critical where intensive cropping depletes soil potassium.",
    crops: ["Potato", "Banana", "Rice", "Sugarcane"],
  },
  {
    name: "SSP — Single Super Phosphate",
    formula: "Ca(H₂PO₄)₂ + CaSO₄",
    grade: "0-16-0 · +11% S, +Ca",
    tier: "Secondary",
    image: FIMG("photo-1568111384070-4bea71e5ed74"),
    uses:
      "Supplies phosphorus together with sulphur and calcium in a single product. Particularly valuable for oilseeds and pulses and on sulphur-deficient soils.",
    crops: ["Mustard", "Groundnut", "Pulses", "Vegetables"],
  },
  {
    name: "Ammonium Sulphate",
    formula: "(NH₄)₂SO₄",
    grade: "21-0-0 · +24% S",
    tier: "Secondary",
    image: FIMG("photo-1559924632-fff3ee79c1dc"),
    uses:
      "Delivers nitrogen plus sulphur and gently acidifies the root zone. Preferred for tea, oilseeds and alkaline soils, and effective at correcting sulphur deficiency.",
    crops: ["Tea", "Oilseeds", "Vegetables", "Rice"],
  },
  {
    name: "Gypsum",
    formula: "CaSO₄·2H₂O",
    grade: "~18% S · ~23% Ca",
    tier: "Secondary",
    image: FIMG("photo-1632858918575-f865ab926cc0"),
    uses:
      "A key sulphur source. Corrects widespread sulphur deficiency, improves soil structure, and helps reclaim saline-alkali and coastal soils.",
    crops: ["Rice", "Oilseeds", "Coastal/Saline Soils"],
  },
  {
    name: "Zinc Sulphate",
    formula: "ZnSO₄",
    grade: "Mono 33% Zn · Hepta 21% Zn",
    tier: "Micronutrient",
    image: FIMG("photo-1608797179015-0f64ad48744b"),
    uses:
      "Corrects zinc deficiency — the cause of 'khaira' disease in rice — one of the most common micronutrient deficiencies in intensively cropped soils. Essential for chlorophyll formation and healthy tillering.",
    crops: ["Rice", "Maize", "Wheat", "Vegetables"],
  },
  {
    name: "Boron (Boric Acid / Solubor)",
    formula: "H₃BO₃ / Na₂B₈O₁₃",
    grade: "~17–20% B",
    tier: "Micronutrient",
    image: FIMG("photo-1625758477951-d9b245b1a79f"),
    uses:
      "Corrects boron deficiency that limits flowering and seed/fruit set. Critical for mustard, vegetables and pulses on boron-poor soils.",
    crops: ["Mustard", "Cauliflower", "Pulses", "Fruit"],
  },
  {
    name: "Magnesium Sulphate",
    formula: "MgSO₄·7H₂O",
    grade: "~9.8% Mg · +13% S",
    tier: "Micronutrient",
    image: FIMG("photo-1612708015264-5f13c037c9cd"),
    uses:
      "Supplies magnesium for chlorophyll and sulphur for protein synthesis. Corrects magnesium deficiency under intensive cropping and on light, sandy soils.",
    crops: ["Vegetables", "Potato", "Fruit", "Rice"],
  },
  {
    name: "NPKS / NPK Compound",
    formula: "Granular Blend",
    grade: "e.g. 15-15-15 · +S",
    tier: "Secondary",
    image: FIMG("photo-1537155023352-cda15844e56d"),
    uses:
      "Balanced, ready-to-use blends delivering nitrogen, phosphorus, potassium and sulphur in one application — convenient for balanced fertilisation across diverse crops.",
    crops: ["Rice", "Vegetables", "Maize", "Horticulture"],
  },
  {
    name: "MAP — Mono-Ammonium Phosphate",
    formula: "(NH₄)H₂PO₄",
    grade: "12-61-0 · N + P",
    tier: "Secondary",
    image: FIMG("photo-1774351922689-896a9340aa7b"),
    uses:
      "The highest-analysis phosphate fertilizer, with a starter dose of nitrogen. Excellent as a basal application to drive vigorous early root and shoot growth.",
    crops: ["Rice", "Potato", "Maize", "Vegetables"],
  },
  {
    name: "NPS — Ammonium Phosphate Sulphate",
    formula: "Granular Compound",
    grade: "20-20-0 · +13% S",
    tier: "Secondary",
    image: FIMG("photo-1537870148480-ed9ff56a8148"),
    uses:
      "Supplies nitrogen, phosphorus and sulphur together — well suited to sulphur-deficient soils and to oilseeds and pulses that need extra sulphur.",
    crops: ["Mustard", "Pulses", "Rice", "Wheat"],
  },
  {
    name: "SOP — Sulphate of Potash",
    formula: "K₂SO₄",
    grade: "0-0-50 · +18% S",
    tier: "Secondary",
    image: FIMG("photo-1559924632-fff3ee79c1dc"),
    uses:
      "Chloride-free potassium plus sulphur, ideal for chloride-sensitive and quality crops. Improves flavour, colour and shelf life in fruit, vegetables and tobacco.",
    crops: ["Potato", "Tobacco", "Fruit", "Vegetables"],
  },
  {
    name: "CAN — Calcium Ammonium Nitrate",
    formula: "5Ca(NO₃)₂·NH₄NO₃",
    grade: "26-0-0 · +Ca",
    tier: "Secondary",
    image: FIMG("photo-1655130944329-b3a63166f6b5"),
    uses:
      "A fast-acting, low-acidity nitrogen source that also supplies calcium. Suited to top-dressing vegetables and to acidic soils where urea acidification is a concern.",
    crops: ["Vegetables", "Maize", "Tea", "Fruit"],
  },
  {
    name: "Guti Urea (Urea Super Granule)",
    formula: "CO(NH₂)₂",
    grade: "46-0-0 · deep-placed",
    tier: "Major",
    image: FIMG("photo-1655130944281-072e0644db75"),
    uses:
      "Large urea briquettes deep-placed into the root zone of transplanted rice. Cuts nitrogen losses sharply, raising fertilizer-use efficiency and yield — widely adopted in intensive rice systems.",
    crops: ["Transplanted Rice", "Paddy", "Wetland Rice"],
  },
  {
    name: "Copper Sulphate",
    formula: "CuSO₄·5H₂O",
    grade: "~25% Cu",
    tier: "Micronutrient",
    image: FIMG("photo-1537155023352-cda15844e56d"),
    uses:
      "Corrects copper deficiency that impairs grain set and disease resistance. Important for cereals and vegetables on organic and reclaimed soils.",
    crops: ["Wheat", "Rice", "Vegetables"],
  },
  {
    name: "Manganese Sulphate",
    formula: "MnSO₄·H₂O",
    grade: "~30% Mn",
    tier: "Micronutrient",
    image: FIMG("photo-1537870148480-ed9ff56a8148"),
    uses:
      "Supplies manganese for photosynthesis and enzyme function. Corrects deficiency on high-pH and intensively cropped soils, common in rice–wheat systems.",
    crops: ["Wheat", "Rice", "Pulses", "Vegetables"],
  },
  {
    name: "Ferrous Sulphate (Iron)",
    formula: "FeSO₄·7H₂O",
    grade: "~19% Fe",
    tier: "Micronutrient",
    image: FIMG("photo-1608797179015-0f64ad48744b"),
    uses:
      "Corrects iron-deficiency chlorosis (yellowing leaves), especially on calcareous and alkaline soils. Restores healthy green growth in fruit and vegetable crops.",
    crops: ["Fruit", "Vegetables", "Rice", "Groundnut"],
  },
  {
    name: "Dolomite / Agricultural Lime",
    formula: "CaMg(CO₃)₂",
    grade: "Soil amendment · +Ca, +Mg",
    tier: "Secondary",
    image: FIMG("photo-1632858918575-f865ab926cc0"),
    uses:
      "Raises pH on acidic and lateritic soils, supplies calcium and magnesium, and improves nutrient availability and root development.",
    crops: ["Acidic Soils", "Tea", "Pulses", "Vegetables"],
  },
];
