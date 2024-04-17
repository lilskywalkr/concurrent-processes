const { app, BrowserWindow, ipcMain } = require('electron');
const { Worker } = require("worker_threads");
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 900,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true
        }
    });

    win.loadFile('index.html');
}

app.on('ready', function () {
    createWindow();
});

// handling workers
const workers = [];

ipcMain.on('start-thread', (_, threadId) => {
    try {
        if (!workers[threadId]) {
            // Create a new worker thread if not already created
            const worker = new Worker("./manual-threads-resuming/index.js", {
                workerData: {
                    threadId: (threadId < 9 ? threadId + 1 : 0) // assigning id to a thread
                }
            });

            workers[threadId] = worker;

            worker.on("error", err => { console.log(err) });
            worker.on("message", mes => { console.log(mes) });
        } else {
            // Resume execution if the worker is paused
            workers[threadId].postMessage('resume');
        }
    } catch (error) {
        console.log('Error starting thread:', error.message);
    }
});

ipcMain.on('stop-thread', (_, threadId) => {
    try {
        // Pause the worker
        workers[threadId]?.postMessage('pause');
    } catch (error) {
        console.log('Error stopping thread:', error.message);
    }
});
