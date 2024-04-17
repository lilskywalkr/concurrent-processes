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
const THREADS_NUMBER = 10;

// Function for creating worker threads
function initThreads() {
    for (let i = 0; i < THREADS_NUMBER; i++) {
        // Create a new worker thread if not already created
        const worker = new Worker("./asynchronous-usage/index.js", {
            workerData: {
                threadId: (i < 9 ? i + 1 : 0) // assigning id to a thread
            }
        });

        workers[i] = worker;

        worker.on("error", err => { console.log(err)});
        worker.on("message", mes => { console.log(mes)});
    }

}

// inter-process communication for threads management via gui
ipcMain.on('stop-thread', (_, threadId) => {
    try {
        // Terminate the worker
        workers[threadId]?.terminate();
    } catch (error) {
        console.log('Error stopping thread:', error.message);
    }
});


initThreads();
