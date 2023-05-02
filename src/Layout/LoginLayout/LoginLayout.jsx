// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const LoginLayout = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;