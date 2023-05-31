import React from 'react';
import { Helmet } from 'react-helmet-async';
import UseCart from '../../hooks/UseCart';
import { INDEXEDDB } from 'localforage';

const MyCart = () => {
    const [cart] = UseCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    return (
        <div className='mt-28'>
            <Helmet>
                <title>Bistro boss || MY cart</title>
            </Helmet>
            <div className="uppercase font-semibold flex justify-center items-center 
             h-10 gap-10 ">
                <h2 className='text-3xl'>Total-Items : {cart.length}</h2>
                <h2 className='text-3xl'>Total-Price : ${total}</h2>
                <button className='btn btn-warning btn-sm'>Pay</button>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>FoodImage</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => <tr
                            key={item._id}>
                            <td>
                                {index + 1}
                            </td>
                            <th>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold"></div>
                                        <div className="text-sm opacity-50"></div>
                                    </div>
                                </div>
                            </th>
                            <td>
                                {item.name}
                            </td>
                            <td className='text-end'>
                                ${item.price}
                            </td>
                            <td>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </td>
                        </tr>
                        )}




                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyCart;