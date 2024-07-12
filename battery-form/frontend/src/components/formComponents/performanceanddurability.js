import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Headline from '../../layouts/headline';
import ProgressBar from './progressbare';
import Footerform from '../../layouts/footerform';

function FormulairePerformanceDurability() {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate(); // Ajout de useNavigate pour la navigation

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

  
  const handlePrevious = () => {
    console.log("Previous button clicked");
    // Logique pour le bouton Previous
    // Par exemple, naviguer vers la page précédente
    navigate('/designofcircularity'); // Remplacez '/' par votre chemin de route réel
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
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">Expected lifetime: Number of charge-discharge cycles</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">Cycle-life reference test</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">C-rate of relevant cycle-life test</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">Capacity threshold for exhaustion</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">SOCE threshold for exhaustion</label>
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
            </div>
          </div>
        </div>

        {/* Sous-formulaire 4: Internal resistance */}
        <div className="mb-8 bg-white rounded-lg p-4 shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Internal resistance</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">Initial internal resistance on battery cell level</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">Initial internal resistance on battery pack level</label>
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
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">Initial self-discharging rate</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">Initial round trip energy efficiency</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700 w-48">Round trip energy efficiency at 50% of cycle life</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sous-formulaire 6: Negative events */}
        <div className="mb-8 bg-white rounded-lg p-4 shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Negative events</h3>
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
       {/* Intégration du FooterForm à la fin de la page */}
       <div className="mt-8"> {/* Ajout d'une marge supérieure pour l'espace */}
        <Footerform />
      </div>
    </div>
  );
}

export default FormulairePerformanceDurability;
