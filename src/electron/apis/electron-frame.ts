import { contextBridge, ipcRenderer } from "electron";

interface ElectronFrame {
    close: () => void;
}

export const electronFrame: ElectronFrame = {
    close: () => {
        ipcRenderer.invoke('window.close');
    }
}

contextBridge.exposeInMainWorld('electronFrame', electronFrame);