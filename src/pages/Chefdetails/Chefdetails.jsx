/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillLike } from "react-icons/ai";
import Recipes from '../../components/Recipes/Recipes';

const Chefdetails = () => {

   const [chef,setChef] =useState([])
    const { id } = useParams();

    useEffect(() => {
      fetch(`https://chef-hunter-server-rabbaniborhan.vercel.app/chefdata/${id}`)
        .then((res) => res.json())
        .then((data) => setChef(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // console.log(chef);
    const{description,experience_years,likes,name,num_recipes,picture,recipes
    }=chef;
   
   
    return (
        <div className='bg-base-100  my-24'>
            
        <div className="card b card-side bg-base-100 shadow-xl w-4/5 mx-auto font-serif">
  <figure className='basis-1/2'><img src={picture} alt="Movie " className='w-3/5 rounded'/></figure>
  <div className="card-body basis-1/2">
    <h2 className="card-title text-2xl">{name}</h2>
    <p>{description}</p>
    <div className='flex items-center justify-end text-xl font-bold'>
        <p>Exprenience:{experience_years}</p>
        <p>number of recipes:{num_recipes} </p>
     </div>
     <div className='flex items-center mx-auto text-3xl font-bold'><AiFillLike></AiFillLike>:{likes}</div>
     
   
  </div>
</div>


<div className='flex w-4/5 mx-auto my-20 justify-between'>
    
{
    recipes?.map((recipe,index)=><Recipes recipe={recipe} key={index}></Recipes>)
}
</div>
          
        </div>
    );
};

export default Chefdetails;