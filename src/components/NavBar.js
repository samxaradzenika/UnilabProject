import classes from '../styles/NavBar.module.css';
import { useState } from 'react';

const NavBar = (props) => {
   const [visible, setVisible] = useState(false);
   const userPhotoUrl = localStorage.getItem('photo');
   const userName = localStorage.getItem('name');
   const handleLogout = () => {
      localStorage.clear();
      window.location.href = '/';
   };
   const logoutButton = document.getElementsByClassName('logout');
   const logoutbuttonhandler = () => {
      setVisible(!visible);
   };
   return (
      <div className={classes.navbar}>
         <h1 className={classes.h1}>TO DO</h1>
         <div className={classes.userwraper}>
            <span className={classes.span}>{userName}</span>
            <div onClick={logoutbuttonhandler} className={classes.imgwraper}>
               <img
                  src={userPhotoUrl}
                  alt="user photo"
                  className={classes.image}
               />
            </div>
         </div>
         <button
            className={`${classes.logout} ${visible ? classes.visible : ''}`}
            onClick={handleLogout}
         >
            logout
         </button>
      </div>
   );
};

export default NavBar;
