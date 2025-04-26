# First Thread Example

This is a basic example demonstrating how to create a worker thread using Node.js `worker_threads` module.

---

## Features

- Creates a worker thread from the main thread.
- The worker sends a "Hello World!" message to the main thread.
- The main thread listens for messages and logs them to the console.
- Handles worker errors and exit events properly.

---

## Technologies Used

- Node.js
- worker_threads module

---

## Setup

1. Clone the repository or navigate to the `first-thread` folder.
2. Install Node.js if you haven't already (version 12+ recommended).
3. Run the script:

   ```bash
   node first-thread.js
   ```

---

## How It Works

- **Main Thread**:
  - Creates a worker thread by spawning the same file (`__filename`).
  - Listens for messages from the worker and logs them to the console.
  - Handles worker errors and logs the exit code when the worker terminates.

- **Worker Thread**:
  - When running as a worker, it sends a "Hello World!" message back to the main thread using `parentPort.postMessage()`.

---

## Notes

- The worker thread runs separately from the main thread and has its own event loop.
- Communication between threads happens through messages via `parentPort`.
- Workers do not share memory with the main thread unless explicitly set up.

---

---

## Example Output

```bash
Hello World!
Worker exited with code 0.
```