import { EXPERIENCE } from "../constants";
import Chapter from "./Chapter";

export default function Experience() {
  return (
    <Chapter id="work" title="Work">
      <ol className="jobs">
        {EXPERIENCE.map((job) => (
          <li className="job" key={job.n}>
            <span className="job-span">{job.span.replace("—", "–").replace("NOW", "now")}</span>
            <div className="job-body">
              <h3 className="job-role">{job.role}</h3>
              <p className="job-org">
                {job.org}
                <span className="job-tag">, {job.tag.toLowerCase()}</span>
              </p>
              <ul className="prose-list">
                {job.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Chapter>
  );
}
