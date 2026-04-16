"use client";

import { useCart } from "../context/CartContext";
import { Star, ShoppingCart } from "lucide-react";

const watches = [
  { id: 1, name: "Nautical Chrono", price: "₹12,499", category: "Watches", rating: 4.9, badge: "New", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "Ocean Master", price: "₹31,000", category: "Watches", rating: 4.8, badge: "Sale", image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=800&auto=format&fit=crop" },
  { id: 5, name: "Royal Sea Silver", price: "₹24,500", category: "Watches", rating: 5.0, badge: "New", image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800&auto=format&fit=crop" },
  { id: 7, name: "Precision Blue", price: "₹18,500", category: "Watches", rating: 4.9, badge: "Hot", image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?q=80&w=800&auto=format&fit=crop" },
];

export default function WatchesPage() {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-bg pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold text-primary mb-4">Premium Watches</h1>
        <p className="text-muted max-w-2xl mb-12 text-lg">
          Explore our finely crafted timepieces. Designed for elegance, built for endurance.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {watches.map((product) => (
            <div 
              key={product.id}
              className="group bg-surface relative flex flex-col border border-accent hover:border-secondary transition-all overflow-hidden shadow-sm hover:shadow-md"
              style={{ borderRadius: 'var(--radius-lg)' }}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-bg">
                {product.badge && (
                  <div 
                    className={`absolute top-3 left-3 z-20 text-[11px] font-bold tracking-wide uppercase px-3 py-1 text-white shadow-sm ${
                      product.badge === 'Sale' ? 'bg-danger' : 'bg-primary'
                    }`}
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
                    onClick={() => addToCart(product)}
                    className="w-full bg-primary text-white font-medium py-3 flex items-center justify-center gap-2 hover:bg-secondary transition-colors" 
                    style={{ borderRadius: 'var(--radius-md)' }}
                  >
                    <ShoppingCart className="w-4 h-4" /> Quick Add
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
                <div className="mt-auto font-bold text-lg text-primary">
                  {product.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
