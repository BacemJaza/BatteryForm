// routes/generalInformation.js

const express = require('express');
const router = express.Router();
const GeneralInformation = require('../models/generalInformation');

// Route POST pour créer une nouvelle entrée d'information générale
router.post('/', async (req, res) => {
  try {
    const newGeneralInfo = new GeneralInformation(req.body);
    const savedGeneralInfo = await newGeneralInfo.save();
    res.status(201).json(savedGeneralInfo);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Exporter le router pour l'utiliser dans l'application principale
module.exports = router;
