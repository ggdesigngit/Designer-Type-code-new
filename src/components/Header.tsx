import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200 sticky top-0 z-30" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <h1 className="text-2xl font-serif font-semibold text-secondary-800">
            What's Your Designer Type?
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;