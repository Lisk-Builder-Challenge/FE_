import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Image
              src="/logoAtas.png" // Ganti dengan path logo Anda
              alt="Logo"
              width={100}
              height={100}
              className="h-8 w-32"
            />
          </div>

          {/* Navigation Section */}
          <div className="ml-auto flex space-x-4">
            <a href="#" className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Why Us
            </a>
            <a href="#" className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Our Feature
            </a>
            <a href="#" className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Vault
            </a>
            <a href="#" className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              How It Works
            </a>
            <a href="#" className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Docs
            </a>
            <button className="bg-black text-white px-4 py-2 rounded-md">
              Launch App
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
