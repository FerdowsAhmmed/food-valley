import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div><h1>Food Valley</h1></div>
            <div>
                <ul>
                    <Link className='menu-items' to='/'>Home</Link>
                    <Link className='menu-items' to='/blog'>Blog</Link>
                    <Link className='menu-items' to='/login'>Login</Link>
                    <Link className='menu-items' to='/logout'>LogOut</Link>
                    <Link className='menu-items' to='/registration'>Registration</Link>
                </ul>
            </div>
            <div> <img src="" alt="userPhoto" /></div>
        </div>
    );
};

export default Header;