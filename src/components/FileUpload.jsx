import React, { useRef } from 'react';
import { CloudArrowUpIcon } from '@heroicons/react/24/outline';

const FileUpload = ({
  label,
  accept,
  multiple = false,
  onChange,
  error,
  helperText,
  disabled = false,
  className = '',
}) => {
  const fileInputRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled) {
      const files = e.dataTransfer.files;
      onChange(multiple ? files : files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleFileSelect = (e) => {
    if (!disabled) {
      const files = e.target.files;
      onChange(multiple ? files : files[0]);
    }
  };

  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div
        className={`relative flex justify-center rounded-lg border border-dashed px-6 py-10
          ${error ? 'border-red-300' : 'border-gray-300'}
          ${disabled ? 'bg-gray-50 cursor-not-allowed' : 'hover:border-primary-500'}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div className="text-center">
          <CloudArrowUpIcon className="mx-auto h-12 w-12 text-gray-400" aria-hidden="true" />
          <div className="mt-4 flex text-sm leading-6 text-gray-600">
            <label
              htmlFor="file-upload"
              className={`relative cursor-pointer rounded-md font-semibold text-primary-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-600 focus-within:ring-offset-2 hover:text-primary-500
                ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
            >
              <span>Upload a file</span>
              <input
                ref={fileInputRef}
                id="file-upload"
                name="file-upload"
                type="file"
                accept={accept}
                multiple={multiple}
                className="sr-only"
                onChange={handleFileSelect}
                disabled={disabled}
              />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs leading-5 text-gray-600">
            {accept ? `Accepted formats: ${accept}` : 'Any file type'}
          </p>
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

export default FileUpload; 