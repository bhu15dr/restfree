"use client"
import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import { ArrowRight, Monitor, Users, Star, Clock, ChevronRight } from 'lucide-react';

const DigitalBillboard = () => {
  const [hovered, setHovered] = useState(null);

  const features = [
    {
      title: "Real-time Analytics",
      description: "Track viewer engagement and campaign performance with detailed analytics",
      icon: <Monitor className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Smart Targeting",
      description: "AI-powered targeting based on traffic patterns and viewer demographics",
      icon: <Users className="w-6 h-6 text-blue-500" />
    },
    {
      title: "High Reliability",
      description: "99.9% uptime with automated fail-safes and instant issue alerts",
      icon: <Star className="w-6 h-6 text-blue-500" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance",
      icon: <Clock className="w-6 h-6 text-blue-500" />
    }
  ];

  return (
    <>
      <Navbar />
    <div className="w-full">
      {/* Hero Section - Enhanced Dark */}
      <section className="bg-gradient-to-br from-black to-gray-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Digital Billboard
              </h1>
              <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                Transform your outdoor advertising with dynamic digital displays. 
                Our smart billboards deliver targeted content, real-time analytics, 
                and unmatched flexibility for maximum impact.
              </p>
              {/* <div className="flex gap-4">
                <button 
                  className="group bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-all flex items-center gap-2"
                  onMouseEnter={() => setHovered('start')}
                  onMouseLeave={() => setHovered(null)}
                >
                  Get Started
                  <ArrowRight className={`w-5 h-5 transform transition-transform ${hovered === 'start' ? 'translate-x-1' : ''}`} />
                </button>
                <button 
                  className="border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-lg hover:bg-blue-500 hover:text-white transition-all"
                >
                  Learn More
                </button>
              </div> */}
            </div>
            <div className="md:w-1/2">
              <div className="bg-gradient-to-br from-blue-900 to-gray-900 p-6 rounded-2xl shadow-2xl" style={{ justifyContent: 'center', display: 'flex' }}>
                <img
                  src="https://unibots.b-cdn.net/games/finalimg1.png"
                  alt="Digital Billboard Demo"
                  className="w-full rounded-xl transform hover:scale-105 transition-transform duration-300"
                  style={{ width: '450px', height: '300px' }}
                />
              </div>
            </div>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
            {[
              { value: "1000+", label: "Display Locations" },
              { value: "50k+", label: "Daily Views" },
              { value: "4.8/5", label: "Client Rating" },
              { value: "100%", label: "Uptime" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors">
                <div className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced White */}
      <section className="bg-white text-black py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Complete Solution</h2>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://www.xtreme-media.com/wp-content/uploads/2018/09/digital-billboard-process.png"
                alt="Digital Billboard Process"
                className="w-full rounded-xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent rounded-xl" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Smart Technology, Smarter Advertising</h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Our digital billboard network combines cutting-edge display technology with 
                intelligent analytics. Using AI-powered cameras, we can target advertisements 
                based on real-time traffic patterns and viewer demographics, ensuring your 
                message reaches the right audience at the right time.
              </p>
              <div className="space-y-4">
                {[
                  "Centrally managed network with minimal manual intervention",
                  "Real-time performance monitoring and instant alerts",
                  "AI-powered viewer analytics and targeting",
                  "Flexible content scheduling and dynamic updates"
                ].map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <ChevronRight className="w-5 h-5 text-blue-500" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default DigitalBillboard;