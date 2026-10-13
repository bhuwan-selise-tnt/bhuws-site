import { useEffect, useState } from "react";
import { EMAIL } from "../constants";

const perthTime = () =>
  new Intl.DateTimeFormat("en-AU", {
    timeZone: "Australia/Perth",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());

function Clock() {
  const [time, setTime] = useState(perthTime);
  useEffect(() => {
    const t = setInterval(() => setTime(perthTime()), 15000);
    return () => clearInterval(t);
  }, []);
  return <time>{time}</time>;
}

export default function Header() {
  return (
    <header className="header">
      <a className="cell" href="#top">
        Bhuwan S. Koirala
      </a>
      <span className="cell cell-muted">Software engineer</span>
      <span className="cell cell-muted">
        Perth, <Clock /> local time
      </span>
      <nav className="cell header-nav" aria-label="Sections">
        <a href="#work">Work</a>
        <a href="#projects">Projects</a>
        <a href={`mailto:${EMAIL}`}>Email</a>
      </nav>
    </header>
  );
}
