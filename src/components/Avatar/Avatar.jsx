/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Avatar = () => {

    const{user} =useContext(AuthContext)
    
    const photo =user?.photoURL
    return (
        <div>
            <div className="avatar pr-4">
                <div className="w-14 rounded-full">
                    <img src={photo} />
                </div>
            </div>

        </div>
    );
};

export default Avatar;