import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-950 border-b border-gray-800 sticky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-14 sm:h-16">
          <span className="text-xl sm:text-xl font-semibold text-gray-100 tracking-tight">
            easyPG
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;