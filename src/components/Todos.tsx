//we can also omit this import depends on a project
import React, { useContext } from "react";
import TodoList from "./TodoList";
import { TodosContext } from "../store/todos-context";
import classes from "./Todos.module.css";

//FC stand for functional compornent
//Generic type would be imported because of React.FC
const Todos: React.FC = (props) => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoList
          key={item.id}
          text={item.text}
          onDeleteTodo={todosCtx.deleteTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
