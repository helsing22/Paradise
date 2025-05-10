import React from 'react';

const CartSummary = ({ cartItems, onCheckout }) => {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 border border-yellow-400 rounded-lg p-4 shadow-xl z-50 w-64">
      <h3 className="text-yellow-400 font-bold text-lg mb-2">Tu Pedido</h3>
      <div className="max-h-64 overflow-y-auto mb-2">
        {cartItems.map((item, index) => (
          <div key={index} className="flex justify-between py-1 border-b border-gray-700">
            <span className="text-white">{item.name} x{item.quantity}</span>
            <span className="text-yellow-400">{item.price * item.quantity} CUP</span>
          </div>
        ))}
      </div>
      <div className="flex justify-between font-bold text-lg mt-2">
        <span className="text-white">Total:</span>
        <span className="text-yellow-400">{total} CUP</span>
      </div>
      <button 
        onClick={onCheckout}
        className="w-full mt-3 bg-yellow-500 text-gray-900 py-2 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
      >
        Finalizar Pedido
      </button>
    </div>
  );
};

export default CartSummary;