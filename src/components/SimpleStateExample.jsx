import { useState } from "react";
import MyButton from "./MyButton";

export default function SimpleStateExample() {
  // defineret en state variabel. happy er 'getteren' og 'setHappy' er setteren.
  // happy kan bruges til at vise indholdet på skærmen
  // setHappy kan ændre state variablens indhold.

  const [happy, setHappy] = useState(0); // boolean

  // arrow function syntax i javascript, definerer en ny function.
  const handleSwitchHappy = () => {
    // happy = happy+1; // Virker ikke, da state er immutable!!!!!
    setHappy(happy + 1);
  };

  return (
    <div>
      <label>How happy are you? {happy}</label>
      <MyButton buttonText={"Switch state"} onClick={handleSwitchHappy} />
    </div>
  );
}
