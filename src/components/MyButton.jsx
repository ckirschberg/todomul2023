import React from "react";

export default function MyButton({ buttonText, onClick, disabled }) {
  return (
    <button className="add-button" onClick={onClick} disabled={disabled}>
      {buttonText}
    </button>
  );
}
