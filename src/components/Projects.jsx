import { GITHUB, GITHUB_USER, PROJECTS } from "../constants";
import Block from "./Block";

const sentenceCase = (s) => s.charAt(0) + s.slice(1).toLowerCase();

export default function Projects() {
  return (
    <Block id="projects" title="Projects" wide>
      <div className="projects">
        {PROJECTS.map((p) => (
          <article className="project" key={p.n}>
            <figure className={p.shots ? "shot shot-sprites" : "shot"}>
              {p.img ? (
                <img src={p.img} alt={p.imgAlt} loading="lazy" />
              ) : (
                p.shots.map((s) => (
                  <img key={s.src} src={s.src} alt={s.alt} loading="lazy" />
                ))
              )}
            </figure>
            <div className="project-text">
              <p className="project-kind">
                {sentenceCase(p.tag)}, {p.span}
              </p>
              <h3 className="project-name">{p.name}</h3>
              <p className="project-tagline">{p.tagline}</p>
              <p className="project-desc">{p.desc}</p>
              <details className="project-more">
                <summary>How it works</summary>
                <ul>
                  {p.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </details>
              <p className="project-stack">{p.stack.join(", ")}</p>
            </div>
            <p className="project-links">
              <a href={p.repo} target="_blank" rel="noreferrer">
                Source
              </a>
              {p.site && (
                <a href={p.site} target="_blank" rel="noreferrer">
                  Live site
                </a>
              )}
            </p>
          </article>
        ))}
      </div>
      <a
        className="activity"
        href={GITHUB}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Commits on GitHub, last twelve months</span>
        <img
          src={`https://ghchart.rshah.org/2337ff/${GITHUB_USER}`}
          alt={`GitHub contribution graph for ${GITHUB_USER}`}
          loading="lazy"
        />
      </a>
    </Block>
  );
}
