"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Star, X } from "lucide-react";

const allProducts = [
  // Watches
  { id: 1, name: "Chronograph Vanguard", price: "$1,299", category: "Watches", rating: 4.9, image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800&auto=format&fit=crop" },
  { id: 4, name: "Royal Oake Silver", price: "$2,450", category: "Watches", rating: 5.0, image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=800&auto=format&fit=crop" },
  { id: 7, name: "Midnight Skeleton", price: "$3,100", category: "Watches", rating: 4.8, image: "https://images.unsplash.com/photo-1587836374828-cb4387df3eb7?q=80&w=800&auto=format&fit=crop" },
  { id: 8, name: "Rose Gold Precision", price: "$1,850", category: "Watches", rating: 4.9, image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=800&auto=format&fit=crop" },
  
  // Sunglasses
  { id: 2, name: "Obsidian Aviators", price: "$349", category: "Sunglasses", rating: 4.8, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop" },
  { id: 5, name: "Eclipse Wayfarer", price: "$210", category: "Sunglasses", rating: 4.6, image: "https://images.unsplash.com/photo-1572635196237-14b3f281501f?q=80&w=800&auto=format&fit=crop" },
  { id: 9, name: "Desert Tortoise", price: "$280", category: "Sunglasses", rating: 4.7, image: "https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=800&auto=format&fit=crop" },
  { id: 10, name: "Viper Sport", price: "$195", category: "Sunglasses", rating: 4.5, image: "https://images.unsplash.com/photo-1589883661502-8610ebef3b17?q=80&w=800&auto=format&fit=crop" },

  // Belts
  { id: 3, name: "Classic Italian Leather", price: "$189", category: "Belts", rating: 4.7, image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=800&auto=format&fit=crop" },
  { id: 6, name: "Minimalist Suede Belt", price: "$145", category: "Belts", rating: 4.5, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop" },
  { id: 11, name: "Onyx Buckle Reserve", price: "$220", category: "Belts", rating: 4.9, image: "https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=800&auto=format&fit=crop" },
  { id: 12, name: "Braided Vintage", price: "$165", category: "Belts", rating: 4.6, image: "https://images.unsplash.com/photo-1610444391216-1f6cc11da5bd?q=80&w=800&auto=format&fit=crop" },
];

const categories = ["All", "Watches", "Sunglasses", "Belts"];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const filteredProducts = activeCategory === "All" 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedProduct]);

  return (
    <div className="bg-background min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white tracking-tighter drop-shadow-md">
            Exclusive <span className="font-serif italic text-primary">Selection</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Discover the pinnacle of craftsmanship across our curated ranges.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat 
                  ? "bg-primary text-black shadow-[0_0_15px_rgba(212,175,55,0.4)] scale-105" 
                  : "bg-surface text-gray-400 border border-white/10 hover:text-white hover:border-white/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="group bg-surface-light rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full transform group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-background/80 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-bold text-primary border border-white/10">
                    {product.category}
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-1 text-primary text-sm font-medium mb-6">
                    <Star className="w-4 h-4 fill-primary" />
                    <span className="text-gray-300">{product.rating}</span>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-2xl font-semibold text-white">{product.price}</span>
                    <button className="flex items-center justify-center w-10 h-10 bg-white/5 text-white rounded-full group-hover:bg-primary group-hover:text-black transition-all duration-300 border border-white/10 group-hover:border-primary">
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            />
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.9 }}
              className="fixed inset-0 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-[101] w-full md:w-[900px] h-full md:h-[600px] bg-surface md:rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row border border-white/10"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full md:w-1/2 h-80 md:h-full relative bg-black">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col overflow-y-auto">
                <div className="inline-block px-3 py-1 mb-4 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest w-fit">
                  {selectedProduct.category}
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{selectedProduct.name}</h2>
                
                <div className="flex items-center gap-1 text-primary text-sm font-medium mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(selectedProduct.rating) ? 'fill-primary' : 'fill-gray-800'}`} />
                  ))}
                  <span className="text-gray-400 ml-2">({selectedProduct.rating} Reviews)</span>
                </div>

                <p className="text-gray-400 font-light leading-relaxed mb-8">
                  Experience true luxury with the {selectedProduct.name}. Meticulously crafted to perfection, this piece represents the pinnacle of modern design combined with timeless elegance. The perfect addition to elevate your premium collection.
                </p>

                <div className="mt-auto">
                  <div className="text-4xl font-bold text-white mb-8">{selectedProduct.price}</div>
                  
                  <div className="flex flex-col gap-4">
                    <button className="w-full py-4 bg-primary text-black font-bold text-lg rounded-full hover:bg-primary-dark transition-colors shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                      Buy Now
                    </button>
                    <button className="w-full py-4 bg-transparent border-2 border-white/20 text-white font-bold text-lg rounded-full hover:bg-white/5 hover:border-white/50 transition-colors flex items-center justify-center gap-2">
                      <ShoppingCart className="w-5 h-5" /> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
