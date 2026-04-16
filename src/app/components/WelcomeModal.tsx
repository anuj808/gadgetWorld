"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WelcomeModal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem('welcomed')) {
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const close = () => {
    setShow(false);
    sessionStorage.setItem('welcomed', 'true');
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
          onClick={close}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-surface rounded-xl max-w-lg w-full p-10 text-center shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
            style={{ borderRadius: 'var(--radius-lg)' }}
          >
            <h2 className="text-4xl font-bold text-primary mb-4 tracking-tight">Welcome to Gadget World!</h2>
            <p className="text-secondary mb-8 text-lg">
              Explore our latest fashion-forward sunglasses & premium watches.
            </p>
            <button 
              onClick={close}
              className="bg-primary text-white font-medium px-8 py-4 w-full rounded-md hover:bg-secondary transition-colors"
              style={{ borderRadius: 'var(--radius-md)' }}
            >
              Start Shopping
            </button>
            <button 
              onClick={close}
              className="absolute top-4 right-4 text-muted hover:text-primary transition-colors focus:outline-none"
              aria-label="Close"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
