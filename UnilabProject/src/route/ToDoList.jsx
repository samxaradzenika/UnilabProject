import React, { useState } from 'react';
import classes from './styles/ToDo.module.css';
import ToDoItem from './ToDoItem';

const ToDoList = () => {
   const [task, setTask] = useState('');
   const [tasks, setTasks] = useState([]);
   const [taskId, setTaskId] = useState(0);

   const handleFormSubmit = (e) => {
      e.preventDefault();
      if (task.trim()) {
         setTasks((prevTasks) => [...prevTasks, { id: taskId, text: task }]);
         setTaskId((prevId) => prevId + 1);
         setTask('');
      }
   };

   return (
      <form onSubmit={handleFormSubmit}>
         <nav>
            <h1>TO DO</h1>
            <p>Your Name</p>
         </nav>
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
   );
};

export default ToDoList;
