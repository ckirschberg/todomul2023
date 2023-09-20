import React from "react";
import "../styles/TodoItem.css";

export default function TodoItem(props) {
  return (
    <article className="todo">
      <input type="checkbox" id={props.content} />
      <label for={props.content}>{props.content}</label>
    </article>
  );
}
