import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const BatteryMaterialSchema = new Schema({
  batteryPassportIdentification: {
    type: String,
    
  },
  batterieComponent: {
    type: String,
    
  },
  batteryRawMaterial: {
    type: [String], // Assuming multiple raw materials can be added
   
  },
  relatedIdentifiersOfTheCathodeAnodeElectrolyteMaterials: {
    type: String,
   
  },
  compositionOfTheCathodeAnodeElectrolyteMaterials: {
    type: String,
   
  },
  nameOfHazardousSubstances: {
    type: [String], // Assuming multiple hazardous substances can be added
    
  },
  hazardClasses: {
    type: String,
    
  },
  relatedIdentifiersOfHazardousSubstances: {
    type: String,
   
  },
  locationOfHazardousSubstances: {
    type: String,
    
  },
  concentrationRangeOfHazardousSubstances: {
    type: String,
    
  },
  impactOfSubstancesOnTheEnvironmentHumanHealthSafety: {
    type: [String], // Assuming multiple impacts can be listed
    
  },
  cathodeDescription: {
    type: String
  },
  anodeDescription: {
    type: String
  },
  electrolyteDescription: {
    type: String
  }
}, {
  timestamps: true // Optional: adds createdAt and updatedAt fields
});

const BatteryMaterial = model('BatteryMaterial', BatteryMaterialSchema);

export default BatteryMaterial;
