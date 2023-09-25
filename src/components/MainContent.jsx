import React from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import { Todo } from "../entities/todo";

export default function MainContent() {
  const todos = [
    new Todo('Feed my cat', new Date(), new Date(2023, 1, 1), 1,['Home']),
    {
      content: 'Take over the world', 
      isCompleted: true, 
      created: new Date(), 
      deadline: new Date(2023, 1, 1),
      priority: 1,
      labels: ['Home']
    },
    {
      content: 'Start over', 
      isCompleted: false, 
      created: new Date(), 
      deadline: new Date(2023, 4, 1),
      priority: 1,
      labels: ['Home']
    }
  ];


  return (
    <main>
      {/* className i stedet for class da det er jsx */}
      <div className="list">
        {/* Vi indsætter en komponent i brugerfladen med dens navn (AddTodo) */}
        {/* <AddTodo /> */}
        <div className="add-container">
          <input type="text" />
          <button className="add-button">Add item</button>
        </div>
        {/* Vi sender data ind i todoItem via Props og kalder den content */}
        {todos.map(todo => {
          return <TodoItem todoItem={todo}/>
        })}
      </div>
    </main>
  );
}
