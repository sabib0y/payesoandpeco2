import React from 'react';
import banner_overlay from '@assets/img/slider/slider-2.png'
import carouselImages from './carousel-data';
import Image from 'next/image';

//swiper style
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css/bundle';

const BannerArea = () => {
   return (
      <div className="banner-area banner-area2">
         <div className="swiper-container">
            <div className="swiper-wrapper">
               <div className="swiper-slide">
                  <div className="single-banner single-banner-2 banner-970">

                     <div className='carousel-wrapper'>
                        <div className="hero-text">
                           <div className="banner-content banner-content2 mx-auto text-center banner-content2-1">
                              <h1 className="banner-title" data-animation="fadeInUp" data-delay=".5s">
                                 Transport Anything <br /> From Anywhere.
                              </h1>
                           </div>
                        </div>
                        <Swiper
                           modules={[Autoplay]}
                           loop={true}
                           autoplay={{
                              delay: 2000,
                           }}
                        >
                           {
                              carouselImages.map((image, index) => (
                                 <SwiperSlide key={index}>
                                    <Image src={`/assets/img/carousel/${image}`} alt='carousel image' width={1000} height={600} className='carousel-image' />
                                 </SwiperSlide>
                              ))
                           }
                        </Swiper>
                     </div>

                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default BannerArea;