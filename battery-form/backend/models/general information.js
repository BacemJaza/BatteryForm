const mongoose = require('mongoose');

const GeneralInformationSchema = new mongoose.Schema({
  batteryPassportIdentification: {
    type: String,
    required: true
  },
  batteryIdentification: {
    type: String,
    required: true
  },
  batteryCategory: {
    type: String,
    enum: ['EV', 'LMT', 'Industrial', 'Stationary'],
    required: true
  },
  batteryStatus: {
    type: String,
    enum: ['original', 'repurposed', 'reused', 'remanufactured', 'waste'],
    required: true
  },
  manufacturerId: {
    type: String,
    required: true
  },
  manufacturingDate: {
    type: Date,
    required: true
  },
  manufacturingPlace: {
    type: String,
    required: true
  },
  batteryWeight: {
    type: String,
    required: true
  },
  euDeclarationFile: {
    type: String, // Vous pouvez utiliser String pour stocker le chemin du fichier dans la base de données
    required: true
  },
  idEuDeclaration: {
    type: String,
    required: true
  },
  testReportsFile: {
    type: String, // String pour le chemin du fichier
    required: true
  },
  separateCollectionSymbol: {
    type: String, // String pour le chemin du fichier
    required: true
  },
  cadmiumLeadSymbol: {
    type: String, // String pour le chemin du fichier
    required: true
  },
  carbonFootprintClass: {
    type: String,
    enum: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    required: true
  },
  co2Footprint: {
    type: String,
    required: true
  }
});

const GeneralInformation = mongoose.model('GeneralInformation', GeneralInformationSchema);

module.exports = GeneralInformation;
