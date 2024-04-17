const { workerData, parentPort } = require("worker_threads");

const threadId = workerData.threadId;
let paused = false;

async function printStrings() {
    try {
        parentPort.postMessage('Start for ' + threadId + ' thread');
        for (let i = 65; i <= 90; i++) { // ASCII codes for A to Z
            if (!paused) {
                const char = String.fromCharCode(i);
                parentPort.postMessage(`${char}${threadId}`);
                
                // Sleep for 1 second
                await new Promise(resolve => setTimeout(resolve, 1000));
            } else {
                // If paused, wait for a resume message from the main thread
                await new Promise(resolve => {
                    parentPort.once('message', message => {
                        if (message === 'resume') {
                            resolve();
                        }
                    });
                });
            }
        }

        parentPort.postMessage('End for ' + threadId + ' thread');
    } catch (error) {
        parentPort.postMessage('Error occurred in ' + threadId + ' thread: ' + error.message);
    }
}

printStrings();

parentPort.on('message', message => {
    if (message === 'pause') {
        paused = true;
    } else if (message === 'resume') {
        paused = false;
    }
});
