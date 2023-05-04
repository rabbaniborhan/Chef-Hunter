/* eslint-disable no-unused-vars */
import React from 'react';
import { AiFillLike } from "react-icons/ai";
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ChefService = ({service}) => {
    
    // eslint-disable-next-line react/prop-types
    const{ picture,name,experience_years,likes
// eslint-disable-next-line react/prop-types
,num_recipes ,id   }= service;
    console.log(service);

    return (
        <div>
           <div className="card w-76 bg-base-100 shadow-xl font-serif">
  <figure><img src={picture} className='h-56 w-full' /></figure>
  <div className="card-body">
    <h2 className="card-title text-3xl font-serif font-bold italic">{name}</h2>
    <div className=''>
        <p className='text-xl font-bold pb-3'>Experience: {experience_years}</p>
        <p className='text-xl font-bold pb-3'> Number of Recipes:{num_recipes}</p>
    </div>
    <div className="flex items-center justify-end">
        <p className='flex items-center text-xl'><AiFillLike></AiFillLike>:{likes}</p>
     <Link to={`/detaills/${id}`}> <button className="btn btn-primary">View Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ChefService;