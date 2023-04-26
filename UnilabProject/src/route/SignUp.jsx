import React from 'react';
import { Link } from 'react-router-dom';
import classes from './styles/SignUp.module.css';

const SignUp = () => {
   return (
      <form>
         <h2>add a photo</h2>
         <h3>Get Started</h3>
         <div className={classes.circle}>
            <img src="../assets/pics/Camera.svg" alt="" />
         </div>
         <h4>fill in your name</h4>
         <input type="text" />
         <Link to="/todo">Sign In</Link>
      </form>
   );
};

export default SignUp;

// return <Link to="/todo">ToDo too</Link>;
