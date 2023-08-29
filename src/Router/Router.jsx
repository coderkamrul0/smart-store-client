import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Shop from "../Pages/Shop/Shop";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import Cart from "../Pages/Cart/Cart";
import CheckOut from "../Pages/CheckOut/CheckOut";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/about',
            element: <About/>
        },
        {
            path: '/shop',
            element: <Shop/>
        },
        {
            path: '/single-product',
            element: <SingleProduct/>
        },
        {
            path: '/cart',
            element: <Cart/>
        },
        {
            path: '/checkout',
            element: <CheckOut/>
        }
    ]
  },
]);