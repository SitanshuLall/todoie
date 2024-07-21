import React from "react";

const TodoItem = (props) => {
  return (
    <div>
      <li className="todo-item">
        {props.completed ? <></> : <input type="checkbox" />}
        <span className="item-text">{props.text}</span> 
        <span>...</span>
      </li>
    </div>
  );
};

export default TodoItem;
