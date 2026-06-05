import { Link } from "react-router-dom";

const designs = [
  {
    id: 1,
    name: "Neon Edge",
    style: "Cyberpunk / Dark Tech",
    desc: "Dark background with neon gradient accents, a subtle grid overlay, and glowing contact rows.",
    accent: "#11D0BD",
  },
  {
    id: 2,
    name: "Chromatic",
    style: "Bold / Colorful",
    desc: "Vibrant gradient backdrop with a clean white card and colorful pill-shaped action buttons.",
    accent: "#FE59CB",
  },
  {
    id: 3,
    name: "Void Glass",
    style: "Glassmorphism / Minimal",
    desc: "Floating gradient orbs behind a frosted glass card — trendy, modern, and ethereal.",
    accent: "#11D0BD",
  },
];

const BusinessLanding = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
      <div className="text-center mb-10">
        <h1
          className="text-4xl sm:text-5xl mb-3"
          style={{ fontFamily: "Bebas Neue, sans-serif", color: "#11D0BD" }}
        >
          Business Card Designs
        </h1>
        <p className="text-text/50 text-sm">
          Choose a design for the RascoFX virtual business card
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {designs.map((d) => (
          <Link
            key={d.id}
            to={`/business/${d.id}`}
            className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:scale-[1.02]"
          >
            <div
              className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
              style={{ background: d.accent }}
            >
              {d.id}
            </div>
            <h2
              className="text-xl font-bold mb-1"
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
            >
              {d.name}
            </h2>
            <p
              className="text-xs tracking-wider uppercase mb-3"
              style={{ color: d.accent }}
            >
              {d.style}
            </p>
            <p className="text-sm text-text/50 leading-relaxed">{d.desc}</p>
            <div className="mt-4 text-sm font-medium" style={{ color: "#11D0BD" }}>
              View Design →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BusinessLanding;
