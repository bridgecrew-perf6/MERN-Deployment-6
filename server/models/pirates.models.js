const mongoose = require('mongoose')

const PiratesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    image: {
        type: String,
        required: [true, "Image is required"]
    },
    treasure: {
        type: Number,
        required: [true, "Number of treasure is required"]
    },
    catchPhrase: {
        type: String,
        required: [true, "Catch phrase is required"]
    },
    crewPosition: {
        type: String,
        required: [true, "Crew position is required"]
    },
    pegleg: {
        type: Boolean,
        required: [true, "Pegleg choice is required"]
    },
    eyePatch: {
        type: Boolean,
        required: [true, "Eye Patch choice is required"]
    },
    hookHand: {
        type: Boolean,
        required: [true, "Pegleg choice is required"]
    }
    
}, {timestamps:true})

module.exports.Pirate = mongoose.model("Pirate", PiratesSchema)