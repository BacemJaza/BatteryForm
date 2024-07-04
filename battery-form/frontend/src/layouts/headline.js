import React from 'react';

function Headline() {
  return (
    <header className="bg-blue-600 text-white shadow-md py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="/image/3dwave.jpg" alt="Logo" className="h-20 w-auto" />
            {/* Logo ou titre de votre application */}
            <h1 className="text-4xl font-bold ml-4">Battery Passport</h1>
          </div>
          <nav className="flex space-x-4">
            {/* Liens de navigation */}
            <a href="#" className="text-lg font-medium hover:text-gray-200">Accueil</a>
            <a href="#" className="text-lg font-medium hover:text-gray-200">À propos</a>
            <a href="#" className="text-lg font-medium hover:text-gray-200">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Headline;
