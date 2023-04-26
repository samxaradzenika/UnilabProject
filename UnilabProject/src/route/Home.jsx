import React from 'react';
import { Link } from 'react-router-dom';
import classes from './styles/Home.module.css';
const Home = () => {
   return (
      <div>
         <img src="../assets/pics/Todo icon.svg" alt="todo" />
         <h1>Keep Track Of Daily Tasks In Life</h1>
         <Link className={classes.sign} to="/signup">
            Get Started
         </Link>
         ;
      </div>
   );
};

export default Home;