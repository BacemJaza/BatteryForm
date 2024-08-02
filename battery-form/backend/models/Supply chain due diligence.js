import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const SupplyChainInformationSchema = new Schema({
  dueDiligenceReport: {
    type: String,
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

const SupplyChainInformation = model('SupplyChainInformation', SupplyChainInformationSchema);

export default SupplyChainInformation;

