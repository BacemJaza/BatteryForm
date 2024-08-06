
import express from 'express';
import multer from 'multer'; // Importer directement 'multer' si ce n'est pas dans un fichier personnalisé
import SupplyChain from '../models/Supply chain due diligence.js'; // Assurez-vous que le chemin du modèle est correct

const router = express.Router();

// Configuration de multer pour le stockage des fichiers
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Dossier où les fichiers seront stockés
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`); // Nom du fichier avec timestamp
  }
});

const upload = multer({ storage });

router.post('/supply-chain', upload.fields([
  { name: 'dueDiligenceReport', maxCount: 1 },
  { name: 'supplyChainAssurances', maxCount: 1 },
  { name: 'taxonomyDisclosure', maxCount: 1 },
  { name: 'sustainabilityReport', maxCount: 1 }
]), async (req, res) => {
  try {
    console.log('req.files:', req.files); // Ajoutez ce log pour vérifier ce qui est reçu

    if (!req.files) {
      return res.status(400).json({ message: 'Aucun fichier téléchargé.' });
    }

    const { dueDiligenceReport, supplyChainAssurances, taxonomyDisclosure, sustainabilityReport } = req.files;

    const supplyChain = new SupplyChain({
      dueDiligenceReport: dueDiligenceReport ? dueDiligenceReport[0].path : null,
      supplyChainAssurances: supplyChainAssurances ? supplyChainAssurances[0].path : null,
      taxonomyDisclosure: taxonomyDisclosure ? taxonomyDisclosure[0].path : null,
      sustainabilityReport: sustainabilityReport ? sustainabilityReport[0].path : null
    });

    const savedSupplyChain = await supplyChain.save();
    res.status(201).json(savedSupplyChain);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
export default router;
