import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiPhone, FiMail, FiGlobe, FiArrowLeft, FiUserPlus, FiX } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import { QRCodeSVG } from "qrcode.react";
import { COMPANY } from "../../data/businessCard";

const QRIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="3" height="3" />
    <rect x="18" y="18" width="3" height="3" />
    <rect x="18" y="14" width="3" height="3" />
    <rect x="14" y="18" width="3" height="3" />
  </svg>
);

const SunIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

/* iOS-style button: indents on hover, pops in light mode, neon glow in dark mode */
const IOSButton = ({ children, onClick, ariaLabel, dark }) => {
  const lightStyle = {
    background: "rgba(0,0,0,0.07)",
    color: "rgba(0,0,0,0.65)",
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
  };

  const darkStyle = {
    background: "linear-gradient(135deg, rgba(17, 208, 189, 0.12), rgba(254, 89, 203, 0.12))",
    color: "#fff",
    boxShadow: "0 0 12px rgba(17, 208, 189, 0.15), 0 0 12px rgba(254, 89, 203, 0.15)",
  };

  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className="ios-btn group w-[52px] h-[52px] rounded-[16px] flex items-center justify-center transition-all duration-200 active:scale-90"
      style={dark ? darkStyle : lightStyle}
    >
      {children}
    </button>
  );
};

const contacts = [
  { icon: <FiPhone size={17} />, label: "Phone", value: COMPANY.phone, href: COMPANY.phoneLink, color: "#11D0BD", external: false },
  { icon: <FiMail size={17} />, label: "Email", value: COMPANY.email, href: COMPANY.emailLink, color: "#FE59CB", external: false },
  { icon: <FiGlobe size={17} />, label: "Website", value: COMPANY.website, href: COMPANY.websiteLink, color: "#11D0BD", external: true },
  { icon: <FaYoutube size={17} />, label: "YouTube", value: COMPANY.youtube, href: COMPANY.youtubeLink, color: "#FE59CB", external: true },
];

const Design3 = () => {
  const [dark, setDark] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : true
  );
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => setDark(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const outerBg = dark ? "#070710" : "#e8eaf0";
  const glassBg = dark ? "rgba(255, 255, 255, 0.04)" : "rgba(255, 255, 255, 0.55)";
  const glassBorder = dark ? "rgba(255, 255, 255, 0.08)" : "rgba(0,0,0,0.08)";
  const textColor = dark ? "white" : "#1a1a2e";
  const subTextColor = dark ? "text-white/50" : "text-gray-500";
  const footerColor = dark ? "text-white/15" : "text-gray-300";

  return (
    <div
      className="min-h-dvh w-full flex items-center justify-center sm:p-8 relative overflow-hidden transition-colors duration-500"
      style={{ background: outerBg }}
    >
      {/* Animated gradient orbs */}
      <div
        className="absolute w-80 h-80 rounded-full blur-[100px] top-[15%] -left-24 pointer-events-none"
        style={{
          background: "#11D0BD",
          opacity: dark ? 0.3 : 0.15,
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute w-80 h-80 rounded-full blur-[100px] bottom-[15%] -right-24 pointer-events-none"
        style={{
          background: "#FE59CB",
          opacity: dark ? 0.3 : 0.15,
          animation: "float 8s ease-in-out infinite 4s",
        }}
      />
      <div
        className="absolute w-40 h-40 rounded-full blur-[80px] top-[60%] left-[20%] pointer-events-none"
        style={{
          background: "#FE59CB",
          opacity: dark ? 0.2 : 0.1,
          animation: "float 10s ease-in-out infinite 2s",
        }}
      />

      {/* Back button */}
      <Link
        to="/business"
        className="fixed top-4 left-4 z-50 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{
          background: dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)",
          backdropFilter: "blur(10px)",
          color: dark ? "#fff" : "#333",
        }}
      >
        <FiArrowLeft size={20} />
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
            className="w-full min-h-dvh sm:min-h-0 sm:rounded-3xl sm:shadow-2xl flex flex-col items-center justify-center p-8 pb-24 gap-5 relative z-10"
            style={{
              background: glassBg,
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: `1px solid ${glassBorder}`,
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <div className="flex flex-col items-center gap-5 w-full">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-full blur-xl opacity-20"
                  style={{ background: "linear-gradient(135deg, #11D0BD, #FE59CB)" }}
                />
                <img
                  src={COMPANY.logo}
                  alt="RascoFX"
                  className="w-36 h-36 object-contain relative z-10"
                />
              </div>

              <div className="text-center">
                <h1
                  className="text-4xl tracking-wider leading-none"
                  style={{ fontFamily: "Bebas Neue, sans-serif", color: textColor }}
                >
                  RASCO FX
                </h1>
              </div>

              <p className={`${subTextColor} text-sm text-center leading-relaxed max-w-xs`}>
                {COMPANY.description}
              </p>

              <div
                className="w-full h-px"
                style={{ background: "linear-gradient(90deg, transparent, #11D0BD, #FE59CB, transparent)" }}
              />

              <div className="flex flex-col w-full gap-2">
                {contacts.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-3 rounded-2xl transition-all duration-300 hover:bg-white/[0.06]"
                    style={{
                      background: dark ? "rgba(255, 255, 255, 0.03)" : "rgba(0,0,0,0.03)",
                      border: `1px solid ${dark ? "rgba(255, 255, 255, 0.06)" : "rgba(0,0,0,0.06)"}`,
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${item.color}${dark ? "12" : "15"}` }}
                    >
                      <span style={{ color: item.color }}>{item.icon}</span>
                    </div>
                    <div className="min-w-0">
                      <p className={`text-[10px] uppercase tracking-wider leading-none mb-0.5 ${dark ? "text-white/25" : "text-gray-400"}`}>
                        {item.label}
                      </p>
                      <p className={`text-sm truncate ${dark ? "text-white/70" : "text-gray-700"}`}>
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <a
                href="/rascofx.vcf"
                download
                className="w-full mt-2 flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, #11D0BD, #FE59CB)",
                  color: "#fff",
                  boxShadow: "0 4px 20px rgba(17, 208, 189, 0.25), 0 4px 20px rgba(254, 89, 203, 0.25)",
                }}
              >
                <FiUserPlus size={16} />
                Save Contact
              </a>

              <p className={`text-[10px] tracking-widest uppercase mt-1 ${footerColor}`}>
                rascofx.com
              </p>
            </div>

            {/* ===== BOTTOM BAR ===== */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-between items-center px-6 z-30">
              <IOSButton onClick={() => setDark((d) => !d)} ariaLabel="Toggle theme" dark={dark}>
                {dark ? <SunIcon /> : <MoonIcon />}
              </IOSButton>
              <IOSButton onClick={() => setFlipped(true)} ariaLabel="Show QR code" dark={dark}>
                <QRIcon />
              </IOSButton>
            </div>
          </div>

          {/* ===== BACK FACE (QR) ===== */}
          <div
            className="absolute inset-0 sm:relative sm:rounded-3xl sm:shadow-2xl flex flex-col items-center justify-center p-8 pb-24 gap-6"
            style={{
              background: glassBg,
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: `1px solid ${glassBorder}`,
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl blur-xl opacity-20"
                style={{ background: "linear-gradient(135deg, #11D0BD, #FE59CB)" }}
              />
              <div
                className="relative p-6 rounded-2xl"
                style={{
                  background: dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)",
                  border: `1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}`,
                }}
              >
                <QRCodeSVG
                  value="https://rascofx.com/business/3"
                  size={180}
                  bgColor="transparent"
                  fgColor={dark ? "#11D0BD" : "#1a1a2e"}
                  level="M"
                />
              </div>
            </div>

            <div className="text-center">
              <p className={`${subTextColor} text-sm`}>Scan to view our card</p>
              <p className={`text-[10px] tracking-widest uppercase mt-2 ${dark ? "text-white/20" : "text-gray-300"}`}>
                rascofx.com
              </p>
            </div>

            {/* Bottom bar on back */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-between items-center px-6 z-30">
              <IOSButton onClick={() => setDark((d) => !d)} ariaLabel="Toggle theme" dark={dark}>
                {dark ? <SunIcon /> : <MoonIcon />}
              </IOSButton>
              <IOSButton onClick={() => setFlipped(false)} ariaLabel="Flip back" dark={dark}>
                <FiX size={20} />
              </IOSButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design3;
