import React, {useState} from 'react';
import { nanoid } from "nanoid";
import Form from "./components/Form";
import Todo from "./components/Todo"


const App = (props) => {
  const [tasks, setTasks] = useState([{ id: "todo-0", name: "Sample task", completed: true }]);

  function addTask(name){
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  const taskList = tasks.map(task => (
    <Todo 
      key={task.id} 
      name = {task.name} 
      completed={task.completed} 
      id={task.id}
      deleteTask={deleteTask}
    />      
    )
  );

  return (
    <div>
      <Form addTask={addTask}/>

      {taskList}
    </div>
  );
};

export default App;