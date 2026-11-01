import { contextBridge, ipcRenderer } from "electron";

const electronAPI = {
  quitApp: (): void => {
    ipcRenderer.send("app:quit");
  },
  minimizeWindow: (): void => {
    ipcRenderer.send("window:minimize");
  },
  toggleFullscreen: (): void => {
    ipcRenderer.send("window:toggle-fullscreen");
  },
};

contextBridge.exposeInMainWorld("electronAPI", electronAPI);
