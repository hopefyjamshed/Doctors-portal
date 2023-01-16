import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shares/Footer/Footer';
import Header from '../shares/header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;