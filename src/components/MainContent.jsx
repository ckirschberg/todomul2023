import React, { useState } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import { Todo } from "../entities/todo";
import SimpleStateExample from "./SimpleStateExample";

export default function MainContent() {
  const todosDummyData = [
    new Todo("Feed my cat", new Date(), new Date(2023, 1, 1), 1, ["Home"]),
    {
      content: "Take over the world",
      isCompleted: true,
      created: new Date(),
      deadline: new Date(2023, 1, 1),
      priority: 1,
      labels: ["Home"],
    },
    {
      content: "Start over",
      isCompleted: false,
      created: new Date(),
      deadline: new Date(2023, 4, 1),
      priority: 1,
      labels: ["Home"],
    },
  ];

  const [todos, setTodos] = useState(todosDummyData);

  return (
    <main>
      <SimpleStateExample />
      {/* className i stedet for class da det er jsx */}
      <div className="list">
        {/* Vi indsætter en komponent i brugerfladen med dens navn (AddTodo) */}
        <AddTodo todos={todos} setTodos={setTodos} />

        {/* Vi sender data ind i todoItem via Props og kalder den content */}
        {todos.map((todo) => {
          // key={todo.content} burde være et unikt id
          return <TodoItem key={todo.content} todoItem={todo} />;
        })}
      </div>
    </main>
  );
}
