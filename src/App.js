import React, {useState} from 'react';
import Form from "./components/Form";


const App = () => {
  const [tasks, setTasks] = useState('');

  function addTask(name){
    setTasks(name);
  }

  return (
    <div>
      <Form addTask={addTask}/>

      {tasks}
    </div>
  );
};

export default App;