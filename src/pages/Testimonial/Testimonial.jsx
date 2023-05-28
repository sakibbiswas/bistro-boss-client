import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from 'react-icons/fa';
const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    const [rating, setRating] = useState(3);
    useEffect(() => {
        fetch('http://localhost:4000/reviews')
            .then(res => res.json())
            .then(data => {

                setReviews(data)
            })
    }, [])
    return (
        <section className='my-20'>
            <SectionTitle
                subheading={"What Our Clients Say"}
                heading={"TESTIMONIALS"}
            ></SectionTitle>
            <Swiper

                autoplay={
                    { delay: 5000 }
                }
                navigation={true}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
            >
                {/* <SwiperSlide>Slide 1</SwiperSlide> */}
                {
                    reviews.map(review =>

                        <SwiperSlide
                            key={review._id}>
                            <div className=" md:flex flex-col items-center mx-24 my-16">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}

                                    readOnly
                                />


                                <FaQuoteLeft className='w-[100px] h-[100px] mt-5'></FaQuoteLeft>



                                <p className='py-8'>{review.details}</p>
                                <h2 className="text-2xl text-orange-500">{review.name}</h2>
                            </div>
                        </SwiperSlide>)
                }


            </Swiper>

        </section>
    );
};

export default Testimonial;