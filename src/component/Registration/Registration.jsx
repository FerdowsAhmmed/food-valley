import React from 'react';
import './Registration.css'
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.init';
import { useState } from 'react';

const auth = getAuth(app);

const Registration = () => {
	
	const [error, setError]=useState('');
   const [success, setSuccess]=useState('');
const handleRegister = event => {
   event.preventDefault();
   const name=event.target.name.value;
   const email=event.target.email.value;
   const password=event.target.password.value;
   const confirmPassword=event.target.confirmPassword.value
   console.log(email,password);
   if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/.test(password)){
      setError(`
       
      Password must be at least 8 character
      , two uppercase
      , three lowercase
      , a spacial character
     
      `);
      return
   }
// ferdowsahmed68@gmail.com TTee123@

createUserWithEmailAndPassword(auth, email, password)
  .then((result) => {
    const user = result.user;
    setError('');
    event.target.reset();
    setSuccess('User has been created successfully');
    console.log(user);
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
		<div className="container">
			<label ><b>Name</b></label>
			<input required className='items' type="text"  name='name' placeholder='Please type your name ' />
			<label ><b>Email</b></label>
			<input required className='items' type="email" name='email' id='email' placeholder='Email ' />

			<label><b>Password</b></label>
			<input required className='items' type="password" name='password' id='password' placeholder='Password ' />

			<label ><b>Confirm Password</b></label>
			<input type="password" placeholder="Confirm Password" name="confirm_password" required/>

			<label ><b>Photo URL</b></label>
			<input required className='items' type="password" name='confirm-password' id='confirmPassword' placeholder='Confirm Password ' />

			<input type="submit" value="Register"/>
		</div>
	</form>
        </div>
		<div>
			<p>Allready have an account? Then <Link to='/login'>Login here</Link></p>
		</div>
	 </section>
    );
};

export default Registration;