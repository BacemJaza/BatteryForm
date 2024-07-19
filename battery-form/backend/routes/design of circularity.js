const express = require('express');
const router = express.Router();
const DesignOfCircularityModel = require('../models/DesignOfCircularityModel');

// Route pour créer un nouveau formulaire de design de circularité
router.post('/design-of-circularity', async (req, res) => {
  const formData = req.body; // Données envoyées depuis le front-end
  try {
    const newDesignOfCircularity = await DesignOfCircularityModel.create(formData);
    res.status(201).json(newDesignOfCircularity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
