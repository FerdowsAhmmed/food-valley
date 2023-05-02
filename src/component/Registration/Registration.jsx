import React from 'react';
import './Registration.css'
import { Link } from 'react-router-dom';
const Registration = () => {
    return (
     <section>
		   <div>
            <form>
		<h2>Registration Form</h2>
		<div class="container">
			<label for="name"><b>Name</b></label>
			<input type="text" placeholder="Enter Name" name="name" required/>

			<label for="email"><b>Email</b></label>
			<input type="email" placeholder="Enter Email" name="email" required/>

			<label for="password"><b>Password</b></label>
			<input type="password" placeholder="Enter Password" name="password" required/>

			<label for="confirm_password"><b>Confirm Password</b></label>
			<input type="password" placeholder="Confirm Password" name="confirm_password" required/>

			<label for="photo"><b>Photo URL</b></label>
			<input type="text" placeholder="Enter Photo URL" name="photo"/>

			<input type="submit" value="Submit"/>
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