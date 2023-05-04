import React from 'react';
import './Registration.css'
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useState } from 'react';

const auth = getAuth(app);

const Registration = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = event => {
    event.preventDefault();
    const fullName = event.target.fullName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/.test(password)) {
      setError(`
        Password must be at least 8 characters, 
        with two uppercase, three lowercase, and a special character.
      `);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setError('');
        event.target.reset();
        setSuccess('User has been created successfully');
      })
      .catch((error) => {
        setSuccess('');
        const errorMessage = error.message;
        setError(errorMessage);
      });
  }

  return (
    <section>
      <div>
        <form onSubmit={handleRegister}>
          <h2>Registration Form</h2>
          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}
          <div className="container">
            <label htmlFor="fullName"><b>Full Name</b></label>
            <input required className="items" type="text" name="fullName" id="fullName" placeholder="Please type your name" />
            <label htmlFor="email"><b>Email</b></label>
            <input required className="items" type="email" name="email" id="email" placeholder="Email" />
            <label htmlFor="password"><b>Password</b></label>
            <input required className="items" type="password" name="password" id="password" placeholder="Password" />
            <label htmlFor="photoUrl"><b>Photo URL</b></label>
            <input required className="items" type="text" name="photoUrl" id="photoUrl" placeholder="Your  Photo URL" />
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
      <div className="bottom-text">
        <p>Already have an account? Then <Link to="/login">Login here</Link></p>
      </div>
    </section>
  );
};

export default Registration;
