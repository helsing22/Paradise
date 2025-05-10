import React from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({ items, title, isActive, onAddToCart }) => {
  if (!isActive) return null;

  return (
    <section className="px-4 py-6 animate-fadeIn">
      <h2 className="text-2xl font-bold text-yellow-400 mb-6 after:content-[''] after:block after:w-20 after:h-1 after:bg-yellow-500 after:mt-1">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <MenuItem 
            key={`${item.name}-${index}`} 
            item={item}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;

// DONE