import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { getAuth,signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from '../../firebase/firebase.init';

const Login = () => {

  const auth = getAuth(app);
  const provider =new GoogleAuthProvider();
const handleGoogleSignIn=()=>{
signInWithPopup(auth,provider)
.then (result=> {
  const user = result.user;
  console.log(user);
})
.catch(error=> {
  console.log(error);
})
}

    return (
      <section>
          <div>
         <form>
		<h2>Login Form</h2>
		<div className="container">
			<label ><b>Email</b></label>
			<input type="email" placeholder="Enter Email" name="email" required/>

			<label ><b>Password</b></label>
			<input type="password" placeholder="Enter Password" name="password" required/>

			<input type="submit" value="Submit"/>
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