import React from "react";

export default function TodoItem(props) {
  return (
    <article className="todo">
      <input type="checkbox" id={props.content} />
      <label for={props.content}>{props.content}</label>
    </article>
  );
}
