/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Recipes = ({recipe}) => {

    const notify = () => toast("Favorite add successfull");
  const [buttonD,setButtonD]=useState(false);




    const handeFavorite=()=>{
        console.log('click');
        setButtonD(true)
        notify()
    }

    const {details,ingredient,name,picture
    }=recipe;
    return (
        <div>
            <div className="card w-72 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={picture} alt="Shoes" className="rounded-xl h-64 w-full" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title" >{name}</h2>
    {
        ingredient?.map((p,index)=> <li key={index}>{p}</li>)
    }
    <div className="card-actions">
      <button className="btn btn-primary" disabled={buttonD} onClick={handeFavorite}>favorite</button>
    </div>
  </div>
</div>
<ToastContainer />
        </div>
    );
};

export default Recipes;