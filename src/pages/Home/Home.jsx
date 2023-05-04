/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import ChefService from '../../components/ChefService/ChefService';

const Home = () => {


    const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    fetch("https://chef-hunter-server-rabbaniborhan.vercel.app/chefdata")
      .then((result) => result.json())
      .then((data) => setServicesData(data));
  }, []);



  console.log(servicesData);
    


    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <hr className='border border-blue-700 w-4/5 mx-auto mt-20'/>
             <div className='w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-3 my-32 gap-4'>
             {servicesData.map(service=><ChefService service={service}key={service.id}></ChefService>)}
             </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;