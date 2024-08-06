import mongoose from 'mongoose';

const { Schema, model } = mongoose;

// Définir le schéma pour les informations de la chaîne d'approvisionnement
const SupplyChainInformationSchema = new Schema({
  dueDiligenceReport: {
    type: String, // Stocke le chemin du fichier pour le rapport de diligence
    required: false // Indique que ce champ n'est pas obligatoire
  },
  supplyChainAssurances: {
    type: String, // Stocke le chemin du fichier pour les assurances de la chaîne d'approvisionnement
    required: false // Indique que ce champ n'est pas obligatoire
  },
  taxonomyDisclosure: {
    type: String, // Stocke le chemin du fichier pour la déclaration de la taxonomie de l'UE
    required: false // Indique que ce champ n'est pas obligatoire
  },
  sustainabilityReport: {
    type: String, // Stocke le chemin du fichier pour le rapport de durabilité
    required: false // Indique que ce champ n'est pas obligatoire
  }
});

// Créer le modèle à partir du schéma
const SupplyChainInformation = model('SupplyChainInformation', SupplyChainInformationSchema);

export default SupplyChainInformation;
