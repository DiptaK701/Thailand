"use client";

import { useState } from "react";

// Configuration constants for easy maintenance
const SITE_CONFIG = {
  contactEmail: "info@thailandgroupescape.com",
  contactPhone: "+66 XXX XXX XXXX",
  heroImageUrl: "/placeholder-hero.jpg",
  companyName: "Thailand Group Escape",
};

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    groupSize: "",
    travelMonth: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be handled here
    alert("Thank you! We&apos;ll contact you soon to plan your Thailand trip.");
    setFormData({ name: "", phone: "", groupSize: "", travelMonth: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[url('/placeholder-hero.jpg')] bg-cover bg-center opacity-60">
            {/* Placeholder for beach/pool party background */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
              <p className="text-white/40 text-2xl">Thailand Beach Paradise</p>
            </div>
          </div>
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Thailand Luxury Group Trip (5–6 People)
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-cyan-300">
            All-inclusive stay, food, alcohol, entertainment & airport transfers
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <a
              href="#pricing"
              className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold text-lg rounded-full hover:from-yellow-600 hover:to-yellow-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View Package Details
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold text-lg rounded-full hover:bg-cyan-400 hover:text-black transition-all shadow-lg"
            >
              Check Availability
            </a>
          </div>
        </div>
      </section>

      {/* Package Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
            Package Overview
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Everything you need for an unforgettable experience
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Group Size */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Group Size</h3>
              <p className="text-gray-700 text-lg">5–6 People</p>
            </div>

            {/* Accommodation */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🏨</div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Accommodation</h3>
              <p className="text-gray-700 text-lg">Individual occupancy in secured property</p>
            </div>

            {/* Transportation */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🚐</div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Transportation</h3>
              <p className="text-gray-700 text-lg">Airport pickup & drop (Hiace or similar)</p>
            </div>

            {/* Food */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🍽️</div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Food</h3>
              <p className="text-gray-700 text-lg">5 Meals (Veg / Non-Veg as per preference)</p>
            </div>

            {/* Pool Party */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-2 border-cyan-300">
              <div className="text-5xl mb-4">🏊</div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Pool Party Event</h3>
              <p className="text-gray-700 text-lg">8 PM – 11 PM</p>
              <p className="text-cyan-600 font-semibold mt-2">★ Premium Experience</p>
            </div>

            {/* Drinks */}
            <div className="bg-gradient-to-br from-yellow-50 to-amber-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-2 border-yellow-300">
              <div className="text-5xl mb-4">🍸</div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Complimentary Drinks</h3>
              <p className="text-gray-700 text-lg">Whiskey, Vodka & Rum during event</p>
            </div>

            {/* Starters */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🍢</div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Starters</h3>
              <p className="text-gray-700 text-lg">2 Veg + 2 Non-Veg options</p>
            </div>

            {/* Entertainment */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🎭</div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Entertainment</h3>
              <p className="text-gray-700 text-lg">Available onsite (Additional packages chargeable)</p>
            </div>

            {/* Important Note */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-2 border-red-300">
              <div className="text-5xl mb-4">⚠️</div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Ordering Cut-off</h3>
              <p className="text-gray-700 text-lg">No orders post 11 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary Highlights */}
      <section id="itinerary" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
            Your Journey Timeline
          </h2>
          
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                1
              </div>
              <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-2 text-slate-900">Airport Arrival → Luxury Transfer</h3>
                <p className="text-gray-700">We&apos;ll pick you up in style with our premium Hiace transport</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                2
              </div>
              <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-2 text-slate-900">Check-in & Relaxation</h3>
                <p className="text-gray-700">Settle into your individual accommodations at our secured property</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                3
              </div>
              <div className="flex-1 bg-white p-6 rounded-xl shadow-md border-2 border-yellow-300">
                <h3 className="text-2xl font-bold mb-2 text-slate-900">Evening Pool Party 🎉</h3>
                <p className="text-gray-700">8 PM – 11 PM party experience with complimentary premium drinks</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                4
              </div>
              <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-2 text-slate-900">Curated Entertainment</h3>
                <p className="text-gray-700">Exclusive entertainment options available (additional packages available)</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                5
              </div>
              <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-2 text-slate-900">Secure Stay & Seamless Departure</h3>
                <p className="text-gray-700">Safe, comfortable rest and hassle-free airport drop-off</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
            Transparent Pricing
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Complete breakdown of your investment
          </p>
          
          <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-black/30">
                  <tr>
                    <th className="px-6 py-4 text-xl font-bold text-cyan-300">Category</th>
                    <th className="px-6 py-4 text-xl font-bold text-cyan-300 text-right">Cost</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-lg">Transportation</td>
                    <td className="px-6 py-4 text-lg text-right font-semibold">฿800</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-lg">Accommodation</td>
                    <td className="px-6 py-4 text-lg text-right font-semibold">฿2,500</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-lg">Food</td>
                    <td className="px-6 py-4 text-lg text-right font-semibold">฿2,500</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-lg">Entertainment</td>
                    <td className="px-6 py-4 text-lg text-right font-semibold">฿15,000</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-lg">Alcohol</td>
                    <td className="px-6 py-4 text-lg text-right font-semibold">฿4,200</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-lg">Security</td>
                    <td className="px-6 py-4 text-lg text-right font-semibold">฿5,000</td>
                  </tr>
                  <tr className="border-b border-white/20 bg-white/5">
                    <td className="px-6 py-4 text-lg font-bold">Subtotal</td>
                    <td className="px-6 py-4 text-lg text-right font-bold">฿30,000</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-lg">Slush Fund</td>
                    <td className="px-6 py-4 text-lg text-right font-semibold">฿5,000</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-lg">Profit</td>
                    <td className="px-6 py-4 text-lg text-right font-semibold">฿10,000</td>
                  </tr>
                  <tr className="border-b border-white/20 bg-white/5">
                    <td className="px-6 py-4 text-xl font-bold">Total (Excl. VAT)</td>
                    <td className="px-6 py-4 text-xl text-right font-bold">฿45,000</td>
                  </tr>
                  <tr className="border-b border-white/20">
                    <td className="px-6 py-4 text-lg">VAT</td>
                    <td className="px-6 py-4 text-lg text-right font-semibold">฿3,150</td>
                  </tr>
                  <tr className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20">
                    <td className="px-6 py-5 text-2xl font-bold text-yellow-300">Total (Incl. VAT)</td>
                    <td className="px-6 py-5 text-2xl text-right font-bold text-yellow-300">฿48,150</td>
                  </tr>
                  <tr className="border-t border-white/20">
                    <td className="px-6 py-4 text-lg text-gray-300">Exchange Rate</td>
                    <td className="px-6 py-4 text-lg text-right text-gray-300">2.81</td>
                  </tr>
                  <tr className="bg-cyan-500/20">
                    <td className="px-6 py-5 text-2xl font-bold text-cyan-300">Cost in INR</td>
                    <td className="px-6 py-5 text-2xl text-right font-bold text-cyan-300">₹1,35,301.50</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
            Experience Preview
          </h2>
          <p className="text-center text-yellow-600 mb-12 text-lg font-semibold">
            📸 Images will be updated soon
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder 1 */}
            <div className="aspect-square bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl shadow-lg flex items-center justify-center text-white text-center p-6">
              <div>
                <div className="text-6xl mb-4">🏨</div>
                <h3 className="text-2xl font-bold">Luxury Villa</h3>
              </div>
            </div>

            {/* Placeholder 2 */}
            <div className="aspect-square bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl shadow-lg flex items-center justify-center text-white text-center p-6">
              <div>
                <div className="text-6xl mb-4">🏊</div>
                <h3 className="text-2xl font-bold">Pool Party Night</h3>
              </div>
            </div>

            {/* Placeholder 3 */}
            <div className="aspect-square bg-gradient-to-br from-green-400 to-teal-500 rounded-xl shadow-lg flex items-center justify-center text-white text-center p-6">
              <div>
                <div className="text-6xl mb-4">🚐</div>
                <h3 className="text-2xl font-bold">Private Transport</h3>
              </div>
            </div>

            {/* Placeholder 4 */}
            <div className="aspect-square bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl shadow-lg flex items-center justify-center text-white text-center p-6">
              <div>
                <div className="text-6xl mb-4">🍸</div>
                <h3 className="text-2xl font-bold">Premium Drinks</h3>
              </div>
            </div>

            {/* Placeholder 5 */}
            <div className="aspect-square bg-gradient-to-br from-red-400 to-pink-500 rounded-xl shadow-lg flex items-center justify-center text-white text-center p-6">
              <div>
                <div className="text-6xl mb-4">🍽️</div>
                <h3 className="text-2xl font-bold">Gourmet Dining</h3>
              </div>
            </div>

            {/* Placeholder 6 */}
            <div className="aspect-square bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl shadow-lg flex items-center justify-center text-white text-center p-6">
              <div>
                <div className="text-6xl mb-4">🎭</div>
                <h3 className="text-2xl font-bold">Entertainment</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
            Trip Experience Video
          </h2>
          <p className="text-center text-yellow-600 mb-12 text-lg font-semibold">
            🎥 Official trip experience video coming soon
          </p>
          
          <div className="aspect-video bg-gradient-to-br from-slate-800 to-blue-900 rounded-2xl shadow-2xl flex items-center justify-center text-white overflow-hidden">
            <div className="text-center p-8">
              <div className="text-8xl mb-6">▶️</div>
              <h3 className="text-3xl font-bold mb-2">Video Placeholder</h3>
              <p className="text-xl text-gray-300">Experience highlights coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Assurance */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Your Safety & Comfort Matter
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2">Secured Property</h3>
              <p className="text-gray-300">Gated and monitored 24/7</p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-2">Verified Partners</h3>
              <p className="text-gray-300">Licensed and trusted vendors</p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-2">Group Safety</h3>
              <p className="text-gray-300">Privacy and security assured</p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">📞</div>
              <h3 className="text-xl font-bold mb-2">On-ground Support</h3>
              <p className="text-gray-300">24/7 coordination available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
            Plan Your Thailand Trip
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Fill in your details and we&apos;ll get back to you within 24 hours
          </p>
          
          <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-semibold mb-2 text-slate-900">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-lg"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-lg font-semibold mb-2 text-slate-900">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-lg"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label htmlFor="groupSize" className="block text-lg font-semibold mb-2 text-slate-900">
                  Group Size *
                </label>
                <select
                  id="groupSize"
                  required
                  value={formData.groupSize}
                  onChange={(e) => setFormData({ ...formData, groupSize: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-lg"
                >
                  <option value="">Select group size</option>
                  <option value="5">5 People</option>
                  <option value="6">6 People</option>
                </select>
              </div>

              <div>
                <label htmlFor="travelMonth" className="block text-lg font-semibold mb-2 text-slate-900">
                  Preferred Month *
                </label>
                <input
                  type="text"
                  id="travelMonth"
                  required
                  value={formData.travelMonth}
                  onChange={(e) => setFormData({ ...formData, travelMonth: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-lg"
                  placeholder="e.g., January 2025"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold text-xl rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Plan My Thailand Trip 🚀
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">{SITE_CONFIG.companyName}</h3>
              <p className="text-gray-300 mb-4">
                Your premium gateway to an unforgettable Thailand experience
              </p>
              <div className="flex gap-4 text-3xl">
                <span className="cursor-pointer hover:text-yellow-400 transition-colors">📘</span>
                <span className="cursor-pointer hover:text-yellow-400 transition-colors">📸</span>
                <span className="cursor-pointer hover:text-yellow-400 transition-colors">🐦</span>
                <span className="cursor-pointer hover:text-yellow-400 transition-colors">💬</span>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Contact Information</h4>
              <p className="text-gray-300 mb-2">📧 Email: {SITE_CONFIG.contactEmail}</p>
              <p className="text-gray-300 mb-2">📱 Phone: {SITE_CONFIG.contactPhone}</p>
              <p className="text-gray-300">💬 WhatsApp: Available 24/7</p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <h4 className="text-lg font-bold mb-4 text-yellow-400">Important Disclaimer</h4>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li>• Prices are subject to availability and may vary based on season</li>
              <li>• Entertainment add-ons are chargeable separately</li>
              <li>• Booking confirmation requires advance payment</li>
              <li>• Terms and conditions apply</li>
              <li>• No refunds for cancellations within 7 days of travel date</li>
            </ul>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-400">
              © 2025 {SITE_CONFIG.companyName}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
