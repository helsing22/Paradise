import React from 'react';

const MenuItem = ({ item, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart({
      id: `${item.name}-${Date.now()}`,
      name: item.name,
      price: parseInt(item.price),
      quantity: 1
    });
  };

  return (
    <div className="relative bg-gray-800 border border-yellow-400 rounded-xl p-4 mb-4 w-full transition-all duration-300 hover:scale-102 hover:shadow-2xl hover:border-yellow-300 overflow-hidden group">
      <div className="overflow-hidden rounded-lg w-full h-48">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="pt-4">
        <h3 className="text-xl font-bold text-white">{item.name}</h3>
        <p className="text-yellow-400 font-medium my-2">Precio: {item.price} CUP</p>
        <p className="text-gray-300">{item.description}</p>
      </div>
      <button 
        onClick={handleAddToCart}
        className="absolute top-3 right-3 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-xs font-bold hover:bg-yellow-400 transition-colors"
      >
        +Agregar
      </button>
    </div>
  );
};

export default MenuItem;