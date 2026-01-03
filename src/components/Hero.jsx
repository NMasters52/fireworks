"use client";

import { Link } from "react-router-dom";

export function Hero() {
  const pinkColor = "#D64D85";
  const pinkRgb = "214, 77, 133";

  return (
    <section
      className="relative flex items-center justify-center w-full min-h-screen overflow-hidden"
      style={{ backgroundColor: "#1a1518" }}
    >
      {/* Particle Trail Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Trail 1 - Top left curved */}
        <div
          className="absolute w-[300px] h-[3px] top-[15%] left-[10%] rotate-[30deg]"
          style={{
            background: `linear-gradient(90deg, transparent, rgba(${pinkRgb}, 0.4) 30%, rgba(${pinkRgb}, 0.25) 70%, transparent)`,
            borderRadius: "50%",
            boxShadow: `0 0 15px rgba(${pinkRgb}, 0.3)`,
          }}
        />
        {/* Trail 2 - Top right */}
        <div
          className="absolute w-[250px] h-[3px] top-[20%] right-[15%] rotate-[-45deg]"
          style={{
            background: `linear-gradient(90deg, transparent, rgba(${pinkRgb}, 0.5) 40%, rgba(${pinkRgb}, 0.3) 80%, transparent)`,
            borderRadius: "50%",
            boxShadow: `0 0 15px rgba(${pinkRgb}, 0.3)`,
          }}
        />
        {/* Trail 3 - Middle left */}
        <div
          className="absolute w-[200px] h-[3px] top-[40%] left-[5%] rotate-[120deg]"
          style={{
            background: `linear-gradient(90deg, transparent, rgba(${pinkRgb}, 0.35) 50%, transparent)`,
            borderRadius: "50%",
            boxShadow: `0 0 12px rgba(${pinkRgb}, 0.25)`,
          }}
        />
        {/* Trail 4 - Center right */}
        <div
          className="absolute w-[280px] h-[3px] top-[55%] right-[8%] rotate-[-25deg]"
          style={{
            background: `linear-gradient(90deg, transparent, rgba(${pinkRgb}, 0.45) 35%, rgba(${pinkRgb}, 0.2) 75%, transparent)`,
            borderRadius: "50%",
            boxShadow: `0 0 15px rgba(${pinkRgb}, 0.3)`,
          }}
        />
        {/* Trail 5 - Bottom left */}
        <div
          className="absolute w-[220px] h-[3px] bottom-[25%] left-[12%] rotate-[65deg]"
          style={{
            background: `linear-gradient(90deg, transparent, rgba(${pinkRgb}, 0.4) 45%, transparent)`,
            borderRadius: "50%",
            boxShadow: `0 0 12px rgba(${pinkRgb}, 0.25)`,
          }}
        />
        {/* Trail 6 - Bottom center */}
        <div
          className="absolute w-[180px] h-[3px] bottom-[30%] left-[45%] rotate-[-60deg]"
          style={{
            background: `linear-gradient(90deg, transparent, rgba(${pinkRgb}, 0.35) 50%, transparent)`,
            borderRadius: "50%",
            boxShadow: `0 0 10px rgba(${pinkRgb}, 0.2)`,
          }}
        />
        {/* Trail 7 - Top center */}
        <div
          className="absolute w-[260px] h-[3px] top-[10%] left-[35%] rotate-[15deg]"
          style={{
            background: `linear-gradient(90deg, transparent, rgba(${pinkRgb}, 0.4) 40%, rgba(${pinkRgb}, 0.15) 80%, transparent)`,
            borderRadius: "50%",
            boxShadow: `0 0 12px rgba(${pinkRgb}, 0.25)`,
          }}
        />
        {/* Trail 8 - Bottom right */}
        <div
          className="absolute w-[240px] h-[3px] bottom-[15%] right-[20%] rotate-[85deg]"
          style={{
            background: `linear-gradient(90deg, transparent, rgba(${pinkRgb}, 0.45) 30%, transparent)`,
            borderRadius: "50%",
            boxShadow: `0 0 15px rgba(${pinkRgb}, 0.3)`,
          }}
        />

        <div
          className="absolute w-2 h-2 top-[18%] left-[25%] rounded-full"
          style={{
            backgroundColor: `rgba(${pinkRgb}, 0.6)`,
            boxShadow: `0 0 8px rgba(${pinkRgb}, 0.5)`,
          }}
        />
        <div
          className="absolute w-1.5 h-1.5 top-[35%] right-[22%] rounded-full"
          style={{
            backgroundColor: `rgba(${pinkRgb}, 0.5)`,
            boxShadow: `0 0 6px rgba(${pinkRgb}, 0.4)`,
          }}
        />
        <div
          className="absolute w-2 h-2 bottom-[40%] left-[30%] rounded-full"
          style={{
            backgroundColor: `rgba(${pinkRgb}, 0.55)`,
            boxShadow: `0 0 8px rgba(${pinkRgb}, 0.45)`,
          }}
        />
        <div
          className="absolute w-1.5 h-1.5 top-[60%] right-[35%] rounded-full"
          style={{
            backgroundColor: `rgba(${pinkRgb}, 0.5)`,
            boxShadow: `0 0 6px rgba(${pinkRgb}, 0.4)`,
          }}
        />
        <div
          className="absolute w-1 h-1 bottom-[22%] right-[40%] rounded-full"
          style={{
            backgroundColor: `rgba(${pinkRgb}, 0.6)`,
            boxShadow: `0 0 5px rgba(${pinkRgb}, 0.5)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-12 text-center">
        {/* Business Name */}
        <h1
          className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
          style={{ color: "#FAF7F3" }}
        >
          Rasco<span style={{ color: pinkColor }}>FX</span>
        </h1>

        {/* Tagline */}
        <p
          className="max-w-md mb-10 text-lg font-light sm:text-xl md:text-2xl"
          style={{ color: "rgba(250, 247, 243, 0.85)" }}
        >
          We provide the best boom for your buck
        </p>

        {/* CTA Links */}
        <div className="flex flex-col w-full max-w-xs gap-4 sm:flex-row sm:max-w-none sm:w-auto">
          {/* Primary CTA */}
          <Link
            to="/products"
            className="min-h-[12] px-8 py-3 rounded-lg font-semibold text-base text-center transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              backgroundColor: pinkColor,
              color: "#FAF7F3",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 0 20px rgba(${pinkRgb}, 0.6), 0 0 40px rgba(${pinkRgb}, 0.3)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            View Products
          </Link>

          {/* Secondary CTA */}
          <Link
            to="/contact"
            className="min-h-[12] px-8 py-3 rounded-lg font-semibold text-base text-center border-2 transition-all duration-300 hover:bg-[#D64D85]/10 active:scale-[0.98]"
            style={{
              borderColor: pinkColor,
              color: pinkColor,
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 0 20px rgba(${pinkRgb}, 0.5), 0 0 40px rgba(${pinkRgb}, 0.25)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
