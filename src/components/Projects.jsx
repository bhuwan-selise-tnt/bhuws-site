import { useEffect, useRef, useState } from "react";
import { GITHUB, GITHUB_USER, PROJECTS } from "../constants";
import Chapter from "./Chapter";

const sentence = (items) =>
  items.length > 1
    ? `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`
    : items[0];

function Shot({ p }) {
  return p.img ? (
    <img src={p.img} alt={p.imgAlt} loading="lazy" />
  ) : (
    <div className="sprites">
      {p.shots.map((s) => (
        <img key={s.src} src={s.src} alt={s.alt} loading="lazy" />
      ))}
    </div>
  );
}

/* a plate that trails the cursor while a project's title is hovered */
function usePreview() {
  const ref = useRef(null);
  const [active, setActive] = useState(null);
  const target = useRef(null);
  const pos = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  // only animate while a title is hovered
  useEffect(() => {
    if (active === null || !target.current) return;
    const el = ref.current;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!pos.current) pos.current = { ...target.current };
    let raf;
    const tick = () => {
      const p = pos.current;
      const ease = reduced.matches ? 1 : 0.2;
      p.x += (target.current.x - p.x) * ease;
      p.y += (target.current.y - p.y) * ease;
      // keep the plate inside the viewport: flip left near the right edge,
      // and stop it short of the bottom
      const card = el.querySelector(".preview-item.on") || el;
      const w = card.offsetWidth;
      const h = card.offsetHeight;
      const m = 12;
      const x =
        p.x + 32 + w > window.innerWidth - m ? p.x - 32 - w : p.x + 32;
      const y = Math.max(m, Math.min(p.y - 56, window.innerHeight - h - m));
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => cancelAnimationFrame(raf);
  }, [active]);

  return { ref, active, setActive };
}

export default function Projects() {
  const { ref, active, setActive } = usePreview();

  return (
    <Chapter id="projects" title="Projects">
      {PROJECTS.map((p, i) => (
        <article className="project" key={p.n}>
          <header
            className="project-head"
            onPointerEnter={() => setActive(p.n)}
            onPointerLeave={() => setActive(null)}
          >
            <p className="project-meta">
              {p.tag.charAt(0) + p.tag.slice(1).toLowerCase()}, {p.span}
            </p>
            <h3 className="project-name">{p.name}</h3>
            <p className="project-tagline">{p.tagline}</p>
          </header>

          {/* touch screens can't hover, so they get the plate inline */}
          <figure
            className={
              p.imgWide ? "plate plate-inline plate-wide" : "plate plate-inline"
            }
          >
            <Shot p={p} />
          </figure>

          <p className="project-desc">{p.desc}</p>
          <details className="project-more">
            <summary>How it works</summary>
            <ul className="prose-list">
              {p.points.map((pt, j) => (
                <li key={j}>{pt}</li>
              ))}
            </ul>
          </details>
          <p className="project-stack">Built with {sentence(p.stack)}.</p>
          <p className="project-links">
            <a href={p.repo} target="_blank" rel="noreferrer">
              Source on GitHub
            </a>
            {p.site && (
              <a href={p.site} target="_blank" rel="noreferrer">
                {p.site.replace(/^https?:\/\//, "")}
              </a>
            )}
          </p>
        </article>
      ))}

      <div
        className={active ? "preview preview-on" : "preview"}
        ref={ref}
        aria-hidden="true"
      >
        {PROJECTS.map((p, i) => (
          <figure
            key={p.n}
            className={[
              "preview-item",
              p.shots && "preview-sprites",
              active === p.n && "on",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <Shot p={p} />
            <figcaption>
              <span className="fig-n">Fig. {i + 1}</span> {p.shotCaption}
            </figcaption>
          </figure>
        ))}
      </div>

      <a
        className="plate plate-commits"
        href={GITHUB}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={`https://ghchart.rshah.org/7B2232/${GITHUB_USER}`}
          alt={`GitHub contribution graph for ${GITHUB_USER}`}
          loading="lazy"
        />
        <span className="figcaption">
          <span className="fig-n">Fig. {PROJECTS.length + 1}</span> And a
          year of smaller things: commits on GitHub over the last twelve
          months.
        </span>
      </a>
    </Chapter>
  );
}
