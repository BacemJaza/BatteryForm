// SupplyChainForm.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Définir le schéma du formulaire
const supplyChainFormSchema = new Schema({
  dueDiligenceReport: {
    type: String,  // Vous pouvez changer le type selon vos besoins, par exemple un champ pour le chemin du fichier
    required: true
  },
  supplyChainAssurances: {
    type: String,
    required: true
  },
  taxonomyDisclosure: {
    type: String,
    required: true
  },
  sustainabilityReport: {
    type: String,
    required: true
  }
});

// Créer un modèle à partir du schéma
const SupplyChainForm = mongoose.model('SupplyChainForm', supplyChainFormSchema);

module.exports = SupplyChainForm;
