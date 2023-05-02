/* eslint-disable no-undef */
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import LoginLayout from './../Layout/LoginLayout/LoginLayout';
import Register from './../pages/Register/Register';

// eslint-disable-next-line no-unused-vars
const router = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>

    },

    {
        path:"/",
        element:<LoginLayout></LoginLayout>,
        children:[
            {
                path:'login',
                element:<Login></Login>,
            },
            {
                path:'register',
                element:<Register></Register>,
            },
        ],
    }

])

export default router