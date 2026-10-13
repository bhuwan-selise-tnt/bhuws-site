import { SKILLS } from "../constants";
import Chapter from "./Chapter";

const label = (s) => s.charAt(0) + s.slice(1).toLowerCase();

export default function Skills() {
  return (
    <Chapter id="stack" title="Stack">
      <dl className="stack">
        {SKILLS.map((g) => (
          <div className="stack-row" key={g.label}>
            <dt>{label(g.label)}</dt>
            <dd>{g.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </Chapter>
  );
}
