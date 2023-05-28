import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Footer/Footer';
import Navbar from '../pages/Navbar/Navbar';

const Main = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login')
    const NoHeaderFooter = location.pathname.includes('signup')
    return (
        <div>
            {noHeaderFooter || NoHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || NoHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;