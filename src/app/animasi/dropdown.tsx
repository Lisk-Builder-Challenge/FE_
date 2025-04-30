import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface DropdownProps {
  buttonText: string;
  children: React.ReactNode;
  width?: string;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  buttonText,
  children,
  width = 'w-72',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className={`flex flex-col ${className}`}>
      <button
        onClick={toggleDropdown}
        className={`${width} px-5 py-2.5 rounded-lg shadow-[0px_10px_10px_0px_rgba(0,0,0,0.10)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-white/10 backdrop-blur-[10px] flex justify-between items-center hover:bg-white/5 transition-colors duration-200`}
        aria-expanded={isOpen}
        aria-controls={`dropdown-${buttonText.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <span className="text-white text-base font-medium">{buttonText}</span>
        <ChevronDown
          className={`w-6 h-6 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      <div
        id={`dropdown-${buttonText.replace(/\s+/g, '-').toLowerCase()}`}
        className={`${width} mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } px-5 py-2.5 rounded-lg shadow-[0px_10px_10px_0px_rgba(0,0,0,0.10)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-white/10 backdrop-blur-[10px]`}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;