const app = require("./src/app")
const connectDB = require("./src/db/db")

connectDB()

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})

/* Here once the server stops running all the data is removed beacuse everything was stores in a local variable that
was stored in ram temporary and once server is stopped the resources are deallocated and data is removed
-> so cuz of this we use databases */