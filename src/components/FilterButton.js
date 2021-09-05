import React from "react";

function FilterButton(props) {
  return (
    <button
        data-testid={props.name} 
        onClick={() => props.setFilter(props.name)}>
    	{props.name} 
    </button>
  );
}

export default FilterButton;