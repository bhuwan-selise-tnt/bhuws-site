import { SKILLS } from "../constants";
import Section from "./Section";

const label = (s) => s.charAt(0) + s.slice(1).toLowerCase();

export default function Skills() {
  return (
    <Section id="stack" title="Stack">
      <dl className="pairs">
        {SKILLS.map((g) => (
          <div key={g.label}>
            <dt>{label(g.label)}</dt>
            <dd>{g.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
