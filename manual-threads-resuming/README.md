# Manual Threads Resuming Example

This project demonstrates how to manually pause and resume worker threads through a simple GUI using Electron and Node.js `worker_threads`.

---

## Features

- Start and stop threads manually via GUI buttons.
- Threads pause their execution when stopped, instead of being terminated.
- Threads can resume from where they left off without restarting.
- Logs messages from each thread to the console.
- Handles worker lifecycle (pause, resume, error reporting).

---

## Technologies Used

- Node.js
- Electron
- worker_threads module

---

## How It Works

- **Main Process (`gui/main.js`)**:  
  Creates the Electron window, listens for `start-thread` and `stop-thread` events from the frontend, manages worker threads' creation, pausing, and resuming.

- **Renderer (`gui/index.html`, `gui/preload.js`)**:  
  Provides a simple interface with start/stop buttons for each thread, and communicates with the main process through IPC.

- **Worker (`index.js`)**:  
  Continuously sends alphabet characters tagged with its thread ID back to the main process. Pauses when a "pause" signal is received and resumes on "resume".

---

## Project Structure

```
/manual-threads-resuming
├── /gui
│   ├── index.html     # Frontend UI with thread control buttons
│   ├── main.js        # Main process handling Electron window and threads
│   ├── preload.js     # Communication bridge between frontend and main process
│   └── styles.css     # Styling for the GUI
├── index.js           # Worker thread logic (print, pause, resume)
```

## Notes

- Threads are **paused**, not **terminated**, meaning they keep their state.
- "Start" on a paused thread simply **resumes** it without re-creating it.
- "Stop" on an active thread **pauses** it immediately.
- Each thread independently handles its own "pause" and "resume" signals from the main process.

---

## Screenshots Overview

Example screenshots of the UI:

