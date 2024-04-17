const { ipcRenderer } = require('electron');

// Function for stopping a thread
function stopThread(threadId) {
    ipcRenderer.send('stop-thread', threadId);
}

// Main function
function main() {
    // Get the button and add an event listener
    document.querySelectorAll('.stop_thread').forEach(e => {
        e.addEventListener('click', () => {
            stopThread(Number(e.getAttribute('thread_id')));
        }, false);
    });

    return;
}

// calling main function after the DOM is loaded
window.addEventListener('DOMContentLoaded', function() {
    main();
}, false);