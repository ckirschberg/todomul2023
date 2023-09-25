import React, { useState } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import { Todo } from "../entities/todo";
import SimpleStateExample from "./SimpleStateExample";

export default function MainContent() {
  const [content, setContent] = useState('');

  const todosDummyData = [
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

  const [todos, setTodos] = useState(todosDummyData);


  const handleTodoContentChange = (e) => {
    // console.log(e.target.value);
    setContent(e.target.value)
  }
  const handleAddTodoClick = () => {
    // Opretter nyt todo objekt for at tilføje det til array'et af todos.
    // Hardcoded "dummy" deadline 2024-01-01, priority 1, labels []
    const newTodo = new Todo(content, new Date(), new Date(2024, 0, 1), 1, [])

    // kalde setTodos og sende det tidligere todos array + mit nye todo obj. ind.
    setTodos([...todos, newTodo])


    console.log("I clicked the button");
  }

  return (
    <main>
      <SimpleStateExample />
      {/* className i stedet for class da det er jsx */}
      <div className="list">
        {/* Vi indsætter en komponent i brugerfladen med dens navn (AddTodo) */}
        {/* <AddTodo /> */}
        <div className="add-container">
          <input type="text" value={content} onChange={handleTodoContentChange}/>
          <button className="add-button" onClick={handleAddTodoClick}>Add item</button>
        </div>
        {/* Vi sender data ind i todoItem via Props og kalder den content */}
        {todos.map(todo => {
          // key={todo.content} burde være et unikt id
          return <TodoItem key={todo.content} todoItem={todo}/>
        })}
      </div>
    </main>
  );
}
