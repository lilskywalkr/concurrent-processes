const { workerData, parentPort } = require("worker_threads");

async function printStrings() {
    const threadId = workerData.threadId;
    try {
        for (let i = 65; i <= 90; i++) { // ASCII codes for A to Z
            const char = String.fromCharCode(i);
            parentPort.postMessage(`${char}${threadId}`);
            
            // Sleep for 1 second
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    } catch (error) {
        parentPort.postMessage('Error occurred in ' + threadId + ' thread: ' + error.message);
    }
}

printStrings();