import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Headline from '../../layouts/headline';
import ProgressBar from './progressbare';
import Footerform from '../../layouts/footerform';

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

  const [tooltip, setTooltip] = useState({ expected: false, reference: false, cRate: false });

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
        <ProgressBar progress={progress} />
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
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">Warranty period of the battery</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">Date of putting the battery into service</label>
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
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">Rated capacity</label>
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
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">Original power capability</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">Maximum permitted battery power</label>
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
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">Temperature range idle state (lower boundary)</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">Temperature range idle state (upper boundary)</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">Temperature range in operation (lower boundary)</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">Temperature range in operation (upper boundary)</label>
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