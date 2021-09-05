import React from "react";


export default function Todo(props) {
  return (
    <li>
      <div>
        <input id={props.id} type="checkbox" defaultChecked={props.completed} data-testid="taskName" value={props.name} />
        <label>
          {props.name}
        </label>
      </div>
      <div>
        <button data-testid="editButton">
          Edit 
        </button>
        <button data-testid="deleteButton"
            onClick={() => props.deleteTask(props.id)}
        >
            Delete
        </button>
      </div>
    </li>
  );
}