import { useEffect, useRef, useState } from "react";
import { GITHUB, GITHUB_USER, PROJECTS } from "../constants";
import Row from "./Row";
import Section from "./Section";

const sentence = (items) =>
  `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;

function Shot({ p }) {
  return p.img ? (
    <img src={p.img} alt={p.imgAlt} />
  ) : (
    <span className="sprites">
      {p.shots.map((s) => (
        <img key={s.src} src={s.src} alt={s.alt} />
      ))}
    </span>
  );
}

/* a screenshot that trails the cursor while a project row is hovered */
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

  // only animate while a row is hovered
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
      el.style.transform = `translate3d(${p.x + 28}px, ${p.y - 48}px, 0)`;
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
    <Section id="projects" title="Projects">
      <ul className="rows">
        {PROJECTS.map((p) => (
          <Row
            key={p.n}
            date={p.span}
            title={p.name}
            sub={p.tagline}
            onPointerEnter={() => setActive(p.n)}
            onPointerLeave={() => setActive(null)}
          >
            <figure className="inline-shot">
              <Shot p={p} />
            </figure>
            <p>{p.desc}</p>
            <ul className="points">
              {p.points.map((pt, j) => (
                <li key={j}>{pt}</li>
              ))}
            </ul>
            <p className="meta">Built with {sentence(p.stack)}.</p>
            <p className="links">
              <a href={p.repo} target="_blank" rel="noreferrer">
                Source
              </a>
              {p.site && (
                <a href={p.site} target="_blank" rel="noreferrer">
                  {p.site.replace(/^https?:\/\//, "")}
                </a>
              )}
            </p>
          </Row>
        ))}
      </ul>

      <div
        className={active ? "preview preview-on" : "preview"}
        ref={ref}
        aria-hidden="true"
      >
        {PROJECTS.map((p) => (
          <figure
            key={p.n}
            className={active === p.n ? "preview-item on" : "preview-item"}
          >
            <Shot p={p} />
          </figure>
        ))}
      </div>

      <a
        className="activity"
        href={GITHUB}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={`https://ghchart.rshah.org/0f6b5c/${GITHUB_USER}`}
          alt={`GitHub contribution graph for ${GITHUB_USER}`}
          loading="lazy"
        />
        <span>Commits on GitHub, last twelve months</span>
      </a>
    </Section>
  );
}
