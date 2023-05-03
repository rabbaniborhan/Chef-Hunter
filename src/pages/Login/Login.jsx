/* eslint-disable no-unused-vars */
import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';



const Login = () => {
  const {login} = useContext(AuthContext)
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const [error,setError] = useState("")
  const inputEmailRef =useRef(null);
  const inputPasswordRef = useRef(null)

  
    const handleLogin = (event)=>{
         event.preventDefault();

        
         if(( email,password )){
          login(email,password)
          .then((result) => {
              console.log(result.user);
            })
            .catch((err) => {
              console.log(err.message);
            });
        }
             

        inputEmailRef.current.value = '';
        inputPasswordRef.current.value='';

    }

    return (
          <div>
          <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <p className='text-red-700'>{error}</p>
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
</div>
    );
};

export default Login;