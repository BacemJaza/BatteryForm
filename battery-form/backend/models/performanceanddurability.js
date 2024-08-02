import mongoose from 'mongoose';

const { Schema, model } = mongoose;

// Définition des sous-schémas
const BatteryLifetimeSchema = new Schema({
  expectedLifetime: String,
  cycleLifeReferenceTest: String,
  cRateOfCycleLifeTest: String,
  capacityThresholdForExhaustion: String,
  soceThresholdForExhaustion: String,
  warrantyPeriodOfTheBattery: String,
  dateOfService: String,
});

const CapacityVoltageAndPowerCapabilitySchema = new Schema({
  ratedCapacity: String,
  nominalVoltage: String,
  minimumVoltage: String,
  maximumVoltage: String,
  originalPowerCapability: String,
  maximumPermittedBatteryPower: String,
});

const TemperatureConditionsSchema = new Schema({
  lowerBoundaryTemperatureIdleState: String,
  upperBoundaryTemperatureIdleState: String,
});

const InternalResistanceSchema = new Schema({
  initialInternalResistanceOnBatteryCellLevel: String,
  initialInternalResistanceOnBatteryPackLevel: String,
});

const RoundTripEnergyEfficiencyAndSelfDischargeSchema = new Schema({
  initialSelfDischargingRate: String,
  initialRoundTripEnergyEfficiency: String,
  roundTripEnergyEfficiencyAt50PercentCycleLife: String,
});

const RoundTripEnergyEfficiencyAt50PercentCycleLifeSchema = new Schema({
  informationOnAccidents: String,
  numberOfDeepDischargeEvents: String,
});

// Définition du schéma principal
const PerformanceDurabilitySchema = new Schema({
  batteryLifetime: BatteryLifetimeSchema,
  capacityVoltageAndPowerCapability: CapacityVoltageAndPowerCapabilitySchema,
  temperatureConditions: TemperatureConditionsSchema,
  internalResistance: InternalResistanceSchema,
  roundTripEnergyEfficiencyAndSelfDischarge: RoundTripEnergyEfficiencyAndSelfDischargeSchema,
  roundTripEnergyEfficiencyAt50PercentCycleLife: RoundTripEnergyEfficiencyAt50PercentCycleLifeSchema,
});

// Créer le modèle à partir du schéma défini
const PerformanceDurabilityModel = model('PerformanceDurability', PerformanceDurabilitySchema);

// Exporter le modèle avec export default
export default PerformanceDurabilityModel;
