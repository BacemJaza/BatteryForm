import React from 'react';

const ProgressBar = ({ progress }) => {
  const steps = [
    { text: 'General Information'},
    { text: 'Supply Chain Due Diligence'},
    { text: 'Design of Circularity' },
    { text: 'Battery Materials and Composition'},
    { text: 'Performance and Durability'},
  ];

  // Calculer la largeur maximale pour aligner les titres
  const maxTextLength = steps.reduce((max, step) => Math.max(max, step.text.length), 0);

  return (
    <ul className="steps flex justify-center">
      {steps.map((step, index) => (
        <li key={index} className={`step step-info ${index+1<progress? 'step-info':'step-warning'}`}>
          <div className="flex items-center">
            <span style={{ minWidth: `${maxTextLength}ch`}} className='font-bold'>{step.text}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProgressBar;
