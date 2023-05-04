// eslint-disable-next-line no-unused-vars
import React from 'react';

const Banner = () => {
    return (
        <div>
         <div className='flex lg:flex-row flex-col my-8 justify-around font-serif  mx-10 items-center'>
            <div className='ml-16 basis-1/2'>
                 <h1  className=' text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-5xl font-bold italic'>Welcome to <br />  Chef Hunter </h1>
                 <p className='p-6'>A Chef or Cook is responsible for using their culinary expertise to create appetizing dishes for diners to enjoy. Their duties include overseeing kitchen staff, tasting dishes before going to customers and restocking food produce as needed</p>
            </div>
            <div className='basis-1/2'>
                <img src="https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX5231682.jpg" className='w-1/2 ml-32' alt="" />
            </div>
         </div>
        </div>
    );
};

export default Banner;