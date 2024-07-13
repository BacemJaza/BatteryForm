import React from 'react';

const Footerform = () => {
  return (
    <footer className="bg-blue-600 text-white shadow-md py-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2024 Mon Entreprise. Tous droits réservés.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-gray-300 hover:text-white transition duration-300">
            À propos
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition duration-300">
            Conditions d'utilisation
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition duration-300">
            Politique de confidentialité
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footerform;
