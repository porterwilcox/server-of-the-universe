let express = require("express")
let server = express()
let bodyParser = require("body-parser")
let port = 3000
require("./server-assets/database/db-config")
let galaxyRoutes = require("./server-assets/routes/galaxies")

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({
    extended: true
}))

server.use("/api/galaxies", galaxyRoutes)

server.use("/api/*", (error, req, res, next) => {
    res.send(error)
})

server.use("*", (req, res, next) => {
    res.status(404).send("this endpoint doens't exist")
})

server.listen(port, () => {
    console.log("universe is up on port:", port)
})