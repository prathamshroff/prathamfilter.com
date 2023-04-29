// pages/index.tsx
import React from 'react';

import Head from 'next/head';
import { NextPage } from 'next';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import Alert from '../components/Alert';
import { siteInfo } from '../config/siteInfo';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Head>
        <title>Pratham Filter Industries</title>
        <link rel="icon" href="assets/favicons/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="assets/favicons/icon.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="assets/favicons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="assets/favicons/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="assets/favicons/apple-touch-icon.png" />
        <link rel="android-chrome" type="image/png" sizes="192x192" href="assets/favicons/android-chrome-192x192.png" />
        <link rel="android-chrome" type="image/png" sizes="512x512" href="assets/favicons/android-chrome-512x512.png" />
        <link rel="manifest" href="assets/favicons/site.webmanifest"></link>
      </Head>
      
      <Navbar />
      <Alert message={siteInfo.currentAlertMessage} />
      <Hero />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
