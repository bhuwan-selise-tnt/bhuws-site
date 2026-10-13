import { AWARDS, EDUCATION } from "../constants";
import Chapter from "./Chapter";

export default function Education() {
  return (
    <Chapter id="education" title="Education & honours">
      <div className="edu">
        <ol className="schools">
          {EDUCATION.map((e) => (
            <li key={e.school}>
              <span className="job-span">{e.span.replace("—", "–")}</span>
              <div>
                <h3 className="school">{e.school}</h3>
                <p className="degree">{e.deg}</p>
              </div>
            </li>
          ))}
        </ol>
        <div>
          <h3 className="edu-sub">Honours</h3>
          <ul className="honours">
            {AWARDS.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </div>
    </Chapter>
  );
}
