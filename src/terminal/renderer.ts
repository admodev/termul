document.addEventListener("DOMContentLoaded", () => {
  const closeButton = document.querySelector(".close");

  closeButton?.addEventListener("click", () => {
    console.log("[RENDERER] Close button clicked");
    window.electronAPI.quitApp();
  });
});
