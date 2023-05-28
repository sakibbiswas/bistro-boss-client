import React from 'react';

const Foodcard = ({ item }) => {
    const { name, price, recipe, image } = item;

    return (


        //

        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>  <img src={image} alt="Shoes" className="rounded-xl w-[400px] h-[300px]" /></figure>
            <p className='bg-slate-950 text-white absolute right-0 mr-4 mt-4 px-4'>${price}</p>
            <div className="card-body space-y-3">
                <h2 className="font-semibold text-center">{name}</h2>
                <p className='text-center font-semibold'>{recipe}</p>
                <div className=" justify-center ">
                    <button className="btn btn-outline border-orange-400  border-0 border-b-4  mt-4">Add to cart</button>
                </div>
            </div>
        </div>

    );
};

export default Foodcard;