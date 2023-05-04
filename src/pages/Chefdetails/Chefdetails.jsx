/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import { useParams } from 'react-router-dom';

const Chefdetails = () => {


    const { id } = useParams();

    useEffect(() => {
      fetch(`https://chef-hunter-server-rabbaniborhan.vercel.app/chefdata/${id}`)
        .then((res) => res.json())
        .then((data) => console.log(data.item));
    }, []);
    console.log(id);
    return (
        <div>
            
            <h1>details</h1>
          
        </div>
    );
};

export default Chefdetails;