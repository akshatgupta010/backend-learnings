# Types of Browser Storage

## 1. Introduction

Browser Storage refers to the different mechanisms provided by web browsers to store data on the client side (user's browser).

It allows web applications to store information locally so that data can be accessed later without requesting it from the server every time.

### Types of Browser Storage

1. Local Storage
2. Session Storage
3. Cookies
4. IndexedDB
5. Cache Storage

---

## 2. Local Storage

### Definition

Local Storage is a browser storage mechanism that stores data in key-value pairs and keeps it even after the browser is closed or the system is restarted.

### Features

- Stores data in key-value format.
- Data does not automatically expire.
- Data remains available until manually deleted.
- Storage capacity is typically around 5–10 MB, depending on the browser.
- Data is stored as strings.
- Data is not automatically sent to the server with HTTP requests.

### Example

```javascript
// Store data
localStorage.setItem("username", "Akshat");

// Get data
const user = localStorage.getItem("username");

// Remove specific data
localStorage.removeItem("username");

// Clear all data
localStorage.clear();
```

### Use Cases

- Saving user preferences.
- Storing theme settings (Dark/Light mode).
- Remembering language preferences.
- Saving non-sensitive application settings.

---

## 3. Session Storage

### Definition

Session Storage stores data in key-value pairs for a particular browser tab session. The data is generally removed when that tab or its browsing context is closed.

### Features

- Stores data as key-value pairs.
- Data survives page refreshes.
- Data is isolated between tabs.
- Data is generally deleted when the tab is closed.
- Storage capacity is typically around 5 MB, depending on the browser.
- Data is not automatically sent to the server.

### Example

```javascript
// Store data
sessionStorage.setItem("username", "Akshat");

// Get data
const user = sessionStorage.getItem("username");

// Remove specific data
sessionStorage.removeItem("username");

// Clear all data
sessionStorage.clear();
```

### Use Cases

- Temporary form data.
- Temporary user interface state.
- Multi-step form progress.
- Data needed only during a particular tab session.

---

## 4. Cookies

### Definition

Cookies are small pieces of data stored in the browser and are commonly used to maintain sessions, remember preferences and manage authentication.

### Features

- Typically limited to around 4 KB per cookie.
- Can have expiration dates.
- Can be sent automatically with matching HTTP requests.
- Can be configured with security attributes.
- Can be accessed through JavaScript unless marked HttpOnly.

### Example

```javascript
// Create a cookie
document.cookie = "username=Akshat; max-age=3600; path=/";

// Read cookies
console.log(document.cookie);
```

### Important Cookie Attributes

| Attribute | Purpose |
|---|---|
| Expires | Sets cookie expiration date |
| Max-Age | Sets cookie lifetime in seconds |
| HttpOnly | Prevents JavaScript access |
| Secure | Sends cookie only over HTTPS |
| SameSite | Controls cross-site cookie sending |
| Path | Defines the URL path where cookie applies |

### Use Cases

- User authentication sessions.
- Remembering login sessions.
- Tracking user preferences.
- Maintaining shopping cart sessions.

### Important Security Note

For authentication, HttpOnly, Secure and appropriate SameSite cookies are generally preferred over storing sensitive authentication tokens in Local Storage.

---

## 5. IndexedDB

### Definition

IndexedDB is a browser-based database used to store large amounts of structured data, including objects and files.

Unlike Local Storage and Session Storage, IndexedDB supports more complex data structures and asynchronous operations.

### Features

- Stores large amounts of structured data.
- Supports objects and files.
- Uses object stores and indexes.
- Supports asynchronous operations.
- Works offline.
- Supports transactions.
- Does not automatically send data to the server.

### Example

```javascript
const request = indexedDB.open("MyDatabase", 1);

request.onupgradeneeded = (event) => {
    const db = event.target.result;

    db.createObjectStore("users", {
        keyPath: "id"
    });
};

request.onsuccess = (event) => {
    const db = event.target.result;
    console.log("Database opened successfully");
};
```

### Use Cases

- Offline applications.
- Saving large amounts of application data.
- Storing user-generated content.
- Caching structured API responses.
- Progressive Web Applications (PWA).

---

## 6. Cache Storage

### Definition

Cache Storage is a browser storage mechanism used to store network requests and their responses for faster loading and offline functionality.

It is commonly used with Service Workers in Progressive Web Applications (PWA).

### Features

- Stores HTTP requests and responses.
- Supports offline functionality.
- Improves application loading speed.
- Works with Service Workers.
- Allows developers to manage cached resources.
- Data is not automatically sent to the server.

### Example

```javascript
// Open a cache
caches.open("my-cache").then(async (cache) => {

    // Store a resource
    await cache.add("/style.css");

    // Retrieve a cached response
    const response = await cache.match("/style.css");

    console.log(response);
});
```

### Use Cases

- Caching CSS and JavaScript files.
- Caching images.
- Offline web applications.
- Improving website performance.
- Progressive Web Applications.

---

**Note:** Storage limits vary by browser, device and available disk space.

---

## 8. Which Browser Storage Should You Use?

| Requirement | Recommended Storage |
|---|---|
| Save dark/light theme | Local Storage |
| Save temporary form data | Session Storage |
| Maintain login session | Cookies |
| Store large structured data | IndexedDB |
| Store API responses and static files | Cache Storage |
| Build offline applications | IndexedDB + Cache Storage |

---

## 9. Security Considerations

1. Never store passwords in Local Storage or Session Storage.
2. Avoid storing sensitive authentication tokens in Local Storage because JavaScript can access them.
3. Use HttpOnly cookies for session credentials where appropriate.
4. Always use HTTPS for sensitive communication.
5. Validate data retrieved from browser storage because users can modify it.
6. Never trust browser storage for authorization decisions. Always enforce permissions on the backend.
