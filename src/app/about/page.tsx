"use client";

import { motion } from "framer-motion";
import { Users, Truck, RotateCcw, ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg">
      {/* Hero Section */}
      <section className="bg-primary text-white py-24 pb-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight"
          >
            About <span className="text-bg underline decoration-4 decoration-accent/30 underline-offset-8">Gadget World</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-bg/90 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Born from a passion for precision and aesthetics. We are curators of fine accessories designed to make you stand out from the crowd.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative z-10 -mt-20 max-w-7xl mx-auto px-4 pb-24">
        <div className="bg-surface rounded-3xl shadow-xl border border-accent p-8 md:p-16 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-muted text-lg leading-relaxed mb-6">
                Gadget World was established in 2026 with one core philosophy: Luxury should not mean compromise. From the very beginning, we set out to source only the finest materials from across the globe, bringing them directly to our customers.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                Whether you're looking for an immaculate timepiece to complete your outfit, or a pair of designer sunglasses to make a bold statement, Gadget World ensures your complete satisfaction through a meticulously curated catalog.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden h-80 relative shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=800&auto=format&fit=crop" 
                className="w-full h-full object-cover"
                alt="Craftsmanship" 
              />
              <div className="absolute inset-0 bg-primary/20"></div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-24">
          {[
            { icon: Users, title: "10,000+ Customers", sub: "Trusted globally." },
            { icon: Truck, title: "Next-Day Delivery", sub: "On all premium items." },
            { icon: ShieldCheck, title: "2-Year Warranty", sub: "Comprehensive coverage." },
            { icon: RotateCcw, title: "Free Returns", sub: "30-day money back." }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-bg border border-accent rounded-2xl p-8 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-primary/10 text-primary mx-auto rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-text text-xl mb-2">{feature.title}</h3>
              <p className="text-muted text-sm">{feature.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="bg-primary text-white rounded-3xl p-12 text-center lg:text-left grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-bg/80 leading-relaxed mb-8 max-w-md">
              Have questions about a specific timepiece or sunglass frame? Our dedicated luxury support staff is available 24/7.
            </p>
            <div className="space-y-6">
              <div className="flex items-center justify-center lg:justify-start gap-4 text-bg/90">
                <Mail className="w-6 h-6 text-accent" />
                <span className="text-lg">support@gadgetworld.com</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-4 text-bg/90">
                <Phone className="w-6 h-6 text-accent" />
                <span className="text-lg">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-4 text-bg/90">
                <MapPin className="w-6 h-6 text-accent" />
                <span className="text-lg">123 Edge Street, Fashion District, NY</span>
              </div>
            </div>
          </div>
          <div className="bg-surface p-8 rounded-2xl border border-accent">
            <h3 className="text-text font-bold text-2xl mb-6">Drop us a line</h3>
            <div className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full bg-bg border border-accent rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary" />
              <input type="email" placeholder="Your Email" className="w-full bg-bg border border-accent rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary" />
              <textarea placeholder="Your Message" rows={4} className="w-full bg-bg border border-accent rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary resize-none"></textarea>
              <button className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-secondary transition-colors">Send Message</button>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
