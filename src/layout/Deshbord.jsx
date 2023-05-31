import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaWallet, FaCalendarAlt } from 'react-icons/fa';
import UseCart from '../hooks/UseCart';
const Deshbord = () => {
    const [cart] = UseCart()
    return (
        <div className="drawer drawer-mobile  ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054] ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80  text-base-content">

                    <li>< NavLink to='/deshbord/home'><FaHome></FaHome>User Home</ NavLink></li>
                    <li>< NavLink to='/deshbord/reservation'><FaCalendarAlt></FaCalendarAlt>Reservation</ NavLink></li>
                    <li>< NavLink to='/deshbord/history'><FaWallet></FaWallet>Payment History</ NavLink></li>
                    <li>< NavLink to='/deshbord/cart' >
                        <FaShoppingCart></FaShoppingCart>My Cart
                        <div className="badge badge-secondary">+{cart?.length || 0}</div>
                    </ NavLink>

                    </li>
                    <div className="divider"></div>
                    <li>< NavLink to='/'><FaHome></FaHome> Home</ NavLink></li>
                    <li>< NavLink to='/menu'>Our menu

                    </ NavLink></li>
                    <li>< NavLink to='/shop/salad'>Our Shop</ NavLink></li>
                    <li>< NavLink></ NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Deshbord;