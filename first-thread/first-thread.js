const {Worker, isMainThread, parentPort} = require("worker_threads");

if (isMainThread) {
    // this is the main thread that will print data from worker
    const worker = new Worker(__filename);

    // listens for messages from the worker and prints them
    // the worker (main procedure) ends once the main thread ends
    worker.on("message", (msg) => {
        console.log(msg);
    });

    
    worker.on("error", err => console.error(err));
    worker.on("exit", code => console.log(`Worker exited with code ${code}.`));
} else {
    // this is the worker

    // sending message to the main thread
    parentPort.postMessage("Hello World!");
}