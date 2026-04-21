import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass h-16 flex items-center px-4 md:px-8 justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xl">M</span>
        </div>
        <span className="font-bold text-lg md:text-xl tracking-tight text-gray-900">Miami Epoxy Resin</span>
      </div>
      
      <a 
        href="tel:3054620143"
        className="bg-call text-white px-5 py-2 rounded-full font-bold text-sm md:text-base btn-hover shadow-lg flex items-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
        CALL NOW
      </a>
    </header>
  );
};

export default Header;
