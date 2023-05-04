import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

const auth = getAuth();

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  if (auth.currentUser) {
    return children;
  }

  return <Navigate state={{ from: location }} to="/login" replace />;
};

export default PrivateRoute;
