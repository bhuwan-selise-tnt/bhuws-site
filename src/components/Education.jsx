import { AWARDS, EDUCATION, SPOKEN } from "../constants";
import Section from "./Section";

const span = (s) => s.replace(" — ", "–");

export default function Education() {
  return (
    <Section id="education" title="Education">
      <dl className="pairs">
        {EDUCATION.map((e) => (
          <div key={e.school}>
            <dt>{span(e.span)}</dt>
            <dd>
              {e.school}
              <span className="dd-sub">{e.deg}</span>
            </dd>
          </div>
        ))}
        <div>
          <dt>Honours</dt>
          <dd>
            <ul className="plain">
              {AWARDS.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </dd>
        </div>
        <div>
          <dt>Languages</dt>
          <dd>{SPOKEN.join(", ")}</dd>
        </div>
      </dl>
    </Section>
  );
}
