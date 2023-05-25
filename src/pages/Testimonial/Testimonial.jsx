import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    const [rating, setRating] = useState(3);
    useEffect(() => {
        fetch('review.json')
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


                navigation={true}
                modules={[Navigation]}
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