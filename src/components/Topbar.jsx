import { EMAIL } from "../constants";

export default function Topbar() {
  return (
    <header className="topbar">
      <a className="wordmark" href="#top">
        Bhuwan S. Koirala
      </a>
      <nav className="nav" aria-label="Sections">
        <a href="#work">Work</a>
        <a href="#projects">Projects</a>
        <a href="#stack">Stack</a>
        <a href="#education">Education</a>
        <a className="nav-mail" href={`mailto:${EMAIL}`}>
          Email me
        </a>
      </nav>
    </header>
  );
}
