// Express.js example route
const express = require("express");
const router = express.Router();

// GET /ping - Ping endpoint
router.get("/ping", (req, res) => {
  res.json({ message: "pong", timestamp: new Date().toISOString() });
});

// POST /ping/echo - Echo endpoint
router.post("/ping/echo", (req, res) => {
  const { message } = req.body;
  res.json({ echo: message || "No message provided" });
});

module.exports = router;
