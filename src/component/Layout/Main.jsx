import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import  { Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react';
import HashLoader from "react-spinners/HashLoader";


const Main = () => {
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },5000)
    },[]);
    return (
        <div >
            {
            loading ? 
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>     
      <HashLoader
      color={'#36d7b7'}
      loading={loading}
      size={100}
      speedMultiplier={1}
      />
      </div>
            :
            <div>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
                <Toaster />
            </div>
            }
        </div>
    );
};

export default Main;