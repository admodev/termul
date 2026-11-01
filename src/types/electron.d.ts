export {};

declare global {
  interface Window {
    electronAPI: {
      quitApp: () => void;
      minimizeWindow: () => void;
      toggleFullscreen: () => void;
    };
  }
}
