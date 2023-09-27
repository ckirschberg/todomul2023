import React from "react";

export default function MyButton({ buttonText, onClick }) {
  return (
    <button className="add-button" onClick={onClick}>
      {buttonText}
    </button>
  );
}
