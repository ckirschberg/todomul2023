import React, { useState } from "react";
import { Todo } from "../entities/todo";
import MyButton from "./MyButton";
import ReactModal from "react-modal";

export default function AddTodo({ todos, setTodos }) {
  const [content, setContent] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [touchedTodo, setTouchedTodo] = useState(false);

  const handleTodoContentChange = (e) => {
    // console.log(e.target.value);
    setContent(e.target.value);
  };

  // Brug dette som eksempel til opret pip- og opret kontakt- funktionaliten.
  const handleAddTodoClick = () => {
    if (isValid) {
      // Opretter nyt todo objekt for at tilføje det til array'et af todos.
      // Hardcoded "dummy" deadline 2024-01-01, priority 1, labels []
      const newTodo = new Todo(content, new Date(), new Date(2024, 0, 1), 1, []);

      // kalde setTodos og sende det tidligere todos array + mit nye todo obj. ind.

      // oprette et nyt array, indsætte todos objekter, tilføjer den den nye todo
      // kalder setTodos med det nye todos array som parameter.
      // google js-spread operator
      postTodo(newTodo)
      
      handleCloseModal();
    } else {
      setTouchedTodo(true);
    }
  };

  const postTodo = async (newTodo) => {
    const tableName = "todos";
    const projectUrl = "https://dhufseluundbrnzuevyz.supabase.co"
    const data = await fetch(projectUrl + '/rest/v1/' + tableName, {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: {
        apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRodWZzZWx1dW5kYnJuenVldnl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg5OTc5NzAsImV4cCI6MjAxNDU3Mzk3MH0.VcCKoXEy7dReIvwGsGNs40uz1vsEMh022GiOmNcEhqI',
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      }
    }).then(result => result.json())
    .then(createdTodo => {
      const todoFromSupabase = createdTodo[0];
      setTodos([...todos, todoFromSupabase]);

      console.log(createdTodo);
    })
  }


  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  let isValid = content.trim() !== '';
  console.log(isValid);

  return (
    <div className="add-container">
      {/* Vores modal, lavet med react-modal biblioteket */}
      <ReactModal isOpen={isOpen}>
        <p>Modal Content</p>
        <div>
          <input type="text" value={content} onChange={handleTodoContentChange} 
          onBlur={() => setTouchedTodo(true)} />
        </div>
        { !isValid && touchedTodo &&
          <div>
            Content cannot be empty. Please fill out the input.
          </div>
        }
        <MyButton buttonText={"Cancel"} onClick={handleCloseModal} />
        <MyButton buttonText={"Create"} onClick={handleAddTodoClick} />
      </ReactModal>
      <MyButton buttonText={"Add item"} onClick={handleOpenModal} />
    </div>
  );
}
