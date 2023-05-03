/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const SocialLogin = () => {


    const {loading,googleLogin,Githublogin} = useContext(AuthContext)


    const handleGoogle =()=>{
        googleLogin()
        .then((result) => {
          console.log(result.user);
        })
        .catch((err) => {
          console.log(err.message);
        });
      }


      const handleGithub =()=>{
        Githublogin()
        .then((result) => {
            console.log(result.user);
          })
          .catch((err) => {
            console.log(err.message);
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