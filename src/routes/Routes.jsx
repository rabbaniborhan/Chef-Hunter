/* eslint-disable no-undef */
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import LoginLayout from './../Layout/LoginLayout/LoginLayout';
import Register from './../pages/Register/Register';
import Blog from '../pages/Blog/Blog';
import Errorpage from '../pages/Errorpage/Errorpage';
import Chefdetails from '../pages/Chefdetails/Chefdetails';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';

// eslint-disable-next-line no-unused-vars
const router = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>,
        errorElement:<Errorpage></Errorpage>,

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
            {
                path:'blog',
                element:<Blog></Blog>
            },
            {
                path:"detaills/:id",
                element:<PrivateRoute> 
                     <Chefdetails> 
                     </Chefdetails>
                </PrivateRoute>
            }

        ],
    }

])

export default router