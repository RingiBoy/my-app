import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import User from "../../components/User/User";
import { usersService } from "../../services/user.service";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    usersService.getAll().then((value) => setUsers([...value]));
  }, []);

  return (
    <div>
      <Outlet/>
      <h3>Users:</h3>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
