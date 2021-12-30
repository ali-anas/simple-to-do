import React, { useState } from "react";

import styles from "./NewPostInput.module.css";

// @func - input form component
function NewPostInput({ onSubmit }: { onSubmit: (value: string) => void }) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
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

// @func - render input form component and add new input to parents list
function NewTodo({ addNewTodo }: { addNewTodo: (todo: string) => void }) {
  const addTodo = (value) => {
    addNewTodo(value);
  };

  return <NewPostInput onSubmit={addTodo} />;
}

export { NewPostInput, NewTodo };
