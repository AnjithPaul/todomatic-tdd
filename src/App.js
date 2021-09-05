import React, {useState} from 'react';
import { nanoid } from "nanoid";
import Form from "./components/Form";
import Todo from "./components/Todo";
import FilterButton from "./components/FilterButton";

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

const App = () => {
  const [tasks, setTasks] = useState([{ id: "todo-0", name: "Sample task", completed: true }]);
  const [filter, setFilter] = useState('All');


  function addTask(name){
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map(task => {
      if (id === task.id) {
        return {...task, name: newName}
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }


  const taskList = tasks.filter(FILTER_MAP[filter]).map(task => (
    <Todo 
      key={task.id} 
      name = {task.name} 
      completed={task.completed} 
      id={task.id}
      deleteTask={deleteTask}
      editTask={editTask}
      toggleTaskCompleted={toggleTaskCompleted}
    />      
    )
  );

  const filterList = FILTER_NAMES.map(name => (
    <FilterButton
      data-testid= {name}
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <div>
       <h1>TodoMatic</h1>

      <Form addTask={addTask}/>

      <div>
        {filterList}
      </div>
      
      <h2> {headingText} </h2>
      <ul>
        {taskList}
      </ul>
    </div>
  );
};

export default App;