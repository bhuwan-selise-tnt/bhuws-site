/* one band of the grid: title in the first three columns, content in the rest */
export default function Block({ id, title, children, wide = false }) {
  return (
    <section
      id={id}
      className={wide ? "block block-wide" : "block"}
      aria-labelledby={`${id}-title`}
    >
      <h2 className="block-title" id={`${id}-title`}>
        {title}
      </h2>
      <div className="block-body">{children}</div>
    </section>
  );
}
