/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/png-clipart-captain-cook-logo-logo-kitchen-cooking-graphic-designer-chef-knife-and-fork-style-text-chinese-style.png'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Avatar from '../Avatar/Avatar';

const Navigation = () => {


    const {user,logOut}=useContext(AuthContext)

    const handleLogout=()=>{
        logOut()
        .then()
        .catch(error => console.log(error))
          
    }
    return (
        <div>
            <div className="navbar bg-base-400  font-serif py-3 shadow-lg flex justify-around items-center text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text ">
            <div className=' logo'>
               <Link to='/'> <h1 className=' italic font-bold text-4xl'>Chef <span className=' '>Hunter</span></h1></Link>
            </div>
            <div className=' flex justify text-lg font-medium'>
                <Link to='/' className='ml-4'>Home</Link>
                <Link to='blog ' className='ml-4'>Blog</Link>
                <Link to ='/register' className='ml-4'>Sing Up</Link>
            </div>
            <div className="">

                {
                    user && <Avatar></Avatar>
                }
             

             {
                user?<button className="btn bg-gradient-to-r from-indigo-600 to-purple-600 " onClick={handleLogout}>LogOut</button>: <Link to='/login' className='btn bg-gradient-to-r from-indigo-600 to-purple-600 '><Link to='/login'>Login</Link></Link>
             }
            </div>
            </div>
        </div>
    );
};

export default Navigation;