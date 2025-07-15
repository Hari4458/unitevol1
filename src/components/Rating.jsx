import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';

const Rating = ({
  value,
  onChange,
  max = 5,
  size = 'md',
  disabled = false,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };

  return (
    <div className={`flex items-center ${className}`}>
      {[...Array(max)].map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => !disabled && onChange(index + 1)}
          disabled={disabled}
          className={`focus:outline-none ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
        >
          {index < value ? (
            <StarIcon
              className={`${sizeClasses[size]} text-yellow-400`}
              aria-hidden="true"
            />
          ) : (
            <StarOutlineIcon
              className={`${sizeClasses[size]} text-gray-300`}
              aria-hidden="true"
            />
          )}
          <span className="sr-only">
            {index + 1} {index + 1 === 1 ? 'star' : 'stars'}
          </span>
        </button>
      ))}
    </div>
  );
};

export default Rating; 