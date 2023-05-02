/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
          <div>
          <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <p>Are you new? <Link to='/register' className='text-blue-700 underline'> register here..</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-gradient-to-r btn-primary from-indigo-600 to-purple-600 outline-none bottom-0">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
          </div>
        </div>
    );
};

export default Login;