import React, { useState } from 'react';
import { menuItems } from './mock/menuItems';
import MenuHeader from './components/MenuHeader';
import MenuNavigation from './components/MenuNavigation';
import MenuSection from './components/MenuSection';
import CartSummary from './components/CartSummary';

const App = () => {
  const [activeSection, setActiveSection] = useState('entrantes');
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.name === item.name);
      if (existingItem) {
        return prevItems.map(i => 
          i.name === item.name ? {...i, quantity: i.quantity + 1} : i
        );
      }
      return [...prevItems, item];
    });
  };

  const handleCheckout = () => {
    alert(`Pedido confirmado! Total: ${cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)} CUP`);
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-gray-900 pb-20">
      <MenuHeader />
      <MenuNavigation 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      
      {Object.entries(menuItems).map(([sectionId, items]) => (
        <MenuSection
          key={sectionId}
          isActive={sectionId === activeSection}
          title={sectionId === 'pizzas' ? 'Pizzas de Queso Gouda' : 
                sectionId === 'pastas' ? 'Espaguetis y Agregados' : 
                sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
          items={items}
          onAddToCart={handleAddToCart}
        />
      ))}
      
      {cartItems.length > 0 && (
        <CartSummary 
          cartItems={cartItems} 
          onCheckout={handleCheckout} 
        />
      )}

      <footer className="bg-gray-800 text-gray-300 py-8 px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Restaurante. Todos los derechos reservados.</p>
        <p className="mt-2">Para crear tu propia web contacta a: <a href="mailto:helsingrpp2@gmail.com" className="text-yellow-400 hover:text-yellow-300">helsingrpp2@gmail.com</a></p>
        <p className="mt-1">Página Desarrollada por Helsing Raidel Pascual Pérez</p>
        <p className="mt-1">Teléfono: +53 55015233</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-white">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-white">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-white">Twitter</a>
        </div>
      </footer>
    </div>
  );
};

export default App;