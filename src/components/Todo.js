import React, { useState } from "react";


export default function Todo(props) {

    const [isEditing,setEditing] = useState(false);
    const [newName, setNewName] = useState('');


    function handleSubmit(e) {
        e.preventDefault();
        props.editTask(props.id, newName);
        setNewName("");
        setEditing(false);
    }
    function handleChange(e) {
        setNewName(e.target.value);
    }
    
  const editingTemplate = (
    <form>
      <div >
        <label>
          New name for {props.name}
        </label>
        <input data-testid="editField" type="text" value={newName} onChange={handleChange} />
      </div>
      
      <div>
        <button data-testid="cancelButton" 
            onClick={() => setEditing(false)}
        >
          Cancel
        </button>
        <button data-testid="doneButton" 
            onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
      <div>
            <div>
                <input id={props.id} type="checkbox" defaultChecked={props.completed} data-testid="taskName" value={props.name} />
                    <label>
                        {props.name}
                    </label>
            </div>
            <div>
                <button data-testid="editButton"
                    onClick={() => setEditing(true)}
                >
                    Edit 
                </button>
                <button data-testid="deleteButton"
                    onClick={() => props.deleteTask(props.id)}
                >
                    Delete
                </button>
            </div>

      </div>
  );


  return (
    <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>
  );
}