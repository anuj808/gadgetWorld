"use client";

import { useCart } from "../context/CartContext";
import { Trash2, ShieldCheck, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartCount, cartTotal } = useCart();
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  if (orderConfirmed) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
        <CheckCircle className="w-24 h-24 text-green-500 mb-6" />
        <h1 className="text-4xl font-extrabold text-primary mb-4 text-center">Order Confirmed!</h1>
        <p className="text-muted text-lg mb-8 text-center max-w-md">
          Thank you for shopping with Gadget World. Your order is being processed and will ship shortly.
        </p>
        <Link href="/" className="bg-primary text-white font-bold px-8 py-4 rounded-xl hover:bg-secondary transition-colors">
          Return to Home
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-3xl font-bold text-text mb-4">Your cart is empty</h1>
        <p className="text-muted mb-8">Browse our collections to add some premium gadgets.</p>
        <div className="flex gap-4">
          <Link href="/watches" className="bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-secondary transition-colors">
            Shop Watches
          </Link>
          <Link href="/sunglasses" className="bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-secondary transition-colors">
            Shop Sunglasses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        
        {/* Left Side: Cart Items & Address */}
        <div className="w-full lg:w-2/3 space-y-8">
          <h1 className="text-4xl font-extrabold text-primary tracking-tight">Shopping Cart</h1>
          
          <div className="bg-bg border border-accent rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-6 border-b border-accent pb-4">Order Items ({cartCount})</h2>
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={item.product.id} className="flex gap-6 relative">
                  <img src={item.product.image} alt={item.product.name} className="w-24 h-24 object-cover rounded-xl border border-accent" />
                  <div className="flex-1 flex flex-col">
                    <h3 className="font-semibold text-lg text-text line-clamp-1">{item.product.name}</h3>
                    <span className="text-sm text-muted">{item.product.category}</span>
                    <div className="mt-auto font-bold text-primary">{item.product.price}</div>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <button 
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-danger hover:bg-danger/10 p-2 rounded-md transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                    <div className="flex items-center gap-3 border border-accent rounded-lg p-1">
                      <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="px-3 hover:bg-accent rounded font-bold">-</button>
                      <span className="w-4 text-center font-semibold">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="px-3 hover:bg-accent rounded font-bold">+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-bg border border-accent rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-6 border-b border-accent pb-4">Shipping Address</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="w-full bg-surface border border-accent rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary" />
              <input type="text" placeholder="Last Name" className="w-full bg-surface border border-accent rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary" />
              <input type="text" placeholder="Address" className="w-full bg-surface border border-accent rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary md:col-span-2" />
              <input type="text" placeholder="City" className="w-full bg-surface border border-accent rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary" />
              <input type="text" placeholder="Postal Code" className="w-full bg-surface border border-accent rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary" />
            </form>
          </div>
        </div>

        {/* Right Side: Payment & Order Summary */}
        <div className="w-full lg:w-1/3">
          <div className="bg-bg border border-accent rounded-2xl p-6 shadow-sm sticky top-28">
            <h2 className="text-xl font-bold mb-6 border-b border-accent pb-4">Order Summary</h2>
            
            <div className="space-y-4 mb-6 text-text">
              <div className="flex justify-between">
                <span className="text-muted">Subtotal</span>
                <span className="font-semibold">₹{cartTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Shipping</span>
                <span className="font-semibold">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Taxes</span>
                <span className="font-semibold text-sm">(Calculated next step)</span>
              </div>
            </div>
            
            <div className="flex justify-between text-xl font-extrabold text-primary border-t border-accent pt-4 mb-8">
              <span>Total</span>
              <span>₹{cartTotal.toLocaleString()}</span>
            </div>

            <h3 className="font-bold text-text mb-4">Payment Method</h3>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button className="border-2 border-primary bg-primary/5 text-primary font-bold py-3 rounded-lg text-sm text-center">Credit Card</button>
              <button className="border border-accent bg-surface text-text hover:border-text font-semibold py-3 rounded-lg text-sm text-center transition-colors">PayPal</button>
            </div>
            
            <div className="space-y-3 mb-8">
              <input type="text" placeholder="Card Number" className="w-full bg-surface border border-accent rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary" />
              <div className="flex gap-3">
                <input type="text" placeholder="MM/YY" className="w-1/2 bg-surface border border-accent rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary" />
                <input type="text" placeholder="CVC" className="w-1/2 bg-surface border border-accent rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary" />
              </div>
            </div>

            <button 
              onClick={() => setOrderConfirmed(true)}
              className="w-full bg-primary text-white font-extrabold py-4 rounded-xl hover:bg-secondary transition-colors flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-5 h-5" /> Confirm Order
            </button>
            <p className="mt-4 text-xs text-center text-muted">Secure transaction encrypted with 256-bit SSL.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
