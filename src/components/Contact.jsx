import { EMAIL, GITHUB, LINKEDIN } from "../constants";
import Chapter from "./Chapter";

export default function Contact() {
  return (
    <Chapter id="contact" title="Contact" className="chapter-contact">
      <p className="contact-lede">
        Have a project, a team, or a problem worth solving? Write to me.
      </p>
      <a className="contact-mail" href={`mailto:${EMAIL}`}>
        {EMAIL}
      </a>
      <p className="contact-details">
        +975 17459528, Thimphu, Bhutan.{" "}
        <a href={GITHUB} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>{" "}
        and{" "}
        <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        .
      </p>
    </Chapter>
  );
}
