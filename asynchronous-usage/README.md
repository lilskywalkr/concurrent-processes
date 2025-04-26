# Asynchronous Usage

This project demonstrates how to manage multiple asynchronous worker threads using **Electron.js** and **Node.js**.

Each thread prints letters (A-Z) with its own unique identifier at regular intervals, and can be stopped individually via a GUI.

---

## Project Structure

```
.
└── /asynchronous-usage/
    ├── /gui/
    │   ├── index.html
    │   ├── main.js
    │   ├── preload.js
    │   └── styles.css
    └── index.js
```

---

## Notes

- **Thread Management (`main.js`, `index.js`)**:  
  `main.js` initializes and manages 10 worker threads, each assigned a unique ID (0-9).  
  `index.js` contains the code that each worker thread executes.

- **Real-time Updates (`index.js`)**:  
  Each worker thread sends messages (characters A-Z with thread ID) back to the main Electron process in real-time.

- **Thread Termination (`preload.js`, `main.js`)**:  
  `preload.js` handles the button events from the GUI and sends commands to stop specific threads.  
  `main.js` listens for these commands and terminates the targeted worker thread without affecting others.

- **Error Handling (`main.js`, `index.js`)**:  
  Errors inside worker threads (`index.js`) are captured and sent to the main process, where `main.js` logs and handles them properly.

---

## Overview

Here are some example screenshots showing the app's interface:

![electron](https://github.com/user-attachments/assets/13fca841-5b6b-45b1-b47f-4bfe17eab290)
![terminal_1](https://github.com/user-attachments/assets/837f39cd-abf4-4795-9f48-2e396a722b8c)
![terminal_2](https://github.com/user-attachments/assets/022778e6-7a78-4ed9-a5e4-035fa348864c)

