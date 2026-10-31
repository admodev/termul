import { app, BrowserWindow } from "electron";
import * as path from "node:path";

const createWindow = (): void => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  const indexPath = path.resolve(__dirname, "../src/views/index.html");

  win.loadFile(indexPath);
};

app.whenReady().then(() => {
  createWindow();
});
