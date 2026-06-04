/* ── tiny helpers ──────────────────────────────────────────────── */
const rand = (min, max) => Math.random() * (max - min) + min;
const lerp = (a, b, t) => a + (b - a) * t;

const PALETTE = [
  "#D64D85", "#08D9CB", "#FF6B6B", "#FFD93D",
  "#6BCB77", "#4D96FF", "#FF8E53", "#C084FC",
];

function pickColor() {
  return PALETTE[Math.floor(Math.random() * PALETTE.length)];
}

function hexToRgb(hex) {
  const n = parseInt(hex.slice(1), 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

/* ── Particle ──────────────────────────────────────────────────── */
class Particle {
  constructor(x, y, color) {
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
  }

  update() {
    this.trail.push({ x: this.x, y: this.y });
    if (this.trail.length > this.trailLen) this.trail.shift();
    this.vx *= this.friction;
    this.vy *= this.friction;
    this.vy += this.gravity;
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= this.decay;
    return this.alpha > 0;
  }

  draw(ctx) {
    const { r, g, b } = this.rgb;
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
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${r},${g},${b},${this.alpha})`;
    ctx.fill();
  }
}

/* ── Rocket ────────────────────────────────────────────────────── */
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
    ctx.fillStyle = "rgba(255,255,255,0.9)";
    ctx.fill();
  }
}

/* ── Public API ────────────────────────────────────────────────── */

// Track active canvases so we don't pile up overlays
let activeCanvas = null;
let activeRaf = null;

/**
 * Launch a single firework that explodes near the given (x, y) screen coords.
 * If called while one is already playing, the old one is disposed first.
 */
export function launchFirework(clickX, clickY) {
  // Dispose any existing
  if (activeCanvas) {
    cancelAnimationFrame(activeRaf);
    activeCanvas.remove();
  }

  const canvas = document.createElement("canvas");
  canvas.style.cssText =
    "position:fixed;inset:0;z-index:50;pointer-events:none;";
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);
  activeCanvas = canvas;

  const ctx = canvas.getContext("2d");
  const W = canvas.width;
  const H = canvas.height;

  // Launch from bottom, aim near the click position with some randomness
  const tx = clickX + rand(-30, 30);
  const ty = Math.min(clickY, H * 0.45) + rand(-30, 30);
  const sx = clickX + rand(-W * 0.1, W * 0.1);
  const sy = H + 20;

  const rocket = new Rocket(sx, sy, tx, ty, pickColor());
  const particles = [];
  let disposed = false;

  function tick() {
    if (disposed) return;

    ctx.globalCompositeOperation = "destination-out";
    ctx.fillStyle = "rgba(0,0,0,0.15)";
    ctx.fillRect(0, 0, W, H);
    ctx.globalCompositeOperation = "lighter";

    const stillFlying = rocket.update();
    if (stillFlying) {
      rocket.draw(ctx);
    } else if (!rocket.exploded) {
      rocket.exploded = true;
      const count = Math.floor(rand(50, 80));
      for (let p = 0; p < count; p++) {
        particles.push(new Particle(rocket.tx, rocket.ty, rocket.color));
      }
    }

    for (let i = particles.length - 1; i >= 0; i--) {
      if (!particles[i].update()) {
        particles.splice(i, 1);
      } else {
        particles[i].draw(ctx);
      }
    }

    const allDone = rocket.exploded && particles.length === 0;
    if (allDone) {
      disposed = true;
      cancelAnimationFrame(activeRaf);
      canvas.remove();
      activeCanvas = null;
      activeRaf = null;
      return;
    }

    activeRaf = requestAnimationFrame(tick);
  }

  activeRaf = requestAnimationFrame(tick);
}
