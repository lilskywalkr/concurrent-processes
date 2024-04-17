const { Worker } = require('worker_threads');

const THREADS_NUMBER = 10;
const workers = [];

async function initWorkers(i) {
    const worker = new Worker('./index.js', {
        workerData: {
            threadId: (i < 9 ? i + 1 : 0),
        }
    });

    workers.push(worker);
}

async function runWorkers(id) {
    if (id === THREADS_NUMBER) {
        return;
    }

    initWorkers(id);

    workers[id].on("error", err => console.log(err));
    workers[id].on("message", mes => {
        if (mes !== 'done') {
            console.log(mes);
        } else {
            runWorkers(id + 1);
        }
    });

    return;
}

(async (firstId = 0) => {
    await runWorkers(firstId);
})();