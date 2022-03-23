import React from "react";
import classes from "./TodoList.module.css";

const TodoList: React.FC<{
  text: string;
  onDeleteTodo: () => void;
}> = (props) => {
  return (
    <li className={classes.item}>
      {props.text}
      <button onClick={props.onDeleteTodo}>Delete</button>
    </li>
  );
};

export default TodoList;
