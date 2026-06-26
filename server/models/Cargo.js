const mongoose = require("mongoose");

const cargoSchema = new mongoose.Schema({
    senderName: String,
    receiverName: String,
    pickupLocation: String,
    destination: String,
    cargoType: String,
    weight: Number,

    originMetro: {
        type: String,
        default: ""
    },

    destinationMetro: {
        type: String,
        default: ""
    },

    metroSlot: {
        type: String,
        default: ""
    },

    status: {
        type: String,
        default: "Pending"
    }

}, { timestamps: true });

module.exports = mongoose.model("Cargo", cargoSchema);