import React from 'react';

const Progress = ({
  value,
  max = 100,
  size = 'md',
  color = 'primary',
  showValue = true,
  className = '',
}) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  const sizeClasses = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
  };

  const colorClasses = {
    primary: 'bg-primary-600',
    success: 'bg-green-600',
    warning: 'bg-yellow-600',
    danger: 'bg-red-600',
    info: 'bg-blue-600',
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="relative">
        <div className="overflow-hidden h-full text-xs flex rounded bg-gray-200">
          <div
            style={{ width: `${percentage}%` }}
            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center transition-all duration-500 ${colorClasses[color]}`}
          />
        </div>
        {showValue && (
          <div className="absolute top-0 right-0 h-full flex items-center pr-2">
            <span className="text-xs font-semibold text-gray-700">{Math.round(percentage)}%</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Progress; 