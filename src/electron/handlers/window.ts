import { BrowserWindow, ipcMain } from "electron";

ipcMain.handle('window.close', async (event) => {
    BrowserWindow.fromId(event.frameId).close();
});