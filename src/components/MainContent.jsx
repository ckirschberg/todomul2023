import React from "react";
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
