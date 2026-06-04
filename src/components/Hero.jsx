"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { launchFirework } from "../utils/fireworkLauncher";

export function Hero() {
  const pinkColor = "#D64D85";
  const pinkRgb = "214, 77, 133";
  const [showModal, setShowModal] = useState(false);

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
          className="w-4/5 sm:w-2/3 md:w-1/2 lg:w-1/3 h-auto mb-6 lg:mb-4"
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
          className="max-w-lg mb-10 lg:mb-6 text-3xl italic sm:text-4xl md:text-5xl lg:text-4xl"
          style={{
            color: "rgba(250, 247, 243, 0.9)",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          We provide the best{" "}
          <span
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              launchFirework(
                rect.left + rect.width / 2,
                rect.top + rect.height / 2
              );
            }}
            className="inline cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #D64D85, #08D9CB)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            boom
          </span>{" "}
          for your{" "}
          <span
            onClick={() => setShowModal(true)}
            className="inline cursor-default transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #D64D85, #08D9CB)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            buck
          </span>
        </p>

        {/* CTA Links */}
        <div className="flex flex-col w-full max-w-xs gap-4 sm:flex-row sm:max-w-none sm:w-auto">
          {/* Primary CTA */}
          <Link
            to="/products"
            data-firework-target="products"
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
            data-firework-target="contact"
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

      {/* Download Confirmation Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div
            className="mx-4 p-8 rounded-2xl max-w-md w-full text-center"
            style={{
              backgroundColor: "#1a1518",
              border: `1px solid ${pinkColor}`,
              boxShadow: `0 0 30px rgba(${pinkRgb}, 0.3), 0 0 60px rgba(${pinkRgb}, 0.15)`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3
              className="text-2xl font-bold mb-3"
              style={{ color: "#FAF7F3" }}
            >
              💰 You found the pricing sheet!
            </h3>
            <p
              className="mb-6 text-sm"
              style={{ color: "rgba(250, 247, 243, 0.7)" }}
            >
              Download it to view it.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="/2026-250th-anniversary-price.xlsx"
                download
                className="px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, #D64D85, #08D9CB)",
                  color: "#FAF7F3",
                  WebkitFontSmoothing: "antialiased",
                }}
                onClick={() => setShowModal(false)}
              >
                Download
              </a>
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  backgroundColor: "transparent",
                  border: `2px solid ${pinkColor}`,
                  color: pinkColor,
                }}
              >
                No Thanks
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
