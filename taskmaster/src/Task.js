import React from 'react';

   const Task = ({ task, onComplete, onEdit, onDelete }) => (

     <div>

       <h3>{task.title}</h3>

       <p>{task.description}</p>

       <p>Due Date: {task.dueDate}</p>

       <button onClick={() => onComplete(task)}>Complete</button>

       <button onClick={() => onEdit(task)}>Edit</button>

       <button onClick={() => onDelete(task.id)}>Delete</button>

     </div>

   );

   export default Task;