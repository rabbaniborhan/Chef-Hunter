/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {


    const {loading,googleLogin,Githublogin} = useContext(AuthContext)
    const location = useLocation();
  const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';



    const handleGoogle =()=>{
        googleLogin()
        .then((result) => {
          navigate(from, { replace: true })
        })
        .catch((err) => {
         
        });
      }


      const handleGithub =()=>{
        Githublogin()
        .then((result) => {
          navigate(from, { replace: true })
           
          })
          .catch((err) => {
           
          });
      }
    
    return (
        <div className=" mx-auto">
        <div className="w-72" onClick={handleGoogle}>
          <img
          
            className=" w-72"
            src="https://i.ibb.co/gSTHXZJ/google-btn.png"
            alt=""
          />
        </div>
        <div className="w-72 pt-2" onClick={handleGithub}>
          <img
            className=""
            src="https://i.ibb.co/g9f4P0S/github-btn.png"
            alt=""
          />
        </div>
      </div>
    );
};

export default SocialLogin;