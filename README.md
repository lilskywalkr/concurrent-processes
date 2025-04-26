# 🧵 Concurrent Processes in Node.js

This repository contains several projects demonstrating different ways to manage and control concurrent threads in Node.js using the `worker_threads` module and Electron for GUI-based interaction.

---

## 🚀 Quick Start

First, make sure you have **Node.js** installed (v12+ recommended).  
Then, install all necessary dependencies:

```bash
npm install
```

## 📂 Project List

### 1. **First Thread Example**  
🔹 A simple demonstration of creating and communicating with a single worker thread.

```bash
node ./first-thread/first-thread.js
```

### 2. **Manual Threads Resuming**
🔹 Manually start, pause, and resume multiple worker threads using a GUI built with Electron.

```bash
npm run manual-threads
```

### 3. **Synchronous Usage**
🔹 Run multiple worker threads sequentially — each worker finishes before the next one starts.

```bash
cd synchronous-usage
node workers.js
```

### 4. **Asynchronous Usage**
🔹 Run multiple worker threads simultaneously, with GUI controls to individually stop any thread.

```bash
npm run async-threads
```

## 🛠 Technologies Used

This repository demonstrates concurrent processing in Node.js with the following key technologies:

### 1. **Node.js**
🔹 JavaScript runtime built on Chrome's V8 JavaScript engine. It's used to run JavaScript code outside of the browser, enabling us to manage worker threads and perform concurrent operations.

### 2. **Electron**
🔹 A framework for building cross-platform desktop applications with web technologies (HTML, CSS, and JavaScript). It’s used here for building the GUI that interacts with the worker threads.

### 3. **worker_threads**
🔹 A Node.js module that provides a simple way to spawn and manage threads for parallel processing. It’s used across all the projects to demonstrate different ways of handling concurrency.

### 4. **HTML/CSS/JavaScript (Frontend)**
🔹 Standard frontend web technologies (HTML, CSS, JavaScript) are used for creating the graphical user interface (GUI) to manage and control worker threads interactively.

### 5. **Electron's IPC (Inter-Process Communication)**
🔹 Used to communicate between the main Electron process and the renderer process (the GUI). IPC enables communication for thread control such as start, pause, and stop.

