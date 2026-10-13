import { EMAIL, GITHUB, LINKEDIN } from "../constants";
import FitText from "./FitText";

export default function Contact() {
  return (
    <footer className="contact" id="contact">
      <p className="contact-lede">Have a project or a team that needs a lead? Write to me.</p>
      <a className="contact-mail" href={`mailto:${EMAIL}`}>
        <FitText>{EMAIL}</FitText>
      </a>
      <div className="contact-row">
        <span className="cell">© {new Date().getFullYear()} Bhuwan S. Koirala</span>
        <span className="cell cell-muted">+975 17459528, Thimphu</span>
        <a className="cell" href={GITHUB} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a className="cell" href={LINKEDIN} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
