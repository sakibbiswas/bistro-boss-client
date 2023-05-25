import React from 'react';
import banner1 from '../../assets/home/chef-service.jpg'
const Chefbanner = () => {
    return (
        <div>
            <div className="hero  mt-10" style={{ backgroundImage: `url(${banner1})` }}>

                <div className="hero-content text-center text-neutral-content ">
                    <div className=" bg-slate-50 text-black h-56 w-auto m-10 p-10">
                        <h1 className="mb-5 text-5xl font-bold">Bistro Boss</h1>
                        <p className="mb-5 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. <br /> In deleniti eaque aut repudiandae et a id nisi.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chefbanner;