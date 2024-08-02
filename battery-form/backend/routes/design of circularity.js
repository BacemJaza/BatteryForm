import express from 'express';
import DesignCircularity from '../models/designofcircularity.js';


const router = express.Router();

// Route POST pour créer une nouvelle entrée DesignCircularity
router.post('/design-circularity', async (req, res) => {
    try {
        const newDesignCircularity = new DesignCircularity(req.body);
        const savedDesignCircularity = await newDesignCircularity.save();
        res.status(201).json(savedDesignCircularity);
    } catch (err) {
        console.error('Erreur lors du traitement de la requête :', err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

export default router;
