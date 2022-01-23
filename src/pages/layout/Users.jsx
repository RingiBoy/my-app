import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import UserComponents from '../../components/UserComponents';
import ApiService from '../../services/api.service';

const Users = () => {
    let apiService = new ApiService('users');
    const [users, setUsers]= useState([]);
    


   useEffect(() => {
       apiService.getAllData().then(value=>setUsers(value));
    



   }, []);
   
   
    return (
        <div>
            {
                users.map(value=> <UserComponents key={value.id} item={value}/>)
            }


            <hr />
            <div>
                <h3>details about user:</h3>
                <Outlet/>
            </div>

        </div>
    );
};

export default Users;