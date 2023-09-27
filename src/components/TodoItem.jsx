import { Flag } from "lucide-react";
import React from "react";

// Her modtager vi data via props. Vi kan ikke se hvad den hedder,
// men det står i parent-komponenten (MainContent)
export default function TodoItem({ todoItem }) {
  // // Destructuring i js!
  // const person =  {firstname: 'Oliver', email: 'oliver@oliver.dk'};
  // const {firstname, email} = person; // destructuring.
  // // const firstname og email som indeholder værdierne 'Oliver' og 'oliver@oliver.dk'.

  // // Dette gør det samme som eksemplet med destructuring
  // const firstname2 = person.firstname;
  // const email2 = person.email;

  return (
    <article className="todo">
      <Flag color="#dc4c3e" size={12} />
      <input type="checkbox" id={todoItem.content} />
      <label htmlFor={todoItem.content}>{todoItem.content}</label>
    </article>
  );
}
