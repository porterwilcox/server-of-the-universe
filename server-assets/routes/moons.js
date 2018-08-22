let Moons = require("../models/Moon")
let router = require("express").Router()

router.get("/:id?", (req, res, next) => {
    if(!req.params.id){
        Moons.find({})
            .then(moons => res.send(moons))
            .catch(next)
    }
    else {
        Moons.findById(req.params.id)
            .then(moon => res.send(moon))
            .catch(next)
    }
})
router.post("/", (req, res, next) => {
    Moons.create(req.body)
        .then(moon => res.send(moon))
        .catch(next)
})
router.put("/:id", (req, res, next) => {
    Moons.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.send({
            message: "moon updated"
        }))
})
router.delete("/:id", (req, res, next) => {
    Moons.findByIdAndRemove(req.params.id)
        .then(() => res.send({
            message: "moon deleted"
        }))
})

module.exports = router