import React from 'react';

const Checkbox = ({
  label,
  name,
  checked,
  onChange,
  error,
  helperText,
  required = false,
  disabled = false,
  className = '',
}) => {
  return (
    <div className={className}>
      <div className="flex items-center">
        <input
          type="checkbox"
          name={name}
          id={name}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          required={required}
          className={`h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500
            ${error ? 'border-red-300' : ''}
            ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}`}
        />
        {label && (
          <label htmlFor={name} className="ml-2 block text-sm text-gray-900">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
      </div>
      {(error || helperText) && (
        <p className={`mt-2 text-sm ${error ? 'text-red-600' : 'text-gray-500'}`}>
          {error || helperText}
        </p>
      )}
    </div>
  );
};

export default Checkbox; 