import React from 'react';

const ToDoItem = (props) => {
   return (
      <div>
         {props.text}
         <button onClick={() => props.onDelete(props.id)}>Delete</button>
         <button onClick={() => props.onDone(props.id)}>Done</button>
      </div>
   );
};

export default ToDoItem;