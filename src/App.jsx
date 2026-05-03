import React from 'react';
import { trackContactConversion } from './utils/gtag';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import ServiceAreas from './components/ServiceAreas';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Gallery />
        <ServiceAreas />
        <Reviews />
        <FAQ />
        
        {/* Simple Footer */}
        <footer className="pt-12 pb-28 md:pb-12 px-4 md:px-8 bg-gray-900 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <img src="/images/logo-miami-epoxy-resin.png" alt="Miami Epoxy Resin" className="h-12 w-auto object-contain" loading="lazy" />
            </div>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Professional epoxy flooring solutions for residential and commercial spaces in Miami, FL. High quality, lifetime durability.
            </p>
            <div className="flex justify-center gap-6 mb-8">
              <a href="tel:3054620143" onClick={trackContactConversion} className="text-gray-400 hover:text-white transition-colors">Call: 305-462-0143</a>
            </div>
            <div className="border-t border-gray-800 pt-8 text-gray-500 text-sm">
              © {new Date().getFullYear()} Miami Epoxy Resin. All rights reserved.
            </div>
          </div>
        </footer>
      </main>

      {/* Sticky Mobile Call Button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a 
          href="tel:3054620143"
          onClick={trackContactConversion}
          className="w-full bg-whatsapp text-white py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 btn-hover"
        >
          📞 Call Now — Free Estimate
        </a>
      </div>
    </div>
  );
}

export default App;
