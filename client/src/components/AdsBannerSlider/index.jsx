import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import banner1 from "../../assets/banner1.jpg";
import { Navigation } from 'swiper/modules';
const AdsBannerSlider = (props) => {
  return (
    <div className='py-5 w-full'>
       <Swiper
                slidesPerView={props.items}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
            <SwiperSlide>
            <div className='box'> 
            <img src={banner1} alt="" />
            </div>
            </SwiperSlide>

              </Swiper>
    </div>
  )
}

export default AdsBannerSlider
