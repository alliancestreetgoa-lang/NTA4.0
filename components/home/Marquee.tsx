const items = [
  "Urea 46%",
  "LNG",
  "DAP",
  "Crude Oil",
  "Potash (MOP)",
  "Methanol",
  "Wheat",
  "Diesel",
  "Polyethylene",
  "Ammonium Sulphate",
  "Naphtha",
  "NPK",
  "Sulphur",
  "Jet Fuel",
  "Soybean",
  "LPG",
];

export function Marquee() {
  return (
    <section className="border-y border-line bg-sand-50 py-6">
      <div className="relative flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-12 pr-12">
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-12 whitespace-nowrap text-sm font-medium uppercase tracking-[0.15em] text-charcoal-muted"
            >
              {item}
              <span className="h-1 w-1 rounded-full bg-sand-400" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
