let Stars = require("../models/Star")
let router = require("express").Router()

router.get("/:id?", (req, res, next) => {
    if(!req.params.id){
        Stars.find({})
            .then(stars => res.send(stars))
            .catch(next)
    }
    else {
        Stars.findById(req.params.id)
            .then(star => res.send(star))
            .catch(next)
    }
})
router.post("/", (req, res, next) => {
    Stars.create(req.body)
        .then(star => res.send(star))
        .catch(next)
})
router.put("/:id", (req, res, next) => {
    Stars.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.send({
            message: "star updated"
        }))
        .catch(next)
})
router.delete("/:id", (req, res, next) => {
    Stars.findByIdAndRemove(req.params.id)
        .then(() => res.send({
            message: "star removed"
        }))
        .catch(next)
})

module.exports = router