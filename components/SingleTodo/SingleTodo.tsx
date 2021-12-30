import React from "react";
import styles from "./SingleTodo.module.css";

interface PropsType {
  todo: string;
  removeTodo: (e: React.MouseEvent, toRemove: string) => void;
}

export function SingleTodo({ todo, removeTodo }: PropsType) {
  return (
    <div className={styles.todoItem}>
      <div className={styles.todoText}>
        <p>{todo}</p>
      </div>
      <div className={styles.todoButton}>
        <button onClick={(e: React.MouseEvent) => removeTodo(e, todo)}>
          delete!
        </button>
      </div>
    </div>
  );
}
