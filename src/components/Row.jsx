import { useId, useState } from "react";

/* a list row that expands in place; the body animates its height via grid rows */
export default function Row({
  date,
  title,
  sub,
  defaultOpen = false,
  children,
  ...hoverProps
}) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  return (
    <li className={open ? "row row-open" : "row"} {...hoverProps}>
      <button
        type="button"
        className="row-head"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="row-date">{date}</span>
        <span className="row-title">
          {title}
          {sub && <span className="row-sub">{sub}</span>}
        </span>
        <span className="row-toggle" aria-hidden="true" />
      </button>
      <div className="row-body" id={id} role="region">
        <div className="row-inner">{children}</div>
      </div>
    </li>
  );
}
