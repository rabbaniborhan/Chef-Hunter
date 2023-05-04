/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';

const Blog = () => {
    return (
        <div>
             <div className=' bg-violet-100 text-center p-20'>
                <h1 className='font-bold text-4xl'>Questions</h1>
            </div>


           <div className=' w-4/5 mx-auto'>
            <h1 className='text-xl font-bold pt-8'>1st Questions:Tell us the differences between uncontrolled and controlled components.</h1>
            <p>
            In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.
            </p>

            <h1 className='text-xl font-bold pt-8'>2nd Questions: How to validate React props using PropTypes?</h1>
            <p>
            The PropTypes utility exports a wide range of validators for configuring type definitions. Below, we ll list the available validators for basic, renderable, instance, multiple, collection, and required prop types.
            </p>
            <h1 className='text-xl font-bold pt-8'>3rd Questions:Tell us the difference between nodejs and express js.?</h1>
            <p>
            js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.
            </p>
            <h1 className='text-xl font-bold pt-8'>4th Questions:What is a custom hook, and why will you create a custom hook?

?</h1>
            <p className=' pb-20'>
            Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.
            </p>

           </div>

          <div className='mx-auto '> <button className="btn bg-gradient-to-r from-indigo-600 to-purple-600 " >Genarate PDF</button></div>
        </div>
    );
};

export default Blog;