import Head from "next/head";
import React, { useState } from "react";

import Layout, { siteTitle } from "../components/layout/layout";
import { NewTodo } from "../components/NewPostInput/NewPostInput";
import TodoList from "../components/todoList/TodoList";

export default function Home() {
  const [todoList, setTodoList] = useState([]);

  const addNewTodo = (todo) => {
    setTodoList([todo, ...todoList]);
  };

  const removeTodo = (event, toRemove) => {
    event.preventDefault();

    // console.log("delete request for: ", toRemove);
    let newList = todoList.filter(
      (todoItem) => todoList.indexOf(todoItem) != todoList.indexOf(toRemove)
    );
    setTodoList(newList);
  };

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <NewTodo addNewTodo={addNewTodo} />
      </section>

      <section>
        <TodoList todoList={todoList} removeTodo={removeTodo} />
      </section>
    </Layout>
  );
}
