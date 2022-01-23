import React from 'react';
import { Link } from 'react-router-dom';

const UserComponents = ({item}) => {
   
    let {id,name} =item;
   
    return (
        <div>
           {id}---{name} <Link to={id.toString()} state ={{...item}}> details</Link>
           
        </div>
    );
};

export default UserComponents;