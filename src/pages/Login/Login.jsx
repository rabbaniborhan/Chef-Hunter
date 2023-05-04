/* eslint-disable no-unused-vars */
import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import SocialLogin from '../../components/SocialLogin/SocialLogin';



const Login = () => {
  const {login,loading} = useContext(AuthContext)
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const [error,setError] = useState("")
  const inputEmailRef =useRef(null);
  const inputPasswordRef = useRef(null)
  const[success,setSuccess] = useState("")

  
    const handleLogin = (event)=>{
         event.preventDefault();

        

         if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Please add at least two numbers');
            return
        }
        else if (password.length < 6) {
            setError('Please add at least 6 characters in your password')
            return;
        }
       
         if(( email,password )){
          login(email,password)
          .then((result) => {
              setSuccess("successfully log in")
            })
            .catch((err) => {
            setError(err.message);
            });
        }
             

        inputEmailRef.current.value = '';
        inputPasswordRef.current.value='';

    }

    return (

          <div className='flex justify-center pb-24 bg-base-200 '>
             {
            loading && <div><progress className="progress w-56 mx-auto progress-secondary"></progress><div className='mx-auto text-2xl font-bold'> Loading</div> </div>
          }
          <div className="hero min-h-screen pl-56">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <p className='text-red-700'>{error}</p>
      <p className='text-green-700'>{success}</p>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" onChange={(e) => setEmail(e.target.value)} ref={inputEmailRef}  required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered"  onChange={(e) => setPassword(e.target.value)} ref={inputPasswordRef}  required/>
          <label className="label">
            <p>Are you new? <Link to='/register' className='text-blue-700 underline'> register here..</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-gradient-to-r btn-primary from-indigo-600 to-purple-600 outline-none bottom-0" onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
<div className='bg-base-200 mx-auto pr-56 pt-44'> 
  <div className='w-72 mx-auto'><SocialLogin></SocialLogin></div>
</div>
</div>
    );
};

export default Login;