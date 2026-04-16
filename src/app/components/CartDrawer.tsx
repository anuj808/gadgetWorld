"use client";

import { useCart } from "../context/CartContext";
import { X, Trash2, ShoppingBag } from "lucide-react";
import { useEffect } from "react";

export default function CartDrawer() {
  const { cart, removeFromCart, isCartOpen, setIsCartOpen } = useCart();

  // Prevent background scrolling when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  return (
    <div 
      className={`fixed inset-0 z-[99999] transition-all duration-300 ${
        isCartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Slide-in cart container */}
      <div 
        className={`absolute top-0 right-0 h-full w-full max-w-md bg-surface shadow-2xl flex flex-col border-l border-accent transition-transform duration-300 ease-in-out transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-accent bg-bg">
          <h2 className="text-xl font-bold flex items-center gap-2 text-text">
            <ShoppingBag className="w-5 h-5 text-primary" /> Your Cart
          </h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-accent rounded-full transition-colors text-muted hover:text-text cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-muted space-y-4">
              <ShoppingBag className="w-16 h-16 opacity-20 text-text" />
              <p className="text-lg text-text font-medium">Your cart is empty.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-primary font-bold hover:underline cursor-pointer"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.product.id} className="flex gap-4 border border-accent rounded-xl p-3 bg-bg shadow-sm">
                <img 
                  src={item.product.image} 
                  alt={item.product.name} 
                  className="w-20 h-20 object-cover rounded-lg bg-surface border border-accent"
                />
                <div className="flex-1 flex flex-col">
                  <h4 className="font-semibold text-text line-clamp-1">{item.product.name}</h4>
                  <span className="text-sm text-muted mb-1">{item.product.category}</span>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="font-bold text-primary">{item.product.price} <span className="text-sm font-normal text-muted">x{item.quantity}</span></span>
                    <button 
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-danger hover:bg-danger/10 p-2 rounded-md transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-accent bg-bg shadow-lg">
            <button className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-secondary transition-colors text-lg shadow-md cursor-pointer">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
