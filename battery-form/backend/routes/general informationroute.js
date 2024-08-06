
// routes/generalInformation.js
import express from 'express';
import multer from '../middlewares/upload.js'; // Importer la configuration multer
import GeneralInformation from '../models/general information.js';

const router = express.Router();

router.post('/general-information', multer.fields([
    { name: 'euDeclarationFile', maxCount: 1 },
    { name: 'testReportsFile', maxCount: 1 },
    { name: 'separateCollectionSymbol', maxCount: 1 },
    { name: 'cadmiumLeadSymbol', maxCount: 1 }
]), async (req, res) => {
    try {
        // Créer une nouvelle instance avec les données du corps de la requête
        const newGeneralInfo = new GeneralInformation({
            batteryPassportIdentification: req.body.batteryPassportIdentification,
            batteryIdentification: req.body.batteryIdentification,
            batteryCategory: req.body.batteryCategory,
            batteryStatus: req.body.batteryStatus,
            manufacturerId: req.body.manufacturerId,
            manufacturingDate: req.body.manufacturingDate,
            manufacturingPlace: req.body.manufacturingPlace,
            batteryWeight: req.body.batteryWeight,
            euDeclarationFile: req.files['euDeclarationFile'] ? req.files['euDeclarationFile'][0].path : undefined,
            idEuDeclaration: req.body.idEuDeclaration,
            testReportsFile: req.files['testReportsFile'] ? req.files['testReportsFile'][0].path : undefined,
            separateCollectionSymbol: req.files['separateCollectionSymbol'] ? req.files['separateCollectionSymbol'][0].path : undefined,
            cadmiumLeadSymbol: req.files['cadmiumLeadSymbol'] ? req.files['cadmiumLeadSymbol'][0].path : undefined,
            carbonFootprintClass: req.body.carbonFootprintClass,
            co2Footprint: req.body.co2Footprint
        });

        // Valider les données
        const validationError = newGeneralInfo.validateSync();
        if (validationError) {
            const errors = Object.keys(validationError.errors).map(field => ({
                field,
                message: validationError.errors[field].message
            }));
            return res.status(400).json({ errors });
        }

        // Sauvegarder les données dans la base de données
        const savedGeneralInfo = await newGeneralInfo.save();

        // Répondre avec les données sauvegardées
        res.status(201).json(savedGeneralInfo);
    } catch (err) {
        // Gérer les erreurs internes du serveur
        console.error('Erreur lors du traitement de la requête :', err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

export default router;
