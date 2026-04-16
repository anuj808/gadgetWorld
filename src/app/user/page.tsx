"use client";

import { motion } from "framer-motion";
import { Package, Clock, CheckCircle } from "lucide-react";

const orders = [
  {
    id: "ORD-9842",
    date: "April 12, 2026",
    total: "$1,299",
    status: "Delivered",
    items: "1x Chronograph Vanguard",
  },
  {
    id: "ORD-9910",
    date: "April 15, 2026",
    total: "$349",
    status: "Processing",
    items: "1x Obsidian Aviators",
  }
];

export default function UserDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-4 mb-10 border-b border-gray-200 pb-6">
        <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center text-2xl font-bold text-white shadow-md">
          JD
        </div>
        <div>
          <h1 className="text-3xl font-bold text-black">Welcome back, John</h1>
          <p className="text-gray-500">Manage your orders and account settings.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Stats / Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white border border-gray-100 shadow-sm p-6 rounded-2xl">
            <h2 className="text-lg font-bold text-black mb-4">Account Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                <span className="text-gray-500">Total Orders</span>
                <span className="text-xl font-bold text-black">12</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                <span className="text-gray-500">Total Spent</span>
                <span className="text-xl font-bold text-black">$4,520</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Member Since</span>
                <span className="text-black font-semibold">Jan 2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Orders */}
        <div className="lg:col-span-2">
          <div className="bg-white border border-gray-100 shadow-sm p-6 rounded-2xl">
            <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
              <Package className="text-gray-400" /> Recent Orders
            </h2>
            
            <div className="space-y-4">
              {orders.map((order, index) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={order.id} 
                  className="p-5 border border-gray-100 rounded-xl hover:border-gray-300 transition-colors bg-gray-50/50"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-bold text-black">{order.id}</h3>
                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${
                          order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                        }`}>
                          {order.status === 'Delivered' ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                          {order.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">{order.date} • {order.items}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-black">{order.total}</p>
                      <button className="text-gray-900 text-sm font-semibold hover:underline mt-1">
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
