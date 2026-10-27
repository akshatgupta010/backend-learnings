const express = require('express');

// Initialize instance of Express app and storing it in a variable
const app = express();

// Define a route for the root URL ("/") that sends "Hello World!" as a response
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Define a route for the "/about" URL that sends "About Page" as a response
app.get("/about", (req, res) => {
    res.send("About Page");
});

// start the server and listen for incoming requests on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});