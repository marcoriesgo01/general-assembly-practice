const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const PORT = 3003
const methodOverride = require("method-override")

app.use(express.urlencoded({ extended: false }))

app.use(methodOverride("_method"))

// MONGOOSE
mongoose.connection.on("error", err =>
	console.log(err.message + " is Mongod not running?")
)
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"))
mongoose.connect("mongodb://localhost:27017/auth", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
mongoose.connection.once("open", () => {
	console.log("connected to mongoose...")
})

app.use(cors())

// JSON
app.use(express.json())


//CONTROLLER ROUTES
const bookmarksController = require("./controllers/bookmarks.js")
app.use("/bookmarks", bookmarksController)

// PORT LISTENER
app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`)
})

