let mongoose = require("mongoose")
let connectionStr = "mongodb://porter:Universe1@ds229312.mlab.com:29312/porterverse"
let connection = mongoose.connection

mongoose.connect(connectionStr, {
    useNewUrlParser: true
})
connection.on("error", err => {
    console.log("DB ERROR:", err)
})
connection.once("open", () => {
    console.log("connected to db")
})