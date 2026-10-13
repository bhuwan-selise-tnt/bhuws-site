import { AWARDS, EDUCATION, SPOKEN } from "../constants";
import Block from "./Block";

const span = (s) => s.replace(" — ", "–");

export default function Education() {
  return (
    <Block id="education" title="Education">
      <div className="edu">
        <ol className="schools">
          {EDUCATION.map((e) => (
            <li key={e.school}>
              <span className="job-span">{span(e.span)}</span>
              <div>
                <h3>{e.school}</h3>
                <p>{e.deg}</p>
              </div>
            </li>
          ))}
        </ol>
        <div>
          <h3 className="edu-head">Honours</h3>
          <ul>
            {AWARDS.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
          <h3 className="edu-head edu-gap">Languages</h3>
          <p>{SPOKEN.join(", ")}</p>
        </div>
      </div>
    </Block>
  );
}
