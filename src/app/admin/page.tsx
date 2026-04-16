"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Package, Plus, TrendingUp, DollarSign, Users } from "lucide-react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"overview" | "add-product">("overview");

  const recentOrders = [
    { id: "ORD-9842", customer: "John Doe", total: "$1,299", status: "Delivered", date: "4 hrs ago" },
    { id: "ORD-9910", customer: "Alice Smith", total: "$349", status: "Processing", date: "6 hrs ago" },
    { id: "ORD-9911", customer: "Robert King", total: "$2,450", status: "Pending", date: "1 day ago" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-8">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 space-y-2">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-1">Admin Portal</h2>
          <p className="text-sm text-gray-500">Manage store & inventory</p>
        </div>
        <button 
          onClick={() => setActiveTab("overview")}
          className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
            activeTab === "overview" ? "bg-black text-white font-bold shadow-md" : "text-gray-500 hover:bg-gray-100 hover:text-black"
          }`}
        >
          Overview & Orders
        </button>
        <button 
          onClick={() => setActiveTab("add-product")}
          className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
            activeTab === "add-product" ? "bg-black text-white font-bold shadow-md" : "text-gray-500 hover:bg-gray-100 hover:text-black"
          }`}
        >
          Add New Product
        </button>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === "overview" && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Total Revenue", value: "$45,231.89", icon: DollarSign, color: "text-green-600 bg-green-50" },
                { title: "Active Orders", value: "84", icon: Package, color: "text-blue-600 bg-blue-50" },
                { title: "Total Customers", value: "1,249", icon: Users, color: "text-purple-600 bg-purple-50" },
                { title: "Conversion Rate", value: "3.4%", icon: TrendingUp, color: "text-amber-600 bg-amber-50" },
              ].map((stat, i) => (
                <div key={i} className="bg-white border border-gray-100 shadow-sm p-6 rounded-2xl flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm mb-1 font-medium">{stat.title}</p>
                    <p className="text-2xl font-bold text-black">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Orders Table */}
            <div className="bg-white border border-gray-100 shadow-sm rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h3 className="text-xl font-bold text-black">Recent Orders</h3>
                <button className="text-sm font-bold text-black hover:underline">View All</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 text-gray-500 text-sm border-b border-gray-100">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Order ID</th>
                      <th className="px-6 py-4 font-semibold">Customer</th>
                      <th className="px-6 py-4 font-semibold">Status</th>
                      <th className="px-6 py-4 font-semibold">Date</th>
                      <th className="px-6 py-4 font-semibold text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-black font-bold">{order.id}</td>
                        <td className="px-6 py-4 text-gray-700">{order.customer}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                            order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                            order.status === 'Processing' ? 'bg-blue-100 text-blue-700' :
                            'bg-orange-100 text-orange-700'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-500 text-sm">{order.date}</td>
                        <td className="px-6 py-4 text-right text-black font-bold">{order.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "add-product" && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <div className="bg-white border border-gray-100 shadow-sm p-8 rounded-2xl max-w-3xl">
              <h3 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
                <Plus className="text-gray-400" /> Add New Product
              </h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Product Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-black transition-colors" placeholder="e.g. Royal Oak Watch" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Price ($)</label>
                    <input type="number" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-black transition-colors" placeholder="0.00" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Category</label>
                    <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-black transition-colors appearance-none">
                      <option>Watches</option>
                      <option>Sunglasses</option>
                      <option>Belts</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Image URL</label>
                    <input type="url" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-black transition-colors" placeholder="https://..." />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Description</label>
                  <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-black transition-colors resize-none" placeholder="Product description..."></textarea>
                </div>

                <div className="pt-4 flex items-center justify-end gap-4">
                  <button type="button" onClick={() => setActiveTab("overview")} className="px-6 py-3 rounded-xl font-bold text-gray-500 hover:text-black hover:bg-gray-100 transition-colors">
                    Cancel
                  </button>
                  <button type="submit" className="px-6 py-3 rounded-xl font-bold bg-black text-white hover:bg-gray-800 transition-colors shadow-lg">
                    Publish Product
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}
