// models/generalInformation.js
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const GeneralInformationSchema = new Schema({
  batteryPassportIdentification: {
    type: String,
  },
  batteryIdentification: {
    type: String,
  },
  batteryCategory: {
    type: String,
    enum: ['EV', 'LMT', 'Industrial', 'Stationary'],
  },
  batteryStatus: {
    type: String,
    enum: ['original', 'repurposed', 'reused', 'remanufactured', 'waste'],
  },
  manufacturerId: {
    type: String,
  },
  manufacturingDate: {
    type: Date,
  },
  manufacturingPlace: {
    type: String,
  },
  batteryWeight: {
    type: String,
  },
  euDeclarationFile: {
    type: String,
  },
  idEuDeclaration: {
    type: String,
  },
  testReportsFile: {
    type: String,
  },
  separateCollectionSymbol: {
    type: String,
  },
  cadmiumLeadSymbol: {
    type: String,
  },
  carbonFootprintClass: {
    type: String,
    enum: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
  },
  co2Footprint: {
    type: String,
  }
});

const GeneralInformation = model('GeneralInformation', GeneralInformationSchema);

export default GeneralInformation;
