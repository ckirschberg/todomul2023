import React from "react";
import "../styles/MainContent.css";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

export default function MainContent() {
  return (
    <main>
      <div className="list">
        <AddTodo />
        <TodoItem content="A todo" />
      </div>
    </main>
  );
}
