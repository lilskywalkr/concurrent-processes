const {parentPort, workerData} = require('worker_threads');

async function printStrings() {
    // Get the thread id
    const threadId = workerData.threadId;

    // Print the alphabets
    return new Promise(async (resolve, reject) => {
        try {
            for (let i = 65; i <= 90; i++) {
                const char = String.fromCharCode(i);
                parentPort.postMessage(`${char}${threadId}`);
    
                // Sleep for 1 second
                await new Promise(resolve => setTimeout(resolve, 1000));
            }

            parentPort.postMessage('done');
            resolve("Thread " + threadId + " Finished");
        } catch(err) {
            reject("Error message: " + err.message);
        }
    });
}

(async function() {
    // awaiting the result of the function
    const result = await printStrings();
    console.log(result);

    await new Promise(resolve => setTimeout(resolve, 1000));
})();