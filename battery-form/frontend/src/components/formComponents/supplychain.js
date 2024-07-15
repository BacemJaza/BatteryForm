import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Headline from '../../layouts/form/headline';
import ProgressBar from './progressbare';
import Footerform from '../../layouts/form/footerform';

function FormulaireSupplychain() {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate(); // Utilisation correcte de useNavigate pour la navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    setProgress(100);
    // Logique de soumission du formulaire
    // Redirection vers une autre page après la soumission si nécessaire
  };

  const handleCancel = () => {
    setProgress(0);
    // Logique d'annulation du formulaire
    // Redirection vers une autre page après l'annulation si nécessaire
  };

  const handleNext = () => {
    // Logique pour le bouton Next
    // Par exemple, naviguer vers une autre page
    navigate('/designofcircularity'); 
  };

  const handlePrevious = () => {
    // Logique pour le bouton Previous
    // Par exemple, naviguer vers la page précédente
    navigate('/generalinformation'); 
  };

  return (
    <div>
      <Headline /> {/* Intégration de Headline ici */}
      <div className="mt-8">
        <ProgressBar progress="2" />
      </div>

      <div className="max-w-md mx-auto mt-8 p-6 bg-blue-50 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Supply Chain Due Diligence</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="dueDiligenceReport" className="block text-sm font-medium text-gray-700">Information of the due diligence report:</label>
            <input type="file" id="dueDiligenceReport" name="dueDiligenceReport" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-blue-50 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" accept=".pdf,.doc,.docx" />
          </div>
          <div className="mb-4">
            <label htmlFor="supplyChainAssurances" className="block text-sm font-medium text-gray-700">Third party supply chain assurances:</label>
            <input type="file" id="supplyChainAssurances" name="supplyChainAssurances" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-blue-50 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" accept=".pdf,.doc,.docx" />
          </div>
          <div className="mb-4">
            <label htmlFor="taxonomyDisclosure" className="block text-sm font-medium text-gray-700">EU Taxonomy disclosure statement:</label>
            <input type="file" id="taxonomyDisclosure" name="taxonomyDisclosure" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-blue-50 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" accept=".pdf,.doc,.docx" />
          </div>
          <div className="mb-4">
            <label htmlFor="sustainabilityReport" className="block text-sm font-medium text-gray-700">Sustainability report:</label>
            <input type="file" id="sustainabilityReport" name="sustainabilityReport" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-blue-50 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" accept=".pdf,.doc,.docx" />
          </div>
       
          {/* Boutons de soumission et annulation */}
          {/* <div className="flex justify-center mt-4 space-x-4">
            <button type="submit" className="btn btn-primary px-8 py-3">Submit</button>
            <button type="button" onClick={handleCancel} className="btn btn-secondary px-8 py-3">Cancel</button>
          </div> */}
        </form>
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

export default FormulaireSupplychain;
