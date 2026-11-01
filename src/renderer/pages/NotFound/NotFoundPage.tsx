import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="placeholder-page">
      <h1>Page not found</h1>
      <Link to="/">Return to terminal</Link>
    </section>
  );
}
