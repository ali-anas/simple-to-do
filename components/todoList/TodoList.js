import { SingleTodo } from "../SingleTodo/SingleTodo";

import styles from "./TodoList.module.css";

export default function TodoList({ todoList, removeTodo }) {
  // console.log("todoList: ", todoList);
  return (
    <>
      <div className={styles.list}>
        {todoList.map((todo, index) => {
          return (
            // <div key={`todo-${index}`}>
            //   <p>{todo}</p>
            // </div>
            <SingleTodo
              todo={todo}
              key={`todo-${index}`}
              removeTodo={removeTodo}
              index={index}
            />
          );
        })}
      </div>
    </>
  );
}
