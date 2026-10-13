import { EXPERIENCE } from "../constants";
import Row from "./Row";
import Section from "./Section";

const span = (s) => s.replace(" — ", "–").replace("NOW", "now");

export default function Experience() {
  return (
    <Section id="work" title="Work">
      <ul className="rows">
        {EXPERIENCE.map((job, i) => (
          <Row
            key={job.n}
            date={span(job.span)}
            title={job.org}
            sub={job.role}
            defaultOpen={i === 0}
          >
            <ul className="points">
              {job.points.map((p, j) => (
                <li key={j}>{p}</li>
              ))}
            </ul>
          </Row>
        ))}
      </ul>
    </Section>
  );
}
