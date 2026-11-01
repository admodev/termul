/** The initial terminal workspace is intentionally empty. */
export function HomePage() {
  return (
    <div className="home-page">
      <span className="blinking-right-pointing-caret">&#10095; </span><input type="text" name="user_input" id="user_input" autoFocus={true} className="user-input"/>
    </div>
  );
}
