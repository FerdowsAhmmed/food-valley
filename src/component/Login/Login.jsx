import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.config';

const Login = () => {
  const [error, setError] = useState('');
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setError('');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setError(errorMessage);
      });
  };

  return (
    <section>
      <div>
        <form onSubmit={handleFormSubmit}>
          <h2>Login Form</h2>
          {error && <div className="error-message">{error}</div>}
          <div className="container">
            <label><b>Email</b></label>
            <input type="email" placeholder="Enter Email" name="email" required />

            <label><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" required />

            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
      <div className='google-github'>
        <p> Don't have an account? <Link to='/registration'>Register here</Link></p>
        <div className='auto-login'>
          <h4> Login with</h4>
          <button onClick={handleGoogleSignIn}>Google login</button> <br />
          <button>Git-hub login</button>
        </div>
      </div>
    </section>
  );
};

export default Login;
