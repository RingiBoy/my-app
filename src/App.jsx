import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import PostDetails from "./components/Post/PostDetails";
import About from "./pages/About/About";
import Comments from "./pages/Comments/Comments";
import Home from "./pages/Home/Home";
import NotFount from "./pages/NotFound/NotFount";
import Posts from "./pages/Posts/Posts";
import UserDetails from "./pages/User/UserDetails";
import Users from "./pages/Users/Users";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={"about"} element={<About />} />
          <Route path={"posts"} element={<Posts />}>
            <Route path={":id"} element={<PostDetails />} />
          </Route>
          <Route path={"users/:id"} element={<UserDetails />} />
          <Route path={"users"} element={<Users />} />
          <Route path={"comments"} element={<Comments />} />
          <Route path={"*"} element={<NotFount />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
