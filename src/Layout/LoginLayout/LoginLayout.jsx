// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;