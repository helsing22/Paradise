import React from 'react';

const MenuHeader = () => {
  return (
    <header className="w-full text-center px-6 py-8 bg-gradient-to-r from-gray-900 to-gray-800 text-yellow-400 border-b-4 border-yellow-400 shadow-lg">
      <div className="logo mx-auto w-24 h-24 rounded-full bg-yellow-400 shadow-lg overflow-hidden border-2 border-yellow-300">
        <img 
          src="https://i.postimg.cc/jSWgp9rV/IMG-20250320-WA0044-2.jpg" 
          alt="Logo del Restaurante"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-4xl font-bold mt-4 mb-2 text-white">Menú del Paraíso</h1>
      <p className="text-lg text-yellow-300">Descubre los sabores del paraíso en cada bocado</p>
    </header>
  );
};

export default MenuHeader;