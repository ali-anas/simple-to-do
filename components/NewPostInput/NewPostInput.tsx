import React, { useState } from "react";

import styles from "./NewPostInput.module.css";

// type bounds for props of NewPostInput
interface PropsForNewPostInput {
  onSubmit: (value: string) => void;
}

// @func - input form component
function NewPostInput({ onSubmit }: PropsForNewPostInput) {
  const [value, setValue] = useState("");

  const handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  const handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!value) {
      return;
    }

    // console.log(value);
    onSubmit(value);
    setValue("");
  };

  return (
    <div className={styles.formSection}>
      <form className={styles.inputFormWrapper} onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={handleChange}
          className={`${styles.inputSection} ${styles.formElement}`}
        />
        <button
          disabled={value ? false : true}
          type="submit"
          className={`${styles.formElement} ${styles.submitButton}`}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

// @func - type bounds for props of NewTodo component
interface PropsForNewTodo {
  addNewTodo: (todo: string) => void;
}

// @func - render input form component and add new input to parents list
function NewTodo({ addNewTodo }: PropsForNewTodo) {
  const addTodo: (value: string) => void = (value: string) => {
    addNewTodo(value);
  };

  return <NewPostInput onSubmit={addTodo} />;
}

export { NewPostInput, NewTodo };
