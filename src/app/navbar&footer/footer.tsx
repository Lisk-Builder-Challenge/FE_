import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import icons

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-10 py-5 border-t border-gray-800"> {/* Increased padding to make footer taller */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 -mb-5">
        <div className="flex justify-between items-start border-b-2 border-gray-500 pb-8 mt-8 -mb-29"> {/* Updated border to gray */}
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Image
              src="/logoTulis.png" 
              alt="Logo"
              width={120} 
              height={40} 
              className="object-contain"
            />
          </div>

          {/* Navigation Sections */}
          <div className="flex space-x-12">
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Products</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-gray-400">Vaults</a></li>
                <li><a href="#" className="hover:text-gray-400">Docs</a></li>
                <li><a href="#" className="hover:text-gray-400">Risk Disclosure</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Community</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-gray-400">Discord</a></li>
                <li><a href="#" className="hover:text-gray-400">Twitter</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-gray-400">Terms</a></li>
                <li><a href="#" className="hover:text-gray-400">Privacy</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Connect</h4>
              <div className="flex space-x-6 text-xl">
                {/* Social media icons */}
                <a href="#" className="text-white hover:text-gray-400">
                  <FaFacebook />
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                  <FaInstagram />
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="text-center text-sm mt-30 text-gray-500"> {/* Adjusted color for the copyright text */}
          <p>© 2025 yielDrift. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
