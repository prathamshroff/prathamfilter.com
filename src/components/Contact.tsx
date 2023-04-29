// src/components/Contact.tsx
import React from 'react';
import { siteInfo } from '../config/siteInfo';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4 bg-white p-4 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
          <p className="text-gray-900">
            <strong>Address:</strong> {siteInfo.address}
          </p>
          <p>
            <strong className="text-gray-900">Email:</strong> <a href={`mailto:${siteInfo.email}`} className="text-blue-600">{siteInfo.email}</a>
          </p>
          <p>
            <strong className="text-gray-900">Phone:</strong> <a href={`tel:${siteInfo.phoneNumber}`} className="text-blue-600">{siteInfo.phoneNumber}</a>
          </p>
        </div>
        <div className="bg-white shadow-md">
          <iframe
            title={siteInfo.companyName}
            src={siteInfo.mapsLink}
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="mt-8 bg-white p-4 shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-900">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            className="w-full p-2 border border-gray-300 rounded"
            rows={4}
            required
            ></textarea>
            <div className="text-center">
            <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg">
            Submit
            </button>
            </div>
            </form>
            </div>
            </div>
            );
            };
            
            export default Contact;