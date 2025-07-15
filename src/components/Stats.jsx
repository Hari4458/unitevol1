import React from 'react';

const Stats = ({
  stats,
  className = '',
}) => {
  return (
    <dl className={`grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
        >
          <dt>
            <div className="absolute rounded-md bg-primary-500 p-3">
              {stat.icon && (
                <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
              )}
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-500">{stat.name}</p>
          </dt>
          <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
            <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            {stat.change && (
              <p
                className={`ml-2 flex items-baseline text-sm font-semibold
                  ${stat.change.type === 'increase' ? 'text-green-600' : 'text-red-600'}`}
              >
                {stat.change.type === 'increase' ? (
                  <svg className="h-5 w-5 flex-shrink-0 self-center text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5 flex-shrink-0 self-center text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clipRule="evenodd" />
                  </svg>
                )}
                <span className="sr-only">
                  {stat.change.type === 'increase' ? 'Increased' : 'Decreased'} by
                </span>
                {stat.change.value}
              </p>
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
};

export default Stats; 