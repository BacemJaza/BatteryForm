// models/general information.js

import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const GeneralInformationSchema = new Schema({
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
    type: String,
    required: true
  },
  idEuDeclaration: {
    type: String,
    required: true
  },
  testReportsFile: {
    type: String,
    required: true
  },
  separateCollectionSymbol: {
    type: String,
    required: true
  },
  cadmiumLeadSymbol: {
    type: String,
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

const GeneralInformation = model('GeneralInformation', GeneralInformationSchema);


export default GeneralInformation; // Export par défaut du modèle Mongoose


