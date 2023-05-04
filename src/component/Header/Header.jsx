import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const Header = () => {
  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
  }, [auth]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log('Logout successful.');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogin = () => {
    history.push("/");
  };

  if (loading) {
    return null; 
  }

  return (
    <div className='header p-2'>
      <div><h1>Food Valley</h1></div>
      <div>
        <ul>
          <Link className='menu-items' to='/'>Home</Link>
          <Link className='menu-items' to='/blog'>Blog</Link>
          {!user && <Link className='menu-items' to='/login'>Login</Link>}
          {!user && <Link className='menu-items' to='/registration'>Register</Link>}
          {user && <button onClick={handleLogout} className='btn btn-primary ms-2'>Logout</button>}
        </ul>
      </div>
      {user && (
        <div className="user-photo">
          <img src={user.photoURL} alt="userPhoto" title={user.displayName} />
        </div>
      )}
    </div>
  );
};

export default Header;
