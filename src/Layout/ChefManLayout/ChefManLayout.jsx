/* eslint-disable no-unused-vars */
import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

const ChefManLayout = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
        </div>
    );
};

export default ChefManLayout;