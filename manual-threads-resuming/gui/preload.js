const { ipcRenderer } = require('electron');

function startThread(threadId) {
    ipcRenderer.send('start-thread', threadId);
}

function stopThread(threadId) {
    ipcRenderer.send('stop-thread', threadId);
}

function main() {
    document.querySelectorAll('.start_thread').forEach(e => {
        e.addEventListener('click', () => {
            startThread(Number(e.getAttribute('thread_id')));
        }, false);
    });

    document.querySelectorAll('.stop_thread').forEach(e => {
        e.addEventListener('click', () => {
            stopThread(Number(e.getAttribute('thread_id')));
        }, false);
    });

    return;
}

window.addEventListener('DOMContentLoaded', function() {
    main();
}, false);