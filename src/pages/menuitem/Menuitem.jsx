import React from 'react';

const Menuitem = ({ item }) => {
    const { name, price, recipe, image } = item
    return (
        <div>
            <div className='flex'>
                <img style={{ borderRadius: "0px 200px 200px 200px" }} className='w-[100px]' src={image} alt="" />
                <div className="">
                    <p className='uppercase'>{name}------------</p>
                    <p>{recipe}</p>
                </div>
                <p className='text-yellow-400'>${price}</p>

            </div>

        </div>
    );
};

export default Menuitem;