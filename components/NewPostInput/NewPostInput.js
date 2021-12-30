import React, { useState } from "react";

import styles from "./NewPostInput.module.css";

// @func - input form component
function NewPostInput(props) {
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
    props.onSubmit(value);
    setValue("");
  };

  return (
    <div>
      <form className={styles.inputFormWrapper} onSubmit={handleSubmit}>
        <input
          label={props.defaultText}
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
function NewTodo(props) {
  const addTodo = (value) => {
    props.addNewTodo(value);
  };

  return <NewPostInput defaultText="Add Todo" onSubmit={addTodo} />;
}

export { NewPostInput, NewTodo };
