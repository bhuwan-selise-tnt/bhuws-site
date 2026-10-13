import { useEffect, useRef } from "react";
import { PORTRAIT } from "../constants/portrait";

/* character-particle field: every glyph has a home cell; the pointer
   repels nearby glyphs and a spring eases them back. */
const PAD = 2; // glyph bleed around the cell
const PUSH = 2.1;
const SPRING = 0.055;
const FRICTION = 0.86;

export default function AsciiPortrait({ size = 8 }) {
  const FS = size; // font size (px)
  const CW = FS * 0.6; // cell width — glyphs sit in a fixed grid
  const LH = FS; // line height
  const RADIUS = FS * 7.5; // pointer repulsion radius

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const dpr = Math.min(2, window.devicePixelRatio || 1);

    const lines = PORTRAIT.trim().split("\n");
    const rows = lines.length;
    const cols = lines.reduce((m, l) => Math.max(m, l.length), 0);
    const cssW = Math.ceil(cols * CW);
    const cssH = Math.ceil(rows * LH);
    canvas.width = cssW * dpr;
    canvas.height = cssH * dpr;
    canvas.style.width = `${cssW}px`;
    canvas.style.height = `${cssH}px`;
    ctx.scale(dpr, dpr);

    // ink colours come from CSS tokens so the portrait follows the theme
    let BRIGHT, DIM;
    const readColors = () => {
      const cs = getComputedStyle(canvas);
      BRIGHT = cs.getPropertyValue("--portrait-ink").trim();
      DIM = cs.getPropertyValue("--portrait-dim").trim();
    };
    readColors();

    const particles = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < lines[r].length; c++) {
        const ch = lines[r][c];
        particles.push({
          ch,
          dim: ch === ".",
          x: c * CW,
          y: r * LH,
          hx: c * CW,
          hy: r * LH,
          vx: 0,
          vy: 0,
        });
      }
    }

    // pre-rendered glyph sprites — far cheaper than fillText per frame
    const glyphs = new Map();
    const glyphFor = (ch, color) => {
      const key = ch + color;
      let g = glyphs.get(key);
      if (!g) {
        g = document.createElement("canvas");
        g.width = (CW + PAD * 2) * dpr;
        g.height = (LH + PAD * 2) * dpr;
        const gc = g.getContext("2d");
        gc.scale(dpr, dpr);
        gc.font = `500 ${FS}px "IBM Plex Sans", system-ui, sans-serif`;
        gc.textBaseline = "top";
        gc.fillStyle = color;
        gc.fillText(ch, PAD, PAD);
        glyphs.set(key, g);
      }
      return g;
    };

    const mouse = { x: -1e4, y: -1e4 };
    let raf = null;

    const draw = () => {
      let settled = true;
      ctx.clearRect(0, 0, cssW, cssH);
      for (const p of particles) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < RADIUS * RADIUS && d2 > 0.01) {
          const d = Math.sqrt(d2);
          const f = ((RADIUS - d) / RADIUS) * PUSH;
          p.vx += (dx / d) * f;
          p.vy += (dy / d) * f;
        }
        p.vx = (p.vx + (p.hx - p.x) * SPRING) * FRICTION;
        p.vy = (p.vy + (p.hy - p.y) * SPRING) * FRICTION;
        p.x += p.vx;
        p.y += p.vy;
        const off = Math.abs(p.x - p.hx) + Math.abs(p.y - p.hy);
        if (off > 0.1 || Math.abs(p.vx) + Math.abs(p.vy) > 0.05) {
          settled = false;
        }
        // displaced background dots light up
        const color = p.dim && off < 1.5 ? DIM : BRIGHT;
        ctx.drawImage(
          glyphFor(p.ch, color),
          p.x - PAD,
          p.y - PAD,
          CW + PAD * 2,
          LH + PAD * 2,
        );
      }
      raf = settled ? null : requestAnimationFrame(draw);
    };

    const wake = () => {
      if (raf === null) raf = requestAnimationFrame(draw);
    };
    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) * cssW) / rect.width;
      mouse.y = ((e.clientY - rect.top) * cssH) / rect.height;
      wake();
    };
    const onLeave = () => {
      mouse.x = -1e4;
      mouse.y = -1e4;
      wake();
    };

    draw(); // initial paint (settles immediately)
    document.fonts.ready.then(() => {
      glyphs.clear(); // re-rasterize once the real webfont is in
      draw();
    });

    const scheme = window.matchMedia("(prefers-color-scheme: dark)");
    const onScheme = () => {
      readColors();
      glyphs.clear();
      draw();
    };
    scheme.addEventListener("change", onScheme);

    if (!reduced) {
      canvas.addEventListener("pointermove", onMove);
      canvas.addEventListener("pointerleave", onLeave);
    }
    return () => {
      if (raf !== null) cancelAnimationFrame(raf);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
      scheme.removeEventListener("change", onScheme);
    };
  }, [FS, CW, LH, RADIUS]);

  return (
    <canvas
      className="portrait"
      ref={canvasRef}
      role="img"
      aria-label="Portrait of Bhuwan drawn in text characters, generated from a photo"
    />
  );
}
