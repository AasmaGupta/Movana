const express = require("express");
const router = express.Router();

const Cargo = require("../models/Cargo");

// POST - Create Cargo Booking
router.post("/", async (req, res) => {
  try {
    const cargo = new Cargo(req.body);

    await cargo.save();

    res.status(201).json({
      message: "Cargo Booking Created Successfully",
      cargo,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// UPDATE Metro Booking

router.put("/:id/metro", async (req, res) => {
    try {
  
      const cargo = await Cargo.findByIdAndUpdate(
  
        req.params.id,
  
        {
          originMetro: req.body.originMetro,
          destinationMetro: req.body.destinationMetro,
          metroSlot: req.body.metroSlot,
          status: "Metro Booked",
        },
  
        { returnDocument: "after" }
  
      );
  
      res.json(cargo);
  
    } catch (error) {
  
      res.status(500).json({
        message: error.message,
      });
  
    }
});

// UPDATE EV BOOKING

router.put("/:id/ev", async (req, res) => {
    try {
  
      const booking = await Cargo.findByIdAndUpdate(
  
        req.params.id,
  
        {
          driverName: req.body.driverName,
          vehicleNumber: req.body.vehicleNumber,
          evType: req.body.evType,
          eta: req.body.eta,
          estimatedCost: req.body.estimatedCost,
          status: "EV Assigned",
        },
  
        { returnDocument: "after" }
  
      );
  
      res.json(booking);
  
    } catch (err) {
  
      res.status(500).json({
        message: err.message,
      });
  
    }
  });
  

// UPDATE PAYMENT

router.put("/:id/payment", async (req, res) => {
    try {
  
      const booking = await Cargo.findByIdAndUpdate(
  
        req.params.id,
  
        {
          paymentMethod: req.body.paymentMethod,
          transactionId: req.body.transactionId,
          paymentStatus: "Paid",
          status: "Confirmed",
        },
  
        { returnDocument: "after" }
  
      );
  
      res.json(booking);
  
    } catch (err) {
  
      res.status(500).json({
        message: err.message,
      });
  
    }
  });


  // GET SINGLE BOOKING

  router.get("/:id", async (req, res) => {
    try {
  
      const booking = await Cargo.findById(req.params.id);
  
      res.json(booking);
  
    } catch (err) {
  
      res.status(500).json({
        message: err.message,
      });
  
    }
  });

module.exports = router;