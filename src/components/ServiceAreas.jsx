import React from 'react';

const ServiceAreas = () => {
  const areas = ['Miami', 'Hialeah', 'Doral', 'Coral Gables'];

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50 border-y border-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Serving All of Miami-Dade</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {areas.map((area) => (
            <div 
              key={area} 
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-secondary transition-colors"
            >
              <p className="font-bold text-gray-800 text-lg">{area}</p>
              <p className="text-secondary text-sm font-medium">Available Now</p>
            </div>
          ))}
        </div>
        
        <p className="mt-12 text-gray-500 font-medium">
          Don't see your city? Give us a call at <a href="tel:3054620143" className="text-call underline">305-462-0143</a> to check availability.
        </p>
      </div>
    </section>
  );
};

export default ServiceAreas;
