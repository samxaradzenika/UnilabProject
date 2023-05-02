import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import classes from './styles/ToDo.module.css';
import ToDoItem from './ToDoItem';
import NavBar from '../components/navBar';

const ToDoList = () => {
   const [task, setTask] = useState('');
   const [tasks, setTasks] = useState([]);
   const [taskId, setTaskId] = useState(0);
   const location = useLocation();
   const isToDoList = location.pathname === '/todo';
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
            <h2>Add Your Daily Tasks</h2>
            <input
               type="text"
               value={task}
               onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit">Add</button>
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
