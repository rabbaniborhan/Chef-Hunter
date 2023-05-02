/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';






const Register = () => {
    // eslint-disable-next-line no-unused-vars
    const {createUser} = useContext(AuthContext)

    const [email,setEmail] = useState("")
    const [password,setPassword]= useState("")
    const [name,setName] = useState("")
    const [photo, setPhoto] = useState("")

    const handleRegister = event =>{
        event.preventDefault();
        if((name, email,password, photo)){
            createUser(email,password)
            .then((result) => {
                console.log(result.user);
              })
              .catch((err) => {
                console.log(err.message);
              });
          }

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">SingUp now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100" onSubmit={handleRegister}>
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="test" placeholder="Name" name='name' className="input input-bordered" onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name='email' className="input input-bordered" onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered" onChange={(e) => setPhoto(e.target.value)} required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" onChange={(e) => setPassword(e.target.value)} required />
          <label className="label">
          <p> Already Have an Account? <Link to="/login" className='text-blue-700 underline'>Login</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-gradient-to-r from-indigo-600 to-purple-600 outline-none bottom-0" type='submit' onClick={handleRegister}>Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;