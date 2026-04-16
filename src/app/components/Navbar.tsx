"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const pathname = usePathname();
  const { cartCount, setIsCartOpen } = useCart();

  const links = [
    { name: "Home", path: "/" },
    { name: "Sunglasses", path: "/sunglasses" },
    { name: "Watches", path: "/watches" },
    { name: "Deals", path: "/deals" },
    { name: "About", path: "/about" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full z-50 glass-panel transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-22px font-bold tracking-tight text-primary">
              Gadget World
            </span>
          </Link>

          {/* Center Links */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative py-2 text-[13px] font-medium transition-colors ${
                    isActive ? "text-primary" : "text-muted hover:text-primary"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="active-nav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-5">
            <button className="text-secondary hover:text-primary transition-colors hidden sm:block">
              <Search className="w-5 h-5" />
            </button>
            <Link 
              href="/cart"
              className="text-secondary hover:text-primary transition-colors relative group"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-danger text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-sm">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link href="/user" className="text-secondary hover:text-primary transition-colors hidden sm:block">
              <User className="w-5 h-5" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-secondary hover:text-primary ml-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-surface border-b border-accent overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col space-y-4">
              {links.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="text-base font-medium text-text hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
