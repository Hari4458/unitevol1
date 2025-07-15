import React from 'react';
import { ClockIcon } from '@heroicons/react/24/outline';

const TimePicker = ({
  label,
  value,
  onChange,
  error,
  helperText,
  disabled = false,
  className = '',
}) => {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        <input
          type="time"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className={`block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6
            ${error ? 'ring-red-300' : ''}
            ${disabled ? 'bg-gray-50 cursor-not-allowed' : ''}`}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <ClockIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
      </div>
      {(error || helperText) && (
        <p className={`mt-2 text-sm ${error ? 'text-red-600' : 'text-gray-500'}`}>
          {error || helperText}
        </p>
      )}
    </div>
  );
};

export default TimePicker; 