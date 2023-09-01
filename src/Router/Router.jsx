import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Shop from "../Pages/Shop/Shop";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import Cart from "../Pages/Cart/Cart";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import AdminLayout from "../Layout/AdminLayout";
import AdminHome from "../Pages/AdminDashboard/AdminHome"
import MainLayout from "../Layout/MainLayout";
import PrivateRoute from "./PrivateRoute";
import Customers from "../Pages/AdminDashboard/Customers";
import Success from "../Pages/Success";
import Cancel from "../Pages/Cancel";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
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
            path: '/products/:id',
            element: <SingleProduct/>
        },
        {
            path: '/cart',
            element: <Cart/>
        },
        {
            path: '/checkout',
            element: <PrivateRoute><CheckOut/></PrivateRoute>
        },
        {
            path: '/contact',
            element: <Contact/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/register',
            element: <Registration/>
        },
        {
            path: '/success',
            element: <Success/>
        },
        {
            path: '/cancel',
            element: <Cancel/>
        }
    ]
  },
  {
    path: '/dashboard',
    element: <AdminLayout/>,
    children: [
        {
            path: '/dashboard',
            element: <AdminHome/>
        },
        {
            path: '/dashboard/customers',
            element: <Customers/>
        }
    ]
  }
]);