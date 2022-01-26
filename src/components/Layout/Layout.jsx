import React from "react";
import {  Outlet, NavLink } from "react-router-dom";

import css from "./Layouy.module.css";

const Layout = () => {
  return (
    <>
      <div className={css.header}>
        
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        
      </div>

      <div>
        <Outlet className={css.outlet} />
      </div>
     
    </>
  );
};

export default Layout;
