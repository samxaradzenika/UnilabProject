import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classes from './styles/SignUp.module.css';
import Photo from '../../assets/pics/Camera.svg';

const SignUp = () => {
   const [photoUrl, setPhotoUrl] = useState(
      localStorage.getItem('photo') || ''
   );
   const [nameInput, setNameInput] = useState('');
   const [photoUploaded, setPhotoUploaded] = useState(false);

   localStorage.setItem('name', nameInput);
   const photoUploadHandler = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {
         const photoDataURL = reader.result;
         localStorage.setItem('photo', photoDataURL);
         setPhotoUploaded(true);
         setPhotoUrl(photoDataURL);
      };
   };

   const handleNameInputChange = (e) => {
      setNameInput(e.target.value);
   };

   useEffect(() => {
      window.addEventListener('beforeunload', clearLocalStorage);
      return () => {
         window.removeEventListener('beforeunload', clearLocalStorage);
      };
   }, []);

   const clearLocalStorage = () => {
      if (!nameInput || !photoUploaded) {
         localStorage.clear();
         setNameInput('');
         setPhotoUploaded(false);
         setPhotoUrl('');
      }
   };
   const handleEnterKeyPress = (e) => {
      if (e.key === 'Enter' && !isSubmitDisabled) {
         e.preventDefault();
         document.getElementById('signin-button').click();
      }
   };

   const handleSubmit = (e) => {
      e.preventDefault();
   };

   const isSubmitDisabled = !nameInput || !photoUploaded;
   return (
      <form className={classes.form} onSubmit={handleSubmit}>
         <h3 className={classes.h3}>Get Started</h3>
         <h2 className={classes.h2}>add a photo</h2>
         <div></div>
         <div className={classes.circle}>
            <label htmlFor="imgLabel">
               <img
                  className={classes.img}
                  style={{ cursor: 'pointer' }}
                  src={photoUrl || Photo}
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
         <h4 className={classes.h4}>fill in your name</h4>
         <input
            onChange={handleNameInputChange}
            placeholder="your name"
            onKeyPress={handleEnterKeyPress}
            type="text"
            name=""
            id=""
            className={classes.nameinput}
         />
         <Link
            to={isSubmitDisabled ? '#' : '/todo'}
            id="signin-button"
            className={`${classes.signinbtn} ${
               isSubmitDisabled ? classes.disabled : ''
            }`}
            onClick={(e) => isSubmitDisabled && e.preventDefault()}
         >
            <p className={classes.p}>Sign In</p>
         </Link>
      </form>
   );
};

export default SignUp;
