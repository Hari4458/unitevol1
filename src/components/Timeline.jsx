import React from 'react';

const Timeline = ({
  items,
  className = '',
}) => {
  return (
    <div className={`flow-root ${className}`}>
      <ul role="list" className="-mb-8">
        {items.map((item, index) => (
          <li key={item.id}>
            <div className="relative pb-8">
              {index !== items.length - 1 ? (
                <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white
                    ${item.icon ? 'bg-primary-500' : 'bg-gray-400'}`}
                  >
                    {item.icon ? (
                      <item.icon className="h-5 w-5 text-white" aria-hidden="true" />
                    ) : (
                      <span className="text-white text-sm font-medium">{item.initial}</span>
                    )}
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-gray-500">
                      {item.content}
                    </p>
                    <p className="text-sm text-gray-500">
                      {item.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline; 