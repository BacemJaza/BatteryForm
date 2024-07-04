import React from 'react';
import Headline from '../layouts/headline';

function FormulaireSupplychain() {
    return (
        <div><Headline /> {/* Intégration de Headline ici */}
        <div className="max-w-md mx-auto mt-8 p-6 bg-blue-50 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Supply Chain Due Diligence</h2>
            <form>
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
                <div className="flex justify-center">
        <button className="btn btn-primary px-8 py-3 mr-2">Submit</button>
        <button className="btn btn-secondary px-8 py-3">Cancel</button>
      </div>
            </form>
        </div>
        </div>
    );
}

export default FormulaireSupplychain;
