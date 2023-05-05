import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

const auth = getAuth();

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setIsAuthenticated(!!user);
      localStorage.setItem('isAuthenticated', !!user);
    });

    return unsubscribe;
  }, []);

  const isLoggedIn = localStorage.getItem('isAuthenticated');

  if (isAuthenticated || isLoggedIn) {
    return children;
  }

  return <Navigate state={{ from: location }} to="/login" replace />;
};

export default PrivateRoute;
