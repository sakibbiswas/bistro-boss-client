import React from 'react';
import { Swiper, SwiperSlide, } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import slider1 from '../../assets/home/slide1.jpg'
import slider2 from '../../assets/home/slide2.jpg'
import slider3 from '../../assets/home/slide3.jpg'
import slider4 from '../../assets/home/slide4.jpg'
import slider5 from '../../assets/home/slide5.jpg'
import SectionTitle from '../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section className=''>
            <SectionTitle

                subheading={'From 11pm to 10pm'}
                heading={'ORDER ONLINE'}
            ></SectionTitle>
            <Swiper

                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination,]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slider1} alt="" />
                    <h2 className='text-center text-white -mt-20 uppercase text-3xl'>Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <h2 className='text-center text-white -mt-20 uppercase text-3xl'>Soups</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <h2 className='text-center text-white -mt-20 uppercase text-3xl'>Pizzas</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" />
                    <h2 className='text-center text-white -mt-20 uppercase text-3xl'>Dresserts</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} alt="" />
                    <h2 className='text-center text-white -mt-20 uppercase text-3xl'>Salads</h2>
                </SwiperSlide>

            </Swiper>





        </section>
    );
};

export default Category;