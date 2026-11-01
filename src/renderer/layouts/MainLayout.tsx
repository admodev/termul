import { Outlet } from "react-router-dom";

export function MainLayout() {
  const { electronAPI } = window;

  return (
    <main className="desktop">
      <section className="terminal-window" aria-label="Termul application window">
        <header className="title-bar">
          <div className="window-controls">
            <button
              className="control close"
              type="button"
              aria-label="Close window"
              title="Close"
              onClick={() => electronAPI.quitApp()}
            />
            <button
              className="control minimize"
              type="button"
              aria-label="Minimize window"
              title="Minimize"
              onClick={() => electronAPI.minimizeWindow()}
            />
            <button
              className="control fullscreen"
              type="button"
              aria-label="Toggle fullscreen"
              title="Fullscreen"
              onClick={() => electronAPI.toggleFullscreen()}
            />
          </div>

          <span className="window-title">tErMUL</span>
          <div className="title-bar-spacer" aria-hidden="true" />
        </header>

        <section className="terminal-screen" aria-label="Terminal workspace">
          <div className="scanlines" aria-hidden="true" />
          <div className="route-content">
            <Outlet />
          </div>
        </section>
      </section>
    </main>
  );
}
