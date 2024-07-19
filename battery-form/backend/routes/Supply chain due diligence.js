const express = require('express');
const router = express.Router();
const SupplyChainForm = require('../models/SupplyChainForm');

// Route pour créer un nouveau formulaire de chaîne d'approvisionnement
router.post('/', async (req, res) => {
  const supplyChainForm = new SupplyChainForm(req.body);
  try {
    const newSupplyChainForm = await supplyChainForm.save();
    res.status(201).json(newSupplyChainForm);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
