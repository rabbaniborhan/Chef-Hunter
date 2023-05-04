/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import SocialLogin from '../../components/SocialLogin/SocialLogin';






const Register = () => {
    // eslint-disable-next-line no-unused-vars
    const {createUser,loading,profileUpdate,} = useContext(AuthContext)

    const [email,setEmail] = useState("")
    const [password,setPassword]= useState("")
    const [name,setName] = useState("")
    const [photo, setPhoto] = useState("")
    const [error, setError] = useState("");
    const [success ,setSuccess]= useState("")

    const handleRegister = event =>{
        event.preventDefault();
           setError('')
           setSuccess("")


           
         if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Please add at least two numbers');
            return
        }
        else if (password.length < 6) {
            setError('Please add at least 6 characters in your password')
            return;
        }
       


        if((name, email,password, photo)){
            createUser(email,password)
            .then((result) => {
                console.log(result.user);
                setSuccess("successfully  singup")
                profileUpdate(name,photo)
              .then(()=>{
                
              })
              .catch((err) => {
                console.log(err.message);
              });
              })
              .catch((err) => {
                console.log(err.message);
              });

              

          }
          else {
            setError('please input feild fillup')

          }

    

    }


    return (
        <div className='flex justify-center pb-24 bg-base-200 '>
          {
            loading && <div><progress className="progress w-56 mx-auto progress-secondary"></progress><div className='mx-auto text-2xl font-bold'> Loading</div> </div>
          }
            <div className="hero min-h-screen pl-56">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">SingUp now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <p className='text-red-700'>{error}</p>
        <p className='text-green-700'>{success}</p>
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
          <button className="btn btn-primary bg-gradient-to-r from-indigo-600 to-purple-600 outline-none bottom-0" type='submit' onClick={handleRegister}>register</button>
        </div>
      </div>
    </div>
  </div>
</div>
<div className='bg-base-200 mx-auto pr-56 pt-56'> 
  <div className='w-72 mx-auto'><SocialLogin></SocialLogin></div>
</div>

        </div>
    );
};

export default Register;