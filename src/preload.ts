import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  quitApp: (): void => {
    ipcRenderer.send("app:quit");
  },
});

console.log("[PRELOAD] Loaded successfully");
