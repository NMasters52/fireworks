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
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-12 text-center">
        {/* Logo */}
        <img
          src="https://res.cloudinary.com/nmasters-dev/image/upload/v1780563552/FullLogo_NoBuffer-Photoroom_o7dvdt.png"
          alt="RascoFX Logo"
          className="w-1/2 h-auto mb-6"
        />

        {/* Tagline - Version 1: Bebas Neue (Bold, Uppercase, Impactful)
        <p
          className="max-w-lg mb-10 text-3xl tracking-widest uppercase sm:text-4xl md:text-5xl"
          style={{
            color: "rgba(250, 247, 243, 0.9)",
            fontFamily: "'Bebas Neue', sans-serif",
          }}
        >
          We provide the best boom for your buck
        </p>
        */}

        {/* Tagline - Version 2: Playfair Display (Elegant Serif)
        <p
          className="max-w-lg mb-10 text-2xl italic sm:text-3xl md:text-4xl"
          style={{
            color: "rgba(250, 247, 243, 0.9)",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          We provide the best boom for your buck
        </p>
        */}

        {/* Tagline - Version 2: Playfair Display (Elegant Serif) */}
        <p
          className="max-w-lg mb-10 text-2xl italic sm:text-3xl md:text-4xl"
          style={{
            color: "rgba(250, 247, 243, 0.9)",
            fontFamily: "'Playfair Display', serif",
          }}
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
