import { EXPERIENCE } from "../constants";
import Block from "./Block";

const span = (s) => s.replace(" — ", "–").replace("NOW", "now");
const sentenceCase = (s) => s.charAt(0) + s.slice(1).toLowerCase();

export default function Experience() {
  return (
    <Block id="work" title="Work">
      <ol className="jobs">
        {EXPERIENCE.map((job) => (
          <li className="job" key={job.n}>
            <span className="job-span">{span(job.span)}</span>
            <div className="job-who">
              <h3>{job.org}</h3>
              <p>{job.role}</p>
              <p className="job-tag">{sentenceCase(job.tag)}</p>
            </div>
            <ul className="job-points">
              {job.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Block>
  );
}
