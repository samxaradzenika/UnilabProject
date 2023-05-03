import React from 'react';
import classes from '../route/styles/NavBar.module.css';

const NavBar = (props) => {
   const userPhotoUrl = localStorage.getItem('photo');
   const userName = localStorage.getItem('name');
   return (
      <div className={classes.navbar}>
         <h1 className={classes.h1}>TO DO</h1>
         <div className={classes.userwraper}>
            <span className={classes.span}>{userName}</span>
            <div className={classes.imgwraper}>
               <img
                  src={userPhotoUrl}
                  alt="user photo"
                  className={classes.image}
               />
            </div>
         </div>
      </div>
   );
};

export default NavBar;
