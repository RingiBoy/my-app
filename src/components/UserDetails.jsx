import React from 'react';
import { useLocation } from 'react-router-dom';

const UserDetails = () => {
    
    let location= useLocation();
    // console.log('location:', location)

    let {state}= location;
    return (
        <div>
           {state.name}-{state.id}-{state.email} 
        </div>
    );
};

export default UserDetails;