import { GITHUB, GITHUB_USER } from "../constants";
import AsciiPortrait from "./AsciiPortrait";
import TypeLine from "./TypeLine";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-main">
          <p className="hero-kicker boot boot-1">
            <span className="blink">●</span> SOFTWARE ENGINEER — PERTH, WESTERN
            AUSTRALIA
          </p>
          <h1 className="hero-name">
            <TypeLine text="BHUWAN" start={350} />
            <TypeLine
              className="hero-outline"
              text="S.KOIRALA"
              start={350 + 6 * 80 + 250}
              caret
            />
          </h1>
          <p className="hero-blurb boot boot-4">
            I build <strong>enterprise platforms</strong> with React, Next.js,
            Angular &amp; React Native — and lead the teams that ship them. Tech
            lead at Selise Digital Platforms.
          </p>
        </div>
        <AsciiPortrait />
      </div>

      <a
        className="hero-commits boot boot-5"
        href={GITHUB}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="hero-commits-label">
          CONTRIBUTION MAP — LAST 12 MONTHS
        </span>
        <img
          src={`https://ghchart.rshah.org/0f6b5c/${GITHUB_USER}`}
          alt={`GitHub contribution graph for ${GITHUB_USER}`}
          loading="lazy"
        />
      </a>

      <div className="stats boot boot-5">
        <div className="stat">
          <span className="stat-num">5+</span>
          <span className="stat-label">YEARS BUILDING SOFTWARE</span>
        </div>
        <div className="stat">
          <span className="stat-num">3</span>
          <span className="stat-label">FRAMEWORKS, ONE STANDARD: SHIPPED</span>
        </div>
        <div className="stat">
          <span className="stat-num">5</span>
          <span className="stat-label">AWARDS &amp; DISTINCTIONS</span>
        </div>
        <div className="stat">
          <span className="stat-num">4</span>
          <span className="stat-label">HUMAN LANGUAGES SPOKEN</span>
        </div>
      </div>
    </section>
  );
}
