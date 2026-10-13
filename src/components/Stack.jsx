import { SKILLS } from "../constants";
import Block from "./Block";

const sentenceCase = (s) => s.charAt(0) + s.slice(1).toLowerCase();

export default function Stack() {
  return (
    <Block id="stack" title="Stack">
      <div className="stack">
        {SKILLS.map((g) => (
          <div key={g.label}>
            <h3>{sentenceCase(g.label)}</h3>
            <ul>
              {g.items.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Block>
  );
}
