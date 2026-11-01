import { Link } from "react-router-dom";

export function SettingsPage() {
  return (
    <section className="placeholder-page">
      <h1>Settings</h1>
      <p>Settings will be available here.</p>
      <Link to="/">Back to terminal</Link>
    </section>
  );
}
