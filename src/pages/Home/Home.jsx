/* eslint-disable no-unused-vars */
import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <h1>home section</h1>
            <Footer></Footer>
        </div>
    );
};

export default Home;