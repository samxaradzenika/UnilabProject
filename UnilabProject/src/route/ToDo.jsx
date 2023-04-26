import React from 'react';
import classes from './styles/ToDo.module.css';
const ToDo = () => {
   return (
      <div>
         <nav>
            <h1>TO DO</h1>
            <p>Your Name</p>
         </nav>
         <h2>Add Your Daily Tasks</h2>
         <input type="text" />
         <button>Add</button>
         <div className={classes.list}> </div>
      </div>
   );
};

export default ToDo;
