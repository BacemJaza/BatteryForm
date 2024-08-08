import mongoose from 'mongoose';

const { Schema, model } = mongoose;

// Définir le schéma pour le formulaire Design of Circularity
const DesignCircularitySchema = new Schema({
    DesignofCircularity: {
        postalAddress: {
            type: String,
            required: false // Champ non requis
        },
        emailAddress: {
            type: String,
            required: false // Champ non requis
        },
        webAddress: {
            type: String,
            required: false // Champ non requis
        },
        partNumbers: {
            type: String,
            required: false // Champ non requis
        },
        manualRemovalBattery: {
            type: String, // Stocke le chemin du fichier pour la batterie
            required: false // Champ non requis
        },
        manualDisassemblyBatteryPack: {
            type: String, // Stocke le chemin du fichier pour le pack de batterie
            required: false // Champ non requis
        },
    },

    batterySafetyRequirements: {
        extinguishingAgent: {
            type: String,
            required: false // Champ non requis
        },
        safetyMeasures: {
            type: String, // Stocke le chemin du fichier pour les mesures de sécurité
            required: false // Champ non requis
        },
    },

    recycledAndRenewableContent: {
        preConsumerRecycledNickel: {
            type: String,
            required: false // Champ non requis
        },
        preConsumerRecycledCobalt: {
            type: String,
            required: false // Champ non requis
        },
        preConsumerRecycledLithium: {
            type: String,
            required: false // Champ non requis
        },
        preConsumerRecycledLead: {
            type: String,
            required: false // Champ non requis
        },
        postConsumerRecycledNickel: {
            type: String,
            required: false // Champ non requis
        },
        postConsumerRecycledCobalt: {
            type: String,
            required: false // Champ non requis
        },
        postConsumerRecycledLithium: {
            type: String,
            required: false // Champ non requis
        },
        postConsumerRecycledLead: {
            type: String,
            required: false // Champ non requis
        },
        renewableContentShare: {
            type: String,
            required: false // Champ non requis
        },
    },

    endOfLifeInformation: {
        wastePrevention: {
            type: String, // Stocke le chemin du fichier pour la prévention des déchets
            required: false // Champ non requis
        },
        wasteBatteries: {
            type: String, // Stocke le chemin du fichier pour les batteries usagées
            required: false // Champ non requis
        },
        separateCollection: {
            type: String, // Stocke le chemin du fichier pour la collecte séparée
            required: false // Champ non requis
            
        },
        file: { type: String, required: false } // Ajoutez ce champ pour stocker le chemin du fichier
    },
});

// Créer le modèle à partir du schéma
const DesignOfCircularityModel = model('DesignOfCircularity', DesignCircularitySchema);

export default DesignOfCircularityModel;
