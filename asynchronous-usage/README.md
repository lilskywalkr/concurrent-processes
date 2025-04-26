# Asynchronous Usage - Concurrent Processes

This project demonstrates how to manage multiple asynchronous worker threads using **Electron.js** and **Node.js**.

Each thread prints letters (A-Z) with its own unique identifier at regular intervals, and can be stopped individually via a GUI.

---

## Project Structure

.
└── /asynchronous-usage/
    ├── /gui/
    │   ├── index.html
    │   ├── main.js
    │   ├── preload.js
    │   └── styles.css
    └── index.js

---

## Notes

- **Thread Management**: Each worker thread is assigned a unique ID (0-9), which is used for managing them individually. 
- **Real-time Updates**: The worker sends messages back to the main process, updating the GUI with the current character for that thread.
- **Thread Termination**: Clicking the "stop" button on a thread will terminate that specific worker without affecting others.
- **Error Handling**: Any errors within the workers are reported to the GUI, which helps track issues in real-time.

---

## Screenshots

Here are some example screenshots showing the app's interface:

![Screenshot 1](screenshots/screenshot1.png)
![Screenshot 2](screenshots/screenshot2.png)
![Screenshot 3](screenshots/screenshot3.png)