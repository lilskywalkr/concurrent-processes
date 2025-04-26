# Synchronous Usage Example

This project demonstrates how to run multiple worker threads **synchronously**, where a new worker starts only after the previous one completes.

---

## Features

- Spawns worker threads one after another in sequence.
- Each worker prints alphabets (A-Z) tagged with its thread ID.
- Workers only start when the previous worker signals completion.
- Logs real-time updates from each worker and final completion messages.

---

## Technologies Used

- Node.js
- worker_threads module

---

## How It Works

- **Worker (`index.js`)**:  
  Prints alphabets (A-Z) with a 1-second delay between each letter. Sends a `"done"` message to the main thread after finishing, then logs its own completion.

- **Main Controller (`workers.js`)**:  
  Initializes a worker, listens for messages, and only when a worker reports `"done"` does it spawn the next worker in the sequence.

---

## Project Structure

```.
└── /synchronous-usage/
    ├── index.js    # Worker thread code: prints letters and notifies when done
    └── workers.js  # Main script: spawns and manages workers sequentially
```

---

## Notes

- Workers are created **dynamically** and **sequentially**, not all at once.
- This approach ensures that system resources are used one worker at a time.
- Helpful for scenarios where tasks must be completed **in order**.
- Errors inside workers are caught and printed to the console.

---

## Example Console Output

```bash
A1
B1
C1
...
Z1
Thread 1 Finished
A2
B2
...
Z2
Thread 2 Finished
...