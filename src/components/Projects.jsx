import { GITHUB, GITHUB_USER, PROJECTS } from "../constants";
import Chapter from "./Chapter";

const sentence = (items) =>
  items.length > 1
    ? `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`
    : items[0];

export default function Projects() {
  return (
    <Chapter id="projects" title="Projects">
      {PROJECTS.map((p, i) => (
        <article
          className={p.imgWide ? "project project-wide" : "project"}
          key={p.n}
        >
          <div className="project-copy">
            <p className="project-meta">
              {p.tag.charAt(0) + p.tag.slice(1).toLowerCase()}, {p.span}
            </p>
            <h3 className="project-name">{p.name}</h3>
            <p className="project-tagline">{p.tagline}</p>
            <p className="project-desc">{p.desc}</p>
            <ul className="prose-list">
              {p.points.map((pt, j) => (
                <li key={j}>{pt}</li>
              ))}
            </ul>
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
          </div>
          {(p.img || p.shots) && (
            <figure className={p.shots ? "plate plate-sprites" : "plate"}>
              {p.img ? (
                <img src={p.img} alt={p.imgAlt} loading="lazy" />
              ) : (
                <div className="sprites">
                  {p.shots.map((s) => (
                    <img key={s.src} src={s.src} alt={s.alt} loading="lazy" />
                  ))}
                </div>
              )}
              <figcaption>
                <span className="fig-n">Fig. {i + 1}</span> {p.shotCaption}
              </figcaption>
            </figure>
          )}
        </article>
      ))}

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
