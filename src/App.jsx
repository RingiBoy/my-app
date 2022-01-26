import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import PostDetails from "./components/Post/PostDetails";
import UserDetails from "./components/User/UserDetails";
import About from "./pages/About/About";
import NotFount from "./pages/NotFound/NotFount";
import Posts from "./pages/Posts/Posts";
import Users from "./pages/Users/Users";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<About />} />

          <Route path={"posts"} element={<Posts />}>
            <Route path={":id"} element={<PostDetails />} />
          </Route>

          <Route path={"users"} element={<Users />}>
            <Route path={":id"} element={<UserDetails />} />
          </Route>

          <Route path={"*"} element={<NotFount />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
