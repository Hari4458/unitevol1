import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';

const Steps = ({
  steps,
  currentStep,
  className = '',
}) => {
  return (
    <nav aria-label="Progress" className={className}>
      <ol role="list" className="space-y-4 md:flex md:space-y-0 md:space-x-8">
        {steps.map((step, index) => (
          <li key={step.name} className="md:flex-1">
            <div
              className={`group flex flex-col border-l-4 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4
                ${index <= currentStep
                  ? 'border-primary-600'
                  : 'border-gray-200'
                }`}
            >
              <span className="text-sm font-medium">
                {index < currentStep ? (
                  <span className="flex items-center">
                    <CheckIcon className="mr-2 h-5 w-5 text-primary-600" aria-hidden="true" />
                    {step.name}
                  </span>
                ) : index === currentStep ? (
                  <span className="flex items-center">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary-600">
                      <span className="h-2.5 w-2.5 rounded-full bg-primary-600" aria-hidden="true" />
                    </span>
                    <span className="ml-2">{step.name}</span>
                  </span>
                ) : (
                  <span className="flex items-center">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-gray-300">
                      <span className="h-2.5 w-2.5 rounded-full bg-transparent" aria-hidden="true" />
                    </span>
                    <span className="ml-2 text-gray-500">{step.name}</span>
                  </span>
                )}
              </span>
              <span className="text-sm">{step.description}</span>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Steps; 