import React from 'react';

const List = ({
  items,
  renderItem,
  emptyMessage = 'No items found',
  className = '',
}) => {
  if (!items || items.length === 0) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <p className="text-gray-500">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <ul className={`divide-y divide-gray-200 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="py-4">
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
};

export default List; 