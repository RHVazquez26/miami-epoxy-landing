import React, { Suspense } from 'react';
import { trackContactConversion } from './utils/gtag';
import Header from './components/Header';
import Hero from './components/Hero';

const Gallery = React.lazy(() => import('./components/Gallery'));
const ServiceAreas = React.lazy(() => import('./components/ServiceAreas'));
const Reviews = React.lazy(() => import('./components/Reviews'));
const FAQ = React.lazy(() => import('./components/FAQ'));

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        
        <Suspense fallback={<div className="py-20 text-center text-gray-500">Loading...</div>}>
          <Gallery />
          <ServiceAreas />
          <Reviews />
          <FAQ />
        </Suspense>
        
        {/* Simple Footer */}
        <footer className="py-12 px-4 md:px-8 bg-gray-900 text-white text-center">
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
    </div>
  );
}

export default App;
