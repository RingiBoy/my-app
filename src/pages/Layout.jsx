import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <div>
                <ol>
                    <li><Link to={'users'}>users all</Link></li>
                    <li><Link to={'posts'}>all posts</Link></li>
                    <li><Link to={'comments'}>comments</Link></li>
                </ol>
            </div>

            <Outlet/>
        </div>
    );
};

export default Layout;