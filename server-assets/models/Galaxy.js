let mongoose = require("mongoose")
let Schema = mongoose.Schema

let schema = new Schema({
    name: {
        type: String,
        required: true
    },
    galaxyType: {
        type: String,
        enum: [
            "elliptical",
            "spiral",
            "irregular"
        ],
        required: true
    },
    description: {
        type: String,
        default: "It's a big place."
    }
})

module.exports = mongoose.model("Galaxy", schema)