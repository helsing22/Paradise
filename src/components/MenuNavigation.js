import React from 'react';

const MenuNavigation = ({ activeSection, setActiveSection }) => {
  const sections = [
    { id: 'entrantes', label: 'Entrantes' },
    { id: 'pizzas', label: 'Pizzas' },
    { id: 'pastas', label: 'Pastas' },
    { id: 'comidas', label: 'Comidas' },
    { id: 'postres', label: 'Postres' },
    { id: 'bebidas', label: 'Bebidas' }
  ];

  return (
    <nav className="flex flex-wrap justify-center gap-2 px-4 py-6 bg-gray-800 sticky top-0 z-10 shadow-md">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => setActiveSection(section.id)}
          className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
            activeSection === section.id
              ? 'bg-yellow-500 text-gray-900 shadow-lg transform scale-105'
              : 'bg-gray-700 text-yellow-400 hover:bg-gray-600'
          }`}
        >
          {section.label}
        </button>
      ))}
    </nav>
  );
};

export default MenuNavigation;