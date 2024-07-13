import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Headline from '../../layouts/headline';
import ProgressBar from './progressbare';
import Footerform from '../../layouts/footerform';

function FormulaireDesignCircularity() {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate(); // Utilisation correcte de useNavigate pour la navigation

  const handleSubmit = () => {
    // Logique de soumission du formulaire ici
    // Par exemple, envoyer les données au serveur
    // et mettre à jour l'état de la progression
    setProgress(100); // Marquer la progression comme terminée à 100%
    // Ici, vous pouvez ajouter du code supplémentaire pour gérer la soumission du formulaire
  };

  const handleCancel = () => {
    // Logique d'annulation du formulaire ici
    // Par exemple, réinitialiser les champs de formulaire
    setProgress(0); // Réinitialiser la progression
    // Ici, vous pouvez ajouter du code supplémentaire pour gérer l'annulation du formulaire
  };

  const handleNext = () => {
    // Logique pour le bouton Next
    console.log("Next button clicked");
    // Par exemple, naviguer vers une autre page
    navigate('/batterymaterials'); // Remplacez '/batterySafetyRequirements' par votre chemin de route réel
  };

  const handlePrevious = () => {
    // Logique pour le bouton Previous
    console.log("Previous button clicked");
    // Par exemple, naviguer vers une autre page
    navigate('/supplychain'); // Remplacez '/generalInformation' par votre chemin de route réel
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
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">Postal address of sources for spare parts</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">E-mail address of sources for spare parts</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">Web address of sources for spare parts</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">Part numbers for components</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">Manual for removal of the battery from the appliance</label>
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
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">Manual for disassembly and dismantling of the battery pack</label>
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
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">Extinguishing agent</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">Safety measures/instructions</label>
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
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">Pre-consumer recycled nickel share</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">Pre-consumer recycled lithium share</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">Pre-consumer recycled lead share</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">Post-consumer recycled nickel share</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">Post-consumer recycled cobalt share</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">Post-consumer recycled lithium share</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">Post-consumer recycled lead share</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">Renewable content share</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sous-formulaire 4: End-of-Life information */}
        <div className="mb-8 bg-white rounded-lg p-4 shadow-sm">
          <h3 className="text-lg font-semibold mb-2">End-of-Life information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">Role of end-users in contributing to waste prevention</label>
                <div className="relative flex items-center">
                  <input
                    type="file"
                    className="file-input hidden"
                    id="fileInput4"
                  />
                  <label
                    htmlFor="fileInput4"
                    className="btn btn-primary py-2 px-6 rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 cursor-pointer ml-2"
                  >
                    Input file
                  </label>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">Separate collection of batteries</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">Deposit return scheme for batteries</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">Batteries' recycling rate</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">Batteries' recycling performance</label>
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
      {/* Boutons Next et Previous à la fin de la page */}
      <div className="flex justify-center mt-4 space-x-4">
        <button onClick={handlePrevious} className="btn btn-gray px-2 py-2 mr-1">Previous</button>
        <button onClick={handleNext} className="btn btn-gray px-2 py-2 ml-1">Next</button>
      </div>
       {/* Intégration du FooterForm à la fin de la page */}
       <div className="mt-8"> {/* Ajout d'une marge supérieure pour l'espace */}
        <Footerform />
      </div>
    </div>
  );
}

export default FormulaireDesignCircularity;
