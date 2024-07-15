import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Headline from '../../layouts/form/headline';
import Footerform from '../../layouts/form/footerform';
import ProgressBar from './progressbare';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FormulaireBatteryMaterials() {
  const [batteryPassportIdentification, setBatteryPassportIdentification] = useState('');
  const [batterieComponent, setBatterieComponent] = useState('');
  const [batteryRawMaterial, setBatteryRawMaterial] = useState('');
  const [relatedIdentifiersOfTheCathodeAnodeElectrolyteMaterials, setRelatedIdentifiersOfTheCathodeAnodeElectrolyteMaterials] = useState('');
  const [compositionOfTheCathodeAnodeElectrolyteMaterials, setCompositionOfTheCathodeAnodeElectrolyteMaterials] = useState('');
  const [nameOfHazardousSubstances, setNameOfHazardousSubstances] = useState('');
  const [hazardClasses, setHazardClasses] = useState('');
  const [relatedIdentifiersOfHazardousSubstances, setRelatedIdentifiersOfHazardousSubstances] = useState('');
  const [locationOfHazardousSubstances, setLocationOfHazardousSubstances] = useState('');
  const [concentrationRangeOfHazardousSubstances, setConcentrationRangeOfHazardousSubstances] = useState('');
  const [impactOfSubstancesOnTheEnvironmentHumanHealthSafety, setImpactOfSubstancesOnTheEnvironmentHumanHealthSafety] = useState('');
  const [cathodeDescription, setCathodeDescription] = useState("");
  const [anodeDescription, setAnodeDescription] = useState("")
  const [electrolyteDescription, setElectrolyteDescription] = useState("")
  const [showDescription, setShowDescription] = useState("cathode")
  const [counter,setCounter] = useState(0)
  const [hazSub,setHazSub] = useState([])

  const navigate = useNavigate();

  const handleBatteryPassportIdentificationChange = (event) => {
    setBatteryPassportIdentification(event.target.value);
  };

  const handleBatterieComponentChange = (event) => {
    setBatterieComponent(event.target.value);
  };

  const handleBatteryRawMaterialChange = (event) => {
    setBatteryRawMaterial(event.target.value);
  };

  const handleRelatedIdentifiersOfTheCathodeAnodeElectrolyteMaterialsChange = (event) => {
    setRelatedIdentifiersOfTheCathodeAnodeElectrolyteMaterials(event.target.value);
  };

  const handleCompositionOfTheCathodeAnodeElectrolyteMaterialsChange = (event) => {
    setCompositionOfTheCathodeAnodeElectrolyteMaterials(event.target.value);
  };

  const handleNameOfHazardousSubstancesChange = (event) => {
    setNameOfHazardousSubstances(event.target.value);
  };

  const handleHazardClassesChange = (event) => {
    setHazardClasses(event.target.value);
  };

  const handleRelatedIdentifiersOfHazardousSubstancesChange = (event) => {
    setRelatedIdentifiersOfHazardousSubstances(event.target.value);
  };

  const handleLocationOfHazardousSubstancesChange = (event) => {
    setLocationOfHazardousSubstances(event.target.value);
  };

  const handleConcentrationRangeOfHazardousSubstancesChange = (event) => {
    setConcentrationRangeOfHazardousSubstances(event.target.value);
  };

  const handleImpactOfSubstancesOnTheEnvironmentHumanHealthSafetyChange = (event) => {
    setImpactOfSubstancesOnTheEnvironmentHumanHealthSafety(event.target.value);
  };
  const handleShowDescription = (event)=>{
    // console.log(event.target.id)
    setShowDescription(event.target.id)
  }
  const handleCathodeDescription = (event)=>{
    setCathodeDescription(event.target.value)
  }
  const handleAnodeDescription = (event)=>{
    setAnodeDescription(event.target.value)
  }
  const handleElectrolyteDescription = (event)=>{
    setElectrolyteDescription(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted:', {
      batteryPassportIdentification,
      batterieComponent,
      batteryRawMaterial,
      relatedIdentifiersOfTheCathodeAnodeElectrolyteMaterials,
      compositionOfTheCathodeAnodeElectrolyteMaterials,
      nameOfHazardousSubstances,
      hazardClasses,
      relatedIdentifiersOfHazardousSubstances,
      locationOfHazardousSubstances,
      concentrationRangeOfHazardousSubstances,
      impactOfSubstancesOnTheEnvironmentHumanHealthSafety,
    });
    navigate('/supplychain');
  };

  const handleNext = () => {
    console.log("Next button clicked");
    navigate('/performanceanddurability');
  };

  const handlePrevious = () => {
    // Logique pour le bouton Previous
    console.log("Previous button clicked");
    // Par exemple, naviguer vers une autre page
    navigate('/designofcircularity'); // Remplacez '/generalInformation' par votre chemin de route réel
  };
  const addInput = () =>{
    setCounter(counter+1)
    hazSub.push(counter)
    setHazSub(hazSub)
    console.log(hazSub)
  }

  const [tooltip, setTooltip] = useState({ 
    BatteryrawMaterial: false, 
    Relatedidentifiers:false,
    Nameofhazardoussubstances:false,
    Hazardclasses:false,
    Relatedidentifiers:false,
    Locationofhazardous:false,
    Concentrationrange:false,
    Impactofsubstances:false
  

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
        <ProgressBar progress="4"/>
      </div>
      <div className="max-w-3xl mx-auto mt-8 p-6 bg-blue-50 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center">Battery materials and composition</h2>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg p-4 shadow-sm">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center space-x-4">
              <label htmlFor="batteryPassportIdentification" className="text-sm text-gray-700 w-64">Battery chemistry</label>
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
              <label htmlFor="batterieComponent" className="text-sm text-gray-700 w-64">Batterie component</label>
              <input
                type="text"
                id="batterieComponent"
                value={batterieComponent}
                onChange={handleBatterieComponentChange}
                className="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>
            <div className="flex items-center space-x-4 relative">
             <label
                 htmlFor="batteryPassportIdentification"
                 className="text-sm text-gray-700 w-64 cursor-pointer"
                 onMouseEnter={() => handleMouseEnter('BatteryrawMaterial')}
                 onMouseLeave={() => handleMouseLeave('BatteryrawMaterial')}
  >
                Battery raw Material
              {tooltip.BatteryrawMaterial && (
              <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
               Raw materials being economically important and vulnerable to supply disruption. List of the Commission is subject to updating, at least every three years to reflect production, market and technological developments. The latest list will be made available via the Raw Materials Information System (RMIS) of the EU Science Hub. In the battery passport, all critical raw materials above a concentration of 0.1 % weight by weight within each (sub)-component of the battery should be specified in an aggregated way for the entire battery.
              </span>
               )}
                </label>
              <input
                type="text"
                id="batteryRawMaterial"
                value={batteryRawMaterial}
                onChange={handleBatteryRawMaterialChange}
                className="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>
            <div className="flex items-center space-x-4 relative">
             <label
                 htmlFor="batteryPassportIdentification"
                 className="text-sm text-gray-700 w-64 cursor-pointer"
                 onMouseEnter={() => handleMouseEnter('Relatedidentifiers')}
                 onMouseLeave={() => handleMouseLeave('Relatedidentifiers')}
  >Related identifiers of the cathode, anode, electrolyte materials
              {tooltip.Relatedidentifiers && (
              <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
               "Component materials used" (No. 17.a-c): CAS numbers of the materials (as a composition of substances) in cathode, anode, electrolyte.
              </span>
               )}
                </label>
              <input
                type="text"
                id="relatedIdentifiersOfTheCathodeAnodeElectrolyteMaterials"
                value={relatedIdentifiersOfTheCathodeAnodeElectrolyteMaterials}
                onChange={handleRelatedIdentifiersOfTheCathodeAnodeElectrolyteMaterialsChange}
                className="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>
            <div className="flex items-center space-x-4">
              <label htmlFor="compositionOfTheCathodeAnodeElectrolyteMaterials" className="text-sm text-gray-700 w-64">Composition of the cathode, anode, electrolyte materials</label>
              <div className='flex gap-5 justify-center w-[45%]'>
                <button className='btn' type="button" id='cathode' onClick={handleShowDescription}>Cathode</button>
                <button className='btn' type="button" id='anode' onClick={handleShowDescription}>Anode</button>
                <button className='btn' type="button" id='electrolyte' onClick={handleShowDescription}>Electrolyte</button>
              </div>
            </div>
            {showDescription=="cathode"&&
             <div className="flex items-center space-x-4">
             <label className="text-sm text-gray-700 w-64">Description of {showDescription}</label>
             <textarea
               type="text"
               id={`${showDescription}Description`}
               value={cathodeDescription}
               onChange={handleCathodeDescription}
               className="input input-bordered input-primary w-full max-w-xs h-[200px] p-2 resize-none"
               required
             />
           </div>
            }
            {showDescription=="anode"&&
             <div className="flex items-center space-x-4">
             <label className="text-sm text-gray-700 w-64">Description of {showDescription}</label>
             <textarea
               type="text"
               id={`${showDescription}Description`}
               value={anodeDescription}
               onChange={handleAnodeDescription}
               className="input input-bordered input-primary w-full max-w-xs h-[200px] p-2 resize-none"
               required
             />
           </div>
            }
            {showDescription=="electrolyte"&&
             <div className="flex items-center space-x-4">
             <label className="text-sm text-gray-700 w-64">Description of {showDescription}</label>
             <textarea
               type="text"
               id={`${showDescription}Description`}
               value={electrolyteDescription}
               onChange={handleElectrolyteDescription}
               className="input input-bordered input-primary w-full max-w-xs h-[200px] p-2 resize-none"
               required
             />
           </div>
            }
           
           <div className="flex items-center space-x-4 relative">
             <label
                 htmlFor="batteryPassportIdentification"
                 className="text-sm text-gray-700 w-64 cursor-pointer"
                 onMouseEnter={() => handleMouseEnter('Nameofhazardoussubstances')}
                 onMouseLeave={() => handleMouseLeave('Nameofhazardoussubstances')}
  >
                Name of hazardous substances
              {tooltip.Nameofhazardoussubstances && (
              <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
              "Hazardous substances" (No 20.a-e): Name (agreed substance nomenclature, e.g. IUPAC or chemical name) all hazardous substance (as “any substance that poses a threat to human health and the environment”). Suggested above 0.1 % weight by weight 
              </span>
               )}
                </label>
                {hazSub.map((item)=>
              <input
                type="text"
                id={"nameOfHazardousSubstances"+item}
                value={nameOfHazardousSubstances}
                onChange={handleNameOfHazardousSubstancesChange}
                className="input input-bordered input-primary mb-2"
                required
              />
                )}
                
                <button type='button' className="btn btn-primary w-fit m-2 flex mx-auto" onClick={addInput}><FontAwesomeIcon icon={faPlus} /></button>
                
              </div>
              
            </div>
            <div className="flex items-center space-x-4 relative">
             <label
                 htmlFor="batteryPassportIdentification"
                 className="text-sm text-gray-700 w-64 cursor-pointer"
                 onMouseEnter={() => handleMouseEnter('Hazardclasses')}
                 onMouseLeave={() => handleMouseLeave('Hazardclasses')}
  >
                Hazard classes 
              {tooltip.Hazardclasses && (
              <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
              "Hazardous substances" (No 20.a-e): Specify hazard classes and/ or categories of hazardous substances (as “any substance that poses a threat to human health and the environment”) as defined by the CLP Regulation.
              </span>
               )}
                </label>
              <input
                type="text"
                id="hazardClasses"
                value={hazardClasses}
                onChange={handleHazardClassesChange}
                className="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>
            <div className="flex items-center space-x-4 relative">
             <label
                 htmlFor="batteryPassportIdentification"
                 className="text-sm text-gray-700 w-64 cursor-pointer"
                 onMouseEnter={() => handleMouseEnter('Relatedidentifiers')}
                 onMouseLeave={() => handleMouseLeave('Relatedidentifiers')}
  >
                Related identifiers of hazardous substances 
              {tooltip.Relatedidentifiers && (
              <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
              Hazardous substances" (No 20.a-e): CAS number and CLP Regulation index number of all hazardous substance (as “any substance that poses a threat to human health and the environment”).
              </span>
               )}
                </label>
              <input
                type="text"
                id="relatedIdentifiersOfHazardousSubstances"
                value={relatedIdentifiersOfHazardousSubstances}
                onChange={handleRelatedIdentifiersOfHazardousSubstancesChange}
                className="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>
            <div className="flex items-center space-x-4 relative">
             <label
                 htmlFor="batteryPassportIdentification"
                 className="text-sm text-gray-700 w-64 cursor-pointer"
                 onMouseEnter={() => handleMouseEnter('Locationofhazardous')}
                 onMouseLeave={() => handleMouseLeave('Locationofhazardous')}
  >
                Location of hazardous substances
              {tooltip.Locationofhazardous && (
              <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
             Hazardous substances" (No 20.a-e): Location on a (sub-)component-level of all hazardous substances (as “any substance that poses a threat to human health and the environment”). Suggested via a unique identifier or nomenclature.
              </span>
               )}
                </label>
              <input
                type="text"
                id="locationOfHazardousSubstances"
                value={locationOfHazardousSubstances}
                onChange={handleLocationOfHazardousSubstancesChange}
                className="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>
            <div className="flex items-center space-x-4 relative">
             <label
                 htmlFor="batteryPassportIdentification"
                 className="text-sm text-gray-700 w-64 cursor-pointer"
                 onMouseEnter={() => handleMouseEnter('Concentrationrange')}
                 onMouseLeave={() => handleMouseLeave('Concentrationrange')}
  >
                Concentration range of hazardous substances
              {tooltip.Concentrationrange && (
              <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
             Hazardous substances" (No 20.a-e): Concentration range of all hazardous substances (as “any substance that poses a threat to human health and the environment”) in %, per (sub-)component of the battery, based on SCIP concentration ranges in weight by weight.
              </span>
               )}
                </label>
              <input
                type="text"
                id="concentrationRangeOfHazardousSubstances"
                value={concentrationRangeOfHazardousSubstances}
                onChange={handleConcentrationRangeOfHazardousSubstancesChange}
                className="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>
            <div className="flex items-center space-x-4 relative">
             <label
                 htmlFor="batteryPassportIdentification"
                 className="text-sm text-gray-700 w-64 cursor-pointer"
                 onMouseEnter={() => handleMouseEnter('Impactofsubstances')}
                 onMouseLeave={() => handleMouseLeave('Impactofsubstances')}
  >
               Impact of substances on the environment, human health, safety
              {tooltip.Impactofsubstances && (
              <span className="absolute top-0 -left-56 w-48 mt-2 p-2 bg-gray-200 text-black text-sm rounded-md shadow-lg">
             Impact statements based on, e.g., REACH or GHS for all hazard classes applicable to substances in the battery
              </span>
               )}
                </label>
              <div className='flex'>
                {hazSub.length==0?<div>No substances added.</div>:
                    <div className='flex flex-col'>
                      {hazSub.map(item=>
                        <div className='flex pb-2'>
                        <h2 className='flex items-center pr-2 mb-2'>#{item+1}:</h2>
                        <input
                        type="text"
                        id="impactOfSubstancesOnTheEnvironmentHumanHealthSafety"
                        value={impactOfSubstancesOnTheEnvironmentHumanHealthSafety}
                        onChange={handleImpactOfSubstancesOnTheEnvironmentHumanHealthSafetyChange}
                        className="input input-bordered input-primary w-full max-w-xs"
                        required
                        />
                      </div>
                      )}
                    </div>
                  }
              </div>
            </div>

          {/* <div className="flex justify-center mt-6">
            <button type="submit" className="btn btn-primary px-8 py-3 mr-2">Submit</button>
            <button type="button" className="btn btn-secondary px-8 py-3">Cancel</button>
          </div> */}
        </form>
      </div>
      {/* Boutons Next et Previous à la fin de la page */}
      <div className="flex justify-center mt-4 space-x-4">
        <button onClick={handlePrevious} className="btn btn-gray px-2 py-2 mr-1">Previous</button>
        <button onClick={handleNext} className="btn btn-gray px-2 py-2 ml-1">Next</button>
      </div>
      <div className="mt-8">
        <Footerform />
      </div>
    </div>
  );
}

export default FormulaireBatteryMaterials;