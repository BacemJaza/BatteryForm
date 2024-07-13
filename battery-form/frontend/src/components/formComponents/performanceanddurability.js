import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Headline from '../../layouts/form/headline';
import ProgressBar from './progressbare';
import Footerform from '../../layouts/form/footerform';

function FormulairePerformanceDurability() {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setProgress(100);
    // Logique de soumission ici
  };

  const handleCancel = () => {
    setProgress(0);
    // Logique d'annulation ici
  };

  const handlePrevious = () => {
    navigate('/batterymaterials');
  };

  const [tooltip, setTooltip] = useState({ 
    expected: false, 
    reference: false, 
    cRate: false, 
    capacityThreshold: false, 
    soceThreshold: false,
    warrantyPeriod: false,
    dateOfService: false,
    ratedCapacity: false,
    originalPowerCapability: false,
    maximumPermittedBatteryPower: false,
    lowerBoundary: false,
    upperBoundary:false,
    cellLevel:false,
    packLevel:false,
    initialselfdischargingrate: false,
    Initialroundtripenergyefficiency:false,
    Roundtripenergyefficiencyatofcyclelife: false

  });

  const handleMouseEnter = (type) => {
    setTooltip((prev) => ({ ...prev, [type]: true }));
  };

  const handleMouseLeave = (type) => {
    setTooltip((prev) => ({ ...prev, [type]: false }));
  };

  return (
    <div className="mt-8">
      <Headline />
      <div className="mt-8">
        <ProgressBar progress="5" />
      </div>
      <div className="max-w-3xl mx-auto mt-8 p-6 bg-blue-50 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center">Performance and Durability</h2>

        {/* Sous-formulaire 1: Battery lifetime */}
        <div className="mb-8 bg-white rounded-lg p-4 shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Battery lifetime</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4 relative">
                <label
                  className="text-sm text-gray-700 w-48 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter('expected')}
                  onMouseLeave={() => handleMouseLeave('expected')}
                >
                  Expected lifetime: Number of charge-discharge cycles
                  {tooltip.expected && (
                    <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
                      Expected battery lifetime expressed in cycles. The exception for non-cycle applications in Article
                      10 appears sensible, but is not included in the Annex XIII provision. The data attribute is defined
                      by measurement conditions of the cycle-life test such as the C-Rate and the depth of
                      discharge in the cycle-life test.
                    </span>
                  )}
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="flex items-center space-x-4 relative">
                <label
                  className="text-sm text-gray-700 w-48 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter('reference')}
                  onMouseLeave={() => handleMouseLeave('reference')}
                >
                  Cycle-life reference test
                  {tooltip.reference && (
                    <span className="absolute top-0 -left-56 ml-2 mt-2 w-48 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
                      Specification of the applied cycle-life test.
                    </span>
                  )}
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="flex items-center space-x-4 relative">
                <label
                  className="text-sm text-gray-700 w-48 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter('cRate')}
                  onMouseLeave={() => handleMouseLeave('cRate')}
                >
                  C-rate of relevant cycle-life test
                  {tooltip.cRate && (
                    <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
                      Measurement parameter: Applied charge and discharge rate (C-rate) of relevant cycle-life test.
                    </span>
                  )}
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="flex items-center space-x-4 relative">
                <label
                  className="text-sm text-gray-700 w-48 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter('capacityThreshold')}
                  onMouseLeave={() => handleMouseLeave('capacityThreshold')}
                >
                  Capacity threshold for exhaustion
                  {tooltip.capacityThreshold && (
                    <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
                      Interpreted as minimum percentage of rated capacity, above which the battery is still considered operational as EV battery in its current life. The value has to be provided by the economic operator.
                    </span>
                  )}
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>

              <div className="flex items-center space-x-4 relative">
                <label
                  className="text-sm text-gray-700 w-48 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter('soceThreshold')}
                  onMouseLeave={() => handleMouseLeave('soceThreshold')}
                >
                  SOCE threshold for exhaustion
                  {tooltip.soceThreshold && (
                    <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
                      Derived as analogue to, and potential future replacement of “Capacity threshold for exhaustion”. Interpreted as minimum percentage of SOCE, above which the battery is still considered operational as EV battery in its current life. The value has to be provided by the economic operator. The SOCE standard is only applicable to electric vehicle batteries.
                    </span>
                  )}
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="flex items-center space-x-4 relative">
                <label
                  className="text-sm text-gray-700 w-48 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter('warrantyPeriod')}
                  onMouseLeave={() => handleMouseLeave('warrantyPeriod')}
                >
                  Warranty period of the battery
                  {tooltip.warrantyPeriod && (
                    <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
                      Warranty period of the battery.
                      Also includes the expected life-time under the reference conditions in calendar years.
                    </span>
                  )}
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="flex items-center space-x-4 relative">
                <label
                  className="text-sm text-gray-700 w-48 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter('dateOfService')}
                  onMouseLeave={() => handleMouseLeave('dateOfService')}
                >
                  Date of putting the battery into service
                  {tooltip.dateOfService && (
                    <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
                      The dates of manufacturing of the battery or, if applicable, the date of putting into service.
                    </span>
                  )}
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sous-formulaire 2: Capacity voltage & power capability */}
        <div className="mb-8 bg-white rounded-lg p-4 shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Capacity voltage & power capability</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
            <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4 relative">
                <label
                  className="text-sm text-gray-700 w-48 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter('ratedCapacity')}
                  onMouseLeave={() => handleMouseLeave('ratedCapacity')}
                >
                Rated capacity
                  {tooltip.ratedCapacity && (
                    <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
                      Pre-use value as defined per regulation: "‘Rated capacity’ means the total number of ampere-hours (Ah) that can be withdrawn from a fully charged battery under specific conditions; ‘Capacity fade’ means the decrease over time and upon usage in the amount of charge that a battery can deliver at the rated voltage, with respect to the original measured capacity".
                    </span>
                  )}
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">Nominal voltage</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">Minimum voltage</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">Maximum voltage</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="flex items-center space-x-4 relative">
                <label
                  className="text-sm text-gray-700 w-48 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter('originalPowerCapability')}
                  onMouseLeave={() => handleMouseLeave('originalPowerCapability')}
                >
                Original power capability
                  {tooltip.originalPowerCapability && (
                    <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
                      Pre-use power capability: Definition of power capability as given in Battery Regulation
                    </span>
                  )}
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="flex items-center space-x-4 relative">
                <label
                  className="text-sm text-gray-700 w-48 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter('maximumPermittedBatteryPower')}
                  onMouseLeave={() => handleMouseLeave('maximumPermittedBatteryPower')}
                >
                Maximum permitted battery power
                  {tooltip.maximumPermittedBatteryPower && (
                    <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
                     Maximum permitted power the battery is rated for, includes the data relevant for 'power limits'
                    </span>
                  )}
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sous-formulaire 3: Temperature conditions */}
        <div className="mb-8 bg-white rounded-lg p-4 shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Temperature conditions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
            <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4 relative">
                <label
                  className="text-sm text-gray-700 w-48 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter('lowerBoundary')}
                  onMouseLeave={() => handleMouseLeave('lowerBoundary')}
                >
                Temperature range idle state (lower boundary)
                  {tooltip.lowerBoundary && (
                    <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
                    Lower boundary of the surrounding temperature range, which the battery can safely withstand.
                    </span>
                  )}
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="flex items-center space-x-4 relative">
                <label
                  className="text-sm text-gray-700 w-48 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter('packLevel')}
                  onMouseLeave={() => handleMouseLeave('packLevel')}
                >
                Temperature range idle state (upper boundary)
                  {tooltip.packLevel && (
                    <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
                     Upper boundary of the surrounding temperature range, which the battery can safely withstand.
                    </span>
                  )}
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
            </div>
          </div>
        </div>

         {/* Sous-formulaire 4: Internal resistance */}
         <div className="mb-8 bg-white rounded-lg p-4 shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Internal resistance</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
            <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4 relative">
                <label
                  className="text-sm text-gray-700 w-48 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter('cellLevel')}
                  onMouseLeave={() => handleMouseLeave('cellLevel')}
                >
                Initial internal resistance on battery cell level
                  {tooltip.cellLevel && (
                    <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
                    Initial (Pre-Use) internal resistance on battery cell level. Only value that is mandatory on cell level
                    Definition of internal resistance should differ from regulation definition, as "opposition" is not an electrotechnical term and may be based on IEV 131-12-04: "internal resistance means the absolute value of the quotient of the voltage drop between the terminals by the electric current increase in the battery circuit during a current pulse"
                    </span>
                  )}
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="flex items-center space-x-4 relative">
                <label
                  className="text-sm text-gray-700 w-48 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter('upperBoundary')}
                  onMouseLeave={() => handleMouseLeave('upperBoundary')}
                >
                Initial internal resistance on battery pack level
                  {tooltip.upperBoundary && (
                    <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
                     Initial (Pre-Use) internal resistance on battery pack level. 
                     Definition of internal resistance should differ from regulation definition, as "opposition" is not an electrotechnical term and may be based on IEV 131-12-04: "internal resistance means the absolute value of the quotient of the voltage drop between the terminals by the electric current increase in the battery circuit during a current pulse"
                    </span>
                  )}
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
            </div>
          </div>
        </div>

         {/* Sous-formulaire 5: Round trip energy efficiency & self-discharge */}
         <div className="mb-8 bg-white rounded-lg p-4 shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Round trip energy efficiency & self-discharge</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
            <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4 relative">
                <label
                  className="text-sm text-gray-700 w-48 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter('initialselfdischargingrate')}
                  onMouseLeave={() => handleMouseLeave('initialselfdischargingrate')}
                >
                Initial self-discharging rate
                  {tooltip.initialselfdischargingrate && (
                    <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
                    Initial self-discharge in % of capacity per unit of time in defined conditions (temperature range etc) as pre-use metric.
                    </span>
                  )}
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="flex items-center space-x-4 relative">
                <label
                  className="text-sm text-gray-700 w-48 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter('Initialroundtripenergyefficiency')}
                  onMouseLeave={() => handleMouseLeave('Initialroundtripenergyefficiency')}
                >
                Initial round trip energy efficiency
                  {tooltip.Initialroundtripenergyefficiency && (
                    <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
                     Initial (Pre-Use) internal resistance on battery pack level. 
                     Initial round trip energy efficiency; definition as provided in Battery Regulation.
                    </span>
                  )}
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>

              <div className="flex items-center space-x-4 relative">
                <label
                  className="text-sm text-gray-700 w-48 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter('Roundtripenergyefficiencyatofcyclelife')}
                  onMouseLeave={() => handleMouseLeave('Roundtripenergyefficiencyatofcyclelife')}
                >
                Round trip energy efficiency at 50% of cycle life
                  {tooltip.Roundtripenergyefficiencyatofcyclelife && (
                    <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
                     Round trip energy efficiency at 50% of cycle-life; measured at 50% of cycle life as determined in a pre-use standardized measurement.
                    </span>
                  )}
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sous-formulaire 6: Round trip energy efficiency at 50% of cycle life*/}
        <div className="mb-8 bg-white rounded-lg p-4 shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Round trip energy efficiency at 50% of cycle life</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
            <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">Information on accidents</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">Number of deep discharge events</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Boutons de soumission et annulation */}
        <div className="flex justify-center">
          <button onClick={handleSubmit} className="btn btn-primary px-8 py-3 mr-2">Submit</button>
          <button onClick={handleCancel} className="btn btn-secondary px-8 py-3">Cancel</button>
        </div>
      </div>
      <div className="flex justify-center mt-4 space-x-4">
        <button onClick={handlePrevious} className="btn btn-gray px-2 py-2 mr-1">Previous</button>
      </div>
      <div className="mt-8">
        <Footerform />
      </div>
    </div>
  );
}

export default FormulairePerformanceDurability;
