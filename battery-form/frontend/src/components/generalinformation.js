import React, { useState } from 'react';
import Headline from '../layouts/headline';

function FormulaireGeneralinformation() {
  const [batteryPassportIdentification, setBatteryPassportIdentification] = useState('');
  const [batteryIdentification, setBatteryIdentification] = useState('');
  const [batteryCategory, setBatteryCategory] = useState('');
  const [batteryStatus, setBatteryStatus] = useState(''); // Nouvel état pour le statut de la batterie
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

  return (
    <div>
      <Headline /> {/* Intégration de Headline ici */}
      <div className="max-w-3xl mx-auto mt-8 p-6 bg-blue-50 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center">General Information</h2>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg p-4 shadow-sm">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center space-x-4">
              <label htmlFor="batteryPassportIdentification" className="text-sm text-gray-700 w-64">Battery passport identification:</label>
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
              <label htmlFor="batteryIdentification" className="text-sm text-gray-700 w-64">Battery identification:</label>
              <input
                type="text"
                id="batteryIdentification"
                value={batteryIdentification}
                onChange={handleBatteryIdentificationChange}
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

            <div className="flex items-center space-x-4">
              <label htmlFor="batteryStatus" className="text-sm text-gray-700 w-64">Battery status:</label>
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

            <div className="flex items-center space-x-4">
              <label htmlFor="manufacturerId" className="text-sm text-gray-700 w-64">Manufacturer’s identification:</label>
              <input
                type="text"
                id="manufacturerId"
                value={manufacturerId}
                onChange={handleManufacturerIdChange}
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

            <div className="flex items-center space-x-4">
              <label htmlFor="euDeclarationFile" className="text-sm text-gray-700 w-64">EU declaration of conformity:</label>
              <input
                type="file"
                id="euDeclarationFile"
                onChange={handleEuDeclarationFileChange}
                className="input"
                accept=".pdf,.doc,.docx"
                required
              />
            </div>

            <div className="flex items-center space-x-4">
              <label htmlFor="idEuDeclaration" className="text-sm text-gray-700 w-64">ID of EU declaration of conformity:</label>
              <input
                type="text"
                id="idEuDeclaration"
                value={idEuDeclaration}
                onChange={handleIdEuDeclarationChange}
                className="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>

            <div className="flex items-center space-x-4">
              <label htmlFor="testReportsFile" className="text-sm text-gray-700 w-64">Test reports:</label>
              <input
                type="file"
                id="testReportsFile"
                onChange={handleTestReportsFileChange}
                className="input"
                accept=".pdf,.doc,.docx"
                required
              />
            </div>

            <div className="flex items-center space-x-4">
              <label htmlFor="separateCollectionSymbol" className="text-sm text-gray-700 w-64">Separate collection symbol:</label>
              <input
                type="file"
                id="separateCollectionSymbol"
                onChange={handleSeparateCollectionSymbolChange}
                className="input"
                accept=".png,.jpg,.jpeg"
                required
              />
            </div>

            <div className="flex items-center space-x-4">
              <label htmlFor="cadmiumLeadSymbol" className="text-sm text-gray-700 w-64">Cadmium/lead symbol:</label>
              <input
                type="file"
                id="cadmiumLeadSymbol"
                onChange={handleCadmiumLeadSymbolChange}
                className="input"
                accept=".png,.jpg,.jpeg"
                required
              />
            </div>

            <div className="flex items-center space-x-4">
              <label htmlFor="carbonFootprintClass" className="text-sm text-gray-700 w-64">Carbon footprint performance class:</label>
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

            <div className="flex items-center space-x-4">
              <label htmlFor="co2Footprint" className="text-sm text-gray-700 w-64">CO2 footprint:</label>
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
    </div>
  );
}

export default FormulaireGeneralinformation;
