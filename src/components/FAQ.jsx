import React, { useState } from 'react';

const faqs = [
  {
    question: "What makes yours the best epoxy floors in Miami?",
    answer: "Our commitment to quality and Miami-specific expertise. We use premium industrial-grade resins tailored for South Florida's humidity, ensuring a bubble-free, high-gloss finish that lasts a lifetime."
  },
  {
    question: "How long does a garage floor coating installation take?",
    answer: "Typically, a standard garage floor coating takes 1-2 days to install, plus a 24-48 hour curing period before you can drive on it. We work efficiently to minimize disruption to your schedule."
  },
  {
    question: "Are your commercial epoxy systems durable enough for heavy traffic?",
    answer: "Absolutely. Our commercial epoxy systems are engineered for high-traffic environments, including warehouses, restaurant kitchens, and showrooms. They are chemical-resistant, non-slip, and extremely easy to maintain."
  },
  {
    question: "Is epoxy flooring better than polished concrete for Miami homes?",
    answer: "While both are great, epoxy offers superior stain resistance and a wider range of artistic finishes. In Miami, where water and humidity are factors, epoxy provides a non-porous seal that protects your concrete foundation."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-800 text-lg pr-4">{faq.question}</span>
                <svg 
                  className={`w-6 h-6 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`} 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className={`px-6 transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
