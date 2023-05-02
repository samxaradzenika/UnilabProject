import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import classes from './styles/ToDo.module.css';
import ToDoItem from '../components/ToDoItem';
import NavBar from '../components/navBar';

const ToDoList = () => {
   const [tasks, setTasks] = useState(() => {
      const storedTasks = localStorage.getItem('tasks');
      return storedTasks ? JSON.parse(storedTasks) : [];
   });

   const [task, setTask] = useState('');
   const [taskId, setTaskId] = useState(0);
   const location = useLocation();
   const isToDoList = location.pathname === '/todo';

   useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
   }, [tasks]);

   if (isToDoList) {
      document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
      document.getElementsByTagName('body')[0].style.position = 'relative';
      document.getElementsByTagName('body')[0].style.width = `100%`;
      document.getElementsByTagName('body')[0].style.height = `100%`;
   }

   const handleFormSubmit = (e) => {
      e.preventDefault();
      if (task.trim()) {
         setTasks((prevTasks) => [...prevTasks, { id: taskId, text: task }]);
         setTaskId((prevId) => prevId + 1);
         setTask('');
      }
   };

   return (
      <React.Fragment>
         <NavBar />
         <form className={classes.form} onSubmit={handleFormSubmit}>
            <h2 className={classes.h2}>Add Your Daily Tasks</h2>
            <div className={classes.inputbtnwrpr}>
               <input
                  className={classes.input}
                  type="text"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  placeholder="my task"
               />
               <button className={classes.button} type="submit">
                  <span className={classes.btntxt}>add</span>
               </button>
            </div>
            <div className={classes.list}>
               <ul>
                  {tasks.map((task) => (
                     <ToDoItem key={task.id} text={task.text} />
                  ))}
               </ul>
            </div>
         </form>
      </React.Fragment>
   );
};

export default ToDoList;
