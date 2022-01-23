import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import PostDetails from './components/PostDetails';
import UserDetails from './components/UserDetails';
import About from './pages/About';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Comments from './pages/layout/Comments';
import Posts from './pages/layout/Posts';
import Users from './pages/layout/Users';


const App = () => {
  return (
    <div>
      <div>
        <h2>Menu</h2>
        <ul>
          <li><Link to={'/'}>home</Link></li>
          <li><Link to={'/layout'}>layout</Link></li>
          <li><Link to={'/about'}>about</Link></li>
          
        </ul>
      </div>
            <div>
              <h2>content</h2>
                  <Routes>
                    <Route index element={<Home/>}/>
                    <Route path={'layout'} element={<Layout/>}>
                      <Route path={'users'} element={<Users/>}>
                        <Route path ={':id'} element={<UserDetails />}/>
                      </Route>
                      <Route path={'posts'} element={<Posts/>}>
                        <Route path={':id'} element={<PostDetails/>}/>
                      </Route>
                      <Route path={'comments'} element={<Comments/>}/>
                      </Route> 
                    <Route path={'about'} element={<About/>}/>
                  </Routes>
            </div>

    </div>
  );
};

export default App;