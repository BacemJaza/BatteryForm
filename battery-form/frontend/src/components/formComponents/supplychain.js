import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Headline from '../../layouts/form/headline';
import ProgressBar from './progressbare';
import Footerform from '../../layouts/form/footerform';
import axios from 'axios'; // Assurez-vous d'avoir axios installé

function FormulaireSupplychain() {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate(); // Utilisation correcte de useNavigate pour la navigation
  const [files, setFiles] = useState({
    dueDiligenceReport: null,
    supplyChainAssurances: null,
    taxonomyDisclosure: null,
    sustainabilityReport: null
  });

  const formRef = useRef(); // Référence au formulaire

  const handleFileChange = (e) => {
    setFiles({
      ...files,
      [e.target.name]: e.target.files[0] // Stocker le fichier sélectionné
    });
  };

  const handleSubmit = async () => {
    // Créer un objet FormData pour envoyer les fichiers
    const formData = new FormData();
    formData.append('dueDiligenceReport', files.dueDiligenceReport);
    formData.append('supplyChainAssurances', files.supplyChainAssurances);
    formData.append('taxonomyDisclosure', files.taxonomyDisclosure);
    formData.append('sustainabilityReport', files.sustainabilityReport);

    try {
      // Envoyer les données à votre API backend
      await axios.post('http://localhost:5555/api/supply-chain', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return true; // Indiquer que la soumission a réussi
    } catch (err) {
      console.error('Erreur lors de la soumission du formulaire:', err);
      return false; // Indiquer que la soumission a échoué
    }
  };

  const handleNext = async () => {
    setProgress(100); // Mettre à jour la progression

    const submissionSuccessful = await handleSubmit(); // Soumettre le formulaire et obtenir le résultat

    if (submissionSuccessful) {
      navigate('/designofcircularity'); // Redirection vers la page suivante en cas de succès
    } else {
      // Vous pouvez afficher un message d'erreur ici si la soumission échoue
    }
  };

  const handlePrevious = () => {
    navigate('/generalinformation'); // Redirection vers la page précédente
  };

  return (
    <div>
      <Headline /> {/* Intégration de Headline ici */}
      <div className="mt-8">
        <ProgressBar progress="2" />
      </div>

      <div className="max-w-md mx-auto mt-8 p-6 bg-blue-50 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Supply Chain Due Diligence</h2>
        <form ref={formRef} onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label htmlFor="dueDiligenceReport" className="block text-sm font-medium text-gray-700">Information of the due diligence report:</label>
            <input 
              type="file" 
              id="dueDiligenceReport" 
              name="dueDiligenceReport" 
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-blue-50 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
              accept=".pdf,.doc,.docx" 
              onChange={handleFileChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="supplyChainAssurances" className="block text-sm font-medium text-gray-700">Third party supply chain assurances:</label>
            <input 
              type="file" 
              id="supplyChainAssurances" 
              name="supplyChainAssurances" 
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-blue-50 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
              accept=".pdf,.doc,.docx" 
              onChange={handleFileChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="taxonomyDisclosure" className="block text-sm font-medium text-gray-700">EU Taxonomy disclosure statement:</label>
            <input 
              type="file" 
              id="taxonomyDisclosure" 
              name="taxonomyDisclosure" 
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-blue-50 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
              accept=".pdf,.doc,.docx" 
              onChange={handleFileChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="sustainabilityReport" className="block text-sm font-medium text-gray-700">Sustainability report:</label>
            <input 
              type="file" 
              id="sustainabilityReport" 
              name="sustainabilityReport" 
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-blue-50 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
              accept=".pdf,.doc,.docx" 
              onChange={handleFileChange}
            />
          </div>
       
          
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
