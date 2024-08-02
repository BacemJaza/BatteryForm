import mongoose from 'mongoose';

const { Schema, model } = mongoose;

// Sous-formulaire : formulaireDesignCircularity
const DesignCircularitySchema = new Schema({
    DesignofCircularity:{
  postalAddress: String,
  emailAddress: String,
  webAddress: String,
  partNumbers: String,
  manualRemovalBattery: String,
  manualDisassemblyBatteryPack: String,
},

// Sous-formulaire : batterySafetyRequirements
batterySafetyRequirements:{
  extinguishingAgent: String,
  safetyMeasures: String,
},

// Sous-formulaire : recycledAndRenewableContent
recycledAndRenewableContent:{
  preConsumerRecycledNickel: String,
  preConsumerRecycledCobalt: String,
  preConsumerRecycledLithium: String,
  preConsumerRecycledLead: String,
  postConsumerRecycledNickel: String,
  postConsumerRecycledCobalt: String,
  postConsumerRecycledLithium: String,
  postConsumerRecycledLead: String,
  renewableContentShare: String,
},

// Sous-formulaire : endOfLifeInformation
endOfLifeInformation:{
  wastePrevention: String,
  wasteBatteries: String,
  separateCollection: String,
},
});

// Modèle de données pour Design of Circularity
const DesignOfCircularityModel = mongoose.model('DesignOfCircularity', DesignCircularitySchema);

export default DesignOfCircularityModel;




