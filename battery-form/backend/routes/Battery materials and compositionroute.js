import express from 'express';
import BatteryMaterials from '../models/Battery materials and composition.js';

const router = express.Router();

//const router = express.Router();

// Route POST pour soumettre le formulaire de battery materials
router.post('/battery-materials', async (req, res) => {
  try {
    const batteryMaterials = new BatteryMaterials(req.body);
    const savedBatteryMaterials = await batteryMaterials.save();
    res.status(201).json(savedBatteryMaterials);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;