import React from 'react';

const ProgressBar = ({ currentStep }) => {
  const steps = [
    { text: 'General Information', className: 'step step-info', color: 'bg-blue-500' },
    { text: 'Supply Chain Due Diligence', className: 'step step-info', color: 'bg-green-500' },
    { text: 'Design of Circularity', className: 'step step-info', color: 'bg-yellow-500' },
    { text: 'Battery Materials and Composition', className: 'step step-info', color: 'bg-purple-500' },
    { text: 'Performance and Durability', className: 'step step-info', color: 'bg-red-500' },
  ];

  // Calculer la largeur maximale pour aligner les titres
  const maxTextLength = steps.reduce((max, step) => Math.max(max, step.text.length), 0);

  return (
    <ul className="steps flex">
      {steps.map((step, index) => (
        <li key={index} className={`${step.className} ${index <= currentStep ? 'font-bold' : 'font-normal'}`}>
          <div className="flex items-center">
            <span style={{ minWidth: `${maxTextLength}ch` }}>{step.text}</span>
          </div>
          {index !== steps.length - 1 && (
            <div className={`mx-4 h-6 ${index < currentStep ? step.color : 'bg-gray-300'} flex-1 self-center`}></div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ProgressBar;
