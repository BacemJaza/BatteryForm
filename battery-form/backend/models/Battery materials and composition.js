import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const batteryMaterialSchema = new Schema({
  batteryPassportIdentification: {
    type: String,
    required: false
  },
  batterieComponent: {
    type: [String],
    required: false
  },
  batteryRawMaterial: {
    type: [String],
    required: false
  },
  compositionOfTheCathodeAnodeElectrolyteMaterials: {
    type: String,
    required: false
  },
  nameOfHazardousSubstances: {
    type: [String],
    required: false
  },
  hazardClasses: {
    type: String,
    required: false
  },
  relatedIdentifiersOfHazardousSubstances: {
    type: String,
    required: false
  },
  locationOfHazardousSubstances: {
    type: String,
    required: false
  },
  concentrationRangeOfHazardousSubstances: {
    type: String,
    required: false
  },
  impactOfSubstancesOnTheEnvironmentHumanHealthSafety: {
    type: String,
    required: false
  },
  cathodeDescription: {
    type: String,
    required: false
  },
  anodeDescription: {
    type: String,
    required: false
  },
  electrolyteDescription: {
    type: String,
    required: false
  },
  relatedIdCathode: {
    type: String,
    required: false
  },
  relatedIdAnode: {
    type: String,
    required: false
  },
  relatedIdElectrolyte: {
    type: String,
    required: false
  }
}, {
  timestamps: true
});


const BatteryMaterialModel = model('BatteryMaterial', batteryMaterialSchema);

export default BatteryMaterialModel;
