import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            Hello Developers
            <Outlet></Outlet>
        </div>
    );
};

export default Main;