
import Main from "../layout/Main.jsx";
import Home from "../pages/Home/Home.jsx";
import { createBrowserRouter } from 'react-router-dom';
import Menu from "../pages/Menu/Menu.jsx";
import Shop from "../pages/order/shop.jsx";
import Login from "../Components/Login/Login.jsx";
import Signup from "../Components/signup/Signup.jsx";
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
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <Signup></Signup>
            },
        ]
    },
]);