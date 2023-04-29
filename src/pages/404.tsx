// pages/404.tsx
import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar'; // Import the Navbar component
import Footer from '../components/Footer'; // Import the Footer component

const Custom404: React.FC = () => {
  return (
    <>
      <Navbar /> {/* Include the Navbar component */}
      <div className="flex flex-1 justify-center items-center text-center py-11 md:py-20">
        <div>
          <h1 className="text-6xl font-bold">404</h1>
          <p className="text-2xl mt-4">Page Not Found</p>
          <p className="mt-4">The page you are looking for does not exist or has been moved.</p>
          <Link href="/">
            <button className="mt-8 bg-blue-600 text-white font-bold py-2 px-6 rounded-lg">
              Go to Home
            </button>
          </Link>
        </div>
      </div>
      <Footer /> {/* Include the Footer component */}
    </>
  );
};

export default Custom404;
