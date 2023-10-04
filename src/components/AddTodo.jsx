import React, { useState } from "react";
import { Todo } from "../entities/todo";
import MyButton from "./MyButton";
import ReactModal from "react-modal";
import useTodoContext from "../context/todo-context";

export default function AddTodo({ todos, setTodos }) {
  const { formValues, setFormValues } = useTodoContext();

  function handleUpdateFormValues(event) {
    console.log(formValues);
    const name = event.target.name;
    const value = event.target.value;
    const result = { ...formValues, [name]: value };
    setFormValues(result);
  }

  const [isOpen, setIsOpen] = useState(false);
  const [touchedTodo, setTouchedTodo] = useState(false);

  // Brug dette som eksempel til opret pip- og opret kontakt- funktionaliten.
  const handleAddTodoClick = () => {
    if (isValid) {
      // Opretter nyt todo objekt for at tilføje det til array'et af todos.
      // Hardcoded "dummy" deadline 2024-01-01, priority 1, labels []
      const newTodo = new Todo(
        formValues.content,
        new Date(),
        formValues.deadline,
        1,
        []
      );

      // kalde setTodos og sende det tidligere todos array + mit nye todo obj. ind.

      // oprette et nyt array, indsætte todos objekter, tilføjer den den nye todo
      // kalder setTodos med det nye todos array som parameter.
      // google js-spread operator
      setTodos([...todos, newTodo]);
      handleCloseModal();
    } else {
      setTouchedTodo(true);
    }
  };

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  let isValid = formValues.content.trim() !== "";
  console.log(isValid);

  return (
    <div className="add-container">
      {/* Vores modal, lavet med react-modal biblioteket */}
      <ReactModal isOpen={isOpen}>
        <p>Modal Content</p>
        <div>
          <label>Content</label>
          <input
            type="text"
            value={formValues.content}
            onChange={handleUpdateFormValues}
            onBlur={() => setTouchedTodo(true)}
            name="content"
          />
        </div>
        {!isValid && touchedTodo && (
          <div>Content cannot be empty. Please fill out the input.</div>
        )}
        <label>Deadline</label>
        <input
          type="date"
          value={formValues.deadline}
          onChange={handleUpdateFormValues}
          name="deadline"
        />
        <MyButton buttonText={"Cancel"} onClick={handleCloseModal} />
        <MyButton buttonText={"Create"} onClick={handleAddTodoClick} />
      </ReactModal>
      <MyButton buttonText={"Add item"} onClick={handleOpenModal} />
    </div>
  );
}
