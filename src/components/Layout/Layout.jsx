import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";

import css from "./Layouy.module.css";

const Layout = () => {
  return (
    <>
      <div className={css.header}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>

      <div>
        <Outlet className={css.outlet} />
      </div>
      {/* <div className={css.footer}>@home work 3</div> */}
    </>
  );
};

export default Layout;
