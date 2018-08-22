let Galaxies = require("../models/Galaxy")
let router = require("express").Router()

router.get("/:id?", (req, res, next) => {
    if (!req.params.id) {
        Galaxies.find({})
            .then(galaxies => {
                return res.send(galaxies)
            })
    }
    else {
        Galaxies.findById(req.params.id)
            .then(galaxy => {
                return res.send(galaxy)
            })
            .catch(next)
    }
})
router.post("/", (req, res, next) => {
    Galaxies.create(req.body)
        .then(galaxy => {
            return res.send(galaxy)
        })
        .catch(next)
})
router.put("/:id", (req, res, next) => {
    Galaxies.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.send({
            message: "galaxy updated"
        }))
        .catch(next)
})
router.delete("/:id", (req, res, next) => {
    Galaxies.findByIdAndRemove(req.params.id)
        .then(() => res.send({
            message: "galaxy deleted"
        }))
})

module.exports = router