import React, { useEffect, useState } from 'react';

import { userSevice } from '../../services/user.service';
import User from '../user/User';

const Users = ({getUser}) => {
    
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        userSevice.getAll().then(newUsers => setUsers(newUsers))
    }, [])
    
    
    return (
        <div>
           {users.map(value=><User key={value.id} user={value} getUser={getUser}/>)}
        </div>
    );
};

export default Users;