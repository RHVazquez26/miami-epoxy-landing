import React from 'react';

const Hero = () => {
  return (
    <section className="pt-24 pb-12 px-4 md:px-8 text-center bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          Miami's Premium <br />
          <span className="text-secondary">Epoxy Resin Floors</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Transform your garage, kitchen, or commercial space with high-gloss, durable, and stunning epoxy finishes. The #1 choice in Miami.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a 
            href="https://wa.me/13054620143?text=I'd like to get a free estimate for an epoxy project."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-whatsapp text-white px-8 py-5 rounded-2xl font-bold text-xl btn-hover shadow-xl flex items-center justify-center gap-3"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-6 h-6 invert" />
            WhatsApp Estimate
          </a>
          
          <a 
            href="tel:3054620143"
            className="w-full md:w-auto bg-call text-white px-8 py-5 rounded-2xl font-bold text-xl btn-hover shadow-xl flex items-center justify-center gap-3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Phone Call
          </a>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-gray-500 font-medium px-4">
          <div className="flex items-center gap-2">
            <span className="text-secondary font-bold">✓</span> 100% Satisfaction
          </div>
          <div className="flex items-center gap-2">
            <span className="text-secondary font-bold">✓</span> Miami Owned & Operated
          </div>
          <div className="flex items-center gap-2">
            <span className="text-secondary font-bold">✓</span> Lifetime Durability
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
