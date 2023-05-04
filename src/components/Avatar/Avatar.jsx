/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Avatar = () => {

    const{user} =useContext(AuthContext)
    
    const photo =user?.photoURL
    const name = user?. displayName
    return (
        <div>
            <div className="avatar pr-4">
                <div className="w-14 rounded-full">
                    <img src={photo} title={name} />
                </div>
            </div>

        </div>
    );
};

export default Avatar;