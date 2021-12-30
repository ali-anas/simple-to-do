import React from "react";
import { SingleTodo } from "../SingleTodo/SingleTodo";

import styles from "./TodoList.module.css";

interface PropTypes {
  todoList: string[];
  removeTodo: (e: React.MouseEvent, toRemove: string) => void;
}

export default function TodoList({ todoList, removeTodo }: PropTypes) {
  // console.log("todoList: ", todoList);
  return (
    <>
      <div className={styles.list}>
        {todoList.map((todo, index) => {
          return (
            <SingleTodo
              todo={todo}
              key={`todo-${index}`}
              removeTodo={removeTodo}
            />
          );
        })}
      </div>
    </>
  );
}
