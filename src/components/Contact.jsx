import { useEffect, useState } from "react";
import { EMAIL, GITHUB, LINKEDIN } from "../constants";
import AsciiPortrait from "./AsciiPortrait";
import Section from "./Section";

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1600);
    return () => clearTimeout(t);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <button type="button" className="copy" onClick={copy}>
      <span className={copied ? "copy-label" : "copy-label on"}>Copy</span>
      <span className={copied ? "copy-label on" : "copy-label"}>Copied</span>
      <span className="sr-only" aria-live="polite">
        {copied ? "Email address copied" : ""}
      </span>
    </button>
  );
}

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <dl className="pairs">
        <div>
          <dt>Email</dt>
          <dd className="dd-row">
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <CopyEmail />
          </dd>
        </div>
        <div>
          <dt>Elsewhere</dt>
          <dd className="dd-row">
            <a href={GITHUB} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </dd>
        </div>
        <div>
          <dt>Phone</dt>
          <dd>+975 17459528, Thimphu</dd>
        </div>
      </dl>

      <footer className="signoff">
        <AsciiPortrait size={4.5} />
        <p>
          Thanks for reading. The portrait is drawn from a photo in text
          characters; run your cursor through it.
          <span className="dd-sub">© {new Date().getFullYear()} Bhuwan S. Koirala</span>
        </p>
      </footer>
    </Section>
  );
}
