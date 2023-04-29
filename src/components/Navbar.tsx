import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteInfo } from '../config/siteInfo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white text-gray-700 p-4 shadow">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        
        {/* Wrap the logo image with the Link component */}
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <Image
              src={siteInfo.companyLogo} // Use the logo path from siteInfo
              alt="Company Logo"
              width={180} // Set the width of the logo
              height={60} // Set the height of the logo
            />
          </div>
        </Link>
        
        <button className="text-gray-700 inline-flex p-3 hover:bg-gray-100 rounded lg:hidden ml-auto hover:text-blue-600 outline-none" onClick={() => setIsOpen(!isOpen)}>
          <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
            <path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" />
          </svg>
        </button>

        <div className={`${isOpen ? '' : 'hidden'} w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
          <ul className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
            <li className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-700 font-semibold items-center justify-center hover:bg-gray-100 hover:text-blue-600">
              <button onClick={() => scrollToSection('home')}>Home</button>
            </li>
            <li className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-700 font-semibold items-center justify-center hover:bg-gray-100 hover:text-blue-600">
              <button onClick={() => scrollToSection('about')}>About</button>
            </li>
            <li className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-700 font-semibold items-center justify-center hover:bg-gray-100 hover:text-blue-600">
              <button onClick={() => scrollToSection('locations')}>Locations</button>
            </li>
            <li className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-700 font-semibold items-center justify-center hover:bg-gray-100 hover:text-blue-600">
              <button onClick={() => scrollToSection('team')}>Team</button>
            </li>
            <li className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-700 font-semibold items-center justify-center hover:bg-gray-100 hover:text-blue-600">
              <button onClick={() => scrollToSection('contact')}>Contact</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
