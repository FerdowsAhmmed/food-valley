import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.config';
import Header from '../Header/Header';

const Login = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(errorMessage);
      });
  };

  return (
    <section>
      {user && <Header user={user} />}
      <div>
        <form onSubmit={handleSubmit}>
          <h2>Login Form</h2>
          {error && <p>{error}</p>}
          <div className="container">
            <label><b>Email</b></label>
            <input type="email" placeholder="Enter Email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />

            <label><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />

            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
      <div className='google-github'>
        <p> Don't have an account? <Link to='/registration'>Register here</Link></p>
        <div className='auto-login'>
          <h4> Login with</h4>
          <button className='btn btn-danger' onClick={handleGoogleSignIn}>Google login</button> <br />
          <button className='btn btn-danger' onClick={handleGithubSignIn}>Github login</button>
        </div>
      </div>
    </section>
  );
};

export default Login;
