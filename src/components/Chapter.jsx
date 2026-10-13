/* a section with its title set in the left margin, like a book's running note */
export default function Chapter({ id, title, children, className = "" }) {
  return (
    <section id={id} className={`chapter ${className}`}>
      <h2 className="chapter-title">{title}</h2>
      <div className="chapter-body">{children}</div>
    </section>
  );
}
