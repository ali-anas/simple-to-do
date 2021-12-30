import styles from "./SingleTodo.module.css";

export function SingleTodo({ todo, removeTodo }) {
  return (
    <div className={styles.todoItem}>
      <div className={styles.todoText}>
        <p>{todo}</p>
      </div>
      <div className={styles.todoButton}>
        <button onClick={(event) => removeTodo(event, todo)}>delete!</button>
      </div>
    </div>
  );
}
