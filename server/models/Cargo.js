const mongoose = require("mongoose");

const cargoSchema = new mongoose.Schema({

    // Shipment Details
    pickupLocation: {
        type: String,
        required: true,
    },

    destination: {
        type: String,
        required: true,
    },

    pickupDate: {
        type: String,
    },

    pickupTime: {
        type: String,
    },

    // Contact Information
    senderName: {
        type: String,
        required: true,
    },

    senderPhone: {
        type: String,
    },

    receiverName: {
        type: String,
        required: true,
    },

    receiverPhone: {
        type: String,
    },

    // Package Information
    cargoType: {
        type: String,
        required: true,
    },

    packageDescription: {
        type: String,
    },

    weight: {
        type: Number,
        required: true,
    },

    fragile: {
        type: Boolean,
        default: false,
    },

    // Metro Booking
    originMetro: {
        type: String,
        default: "",
    },

    destinationMetro: {
        type: String,
        default: "",
    },

    metroSlot: {
        type: String,
        default: "",
    },

    // EV Assignment
    evType: {
        type: String,
        default: "",
    },

    driverName: {
        type: String,
        default: "",
    },

    vehicleNumber: {
        type: String,
        default: "",
    },

    eta: {
        type: String,
        default: "",
    },

    estimatedCost: {
        type: String,
        default: "",
    },

    // Payment
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

    // Overall Booking Status
    status: {
        type: String,
        default: "Pending",
    },

}, { timestamps: true });

module.exports = mongoose.model("Cargo", cargoSchema);