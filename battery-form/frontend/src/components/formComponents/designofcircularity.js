import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Headline from '../../layouts/form/headline';
import ProgressBar from './progressbare';
import Footerform from '../../layouts/form/footerform';

function FormulaireDesignCircularity() {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  // État pour gérer l'affichage des tooltips
  const [tooltips, setTooltips] = useState({
    Postaladdress: false,
    Emailaddress: false,
    Webaddress: false,
    Partnumbers: false,
    ManualRemovalBattery: false,
    ManualDisassemblyBatteryPack: false,
    ExtinguishingAgent: false,
    SafetyMeasures: false,
    PreConsumerRecycledNickel: false,
    PreConsumerRecycledCobalt: false,
    PreConsumerRecycledLithium: false,
    PreConsumerRecycledLead: false,
    PostConsumerRecycledNickel: false,
    PostConsumerRecyclecobat:false,
    Renewablecontentshare:false,
    Postconsumerrecycledleadshare:false,
    Postconsumerrecycledlithiumshare:false,
    wasteprevention:false,
    wastebatteries:false,
    separatecollection:false
  });

  const handleSubmit = () => {
    setProgress(100);
    // Logique de soumission du formulaire
  };

  const handleCancel = () => {
    setProgress(0);
    // Logique d'annulation du formulaire
  };

  const handleNext = () => {
    navigate('/batterymaterials');
  };

  const handlePrevious = () => {
    navigate('/supplychain');
  };

  const handleMouseEnter = (type) => {
    setTooltips((prev) => ({ ...prev, [type]: true }));
  };

  const handleMouseLeave = (type) => {
    setTooltips((prev) => ({ ...prev, [type]: false }));
  };

  return (
    <div className="mt-8">
      <Headline />
      <div className="mt-8">
        <ProgressBar progress={progress} />
      </div>
      <div className="max-w-3xl mx-auto mt-8 p-6 bg-blue-50 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center">Design de Circularity</h2>

        {/* Sous-formulaire 1: Design of Circularity */}
        <div className="mb-8 bg-white rounded-lg p-4 shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Design of Circularity</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-4">
              {/* Postal address */}
              <div className="flex items-center space-x-4 relative">
                <label
                  className="text-sm text-gray-700 w-48 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter('Postaladdress')}
                  onMouseLeave={() => handleMouseLeave('Postaladdress')}
                >
                  Postal address of sources for spare parts
                  {tooltips.Postaladdress && (
                    <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
                      Postal address of supplier for spare parts.
                    </span>
                  )}
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              {/* E-mail address */}
              <div className="flex items-center space-x-4 relative">
                <label
                  className="text-sm text-gray-700 w-48 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter('Emailaddress')}
                  onMouseLeave={() => handleMouseLeave('Emailaddress')}
                >
                  E-mail address of sources for spare parts
                  {tooltips.Emailaddress && (
                    <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
                      E-mail address of supplier for spare parts.
                    </span>
                  )}
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              {/* Web address */}
              <div className="flex items-center space-x-4 relative">
                <label
                  className="text-sm text-gray-700 w-48 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter('Webaddress')}
                  onMouseLeave={() => handleMouseLeave('Webaddress')}
                >
                  Web address of sources for spare parts
                  {tooltips.Webaddress && (
                    <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
                      Web address of supplier for spare parts.
                    </span>
                  )}
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              {/* Part numbers */}
              <div className="flex items-center space-x-4 relative">
                <label
                  className="text-sm text-gray-700 w-48 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter('Partnumbers')}
                  onMouseLeave={() => handleMouseLeave('Partnumbers')}
                >
                  Part numbers for components
                  {tooltips.Partnumbers && (
                    <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
                      Part numbers for components
                    </span>
                  )}
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              {/* Manual for removal of battery */}
              <div className="flex items-center space-x-4 relative">
                <label
                  className="text-sm text-gray-700 w-48 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter('ManualRemovalBattery')}
                  onMouseLeave={() => handleMouseLeave('ManualRemovalBattery')}
                >
                  Manual for removal of the battery from the appliance
                  {tooltips.ManualRemovalBattery && (
                    <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
                      Manual for removal of the battery from the appliance, including:
                      <ul className="list-disc pl-4">
                        <li>Exploded diagrams of the battery system/pack.</li>
                        <li>Type of construction of battery pack.</li>
                        <li>Disassembly sequences</li>
                        <li>Risk warnings and safety measures</li>
                      </ul>
                    </span>
                  )}
                </label>
                <div className="relative flex items-center">
                  <input
                    type="file"
                    className="file-input hidden"
                    id="fileInput1"
                  />
                  <label
                    htmlFor="fileInput1"
                    className="btn btn-primary py-2 px-6 rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 cursor-pointer ml-2"
                  >
                    Input file
                  </label>
                </div>
              </div>
              {/* Manual for disassembly of the battery pack */}
              <div className="flex items-center space-x-4 relative">
                <label
                  className="text-sm text-gray-700 w-48 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter('ManualDisassemblyBatteryPack')}
                  onMouseLeave={() => handleMouseLeave('ManualDisassemblyBatteryPack')}
                >
                  Manual for disassembly and dismantling of the battery pack
                  {tooltips.ManualDisassemblyBatteryPack && (
                    <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
                      Manual for disassembly of the battery pack, including:
                      <ul className="list-disc pl-4">
                        <li>Exploded diagrams of the battery system/pack showing the location of the battery cells and modules, including format and dimensions of battery cells, modules and pack, and orientation of the battery cells</li>
                        <li> Type of construction of battery pack, modules, and cells</li>
                        <li> Information on replaceability of modules and cells (yes/no)</li>
                        <li>Disassembly sequences</li>
                        <li> Characteristics of joints, screws, and fasteners: type, number, materials, and number of fastening techniques to be unlocked</li>
                        <li>Information on fillings, if used: characteristics of foams and/or glues</li>
                        <li>Information on casing: type and material (steel/plastic)</li>
                        <li>Tools required for disassembly</li>
                        <li>Risk warnings and safety measures"
                        </li>
                      </ul>
                    </span>
                  )}
                </label>
                <div className="relative flex items-center">
                  <input
                    type="file"
                    className="file-input hidden"
                    id="fileInput2"
                  />
                  <label
                    htmlFor="fileInput2"
                    className="btn btn-primary py-2 px-6 rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 cursor-pointer ml-2"
                  >
                    Input file
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sous-formulaire 2: Battery Safety Requirements */}
        <div className="mb-8 bg-white rounded-lg p-4 shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Battery Safety Requirements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4 relative">
                <label
                  className="text-sm text-gray-700 w-48 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter('ExtinguishingAgent')}
                  onMouseLeave={() => handleMouseLeave('ExtinguishingAgent')}
                >
                  Extinguishing agent
                  {tooltips.ExtinguishingAgent && (
                    <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
                      Usable extinguishing agent referring to classes of extinguishers (A, B, C, D, K).
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
                  onMouseEnter={() => handleMouseEnter('SafetyMeasures')}
                  onMouseLeave={() => handleMouseLeave('SafetyMeasures')}
                >
                  Safety measures/instructions
                  {tooltips.SafetyMeasures && (
                    <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
                      Safety measures and instructions should also take into account past negative and extreme events as well as the separate data attributes "battery status" and "battery composition/chemistry".
                    </span>
                  )}
                </label>
                <div className="relative flex items-center">
                  <input
                    type="file"
                    className="file-input hidden"
                    id="fileInput3"
                  />
                  <label
                    htmlFor="fileInput3"
                    className="btn btn-primary py-2 px-6 rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 cursor-pointer ml-2"
                  >
                    Input file
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sous-formulaire 3: Recycled and renewable content */}
        <div className="mb-8 bg-white rounded-lg p-4 shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Recycled and renewable content</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-4">
              {/* Pre-consumer recycled nickel share */}
              <div className="flex items-center space-x-4 relative">
                <label
                  className="text-sm text-gray-700 w-48 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter('PreConsumerRecycledNickel')}
                  onMouseLeave={() => handleMouseLeave('PreConsumerRecycledNickel')}
                >
                  Pre-consumer recycled nickel share
                  {tooltips.PreConsumerRecycledNickel && (
                    <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
                      Share of material recovered from waste present in active materials for each battery model per year and per manufacturing plant.
                    </span>
                  )}
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              {/* Pre-consumer recycled cobalt share */}
              <div className="flex items-center space-x-4 relative">
                <label
                  className="text-sm text-gray-700 w-48 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter('PreConsumerRecycledCobalt')}
                  onMouseLeave={() => handleMouseLeave('PreConsumerRecycledCobalt')}
                >
                  Pre-consumer recycled cobalt share
                  {tooltips.PreConsumerRecycledCobalt && (
                    <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
                      Share of material recovered from waste present in active materials for each battery model per year and per manufacturing plant.
                    </span>
                  )}
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              {/* Pre-consumer recycled lithium share */}
              <div className="flex items-center space-x-4 relative">
                <label
                  className="text-sm text-gray-700 w-48 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter('PreConsumerRecycledLithium')}
                  onMouseLeave={() => handleMouseLeave('PreConsumerRecycledLithium')}
                >
                  Pre-consumer recycled lithium share
                  {tooltips.PreConsumerRecycledLithium && (
                    <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
                      Share of material recovered from waste present in active materials for each battery model per year and per manufacturing plant.
                    </span>
                  )}
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              {/* Pre-consumer recycled lead share */}
              <div className="flex items-center space-x-4 relative">
                <label
                  className="text-sm text-gray-700 w-48 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter('PreConsumerRecycledLead')}
                  onMouseLeave={() => handleMouseLeave('PreConsumerRecycledLead')}
                >
                  Pre-consumer recycled lead share
                  {tooltips.PreConsumerRecycledLead && (
                    <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
                      Share of material recovered from waste present in active materials for each battery model per year and per manufacturing plant.
                    </span>
                  )}
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              {/* Post-consumer recycled nickel share */}
              <div className="flex items-center space-x-4 relative">
                <label
                  className="text-sm text-gray-700 w-48 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter('PostConsumerRecycledNickel')}
                  onMouseLeave={() => handleMouseLeave('PostConsumerRecycledNickel')}
                >
                  Post-consumer recycled nickel share
                  {tooltips.PostConsumerRecycledNickel && (
                    <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
                      Share of material recovered from waste present in active materials for each battery model per year and per manufacturing plant.
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
                  onMouseEnter={() => handleMouseEnter('PostConsumerRecyclecobat')}
                  onMouseLeave={() => handleMouseLeave('PostConsumerRecyclecobat')}
                >
                  Post-consumer recycled cobalt share
                  {tooltips.PostConsumerRecyclecobat && (
                    <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
                      Share of material recovered from waste present in active materials for each battery model per year and per manufacturing plant

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
                  onMouseEnter={() => handleMouseEnter('Postconsumerrecycledlithiumshare')}
                  onMouseLeave={() => handleMouseLeave('Postconsumerrecycledlithiumshare')}
                >
                  Post-consumer recycled lithium share
                  {tooltips.Postconsumerrecycledlithiumshare && (
                    <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
                      
Share of material recovered from waste present in active materials for each battery model per year and per manufacturing plant
 

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
                  onMouseEnter={() => handleMouseEnter('Postconsumerrecycledleadshare')}
                  onMouseLeave={() => handleMouseLeave('Postconsumerrecycledleadshare')}
                >
                  Post-consumer recycled lead share
                  {tooltips.Postconsumerrecycledleadshare && (
                    <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
                     
Share of material recovered from waste present in active materials for each battery model per year and per manufacturing plant
 


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
                  onMouseEnter={() => handleMouseEnter('Renewablecontentshare')}
                  onMouseLeave={() => handleMouseLeave('Renewablecontentshare')}
                >
                  Renewable content share
                  {tooltips.Renewablecontentshare && (
                    <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
                      
                     Share of material recovered from waste present in active materials for each battery model per year and per manufacturing plant
 


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
         {/* sous formulaire 3:  End-of-Life information} */}
        <div className="mb-8 bg-white rounded-lg p-4 shadow-sm">
          <h3 className="text-lg font-semibold mb-2">End-of-Life information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-4">
              
              
              <div className="flex items-center space-x-4 relative">
                <label
                  className="text-sm text-gray-700 w-48 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter('wasteprevention')}
                  onMouseLeave={() => handleMouseLeave('wasteprevention')}
                >
                  Role of end-users in contributing to waste prevention
                  {tooltips.wasteprevention && (
                    <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
                     Prevention and management of waste batteries: Point (a) of Article 60(1): Information on "the role of end-users in contributing to waste prevention, including by information on good practices and recommendations concerning the use of batteries aiming at extending their use phase and the possibilities of re-use, preparing for re-use, preparing for repurpose, repurposing and remanufacturing".
                      
                    </span>
                  )}
                </label>
                <div className="relative flex items-center">
                  <input
                    type="file"
                    className="file-input hidden"
                    id="fileInput1"
                  />
                  <label
                    htmlFor="fileInput1"
                    className="btn btn-primary py-2 px-6 rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 cursor-pointer ml-2"
                  >
                    Input file
                  </label>
                </div>
              </div>
            
              <div className="flex items-center space-x-4 relative">
                <label
                  className="text-sm text-gray-700 w-48 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter('wastebatteries')}
                  onMouseLeave={() => handleMouseLeave('wastebatteries')}
                >
                 Role of end- users in contributing to the separate collection of waste batteries
                  {tooltips.wastebatteries && (
                    <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
                     Prevention and management of waste batteries: Point (b) of Article 60(1): Information on "the role of end-users in contributing to the separate collection of waste batteries in accordance with their obligations under Article 51 so as to allow their treatment".
                    </span>
                  )}
                </label>
                <div className="relative flex items-center">
                  <input
                    type="file"
                    className="file-input hidden"
                    id="fileInput2"
                  />
                  <label
                    htmlFor="fileInput2"
                    className="btn btn-primary py-2 px-6 rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 cursor-pointer ml-2"
                  >
                    Input file
                  </label>
                </div>
              </div>
              <div className="flex items-center space-x-4 relative">
                <label
                  className="text-sm text-gray-700 w-48 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter('separatecollection')}
                  onMouseLeave={() => handleMouseLeave('separatecollection')}
                >
                  Information on separate collection, take back, collection points and preparing for re-use, preparing for repurposing and recycling operations
                  {tooltips.separatecollection && (
                    <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
                    Prevention and management of waste batteries: Point (c) of Article 60(1): information on "the separate collection, the take back, the collection points and preparing for re-use, preparing for repurposing, and recycling operations available for waste batteries". 
                      
                    </span>
                  )}
                </label>
                <div className="relative flex items-center">
                  <input
                    type="file"
                    className="file-input hidden"
                    id="fileInput1"
                  />
                  <label
                    htmlFor="fileInput1"
                    className="btn btn-primary py-2 px-6 rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 cursor-pointer ml-2"
                  >
                    Input file
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Boutons de soumission et annulation */}
        {/* <div className="flex justify-center">
          <button onClick={handleSubmit} className="btn btn-primary px-8 py-3 mr-2">Submit</button>
          <button onClick={handleCancel} className="btn btn-secondary px-8 py-3">Cancel</button>
        </div> */}
      </div>

      {/* Boutons Next et Previous à la fin de la page */}
      <div className="flex justify-center mt-4 space-x-4">
        <button onClick={handlePrevious} className="btn btn-gray px-2 py-2 mr-1">Previous</button>
        <button onClick={handleNext} className="btn btn-gray px-2 py-2 ml-1">Next</button>
      </div>
      

      {/* Intégration du FooterForm à la fin de la page */}
      <div className="mt-8">
        <Footerform />
      </div>
    </div>
  );
}

export default FormulaireDesignCircularity;