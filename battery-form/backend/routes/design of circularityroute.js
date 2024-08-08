import express from 'express';
import multer from 'multer';
import path from 'path';
import DesignOfCircularity from '../models/design of circularity .js';
const router = express.Router();

// // Configuration de Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Répertoire où les fichiers seront sauvegardés
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const filename = Date.now() + ext;
        cb(null, filename);
    }
});

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf']; // Types autorisés
        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Type de fichier non autorisé'), false);
        }
    },
    limits: { fileSize: 5 * 1024 * 1024 } // Limite de taille de fichier à 5 Mo
});

// Route POST pour créer une nouvelle entrée DesignCircularity avec un fichier
router.post('/design-circularity', upload.single('file'), async (req, res) => {
    try {
        // Création de l'objet avec uniquement les champs présents dans la requête
        const newDesignCircularityData = {
            DesignofCircularity: req.body.DesignofCircularity ? {
                postalAddress: req.body.DesignofCircularity.postalAddress,
                emailAddress: req.body.DesignofCircularity.emailAddress,
                webAddress: req.body.DesignofCircularity.webAddress,
                partNumbers: req.body.DesignofCircularity.partNumbers,
                manualRemovalBattery: req.body.DesignofCircularity.manualRemovalBattery,
                manualDisassemblyBatteryPack: req.body.DesignofCircularity.manualDisassemblyBatteryPack,
            } : {},
            batterySafetyRequirements: req.body.batterySafetyRequirements ? {
                extinguishingAgent: req.body.batterySafetyRequirements.extinguishingAgent,
                safetyMeasures: req.body.batterySafetyRequirements.safetyMeasures,
            } : {},
            recycledAndRenewableContent: req.body.recycledAndRenewableContent ? {
                preConsumerRecycledNickel: req.body.recycledAndRenewableContent.preConsumerRecycledNickel,
                preConsumerRecycledCobalt: req.body.recycledAndRenewableContent.preConsumerRecycledCobalt,
                preConsumerRecycledLithium: req.body.recycledAndRenewableContent.preConsumerRecycledLithium,
                preConsumerRecycledLead: req.body.recycledAndRenewableContent.preConsumerRecycledLead,
                postConsumerRecycledNickel: req.body.recycledAndRenewableContent.postConsumerRecycledNickel,
                postConsumerRecycledCobalt: req.body.recycledAndRenewableContent.postConsumerRecycledCobalt,
                postConsumerRecycledLithium: req.body.recycledAndRenewableContent.postConsumerRecycledLithium,
                postConsumerRecycledLead: req.body.recycledAndRenewableContent.postConsumerRecycledLead,
                renewableContentShare: req.body.recycledAndRenewableContent.renewableContentShare,
            } : {},
            endOfLifeInformation: req.body.endOfLifeInformation ? {
                wastePrevention: req.body.endOfLifeInformation.wastePrevention,
                wasteBatteries: req.body.endOfLifeInformation.wasteBatteries,
                separateCollection: req.body.endOfLifeInformation.separateCollection,
            } : {},
            file: req.file ? req.file.path : null
        };

        const newDesignCircularity = new DesignOfCircularity(newDesignCircularityData);

        const savedDesignCircularity = await newDesignCircularity.save();
        res.status(201).json(savedDesignCircularity);
    } catch (err) {
        console.error('Erreur lors du traitement de la requête :', err);
        res.status(500).json({ message: "Erreur interne du serveur", error: err.message });
    }
});

export default router;