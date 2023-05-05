/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import  LazyLoad  from 'react-lazy-load';


const AboutUs = () => {
    return (
        <div className='w-4/5 mx-auto '>
           <div className='flex my-20 items-center lg:flex-row flex-col'>
           <div  className='basis-1/2'> <LazyLoad ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScEOTwjg3bE1CEsQNAgTmxqf78_TqppirE30vAILk3zBBu5yAwUTYnavj9jfQbyBtGr48&usqp=CAU" className='w-96  rounded-full' alt="" /></LazyLoad></div>
            <div className='basis-1/2'>
                <h1 className='text-4xl font-serif font-bold py-4'>Sound familar?If so ,this experience is for you</h1>
                <p>- you are to busy to prepare media</p>
                <p>- you'd other spend time with your family or doing something you have  </p> 
                <p>- you want healthly,home cooled media</p>
                <p>- you are want to experiance somet hing defferent</p>

                <button className="btn bg-gradient-to-r btn-primary from-indigo-600 to-purple-600 outline-none my-4">choose a plan</button>

            </div>

           </div>


            <div className='my-24'>
             
              
              <div className='flex items-center lg:flex-row flex-col'>
              <div className='basis-1/2 p-10'>
              <h1 className='text-5xl font-serif font-bold text-center text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text py-5'>About Us</h1>
                <p className='font-serif italic'>Every hard-working candidate in culinary arts hopes to hear this at least once in their career span: “Give my compliments to the chef”. The eternal bliss of this moment takes time and persistence, and it all starts from making a Chef Resume.</p>
              </div>
                <div className='basis-1/2'> <img src="https://nationaltoday.com/wp-content/uploads/2021/07/shutterstock_1518533924-min.jpg" className='rounded' alt="" /></div>
            </div>
              </div>
        </div>
    );
};

export default AboutUs;