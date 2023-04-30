import React from 'react';
import { vendors } from '../config/siteInfo/vendors';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/legacy/image'

// Import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

const PartnerLogos: React.FC = () => {
  return (
    <div className="relative bg-white py-5">
      <div className="container mx-auto px-4">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: '.swiper-pagination' }}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="swiper-container"
        >
          {vendors.map((vendors, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center h-full">
              <div className="flex items-center justify-center h-full">
                <Image
                  src={vendors.logo} alt={vendors.name}
                  width={200} height={100}
                  className="h-12 object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination mt-1"></div>
      </div>
    </div>
  );
};

export default PartnerLogos;
