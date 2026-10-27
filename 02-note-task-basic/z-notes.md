# Node.js & Express - CRUD Notes API

## 1. Express Middleware (`express.json()`)
* **What it is:** A function that sits between receiving a request from a client (like Postman or a frontend) and sending back a response.
* **Why it's used:** `app.use(express.json())` is required to parse incoming JSON payloads in `req.body`. Without it, `req.body` will be `undefined`.

---

## 2. In-Memory Data Storage
* Using a simple JavaScript array (`const notes = []`) to store data temporarily in RAM while the server runs.
* *Note:* Because it's stored in RAM, all data is wiped out when the server stops/restarts. This is why databases are needed for production.

---

## 3. CRUD Endpoints & Implementation

### A. Create (`POST /notes`)
* Pushes the incoming request body (`req.body`) into the `notes` array.
* Responds with status `201 Created`.

### B. Read (`GET /notes`)
* Returns the full `notes` array with a `200 OK` status.

### C. Delete (`DELETE /notes/:index`)
* Uses dynamic route parameters (`:index`) via `req.params.index`.
* Removes the item at the specified index from the `notes` array using the `delete` operator.

### D. Update (`PATCH /notes/:index`)
* Extracts the dynamic `index` from `req.params` and the new data from `req.body`.
* Updates the specific property (e.g., `description`) of the note at that index.

---

## 4. Modular Architecture
* Separated core application setup (`app.js`) from the server listener setup (`server.js`) using `module.exports = app;` and `require()`.

/*

note - {
    title: "my first note",
    description: "this is my first note"
}

const notes = [] /// for storing multiple notes
// bascially it will be array of objects 

*/