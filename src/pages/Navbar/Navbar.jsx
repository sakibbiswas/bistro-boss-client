import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../Components/Providers/Authprovider';
import { FaShoppingCart } from 'react-icons/fa';
import UseCart from '../../hooks/UseCart';
import UseAdmin from '../../hooks/Useadmin';
const Navbar = () => {
    const [cart] = UseCart()
    const [isAdmin] = UseAdmin();
    const { user, logOut } = useContext(Authcontext)
    const handelLogout = () => {
        logOut()
            .then(() => {



            })
            .catch(error => console.log(error))
    }
    const navLi = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our menu</Link></li>
        <li><Link to='/shop/salad'>Our Shop</Link></li>
        <li><Link to={isAdmin ? 'deshbord/adminhome' : 'deshbord/userhome'}>Dashboard</Link></li>
        <li><Link to='/deshbord/cart'>
            <div className="mr-5">
                <button className="btn gap-2">
                    <FaShoppingCart className='w-10' ></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart?.length || 0}</div>
                </button>
            </div>
        </Link></li>

        {user?.email ?
            <>

                <div className=" mt-4 w-12  ">
                    <div className="w-12 rounded ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img title={user.displayName} src={user.photoURL} />
                    </div>
                </div>
                <li><button className='btn  ml-5 mt-5' onClick={handelLogout}>Logout</button></li>
            </> :
            <li><Link to='/login'>Login</Link></li>

        }

    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-60 bg-black text-white max-w-screen-xl   mb-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">

                        {navLi}

                    </ul>

                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img src='' alt="" />
                </Link>
                <h2 className='text-2xl uppercase'>Bistro Boss</h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {navLi}


                </ul>
            </div >
            <div className="navbar-end">
                <button className="btn btn-outline btn-secondary">Apointment</button>
            </div>
        </div >
    );
};

export default Navbar;