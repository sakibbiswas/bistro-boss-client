import React from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import FeaturedImg from '../../assets/home/featured.jpg'
const Featured = () => {
    return (
        <div className=" bg-fixed text-white pt-8 my-20" style={{ backgroundImage: `url(${FeaturedImg})` }}>



            <SectionTitle
                subheading={"Check it out"}
                heading={"FROM OUR MENU"}
            ></SectionTitle>


            <div className="md:flex bg-opacity-60 bg-slate-500 items-center justify-center pb-20 pt-12 px-36   ">
                <div className="md:w-[620px] ">
                    <img src={FeaturedImg} alt="" />
                </div>
                <div className="md:ml-10  space-y-3">
                    <p className='text-white '>March 20, 2023 <br />
                        WHERE CAN I GET SOME? <br />
                        Lorem ipsum dolor sit amet consectetur <br />
                        adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Read More</button>
                </div>
            </div>
        </div>



    );
};

export default Featured;
