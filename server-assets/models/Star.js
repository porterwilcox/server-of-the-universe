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
        default: "it's kinda like the sun, but not really"
    },
    color: {
        type: String,
        enum: [
            "red",
            "white",
            "yellow"
        ]
    },
    galaxyId: {
        type: ObjectId,
        ref: 'Galaxy',
        required: true
    }
})

module.exports = mongoose.model("Star", schema)