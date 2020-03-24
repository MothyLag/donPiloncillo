const {
  app,
  BrowserWindow
} = require("electron");

function createWindow() {
  // Crea la ventana del navegador.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    minHeight: 600,
    minWidth: 800,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // and load the index.html of the app.
  //win.loadURL("http://localhost:3000");
  win.loadFile("build/index.html");

  // Abre las herramientas de desarrollo (DevTools).
  //win.webContents.openDevTools();
}

app.whenReady().then(createWindow);