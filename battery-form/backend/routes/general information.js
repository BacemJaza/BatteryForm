const express = require('express');
const router = express.Router();
const GeneralInformation = require('../models/GeneralInformation');

// Route pour créer une nouvelle information générale
router.post('/', async (req, res) => {
  const generalInformation = new GeneralInformation(req.body);
  try {
    const newGeneralInformation = await generalInformation.save();
    res.status(201).json(newGeneralInformation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
