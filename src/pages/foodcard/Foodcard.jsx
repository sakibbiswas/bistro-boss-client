import React, { useContext } from 'react';
import { Authcontext } from '../../Components/Providers/Authprovider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Foodcard = ({ item }) => {
    const { name, price, recipe, image } = item;
    const { user } = useContext(Authcontext)
    const navigate = useNavigate();
    const handelAddToCart = item => {
        // console.log(item);
        if (user) {
            fetch('http://localhost:4000/carts')
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }

                })
        }
        else {

            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            })
        }
    }
    return (


        //

        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>  <img src={image} alt="Shoes" className="rounded-xl w-[400px] h-[300px]" /></figure>
            <p className='bg-slate-950 text-white absolute right-0 mr-4 mt-4 px-4'>${price}</p>
            <div className="card-body space-y-3">
                <h2 className="font-semibold text-center">{name}</h2>
                <p className='text-center font-semibold'>{recipe}</p>
                <div className=" justify-center ">
                    <button onClick={() => handelAddToCart(item)} className="btn btn-outline border-orange-400  border-0 border-b-4  mt-4">Add to cart</button>
                </div>
            </div>
        </div>

    );
};

export default Foodcard;