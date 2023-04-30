import React from 'react';
import { Link } from 'react-router-dom';
import classes from './styles/SignUp.module.css';
import Photo from '../../assets/pics/Camera.svg';

const SignUp = () => {
   const photoUploadHandler = (e) => {
      console.log(e.target.value);
   };

   return (
      <form>
         <h3>Get Started</h3>
         <h2>add a photo</h2>

         <div className={classes.circle}>
            <label htmlFor="imgLabel">
               <img
                  style={{ cursor: 'pointer' }}
                  src={Photo}
                  alt="upload_icon"
               />
            </label>
            <input
               style={{ display: 'none' }}
               onChange={photoUploadHandler}
               accept="image/*"
               multiple
               type="file"
               id="imgLabel"
            />
         </div>
         <h4>fill in your name</h4>
         <input
            placeholder="your name"
            type="text"
            name=""
            id=""
            className={classes.nameinput}
         />
         <Link to="/todo" className={classes.signinbtn}>
            <p>Sign In</p>
         </Link>
      </form>
   );
};

export default SignUp;
