let mongoose = require("mongoose")
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let schema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: "it's like earth, but without water"
    },
    galaxyId: {
        type: ObjectId,
        required: true,
        ref: "Star"
    },
    starId: {
        type: ObjectId,
        ref: "Star",
        required: true
    }
})

module.exports = mongoose.model("Planet", schema)