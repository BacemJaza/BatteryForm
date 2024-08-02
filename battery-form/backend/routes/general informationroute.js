// routes/performanceanddurability.js

import express from 'express';
import PerformanceDurability from '../models/performanceanddurability.js';

const router = express.Router();

// Route POST pour soumettre le formulaire PerformanceDurability
router.post('/performance-and-durability', async (req, res) => {
  try {
    const performanceDurability = new PerformanceDurability(req.body);
    const savedPerformanceDurability = await performanceDurability.save();
    res.status(201).json(savedPerformanceDurability);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;