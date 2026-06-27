const mongoose = require("mongoose");

const cargoSchema = new mongoose.Schema({
    senderName: String,
    receiverName: String,
    pickupLocation: String,
    destination: String,
    cargoType: String,
    weight: Number,

    evType: {
        type: String,
    },
    
    driverName: {
        type: String,
    },
    
    vehicleNumber: {
        type: String,
    },

    paymentMethod: {
        type: String,
        default: "",
    },
    
    transactionId: {
        type: String,
        default: "",
    },
    
    paymentStatus: {
        type: String,
        default: "Pending",
    },

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
    },

    eta: {
        type: String,
        default: "",
    },
    
    estimatedCost: {
        type: String,
        default: "",
    },

}, { timestamps: true });

module.exports = mongoose.model("Cargo", cargoSchema);