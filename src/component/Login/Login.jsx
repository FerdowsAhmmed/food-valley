import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
const Login = () => {
    return (
      <section>
          <div>
         <form>
		<h2>Login Form</h2>
		<div class="container">
			<label for="email"><b>Email</b></label>
			<input type="email" placeholder="Enter Email" name="email" required/>

			<label for="password"><b>Password</b></label>
			<input type="password" placeholder="Enter Password" name="password" required/>

			<input type="submit" value="Submit"/>
		</div>
	</form>
        </div>
        <div className='google-github'>
           <p> Don't have an account? <Link to='/registration'>Register here</Link></p>
          <div className='auto-login'>
          <h4> Login with</h4>
          <button>Google</button> <br />
          <button>Git-hub</button>
          </div>

        </div>
      </section>
    );
};

export default Login;