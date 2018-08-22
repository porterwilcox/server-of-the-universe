let mongoose = require("mongoose")
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let schema = new Schema({
    name: {
        type: String,
        required: true
    },
    phase: {
        type: String,
        enum: [
            "full",
            "waining",
            "waxing",
            "new"
        ]
    },
    description: {
        type: String,
        default: "Hey it's the dreamworks moon tonight"
    },
    planetId: {
        type: ObjectId,
        ref: "Planet",
        required: true
    },
    starId: {
        type: ObjectId,
        ref: "Star",
        required: true
    },
    galaxyId: {
        type: ObjectId,
        ref: "Galaxy",
        required: true
    }
})

module.exports = mongoose.model("Moon", schema)