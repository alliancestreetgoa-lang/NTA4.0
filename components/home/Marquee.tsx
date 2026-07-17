// Trading-tape ticker: product + grade pairs in mono, like a desk price feed.
const items: Array<[string, string]> = [
  ["UREA", "46-0-0"],
  ["LNG", "CIF/FOB"],
  ["DAP", "18-46-0"],
  ["CRUDE OIL", "VESSEL"],
  ["MOP", "0-0-60"],
  ["METHANOL", "IMPCA"],
  ["WHEAT", "MILLING"],
  ["DIESEL", "10 PPM"],
  ["POLYETHYLENE", "HDPE/LLDPE"],
  ["AMMONIUM SULPHATE", "21-0-0"],
  ["NAPHTHA", "FULL RANGE"],
  ["NPK", "15-15-15"],
  ["SULPHUR", "GRANULAR"],
  ["JET FUEL", "A-1"],
  ["SOYBEAN", "FEED"],
  ["LPG", "C3/C4"],
];

export function Marquee() {
  return (
    <section
      aria-label="Commodities traded"
      className="border-b border-ink/10 bg-sand-50 py-4"
    >
      <div className="relative flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center">
          {[...items, ...items].map(([name, grade], i) => (
            <span
              key={i}
              aria-hidden={i >= items.length}
              className="flex items-center whitespace-nowrap font-mono text-xs tracking-[0.12em]"
            >
              <span className="text-ink/80">{name}</span>
              <span className="ml-2.5 text-accent-deep">{grade}</span>
              <span aria-hidden className="mx-6 text-ink/40">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
