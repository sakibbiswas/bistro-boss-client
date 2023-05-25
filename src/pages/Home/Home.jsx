import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Chefbanner from '../chefbanner/Chefbanner';
import Popularmenu from '../popularmanu/Popularmenu';
import Featured from '../featured/Featured';
import Testimonial from '../Testimonial/Testimonial';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div className='space-y-16'>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Chefbanner></Chefbanner>
            <Popularmenu></Popularmenu>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;