import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import { Todo } from "../entities/todo";
import SimpleStateExample from "./SimpleStateExample";

export default function MainContent() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const tableName = "todos";
    const projectUrl = "https://dhufseluundbrnzuevyz.supabase.co"
    const data = await fetch(projectUrl + '/rest/v1/' + tableName, {
      headers: {
        apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRodWZzZWx1dW5kYnJuenVldnl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg5OTc5NzAsImV4cCI6MjAxNDU3Mzk3MH0.VcCKoXEy7dReIvwGsGNs40uz1vsEMh022GiOmNcEhqI'
      }
    }).then(result => result.json())

    console.log(data);
    setTodos(data)
  }

  useEffect(() => {
    fetchTodos();
  }, []) // tomt array, betyder kør en gang.




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
