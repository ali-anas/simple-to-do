import Head from "next/head";
import React, { useState } from "react";

import Layout, { siteTitle } from "../components/layout/Layout";
import { NewTodo } from "../components/NewPostInput/NewPostInput";
import TodoList from "../components/todoList/TodoList";

export default function Home() {
  const [todoList, setTodoList] = useState<string[]>([]);

  // @func - add new to-do item to todoList
  const addNewTodo: (todo: string) => void = (todo: string) => {
    setTodoList([todo, ...todoList]);
  };

  // @func - remove to-do item from todoList
  const removeTodo: (event: React.MouseEvent, toRemove: string) => void = (
    event: React.MouseEvent,
    toRemove: string
  ) => {
    event.preventDefault();

    // console.log("delete request for: ", toRemove);
    let newList = todoList.filter(
      (todoItem) => todoList.indexOf(todoItem) != todoList.indexOf(toRemove)
    );
    setTodoList(newList);
  };

  return (
    <Layout>
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
