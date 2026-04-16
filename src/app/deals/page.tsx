"use client";

import { useCart } from "../context/CartContext";
import { Star, ShoppingCart } from "lucide-react";

// Generate Deals specifically
const deals = [
  { id: 9, name: "Midnight Series", price: "₹21,000", originalPrice: "₹38,000", category: "Watches", rating: 4.8, badge: "50% OFF", image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=800&auto=format&fit=crop" },
  { id: 10, name: "Neon Sport", price: "₹1,200", originalPrice: "₹2,800", category: "Sunglasses", rating: 4.5, badge: "Sale", image: "https://images.unsplash.com/photo-1589883661502-8610ebef3b17?q=80&w=800&auto=format&fit=crop" },
  { id: 11, name: "Onyx Collection", price: "₹14,500", originalPrice: "₹22,000", category: "Watches", rating: 4.7, badge: "Liquidate", image: "https://images.unsplash.com/photo-1587836374828-cb4387df3eb7?q=80&w=800&auto=format&fit=crop" },
  { id: 12, name: "Aviator Elite", price: "₹2,500", originalPrice: "₹4,100", category: "Sunglasses", rating: 4.9, badge: "30% OFF", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop" },
];

export default function DealsPage() {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-bg pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold text-danger mb-4 tracking-tight">Hot Deals</h1>
        <p className="text-muted max-w-2xl mb-12 text-lg">
          Uncompromised quality at unbeatable prices. Shop our heavily discounted clearance line.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.map((product) => (
            <div 
              key={product.id}
              className="group bg-surface relative flex flex-col border-2 border-danger/20 hover:border-danger transition-all overflow-hidden shadow-sm hover:shadow-lg"
              style={{ borderRadius: 'var(--radius-lg)' }}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-bg">
                {product.badge && (
                  <div 
                    className="absolute top-3 left-3 z-20 text-[11px] font-bold tracking-wide uppercase px-3 py-1 text-white shadow-sm bg-danger"
                    style={{ borderRadius: 'var(--radius-sm)' }}
                  >
                    {product.badge}
                  </div>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Quick Add Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-20">
                  <button 
                    onClick={() => addToCart({ ...product, price: product.price })}
                    className="w-full bg-danger text-white font-medium py-3 flex items-center justify-center gap-2 hover:bg-red-800 transition-colors" 
                    style={{ borderRadius: 'var(--radius-md)' }}
                  >
                    <ShoppingCart className="w-4 h-4" /> Claim Deal
                  </button>
                </div>
              </div>

              {/* Details */}
              <div className="p-5 flex-grow flex flex-col">
                <span className="text-[12px] uppercase tracking-wider text-muted font-bold mb-1">{product.category}</span>
                <h3 className="font-semibold text-text text-lg mb-2 line-clamp-1">{product.name}</h3>
                <div className="flex items-center gap-1 mb-4 text-xs font-medium text-text">
                  <Star className="w-3.5 h-3.5 fill-current text-yellow-500" />
                  <span>{product.rating}</span>
                </div>
                <div className="mt-auto font-bold text-lg text-danger flex items-center gap-2">
                  {product.price}
                  <span className="text-sm line-through text-muted font-normal">{product.originalPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
