import { SingleTodo } from "../SingleTodo/SingleTodo";

import styles from "./TodoList.module.css";

export default function TodoList({
  todoList,
  removeTodo,
}: {
  todoList: string[];
  removeTodo: (e: KeyboardEvent, toRemove: string) => void;
}) {
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
