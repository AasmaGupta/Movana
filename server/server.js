const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

const cargoRoutes = require("./routes/cargoRoutes");

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/cargo", cargoRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("MOVE Backend is Running 🚀");
});

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});