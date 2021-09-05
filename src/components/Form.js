import React, { useState } from 'react';


const Form = (props) => {

    const [name,setName] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        props.addTask(name);
        setName('');
    }
    function handleChange(e){
        setName(e.target.value);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
                data-testid="taskInput"
                type="text"
                value={name}
                onChange={handleChange}
            />
            <button
                type="submit"
                data-testid="addButton"
            >
                Add
            </button>
        </form>
    </div>
  );
};

export default Form;