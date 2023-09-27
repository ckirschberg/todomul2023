import React, { useState } from "react";
import { Todo } from "../entities/todo";
import MyButton from "./MyButton";
import ReactModal from "react-modal";

export default function AddTodo({ todos, setTodos }) {
  const [content, setContent] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleTodoContentChange = (e) => {
    // console.log(e.target.value);
    setContent(e.target.value);
  };

  // Brug dette som eksempel til opret pip- og opret kontakt- funktionaliten.
  const handleAddTodoClick = () => {
    // Opretter nyt todo objekt for at tilføje det til array'et af todos.
    // Hardcoded "dummy" deadline 2024-01-01, priority 1, labels []
    const newTodo = new Todo(content, new Date(), new Date(2024, 0, 1), 1, []);

    // kalde setTodos og sende det tidligere todos array + mit nye todo obj. ind.

    // oprette et nyt array, indsætte todos objekter, tilføjer den den nye todo
    // kalder setTodos med det nye todos array som parameter.
    // google js-spread operator
    setTodos([...todos, newTodo]);
    handleCloseModal();
  };

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  return (
    <div className="add-container">
      {/* Vores modal, lavet med react-modal biblioteket */}
      <ReactModal isOpen={isOpen}>
        <p>Modal Content</p>
        <input type="text" value={content} onChange={handleTodoContentChange} />
        <MyButton buttonText={"Cancel"} onClick={handleCloseModal} />
        <MyButton buttonText={"Create"} onClick={handleAddTodoClick} />
      </ReactModal>
      <MyButton buttonText={"Add item"} onClick={handleOpenModal} />
    </div>
  );
}
