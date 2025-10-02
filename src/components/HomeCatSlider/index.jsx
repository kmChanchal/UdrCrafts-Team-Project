import React from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const HomeCatSlider = () => {
  return (
    <div className='HomeCatSlider'>
      <div className='container'>
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {[...Array(12)].map((index) => (
            <SwiperSlide key={`slide-${index}`}>
              <Link to='/'>
                <div className='item py-8 px-3 bg-white rounded-sm text-center flex flex-center items-center justify-center flex-col'>
                  <img src="https://serviceapi.spicezgold.com/download/1741660988059_ele.png" className='w-[60px] transition-all'/>
                  <h3 className='text-[15px] font-[500] mt-3 '>Smart Tablet</h3>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
export default HomeCatSlider
