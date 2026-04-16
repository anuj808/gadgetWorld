"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart, Star, ShieldCheck, Truck, Clock, Anchor } from "lucide-react";
import { useCart } from "./context/CartContext";

// Demo products data
const products = [
  { id: 1, name: "Nautical Chrono", price: "₹12,499", category: "Watches", rating: 4.9, badge: "New", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800&auto=format&fit=crop" },
  { id: 2, name: "Navy Aviators", price: "₹3,299", category: "Sunglasses", rating: 4.8, badge: "Hot", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "Ocean Master", price: "₹31,000", category: "Watches", rating: 4.8, badge: "Sale", image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=800&auto=format&fit=crop" },
  { id: 4, name: "Azure Wayfarer", price: "₹2,100", category: "Sunglasses", rating: 4.6, badge: "", image: "https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=800&auto=format&fit=crop" },
  { id: 5, name: "Royal Sea Silver", price: "₹24,500", category: "Watches", rating: 5.0, badge: "New", image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800&auto=format&fit=crop" },
  { id: 6, name: "Horizon Tortoise", price: "₹2,800", category: "Sunglasses", rating: 4.7, badge: "", image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=800&auto=format&fit=crop" },
  { id: 7, name: "Precision Blue", price: "₹18,500", category: "Watches", rating: 4.9, badge: "Hot", image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?q=80&w=800&auto=format&fit=crop" },
  { id: 8, name: "Viper Sport", price: "₹1,950", category: "Sunglasses", rating: 4.5, badge: "Sale", image: "https://images.unsplash.com/photo-1589883661502-8610ebef3b17?q=80&w=800&auto=format&fit=crop" },
];

const pills = ["All", "Sunglasses", "Watches", "New Arrivals", "On Sale"];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");
  const { addToCart } = useCart();

  const filteredProducts = products.filter(p => {
    if (activeFilter === "All") return true;
    if (activeFilter === "New Arrivals") return p.badge === "New";
    if (activeFilter === "On Sale") return p.badge === "Sale";
    return p.category === activeFilter;
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="bg-primary text-white py-20 lg:py-32 overflow-hidden relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            <div className="w-full lg:w-3/5 space-y-8 z-20 pr-4">
              <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
                Refined <br /> <span className="text-white underline decoration-4 underline-offset-8 decoration-bg/30">Elegance.</span>
              </h1>
              <p className="text-lg md:text-2xl text-bg opacity-90 max-w-2xl font-light leading-relaxed">
                Step into a world of timeless navy aesthetics. Curated timepieces and eyewear that define perfection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/watches" className="bg-bg text-primary px-8 py-4 font-semibold text-center hover:bg-accent transition-colors flex items-center justify-center gap-2" style={{ borderRadius: 'var(--radius-md)' }}>
                  Shop Watches <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/sunglasses" className="bg-transparent border-2 border-bg text-bg px-8 py-4 font-semibold text-center hover:bg-bg/10 transition-colors flex items-center justify-center gap-2" style={{ borderRadius: 'var(--radius-md)' }}>
                  Shop Sunglasses
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-2/5 relative h-[500px] flex items-center justify-center mt-12 lg:mt-0">
              {/* Product Previews */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-[5%] top-[5%] md:right-[20%] md:top-[12%] w-36 md:w-48 shadow-2xl rounded-xl border border-white/20 bg-surface p-3 rotate-6 z-20 backdrop-blur-sm"
                style={{ borderRadius: 'var(--radius-lg)' }}
              >
                <img src={products[0].image} alt="Watch" className="w-full h-auto rounded-lg shadow-inner" />
                <div className="mt-3 text-text font-bold text-center text-sm">{products[0].name}</div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute left-[10%] bottom-[10%] md:left-0 md:bottom-[15%] w-36 md:w-48 shadow-2xl rounded-xl border border-white/20 bg-surface p-3 -rotate-12 z-30 backdrop-blur-sm"
                style={{ borderRadius: 'var(--radius-lg)' }}
              >
                <img src={products[1].image} alt="Sunglasses" className="w-full h-auto rounded-lg shadow-inner" />
                <div className="mt-3 text-text font-bold text-center text-sm">{products[1].name}</div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, -25, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute right-[40%] top-[-5%] md:right-[50%] md:top-[2%] w-32 md:w-40 shadow-xl rounded-xl border border-white/10 bg-surface p-2 rotate-12 z-10 backdrop-blur-sm opacity-90"
                style={{ borderRadius: 'var(--radius-lg)' }}
              >
                <img src={products[2].image} alt="Watch" className="w-full h-auto rounded-lg shadow-inner opacity-90" />
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute right-[15%] bottom-[5%] md:right-[0%] md:bottom-[5%] w-28 md:w-40 shadow-xl rounded-xl border border-white/10 bg-surface p-2 -rotate-6 z-10 backdrop-blur-sm opacity-90"
                style={{ borderRadius: 'var(--radius-lg)' }}
              >
                <img src={products[3].image} alt="Sunglasses" className="w-full h-auto rounded-lg shadow-inner opacity-90" />
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="hidden md:block absolute left-[15%] top-[20%] w-32 shadow-xl rounded-xl border border-white/10 bg-surface p-2 rotate-[-8deg] z-10 backdrop-blur-sm opacity-80"
                style={{ borderRadius: 'var(--radius-lg)' }}
              >
                <img src={products[4].image} alt="Watch" className="w-full h-auto rounded-lg shadow-inner opacity-90" />
              </motion.div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Running Ads Marquee */}
      <div className="bg-danger text-white py-3 overflow-hidden flex items-center shadow-md z-20 relative">
        <style>{`
          @keyframes infinite-marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .custom-marquee {
            animation: infinite-marquee 50s linear infinite;
            display: flex;
            width: max-content;
          }
        `}</style>
        <div className="custom-marquee whitespace-nowrap text-sm font-bold tracking-widest uppercase items-center">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex space-x-12 px-6">
              <span>🔥 50% OFF ON NEON SPORT AVIATORS</span>
              <span>•</span>
              <span>⚡ FLASH SALE: OCEAN MASTER AT ₹31,000</span>
              <span>•</span>
              <span>🎉 CLEARANCE EVENT — UP TO 70% OFF WATCHES</span>
              <span>•</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Featured Categories Section */}
      <section className="py-20 bg-bg border-b border-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">Shop by Category</h2>
            <p className="text-muted">Explore our exclusive lineup of fashion accessories</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/watches" className="group relative h-80 rounded-2xl overflow-hidden block">
              <img src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1400&auto=format&fit=crop" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" alt="Watches" />
              <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/50 transition-colors"></div>
              <div className="absolute inset-x-0 bottom-0 p-8">
                <h3 className="text-4xl font-bold text-white mb-2">Luxury Watches</h3>
                <span className="text-white/80 flex items-center gap-2 group-hover:gap-4 transition-all uppercase text-sm tracking-wider font-semibold">Explore <ArrowRight className="w-4 h-4" /></span>
              </div>
            </Link>
            <Link href="/sunglasses" className="group relative h-80 rounded-2xl overflow-hidden block">
              <img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1400&auto=format&fit=crop" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" alt="Sunglasses" />
              <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/50 transition-colors"></div>
              <div className="absolute inset-x-0 bottom-0 p-8">
                <h3 className="text-4xl font-bold text-white mb-2">Designer Sunglasses</h3>
                <span className="text-white/80 flex items-center gap-2 group-hover:gap-4 transition-all uppercase text-sm tracking-wider font-semibold">Explore <ArrowRight className="w-4 h-4" /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Filter Pills */}
      <section className="border-b border-accent py-4 sticky top-20 z-40 bg-bg/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-3 w-max">
            {pills.map((pill) => (
              <button
                key={pill}
                onClick={() => setActiveFilter(pill)}
                className={`px-5 py-2 text-[14px] font-medium transition-colors border ${
                  activeFilter === pill 
                    ? "bg-primary text-white border-primary" 
                    : "bg-surface text-text border-accent hover:border-secondary"
                }`}
                style={{ borderRadius: 'var(--radius-sm)' }}
              >
                {pill}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Product Grid */}
      <section className="py-16 bg-bg border-b border-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-text mb-2 tracking-tight">Trending Items</h2>
              <p className="text-muted">Handpicked selection based on your preference.</p>
            </div>
            <span className="text-sm font-medium text-muted hidden md:inline-block">Showing {filteredProducts.length} items</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
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
      </section>

      {/* 4. Why Choose Us (Features) */}
      <section className="py-20 bg-surface border-b border-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary text-bg rounded-2xl flex items-center justify-center mb-6 shadow-lg rotate-3 hover:rotate-0 transition-all">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-text mb-3">Authenticity Guaranteed</h4>
              <p className="text-muted leading-relaxed">Every item is verified by our experts. We deal strictly in original premium gadgets.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary text-bg rounded-2xl flex items-center justify-center mb-6 shadow-lg -rotate-3 hover:rotate-0 transition-all">
                <Truck className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-text mb-3">Express Shipping</h4>
              <p className="text-muted leading-relaxed">Receive your prized possessions within 48 hours for all domestic orders over ₹999.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary text-bg rounded-2xl flex items-center justify-center mb-6 shadow-lg rotate-3 hover:rotate-0 transition-all">
                <Anchor className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-text mb-3">Timeless Quality</h4>
              <p className="text-muted leading-relaxed">Made with the highest quality materials designed to weather any storm gracefully.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonials Section */}
      <section className="py-20 bg-primary text-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-bg">What our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/10 p-8 rounded-2xl backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="w-4 h-4 fill-current text-yellow-400" />
                  ))}
                </div>
                <p className="text-bg/80 italic mb-6">"Gadget World consistently provides the best selection and lightning-fast customer service. I highly recommend them to all watch enthusiasts."</p>
                <div className="font-semibold text-bg">— Client {i}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Promotional Banner & Newsletter */}
      <section className="bg-bg py-20 text-center border-b border-accent">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 tracking-tight">Join the Inner Circle</h2>
          <p className="text-muted mb-8 text-lg">
            Subscribe to our newsletter for exclusive access to sales, new arrivals, and get 10% off your first order.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow px-6 py-4 rounded-xl border border-accent bg-surface text-text focus:outline-none focus:border-primary transition-colors"
            />
            <button className="bg-primary text-white px-8 py-4 font-semibold hover:bg-secondary transition-colors rounded-xl whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface text-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <span className="text-2xl font-bold tracking-tight text-primary mb-6 inline-block">
                Gadget World
              </span>
              <p className="max-w-xs leading-relaxed">
                Minimalist styling, trendy aesthetics, and fashion-forward premium selections in Navy Blue.
              </p>
            </div>
            
            <div>
              <h4 className="text-text font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li><Link href="/sunglasses" className="hover:text-primary transition-colors">Shop Sunglasses</Link></li>
                <li><Link href="/watches" className="hover:text-primary transition-colors">Shop Watches</Link></li>
                <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-text font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-3">
                <li>123 Edge Street, Fashion District</li>
                <li>New York, NY 10001</li>
                <li><a href="mailto:hello@gadgetworld.com" className="hover:text-primary transition-colors">hello@gadgetworld.com</a></li>
                <li><a href="tel:+1234567890" className="hover:text-primary transition-colors">+1 (234) 567-890</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-accent pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px]">
            <p>© 2026 Gadget World. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
