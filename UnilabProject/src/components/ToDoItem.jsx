import React, { useState } from 'react';
import classes from '../styles/ToDoItem.module.css';
import Done from '../../assets/pics/done.svg';
import Delete from '../../assets/pics/delete.svg';

const ToDoItem = (props) => {
   const [isCompleted, setIsCompleted] = useState(false);

   const handleDone = () => {
      setIsCompleted(!isCompleted);
      props.onDone(props.id);
   };

   const handleDelete = () => {
      props.onDelete(props.id);
   };

   return (
      <div className={`${classes.div} ${isCompleted ? classes.completed : ''}`}>
         <p className={classes.task}>{props.text}</p>
         <div className={classes.btnwraper}>
            <div className={classes.donebtn} onClick={handleDone}>
               <img className={classes.doneimg} src={Done} alt="done" />
            </div>
            <div
               className={classes.deletebtn}
               onClick={() => props.onDelete(props.id)}
            >
               <img className={classes.deleteimg} src={Delete} alt="delete" />
            </div>
         </div>
      </div>
   );
};

export default ToDoItem;
