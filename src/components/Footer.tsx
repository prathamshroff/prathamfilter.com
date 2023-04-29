// src/components/Footer.tsx
import React from 'react';
import { siteInfo } from '../config/siteInfo';

const Footer: React.FC = () => {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle subscription logic here
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">{siteInfo.companyName}</h3>
            <p>Address: {siteInfo.address}</p>
            <p>Email: <a href={`mailto:${siteInfo.email}`} className="text-blue-400">{siteInfo.email}</a></p>
            <p>Phone: <a href={`tel:${siteInfo.phoneNumber}`} className="text-blue-400">{siteInfo.phoneNumber}</a></p>
            <div className="flex space-x-4">
              {/* Social media icons and links */}
              <a href={siteInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                {/* Facebook Icon */}
              </a>
              <a href={siteInfo.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                {/* Twitter Icon */}
              </a>
              <a href={siteInfo.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                {/* LinkedIn Icon */}
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Useful Links</h3>
            <ul className="space-y-2">
              {/* List of useful links */}
              {siteInfo.usefulLinks.map((link, index) => (
                <li key={index}><a href={link.url}>{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="hidden md:block space-y-4">
            <h3 className="text-xl font-bold">Popular Products</h3>
            <ul className="space-y-2">
              {/* List of popular products */}
              {siteInfo.popularProducts.map((product, index) => (
                <li key={index}><a href={product.url}>{product.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Subscribe to Mailing List</h3>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} {siteInfo.companyName}. All rights reserved.</p>
          <p className="text-sm">Designed & Developed by <a href={siteInfo.developer.portfolio} className="text-blue-400">{siteInfo.developer.name}</a></p>
        </div>
      </div>
    </footer>
 );
};

export default Footer;
