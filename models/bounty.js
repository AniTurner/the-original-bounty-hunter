const mongoose = require('mongoose')
const Schema = mongoose.Schema //Blueprint how all bounties are going to look like 


const bountySchema = new Schema ({
    firstName: {
        type: String, 
        required: true
    },
    lastName: {
        type: String, 
        required: true
    },
    isAlive: {
        type: Boolean, 
        default: false
    },
    bountyAmount: {
        type: Number,
        default: 0
    },
    species: {
        type: String,
        enum: ["Human", "Droid", "Wookiee", "Chiss", "Zabrak", "Hutt", "Ewok", "Gungan", "Zeltron"],
        // required: true
    },
    sideOfTheForce: {
        type: String,
        enum: ["Light Side", "Dark Side"],
        required: true
    }
})

module.exports = mongoose.model("Bounty", bountySchema)