import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

import css from "./Layouy.module.css";

const Layout = () => {
  let navigate = useNavigate(); //принимает два пареметра, первый это ссылка, если хоме то /, и второй цифры от -1 это  нажал на одну страницу или 1 вперед

  const toHome = () => {
    navigate("/");
  };

  const back = () => {
    navigate(-1);
  };

  return (
    <>
      <div className={css.header}>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <Button variant="success" onClick={toHome}>
          home
        </Button>
        <Button variant="success" onClick={back}>
          back
        </Button>
      </div>

      
        
        <Outlet className={css.outlets}/>
      
    </>
  );
};

export default Layout;
