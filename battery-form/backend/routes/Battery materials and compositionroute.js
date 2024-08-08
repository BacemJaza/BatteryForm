import express from 'express';
import multer from 'multer'; // Importer directement depuis le package multer
import BatteryMaterials from '../models/Battery materials and composition.js';

const router = express.Router();
const upload = multer(); // Configurer multer pour les fichiers uploadés

// Route POST pour soumettre le formulaire de battery materials
router.post('/battery-materials', upload.none(), async (req, res) => {
  try {
    // Traitement des données envoyées en tant que FormData
    const batteryMaterialsData = {
      batteryPassportIdentification: req.body.batteryPassportIdentification,
      batterieComponent: JSON.parse(req.body.batterieComponent),
      batteryRawMaterial: JSON.parse(req.body.batteryRawMaterial),
      compositionOfTheCathodeAnodeElectrolyteMaterials: req.body.compositionOfTheCathodeAnodeElectrolyteMaterials,
      nameOfHazardousSubstances: JSON.parse(req.body.nameOfHazardousSubstances),
      hazardClasses: req.body.hazardClasses,
      relatedIdentifiersOfHazardousSubstances: req.body.relatedIdentifiersOfHazardousSubstances,
      locationOfHazardousSubstances: req.body.locationOfHazardousSubstances,
      concentrationRangeOfHazardousSubstances: req.body.concentrationRangeOfHazardousSubstances,
      impactOfSubstancesOnTheEnvironmentHumanHealthSafety: req.body.impactOfSubstancesOnTheEnvironmentHumanHealthSafety,
      cathodeDescription: req.body.cathodeDescription,
      anodeDescription: req.body.anodeDescription,
      electrolyteDescription: req.body.electrolyteDescription,
      relatedIdCathode: req.body.relatedIdCathode,
      relatedIdAnode: req.body.relatedIdAnode,
      relatedIdElectrolyte: req.body.relatedIdElectrolyte,
    };

    // Création d'une nouvelle instance du modèle avec les données traitées
    const batteryMaterials = new BatteryMaterials(batteryMaterialsData);
    const savedBatteryMaterials = await batteryMaterials.save();
    
    // Réponse avec les données sauvegardées
    res.status(201).json(savedBatteryMaterials);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
