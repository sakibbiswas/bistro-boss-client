
import Main from "../layout/Main.jsx";
import Home from "../pages/Home/Home.jsx";
import { createBrowserRouter } from 'react-router-dom';
import Menu from "../pages/Menu/Menu.jsx";
import Shop from "../pages/order/shop.jsx";
import Login from "../Components/Login/Login.jsx";
import Signup from "../Components/signup/Signup.jsx";
import Privaterout from "../Components/privateroute/Privaterout.jsx";
import Deshbord from "../layout/Deshbord.jsx";
import MyCart from "../pages/Deshbord/MyCart.jsx";
import ALLusers from "../pages/ALLusers/ALLusers.jsx";
import AddItems from "../pages/additems/AddItems.jsx";
import AdminRoute from "../Components/privateroute/Aminroute/AdminRoute.jsx";
import ManageItems from "../pages/manageItems/manageItems.jsx";
import Payment from "../pages/Deshbord/payment/Payment.jsx";
import UserHome from "../pages/UserHome/UserHome.jsx";
import AdminHome from "../pages/AdminHome/AdminHome.jsx";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main> </Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/shop/:category',
                element: <Shop></Shop>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
        ]
    },
    {
        path: 'deshbord',
        element: <Privaterout><Deshbord></Deshbord></Privaterout>,
        children: [
            {
                path: 'cart',
                element: <MyCart></MyCart>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'userhome',
                element: <UserHome></UserHome>
            },
            // admin routes
            {
                path: 'adminhome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: 'allusers',
                element: <AdminRoute><ALLusers></ALLusers></AdminRoute>
            },
            {
                path: 'addItems',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path: 'manageItems',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            },

        ]
    }
]);