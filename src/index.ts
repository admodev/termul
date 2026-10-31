import { app, BrowserWindow, ipcMain } from "electron";
import * as path from "node:path";
import * as fs from "node:fs";

const createWindow = (): void => {
  const preloadPath = path.join(__dirname, "preload.js");

  console.log("[MAIN] __dirname:", __dirname);
  console.log("[MAIN] Preload path:", preloadPath);
  console.log("[MAIN] Preload exists:", fs.existsSync(preloadPath));

  const win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    webPreferences: {
      preload: preloadPath,
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  win.webContents.on("preload-error", (_event, preloadPath, error) => {
    console.error("[PRELOAD ERROR]", preloadPath);
    console.error(error);
  });

  win.webContents.on("did-finish-load", () => {
    console.log("[MAIN] Renderer loaded");
  });

  const indexPath = path.resolve(__dirname, "../src/views/index.html");

  win.loadFile(indexPath);
};

ipcMain.on("app:quit", () => {
  console.log("[MAIN] Received app:quit");
  app.quit();
});

app.whenReady().then(createWindow);
