import { useEffect, useRef, useState } from "react";

/* ── tiny helpers ──────────────────────────────────────────────── */
const rand = (min, max) => Math.random() * (max - min) + min;
const lerp = (a, b, t) => a + (b - a) * t;

/* Palette pulled from the site's gradient theme */
const PALETTE = [
  "#D64D85", // pink
  "#08D9CB", // cyan
  "#FF6B6B", // coral
  "#FFD93D", // gold
  "#6BCB77", // green
  "#4D96FF", // blue
  "#FF8E53", // orange
  "#C084FC", // purple
];

function pickColor() {
  return PALETTE[Math.floor(Math.random() * PALETTE.length)];
}

function hexToRgb(hex) {
  const n = parseInt(hex.slice(1), 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

/* ── Particle (explosion shard) ───────────────────────────────── */
class Particle {
  constructor(x, y, color, { attractX, attractY, attractStrength } = {}) {
    const angle = rand(0, Math.PI * 2);
    const speed = rand(1.5, 6);
    this.x = x;
    this.y = y;
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed;
    this.gravity = 0.04;
    this.friction = 0.975;
    this.alpha = 1;
    this.decay = rand(0.008, 0.018);
    this.rgb = hexToRgb(color);
    this.size = rand(1.5, 3);
    this.trail = [];
    this.trailLen = 4;
    // optional attraction toward a point (for finale targeting)
    this.attractX = attractX ?? null;
    this.attractY = attractY ?? null;
    this.attractStrength = attractStrength ?? 0;
  }

  update() {
    this.trail.push({ x: this.x, y: this.y });
    if (this.trail.length > this.trailLen) this.trail.shift();
    this.vx *= this.friction;
    this.vy *= this.friction;
    this.vy += this.gravity;
    // gentle pull toward attraction point
    if (this.attractX !== null && this.alpha > 0.3) {
      const dx = this.attractX - this.x;
      const dy = this.attractY - this.y;
      this.vx += dx * this.attractStrength;
      this.vy += dy * this.attractStrength;
    }
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= this.decay;
    return this.alpha > 0;
  }

  draw(ctx) {
    const { r, g, b } = this.rgb;
    // trail streaks
    const points = [...this.trail, { x: this.x, y: this.y }];
    for (let i = 1; i < points.length; i++) {
      const a = (i / points.length) * this.alpha * 0.6;
      ctx.beginPath();
      ctx.moveTo(points[i - 1].x, points[i - 1].y);
      ctx.lineTo(points[i].x, points[i].y);
      ctx.strokeStyle = `rgba(${r},${g},${b},${a})`;
      ctx.lineWidth = this.size * 0.6;
      ctx.stroke();
    }
    // bright head dot
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${r},${g},${b},${this.alpha})`;
    ctx.fill();
  }
}

/* ── Rocket (the ascending streak) ────────────────────────────── */
class Rocket {
  constructor(sx, sy, tx, ty, color) {
    this.sx = sx;
    this.sy = sy;
    this.tx = tx;
    this.ty = ty;
    this.color = color;
    this.rgb = hexToRgb(color);
    this.progress = 0;
    this.speed = rand(0.012, 0.018);
    this.trail = [];
    this.trailLen = 18;
    this.done = false;
  }

  update() {
    if (this.done) return false;
    this.progress += this.speed;

    const x = lerp(this.sx, this.tx, this.progress);
    const y = lerp(this.sy, this.ty, this.progress);

    this.trail.push({ x, y });
    if (this.trail.length > this.trailLen) this.trail.shift();

    if (this.progress >= 1) {
      this.done = true;
      return false;
    }
    return true;
  }

  draw(ctx) {
    const { r, g, b } = this.rgb;
    const points = [...this.trail];
    if (points.length < 2) return;
    for (let i = 1; i < points.length; i++) {
      const a = (i / points.length) * 0.8;
      ctx.beginPath();
      ctx.moveTo(points[i - 1].x, points[i - 1].y);
      ctx.lineTo(points[i].x, points[i].y);
      ctx.strokeStyle = `rgba(${r},${g},${b},${a})`;
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.stroke();
    }
    const head = points[points.length - 1];
    ctx.beginPath();
    ctx.arc(head.x, head.y, 3, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,0.9)`;
    ctx.fill();
  }
}

/* ── Main 6-firework choreography ──────────────────────────────── */
function buildSequence(W, H) {
  const bottom = H + 20;
  const topPad = H * 0.12;
  const leftX = W * 0.18;
  const midX = W * 0.5;
  const rightX = W * 0.82;
  const leftLaunchX = W * 0.05;
  const rightLaunchX = W * 0.95;

  return [
    // Phase 1 – middle explosions
    { delay: 0,    sx: leftLaunchX,  sy: bottom, tx: midX - 40,   ty: topPad + rand(20, 60), color: pickColor() },
    { delay: 350,  sx: rightLaunchX, sy: bottom, tx: midX + 40,   ty: topPad + rand(20, 60), color: pickColor() },
    // Phase 2 – left-side explosions
    { delay: 800,  sx: leftLaunchX,  sy: bottom, tx: leftX,       ty: topPad + rand(40, 80), color: pickColor() },
    { delay: 1100, sx: rightLaunchX, sy: bottom, tx: leftX + 50,  ty: topPad + rand(50, 90), color: pickColor() },
    // Phase 3 – right-side explosions
    { delay: 1500, sx: leftLaunchX,  sy: bottom, tx: rightX - 50, ty: topPad + rand(50, 90), color: pickColor() },
    { delay: 1800, sx: rightLaunchX, sy: bottom, tx: rightX,      ty: topPad + rand(40, 80), color: pickColor() },
  ];
}

/* ── Finale: targeted at CTA buttons ───────────────────────────── */
function buildFinale(W, H) {
  const bottom = H + 20;

  // Try to find the two CTA buttons in the DOM
  const productsBtn = document.querySelector("[data-firework-target='products']");
  const contactBtn = document.querySelector("[data-firework-target='contact']");

  const fallbackProducts = { cx: W * 0.42, cy: H * 0.72 };
  const fallbackContact = { cx: W * 0.58, cy: H * 0.72 };

  const products = productsBtn
    ? { cx: productsBtn.getBoundingClientRect().left + productsBtn.offsetWidth / 2,
        cy: productsBtn.getBoundingClientRect().top + productsBtn.offsetHeight / 2 }
    : fallbackProducts;

  const contact = contactBtn
    ? { cx: contactBtn.getBoundingClientRect().left + contactBtn.offsetWidth / 2,
        cy: contactBtn.getBoundingClientRect().top + contactBtn.offsetHeight / 2 }
    : fallbackContact;

  // Explode above the button, attract particles down toward it
  return [
    {
      delay: 2300,
      sx: W * 0.3,
      sy: bottom,
      tx: products.cx,
      ty: products.cy - 100,
      attractX: products.cx,
      attractY: products.cy,
      color: "#D64D85",
    },
    {
      delay: 2600,
      sx: W * 0.7,
      sy: bottom,
      tx: contact.cx,
      ty: contact.cy - 100,
      attractX: contact.cx,
      attractY: contact.cy,
      color: "#08D9CB",
    },
  ];
}

/* ── React component ───────────────────────────────────────────── */
const FIREWORKS_KEY = "rascofx-fireworks-played";

export function FireworksOverlay({ onFinaleDone }) {
  const canvasRef = useRef(null);
  const alreadyPlayed = sessionStorage.getItem(FIREWORKS_KEY) === "true";
  const [visible, setVisible] = useState(!alreadyPlayed);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    let disposed = false;
    let finaleTriggered = false;

    function resize() {
      const parent = canvas.parentElement;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const W = canvas.width;
    const H = canvas.height;
    const sequence = buildSequence(W, H);
    const finale = buildFinale(W, H);
    const allEntries = [...sequence, ...finale];

    const rockets = [];
    const particles = [];
    const startedAt = performance.now();

    function tick() {
      if (disposed) return;
      const now = performance.now();
      const elapsed = now - startedAt;

      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0,0,0,0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";

      // Launch rockets on schedule
      for (const entry of allEntries) {
        if (!entry.launched && elapsed >= entry.delay) {
          entry.launched = true;
          rockets.push(
            new Rocket(entry.sx, entry.sy, entry.tx, entry.ty, entry.color)
          );
        }
      }

      // Update rockets
      for (let i = rockets.length - 1; i >= 0; i--) {
        const rocket = rockets[i];
        const stillFlying = rocket.update();
        if (stillFlying) {
          rocket.draw(ctx);
        } else if (!rocket.exploded) {
          rocket.exploded = true;
          // Find the matching entry to get attraction data
          const entry = allEntries.find(
            (e) => e.tx === rocket.tx && e.ty === rocket.ty
          );
          const attractX = entry?.attractX ?? null;
          const attractY = entry?.attractY ?? null;
          const hasAttraction = attractX !== null;

          const count = hasAttraction ? Math.floor(rand(70, 100)) : Math.floor(rand(50, 80));
          for (let p = 0; p < count; p++) {
            particles.push(
              new Particle(rocket.tx, rocket.ty, rocket.color, {
                attractX,
                attractY,
                attractStrength: hasAttraction ? rand(0.001, 0.004) : 0,
              })
            );
          }
          rockets.splice(i, 1);
        }
      }

      // Update particles
      for (let i = particles.length - 1; i >= 0; i--) {
        if (!particles[i].update()) {
          particles.splice(i, 1);
        } else {
          particles[i].draw(ctx);
        }
      }

      // Check if the show is over
      const allLaunched = allEntries.every((e) => e.launched);
      const allDone = allLaunched && rockets.length === 0 && particles.length === 0;

      // Signal finale phase for button glow
      if (!finaleTriggered && allEntries.every((e) => e.launched)) {
        finaleTriggered = true;
        // Add glow class to target buttons
        document.querySelectorAll("[data-firework-target]").forEach((btn) => {
          btn.classList.add("firework-glow");
        });
      }

      if (allDone) {
        sessionStorage.setItem(FIREWORKS_KEY, "true");
        onFinaleDone?.();
        setFading(true);
        setTimeout(() => {
          setVisible(false);
        }, 800);
        return;
      }

      raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [onFinaleDone]);

  if (!visible) return null;

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 z-50 pointer-events-none transition-opacity duration-700 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    />
  );
}
