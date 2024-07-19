// performanceDurabilityRoutes.js

const express = require('express');
const router = express.Router();
const PerformanceDurability = require('../models/performanceDurabilityModel');

// Route POST pour soumettre le formulaire PerformanceDurability
router.post('/', async (req, res) => {
  try {
    const performanceDurability = new PerformanceDurability(req.body);
    const savedPerformanceDurability = await performanceDurability.save();
    res.status(201).json(savedPerformanceDurability);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
