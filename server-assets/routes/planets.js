let Planets = require("../models/Planet")
let router = require("express").Router()

router.get("/:id?", (req, res, next) => {
    if(!req.params.id){
        Planets.find({})
            .then(planets => res.send(planets))
            .catch(next)
    }
    else{
        Planets.findById(req.params.id)
            .then(planet => res.send(planet))
            .catch(next)
    }
})
router.post("/", (req, res, next) => {
    Planets.create(req.body)
        .then(planet => res.send(planet))
        .catch(next)
})
router.put("/:id", (req, res, next) => {
    Planets.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.send({
            message: "planet updated"
        }))
})
router.delete("/:id", (req, res, next) => {
    Planets.findByIdAndRemove(req.params.id)
        .then(() => res.send({
            message: "planet deleted"
        }))
})

module.exports = router