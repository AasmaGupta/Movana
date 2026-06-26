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
  
        { new: true }
  
      );
  
      res.json(cargo);
  
    } catch (error) {
  
      res.status(500).json({
        message: error.message,
      });
  
    }
});

module.exports = router;