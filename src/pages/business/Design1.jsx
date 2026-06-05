import { useState } from "react";
import { Link } from "react-router-dom";
import { FiPhone, FiMail, FiGlobe, FiArrowLeft, FiUserPlus, FiX } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import { QRCodeSVG } from "qrcode.react";
import { COMPANY } from "../../data/businessCard";

const QRIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="3" height="3" />
    <rect x="18" y="18" width="3" height="3" />
    <rect x="18" y="14" width="3" height="3" />
    <rect x="14" y="18" width="3" height="3" />
  </svg>
);

const Design1 = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="min-h-dvh w-full flex items-center justify-center sm:p-8"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, #111827 0%, #0a0a0f 70%)",
      }}
    >
      {/* Back button */}
      <Link
        to="/business"
        className="fixed top-4 left-4 z-50 text-white/40 hover:text-white transition-colors"
      >
        <FiArrowLeft size={22} />
      </Link>

      {/* Flip container */}
      <div className="w-full sm:max-w-sm" style={{ perspective: 1200 }}>
        <div
          className="w-full transition-transform duration-700 ease-in-out"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "none",
          }}
        >
          {/* ===== FRONT FACE ===== */}
          <div
            className="w-full min-h-dvh sm:min-h-0 sm:rounded-3xl sm:shadow-2xl flex flex-col items-center justify-center p-8 gap-5 relative overflow-hidden"
            style={{
              background: "linear-gradient(180deg, #0f0f18 0%, #0a0a0f 100%)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            {/* QR button — top right, pink neon */}
            <button
              onClick={() => setFlipped(true)}
              className="absolute top-6 right-5 z-20 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{
                background: "rgba(254, 89, 203, 0.08)",
                boxShadow: "inset 0 2px 6px rgba(0,0,0,0.4), 0 0 0 1px rgba(254, 89, 203, 0.15)",
                color: "#FE59CB",
              }}
              aria-label="Show QR code"
            >
              <QRIcon />
            </button>

            {/* Grid bg */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: "linear-gradient(#11D0BD 1px, transparent 1px), linear-gradient(90deg, #11D0BD 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Desktop border glow */}
            <div
              className="hidden sm:block absolute -inset-[1px] rounded-3xl pointer-events-none"
              style={{
                background: "linear-gradient(135deg, #11D0BD, #FE59CB, #11D0BD)",
                zIndex: -1,
              }}
            />
            <div
              className="hidden sm:block absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background: "linear-gradient(180deg, #0f0f18 0%, #0a0a0f 100%)",
                zIndex: -1,
              }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-5 w-full">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-full blur-2xl opacity-25"
                  style={{ background: "linear-gradient(135deg, #11D0BD, #FE59CB)" }}
                />
                <img
                  src={COMPANY.logo}
                  alt="RascoFX"
                  className="w-40 h-40 object-contain relative z-10"
                />
              </div>

              <div className="text-center">
                <h1
                  className="text-5xl tracking-wider leading-none"
                  style={{ fontFamily: "Bebas Neue, sans-serif" }}
                >
                  <span style={{ color: "#11D0BD" }}>RASCO</span>
                  <span style={{ color: "#FE59CB" }}> FX</span>
                </h1>
              </div>

              <p className="text-white/50 text-sm text-center leading-relaxed max-w-xs">
                {COMPANY.description}
              </p>

              <div
                className="w-full h-px"
                style={{ background: "linear-gradient(90deg, transparent, #11D0BD, #FE59CB, transparent)" }}
              />

              <div className="flex flex-col w-full gap-2.5">
                {[
                  { icon: <FiPhone size={17} />, value: COMPANY.phone, href: COMPANY.phoneLink, color: "#11D0BD" },
                  { icon: <FiMail size={17} />, value: COMPANY.email, href: COMPANY.emailLink, color: "#FE59CB" },
                  { icon: <FiGlobe size={17} />, value: COMPANY.website, href: COMPANY.websiteLink, color: "#11D0BD", ext: true },
                  { icon: <FaYoutube size={17} />, value: COMPANY.youtube, href: COMPANY.youtubeLink, color: "#FE59CB", ext: true },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target={item.ext ? "_blank" : undefined}
                    rel={item.ext ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-white/[0.04] group"
                    style={{ border: `1px solid ${item.color}1F` }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `${item.color}14` }}
                    >
                      <span style={{ color: item.color }}>{item.icon}</span>
                    </div>
                    <span className="text-white/70 text-sm group-hover:text-white transition-colors">
                      {item.value}
                    </span>
                  </a>
                ))}
              </div>

              <a
                href="/rascofx.vcf"
                download
                className="w-full mt-2 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, #11D0BD, #FE59CB)",
                  color: "#fff",
                  boxShadow: "0 4px 20px rgba(17, 208, 189, 0.25), 0 4px 20px rgba(254, 89, 203, 0.25)",
                }}
              >
                <FiUserPlus size={16} />
                Save Contact
              </a>

              <p className="text-[10px] tracking-widest uppercase text-white/15 mt-2">
                rascofx.com
              </p>
            </div>
          </div>

          {/* ===== BACK FACE (QR) ===== */}
          <div
            className="absolute inset-0 sm:relative sm:rounded-3xl sm:shadow-2xl flex flex-col items-center justify-center p-8 gap-6"
            style={{
              background: "linear-gradient(180deg, #0f0f18 0%, #0a0a0f 100%)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <button
              onClick={() => setFlipped(false)}
              className="absolute top-6 right-5 z-20 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{
                background: "rgba(254, 89, 203, 0.08)",
                boxShadow: "inset 0 2px 6px rgba(0,0,0,0.4), 0 0 0 1px rgba(254, 89, 203, 0.15)",
                color: "#FE59CB",
              }}
              aria-label="Flip back"
            >
              <FiX size={20} />
            </button>

            <div className="relative">
              <div
                className="absolute inset-0 rounded-2xl blur-xl opacity-20"
                style={{ background: "linear-gradient(135deg, #11D0BD, #FE59CB)" }}
              />
              <div className="relative p-5 rounded-2xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <QRCodeSVG
                  value="https://rascofx.com/business/1"
                  size={180}
                  bgColor="transparent"
                  fgColor="#11D0BD"
                  level="M"
                />
              </div>
            </div>

            <div className="text-center">
              <p className="text-white/50 text-sm">Scan to view our card</p>
              <p className="text-[10px] tracking-widest uppercase text-white/20 mt-2">rascofx.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design1;
