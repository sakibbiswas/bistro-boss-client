
import Main from "../layout/Main.jsx";
import Home from "../pages/Home/Home.jsx";
import { createBrowserRouter } from 'react-router-dom';
import Menu from "../pages/Menu/Menu.jsx";
import Shop from "../pages/Shop/Shop.jsx";
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
                path: 'menu',
                element: <Menu></Menu>
            },
            {
                path: 'shop',
                element: <Shop></Shop>
            }
        ]
    },
]);