let express = require("express")
let server = express()
let bodyParser = require("body-parser")
let port = 3000
require("./server-assets/database/db-config")

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({
    extended: true
}))

let galaxyRoutes = require("./server-assets/routes/galaxies")
let starRoutes = require("./server-assets/routes/stars")
let planetRoutes = require("./server-assets/routes/planets")
let moonRoutes = require("./server-assets/routes/moons")

server.use("/api/galaxies", galaxyRoutes)
server.use("/api/stars", starRoutes)
server.use("/api/planets", planetRoutes)
server.use("/api/moons", moonRoutes)

server.use("/api/*", (error, req, res, next) => {
    res.send(error)
})

server.use("*", (req, res, next) => {
    res.status(404).send("this endpoint doens't exist")
})

server.listen(port, () => {
    console.log("universe is up on port:", port)
})