const mongoose = require('mongoose');


async function connectDB() {
    
    await mongoose.connect("D.B. Connection String")
    console.log("Connected to DB")
}

module.exports = connectDB