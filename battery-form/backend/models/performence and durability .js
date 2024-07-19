// performanceDurabilityModel.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Définition du schéma de données
const PerformanceDurabilitySchema = new Schema({
  batteryLifetime: {
    expectedLifetime: String,
    cycleLifeReferenceTest: String,
    cRateOfCycleLifeTest: String,
    capacityThresholdForExhaustion: String,
    soceThresholdForExhaustion: String,
    warrantyPeriodOfTheBattery: String,
    dateOfService: String,
  },
  capacityVoltageAndPowerCapability: {
    ratedCapacity: String,
    nominalVoltage: String,
    minimumVoltage: String,
    maximumVoltage: String,
    originalPowerCapability: String,
    maximumPermittedBatteryPower: String,
  },
  temperatureConditions: {
    lowerBoundaryTemperatureIdleState: String,
    upperBoundaryTemperatureIdleState: String,
  },
  internalResistance: {
    initialInternalResistanceOnBatteryCellLevel: String,
    initialInternalResistanceOnBatteryPackLevel: String,
  },
  roundTripEnergyEfficiencyAndSelfDischarge: {
    initialSelfDischargingRate: String,
    initialRoundTripEnergyEfficiency: String,
    roundTripEnergyEfficiencyAt50PercentCycleLife: String,
  },
  roundTripEnergyEfficiencyAt50PercentCycleLife: {
    informationOnAccidents: String,
    numberOfDeepDischargeEvents: String,
  },
});

// Créer le modèle à partir du schéma défini
const PerformanceDurabilityModel = mongoose.model('PerformanceDurability', PerformanceDurabilitySchema);

module.exports = PerformanceDurabilityModel;
