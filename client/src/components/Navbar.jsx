import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <nav className=" border-double bg-gray-950 border-b border-gray-900 sticky shadow-2xl z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-14 sm:h-16">
          <Link to={{
            pathname: "/"
          }}>
            <span onClick={() => redirect('/')} className="text-xl sm:text-xl hover:cursor-pointer font-[Unbounded] font-bold  text-gray-300 p-2 rounded-md  tracking-tight shadow-2xl ">
              EasyPG <span className='text-3xl'>🏠</span>
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;