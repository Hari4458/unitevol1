import React from 'react';

const variants = {
  primary: 'bg-primary-100 text-primary-800',
  secondary: 'bg-gray-100 text-gray-800',
  success: 'bg-green-100 text-green-800',
  warning: 'bg-yellow-100 text-yellow-800',
  danger: 'bg-red-100 text-red-800',
  info: 'bg-blue-100 text-blue-800',
};

const sizes = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-sm',
  lg: 'px-3 py-1.5 text-base',
};

const Badge = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  dot = false,
  rounded = true,
}) => {
  const baseStyles = 'inline-flex items-center font-medium';
  const roundedStyles = rounded ? 'rounded-full' : 'rounded';
  const badgeStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${roundedStyles} ${className}`;

  return (
    <span className={badgeStyles}>
      {dot && (
        <span className={`mr-1.5 h-2 w-2 rounded-full ${variants[variant].split(' ')[0]}`} />
      )}
      {children}
    </span>
  );
};

export default Badge; 