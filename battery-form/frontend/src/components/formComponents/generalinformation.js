import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Headline from '../../layouts/form/headline';
import Footerform from '../../layouts/form/footerform';
import ProgressBar from './progressbare';

function FormulaireGeneralinformation() {
  const [batteryPassportIdentification, setBatteryPassportIdentification] = useState('');
  const [batteryIdentification, setBatteryIdentification] = useState('');
  const [batteryCategory, setBatteryCategory] = useState('');
  const [batteryStatus, setBatteryStatus] = useState('');
  const [manufacturerId, setManufacturerId] = useState('');
  const [manufacturingDate, setManufacturingDate] = useState('');
  const [manufacturingPlace, setManufacturingPlace] = useState('');
  const [batteryWeight, setBatteryWeight] = useState('');
  const [euDeclarationFile, setEuDeclarationFile] = useState(null);
  const [idEuDeclaration, setIdEuDeclaration] = useState('');
  const [testReportsFile, setTestReportsFile] = useState(null);
  const [separateCollectionSymbol, setSeparateCollectionSymbol] = useState(null);
  const [cadmiumLeadSymbol, setCadmiumLeadSymbol] = useState(null);
  const [carbonFootprintClass, setCarbonFootprintClass] = useState('');
  const [co2Footprint, setCo2Footprint] = useState('');
  
  const navigate = useNavigate(); // Utilisation correcte de useNavigate pour la navigation

  const handleBatteryPassportIdentificationChange = (event) => {
    setBatteryPassportIdentification(event.target.value);
  };

  const handleBatteryIdentificationChange = (event) => {
    setBatteryIdentification(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setBatteryCategory(event.target.value);
  };

  const handleStatusChange = (event) => {
    setBatteryStatus(event.target.value);
  };

  const handleManufacturerIdChange = (event) => {
    setManufacturerId(event.target.value);
  };

  const handleManufacturingDateChange = (event) => {
    setManufacturingDate(event.target.value);
  };

  const handleManufacturingPlaceChange = (event) => {
    setManufacturingPlace(event.target.value);
  };

  const handleBatteryWeightChange = (event) => {
    setBatteryWeight(event.target.value);
  };

  const handleEuDeclarationFileChange = (event) => {
    setEuDeclarationFile(event.target.files[0]);
  };

  const handleIdEuDeclarationChange = (event) => {
    setIdEuDeclaration(event.target.value);
  };

  const handleTestReportsFileChange = (event) => {
    setTestReportsFile(event.target.files[0]);
  };

  const handleSeparateCollectionSymbolChange = (event) => {
    setSeparateCollectionSymbol(event.target.files[0]);
  };

  const handleCadmiumLeadSymbolChange = (event) => {
    setCadmiumLeadSymbol(event.target.files[0]);
  };

  const handleCarbonFootprintClassChange = (event) => {
    setCarbonFootprintClass(event.target.value);
  };

  const handleCo2FootprintChange = (event) => {
    setCo2Footprint(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Vous pouvez traiter les données du formulaire ici, par exemple, les envoyer à un backend
    console.log('Submitted:', {
      batteryPassportIdentification,
      batteryIdentification,
      batteryCategory,
      batteryStatus,
      manufacturerId,
      manufacturingDate,
      manufacturingPlace,
      batteryWeight,
      euDeclarationFile,
      idEuDeclaration,
      testReportsFile,
      separateCollectionSymbol,
      cadmiumLeadSymbol,
      carbonFootprintClass,
      co2Footprint,
    });
    // Réinitialisez les champs après la soumission si nécessaire
    // setBatteryPassportIdentification('');
    // setBatteryIdentification('');
    // setBatteryCategory('');
    // setBatteryStatus('');
    // setManufacturerId('');
    // setManufacturingDate('');
    // setManufacturingPlace('');
    // setBatteryWeight('');
    // setEuDeclarationFile(null);
    // setIdEuDeclaration('');
    // setTestReportsFile(null);
    // setSeparateCollectionSymbol(null);
    // setCadmiumLeadSymbol(null);
    // setCarbonFootprintClass('');
    // setCo2Footprint('');
  };

  const handleNext = () => {
    console.log("Next button clicked");
    // Logique pour le bouton Next
    // Par exemple, naviguer vers une autre page
    navigate('/supplychain'); // Remplacez '/performanceanddurability' par votre chemin de route réel
  };

  const [tooltip, setTooltip] = useState({ 
    batteryPassport: false, 
    Batteryidentification:false,
    Batterystatus:false,
    Manufactureridentification:false,
    EUdeclarationofconformity:false,
    IDofEUdeclarationofconformity:false,
    Resultsoftestsreports:false,
    Separatecollectionsymbol:false,
    Cadmiumandleadsymbols:false,
    carbonfootprintperformanceclass:false,
    CO2footprint:false
   

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
        <ProgressBar progress="1"/>
      </div>
      <div className="max-w-3xl mx-auto mt-8 p-6 bg-blue-50 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center">General Information</h2>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg p-4 shadow-sm">
          <div className="grid grid-cols-1 gap-4">
          <div className="flex items-center space-x-4 relative">
             <label
                 htmlFor="batteryPassportIdentification"
                 className="text-sm text-gray-700 w-64 cursor-pointer"
                 onMouseEnter={() => handleMouseEnter('batteryPassport')}
                 onMouseLeave={() => handleMouseLeave('batteryPassport')}
  >
                Battery passport identification:
              {tooltip.batteryPassport && (
              <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
               Unique identifier allowing for the unambiguous identification of each individual battery and hence each corresponding battery passport.
              </span>
               )}
                </label>
                <input
               type="text"
               id="batteryPassportIdentification"
               value={batteryPassportIdentification}
               onChange={handleBatteryPassportIdentificationChange}
               className="input input-bordered input-primary w-full max-w-xs"
               required
                  />
                </div>

                <div className="flex items-center space-x-4 relative">
             <label
                 htmlFor="batteryPassportIdentification"
                 className="text-sm text-gray-700 w-64 cursor-pointer"
                 onMouseEnter={() => handleMouseEnter('Batteryidentification')}
                 onMouseLeave={() => handleMouseLeave('Batteryidentification')}
  >
               Battery identification
              {tooltip.Batteryidentification && (
              <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
               Model identification and batch or serial number, or product number or another element allowing their identification
              </span>
               )}
                </label>
                <input
               type="text"
               id="batteryPassportIdentification"
               value={batteryPassportIdentification}
               onChange={handleBatteryPassportIdentificationChange}
               className="input input-bordered input-primary w-full max-w-xs"
               required
                  />
                </div>


            

            <div className="flex items-center space-x-4">
              <label htmlFor="batteryCategory" className="text-sm text-gray-700 w-64">Battery category:</label>
              <select
                id="batteryCategory"
                value={batteryCategory}
                onChange={handleCategoryChange}
                className="input input-bordered input-primary w-full max-w-xs"
                required
              >
                <option value="">-- Sélectionnez une catégorie --</option>
                <option value="EV">EV</option>
                <option value="LMT">LMT</option>
                <option value="Industrial">Industrial</option>
                <option value="Stationary">Stationary</option>
              </select>
            </div>

           < div className="flex items-center space-x-4 relative">
             <label
                 htmlFor="batteryPassportIdentification"
                 className="text-sm text-gray-700 w-64 cursor-pointer"
                 onMouseEnter={() => handleMouseEnter('Batterystatus')}
                 onMouseLeave={() => handleMouseLeave('Batterystatus')}
  >
                Battery status
              {tooltip.Batterystatus && (
              <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
               Lifecycle status of the battery.
              </span>
               )}
                </label>
              <select
                id="batteryStatus"
                value={batteryStatus}
                onChange={handleStatusChange}
                className="input input-bordered input-primary w-full max-w-xs"
                required
              >
                <option value="">-- Sélectionnez un statut --</option>
                <option value="original">Original</option>
                <option value="repurposed">Repurposed</option>
                <option value="reused">Reused</option>
                <option value="remanufactured">Remanufactured</option>
                <option value="waste">Waste</option>
              </select>
            </div>

            <div className="flex items-center space-x-4 relative">
             <label
                 htmlFor="batteryPassportIdentification"
                 className="text-sm text-gray-700 w-64 cursor-pointer"
                 onMouseEnter={() => handleMouseEnter('Manufactureridentification')}
                 onMouseLeave={() => handleMouseLeave('Manufactureridentification')}
  >
               Manufacturer’s identification
              {tooltip.Manufactureridentification && (
              <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
               Unambiguous identification of the manufacturer of the battery, suggested via a unique operator identifier
              </span>
               )}
                </label>
                <input
               type="text"
               id="batteryPassportIdentification"
               value={batteryPassportIdentification}
               onChange={handleBatteryPassportIdentificationChange}
               className="input input-bordered input-primary w-full max-w-xs"
               required
                  />
                </div>

            <div className="flex items-center space-x-4">
              <label htmlFor="manufacturingDate" className="text-sm text-gray-700 w-64">Manufacturing date:</label>
              <input
                type="date"
                id="manufacturingDate"
                value={manufacturingDate}
                onChange={handleManufacturingDateChange}
                className="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>

            <div className="flex items-center space-x-4">
              <label htmlFor="manufacturingPlace" className="text-sm text-gray-700 w-64">Manufacturing place:</label>
              <input
                type="text"
                id="manufacturingPlace"
                value={manufacturingPlace}
                onChange={handleManufacturingPlaceChange}
                className="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>

            <div className="flex items-center space-x-4">
              <label htmlFor="batteryWeight" className="text-sm text-gray-700 w-64">Battery weight:</label>
              <input
                type="text"
                id="batteryWeight"
                value={batteryWeight}
                onChange={handleBatteryWeightChange}
                className="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>

            <div className="flex items-center space-x-4 relative">
             <label
                 htmlFor="batteryPassportIdentification"
                 className="text-sm text-gray-700 w-64 cursor-pointer"
                 onMouseEnter={() => handleMouseEnter('EUdeclarationofconformity')}
                 onMouseLeave={() => handleMouseLeave('EUdeclarationofconformity')}
  >
                EU declaration of conformity
              {tooltip.EUdeclarationofconformity && (
              <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
               EU declaration of conformity signed by responsible economic operators to declare compliance with the regulatory requirements in the context of the market conformity assessment procedure and assume full responsibility.
              </span>
               )}
                </label>
              <input
                type="file"
                id="euDeclarationFile"
                onChange={handleEuDeclarationFileChange}
                className="input"
                accept=".pdf,.doc,.docx"
                required
              />
            </div>

            <div className="flex items-center space-x-4 relative">
             <label
                 htmlFor="batteryPassportIdentification"
                 className="text-sm text-gray-700 w-64 cursor-pointer"
                 onMouseEnter={() => handleMouseEnter('IDofEUdeclarationofconformity')}
                 onMouseLeave={() => handleMouseLeave('IDofEUdeclarationofconformity')}
  >
                ID of EU declaration of conformity
              {tooltip.IDofEUdeclarationofconformity && (
              <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
               Identification number of the EU declaration of conformity of the battery
              </span>
               )}
                </label>
              <input
                type="text"
                id="idEuDeclaration"
                value={idEuDeclaration}
                onChange={handleIdEuDeclarationChange}
                className="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>

            <div className="flex items-center space-x-4 relative">
             <label
                 htmlFor="batteryPassportIdentification"
                 className="text-sm text-gray-700 w-64 cursor-pointer"
                 onMouseEnter={() => handleMouseEnter('Resultsoftestsreports')}
                 onMouseLeave={() => handleMouseLeave('Resultsoftestsreports')}
  >
                Results of tests reports
              {tooltip.Resultsoftestsreports && (
              <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
               Results of tests reports proving compliance in the market conformity assessment procedure with the requirements as per the technical documentation
              </span>
               )}
                </label>
              <input
                type="file"
                id="testReportsFile"
                onChange={handleTestReportsFileChange}
                className="input"
                accept=".pdf,.doc,.docx"
                required
              />
            </div>

            <div className="flex items-center space-x-4 relative">
             <label
                 htmlFor="batteryPassportIdentification"
                 className="text-sm text-gray-700 w-64 cursor-pointer"
                 onMouseEnter={() => handleMouseEnter('Separatecollectionsymbol')}
                 onMouseLeave={() => handleMouseLeave('Separatecollectionsymbol')}
  >
                Separate collection symbol 
              {tooltip.Separatecollectionsymbol && (
              <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
               "Separate collection" or "WEEE label" indicating that a product should not be discarded as unsorted waste but must be sent to separate collection facilities for recovery and recycling.
              </span>
               )}
                </label>
              <input
                type="file"
                id="separateCollectionSymbol"
                onChange={handleSeparateCollectionSymbolChange}
                className="input"
                accept=".png,.jpg,.jpeg"
                required
              />
            </div>

            <div className="flex items-center space-x-4 relative">
             <label
                 htmlFor="batteryPassportIdentification"
                 className="text-sm text-gray-700 w-64 cursor-pointer"
                 onMouseEnter={() => handleMouseEnter('Cadmiumandleadsymbols')}
                 onMouseLeave={() => handleMouseLeave('Cadmiumandleadsymbols')}
  >
                Cadmium and lead symbols 
              {tooltip.Cadmiumandleadsymbols && (
              <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
               Cadmium and lead symbols indicating the metal is contained in the battery above a defined threshold. 
              </span>
               )}
                </label>
              <input
                type="file"
                id="cadmiumLeadSymbol"
                onChange={handleCadmiumLeadSymbolChange}
                className="input"
                accept=".png,.jpg,.jpeg"
                required
              />
            </div>

            <div className="flex items-center space-x-4 relative">
             <label
                 htmlFor="batteryPassportIdentification"
                 className="text-sm text-gray-700 w-64 cursor-pointer"
                 onMouseEnter={() => handleMouseEnter('carbonfootprintperformanceclass')}
                 onMouseLeave={() => handleMouseLeave('carbonfootprintperformanceclass')}
  >
                carbon footprint performance class 
              {tooltip.carbonfootprintperformanceclass && (
              <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
               The carbon footprint performance class that the relevant battery model per manufacturing plant corresponds to.
              </span>
               )}
                </label>
              <select
                id="carbonFootprintClass"
                value={carbonFootprintClass}
                onChange={handleCarbonFootprintClassChange}
                className="input input-bordered input-primary w-full max-w-xs"
                required
              >
                <option value="">-- Sélectionnez une classe --</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
                <option value="G">G</option>
              </select>
            </div>

            <div className="flex items-center space-x-4 relative">
             <label
                 htmlFor="batteryPassportIdentification"
                 className="text-sm text-gray-700 w-64 cursor-pointer"
                 onMouseEnter={() => handleMouseEnter('CO2footprint')}
                 onMouseLeave={() => handleMouseLeave('CO2footprint')}
  >
                CO2 footprint 
              {tooltip.CO2footprint && (
              <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
               The carbon footprint of the battery, calculated as kg of carbon dioxide equivalent per one kWh of the total energy provided by the battery over its expected service life
              </span>
               )}
                </label>
              <input
                type="text"
                id="co2Footprint"
                value={co2Footprint}
                onChange={handleCo2FootprintChange}
                className="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button type="submit" className="btn btn-primary px-8 py-3 mr-2">Submit</button>
            <button type="button" className="btn btn-secondary px-8 py-3">Cancel</button>
          </div>
        </form>
      </div>
      <div className="flex justify-center mt-4 space-x-4">
        <button onClick={handleNext} className="btn btn-gray px-2 py-2 ml-1">Next</button>
      </div>
      {/* Intégration du FooterForm à la fin de la page */}
      <div className="mt-8"> {/* Ajout d'une marge supérieure pour l'espace */}
        <Footerform />
      </div>
    </div>
  );
}

export default FormulaireGeneralinformation;
