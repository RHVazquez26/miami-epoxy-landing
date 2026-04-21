import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import ServiceAreas from './components/ServiceAreas';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Gallery />
        <ServiceAreas />
        
        {/* Simple Footer */}
        <footer className="py-12 px-4 md:px-8 bg-gray-900 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="font-bold text-xl tracking-tight">Miami Epoxy Resin</span>
            </div>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Professional epoxy flooring solutions for residential and commercial spaces in Miami, FL. High quality, lifetime durability.
            </p>
            <div className="flex justify-center gap-6 mb-8">
              <a href="tel:3054620143" className="text-gray-400 hover:text-white transition-colors">Call: 305-462-0143</a>
            </div>
            <div className="border-t border-gray-800 pt-8 text-gray-500 text-sm">
              © {new Date().getFullYear()} Miami Epoxy Resin. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
