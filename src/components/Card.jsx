import React from 'react';

const variants = {
  default: 'bg-white border border-gray-200',
  primary: 'bg-primary-50 border border-primary-200',
  success: 'bg-green-50 border border-green-200',
  warning: 'bg-yellow-50 border border-yellow-200',
  danger: 'bg-red-50 border border-red-200',
};

const Card = ({
  children,
  variant = 'default',
  className = '',
  hover = false,
  onClick,
  header,
  footer,
}) => {
  const baseStyles = 'rounded-lg shadow-sm overflow-hidden';
  const hoverStyles = hover ? 'hover:shadow-md transition-shadow duration-200' : '';
  const clickableStyles = onClick ? 'cursor-pointer' : '';
  const cardStyles = `${baseStyles} ${variants[variant]} ${hoverStyles} ${clickableStyles} ${className}`;

  return (
    <div className={cardStyles} onClick={onClick}>
      {header && (
        <div className="px-6 py-4 border-b border-gray-200">
          {header}
        </div>
      )}
      <div className="px-6 py-4">
        {children}
      </div>
      {footer && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card; 