// src/components/Hero.tsx
import React from 'react';
import Image from 'next/legacy/image';

const Hero: React.FC = () => {
  return (
    <div className="relative flex-grow lg:h-screen">
      <div className="hidden md:block absolute inset-0 overflow-hidden">
        <Image
          src="/assets/img/hero.jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
        />
      </div>
      <div className="md:hidden absolute inset-0 overflow-hidden">
        <Image
          src="/assets/img/hero-mobile.jpg"
          alt="Hero Image Mobile"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          quality={100}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black opacity-60"></div>
      <div className="relative h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Site Under Maintenance</h1>
        <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg">Contact Us</button>
      </div>
      <style jsx>{`
        @media (max-width: 1024px) {
          .lg\:h-screen {
            height: 60vh;
          }
        }

        @media (max-width: 640px) {
          .lg\:h-screen {
            height: 40vh;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
