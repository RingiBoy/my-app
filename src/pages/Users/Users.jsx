import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import User from "../../components/User/User";
import { usersService } from "../../services/user.service";
import css from "./users.module.css";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    usersService.getAll().then((value) => setUsers([...value]));
  }, []);

  return (
    <div className={css.lr}>
      
      <div className={css.users}>
        <h3>Users:</h3>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Users;
