import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaWallet, FaCalendarAlt, FaUtensils, FaUser, FaBook, FaUsers } from 'react-icons/fa';
import UseCart from '../hooks/UseCart';
import UseAdmin from '../hooks/Useadmin';
const Deshbord = () => {
    // Todo-----
    // const isAdmin = true;
    const [isAdmin] = UseAdmin();
    const [cart] = UseCart()
    return (
        <div className="drawer drawer-mobile  ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex ">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side bg-[#D1A054] ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80  text-base-content">
                    {
                        isAdmin ? <>
                            <li>< NavLink to='/deshbord/adminhome'><FaHome></FaHome>AdMin  Home</ NavLink></li>
                            <li>< NavLink to='/deshbord/addItems'><FaUtensils></FaUtensils>Add Items</ NavLink></li>
                            <li>< NavLink to='/deshbord/manageItems'><FaWallet></FaWallet>Manage Items</ NavLink></li>

                            <li>< NavLink to='/deshbord/history'><FaBook></FaBook>Manage Bookings</ NavLink></li>
                            <li>< NavLink to='/deshbord/allusers'><FaUsers></FaUsers> ALL Users</ NavLink></li>


                        </> : <>

                            <li>< NavLink to='/deshbord/home'><FaHome></FaHome>User Home</ NavLink></li>
                            <li>< NavLink to='/deshbord/reservation'><FaCalendarAlt></FaCalendarAlt>Reservation</ NavLink></li>
                            <li>< NavLink to='/deshbord/history'><FaWallet></FaWallet>Payment History</ NavLink></li>
                            <li>< NavLink to='/deshbord/cart' >
                                <FaShoppingCart></FaShoppingCart>My Cart
                                <div className="badge badge-secondary">+{cart?.length || 0}</div>
                            </ NavLink>

                            </li>
                        </>
                    }


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