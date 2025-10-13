import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/baneer2.png";
import banner3 from '../../assets/banner3.jpg';
import banner4 from "../../assets/banner4.jpg";
import { Navigation } from 'swiper/modules';
import BannerBox from '../BannerBox';
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
           <BannerBox img={banner1} link={'/'} />
            </SwiperSlide>

             <SwiperSlide>
           <BannerBox img={banner2} link={'/'} />
            </SwiperSlide>

             <SwiperSlide>
           <BannerBox img={banner3} link={'/'} />
            </SwiperSlide>

             <SwiperSlide>
           <BannerBox img={banner4} link={'/'} />
            </SwiperSlide>
              </Swiper>
    </div>
  )
}

export default AdsBannerSlider
