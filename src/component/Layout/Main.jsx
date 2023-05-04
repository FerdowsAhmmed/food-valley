import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import  { Toaster } from 'react-hot-toast';


const Main = () => {
    return (
        <div className='position-relative'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster />
        </div>
    );
};

export default Main;