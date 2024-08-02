// routes/supplychain.js

import express from 'express';
import SupplyChain from '../models/Supply chain due diligence.js';



const router = express.Router();

// Route POST pour soumettre le formulaire de supply chain
router.post('/supply-chain', async (req, res) => {
  try {
    const supplyChain = new SupplyChain(req.body);
    const savedSupplyChain = await supplyChain.save();
    res.status(201).json(savedSupplyChain);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;