// Vi importerer de 2 funktioner fra React, som vi skal bruge
import { createContext, useContext } from "react";

// Opretter en Context, vha. Reacts indbyggede funktion
export const TodoContext = createContext(null);

const useTodoContext = () => useContext(TodoContext);

export default useTodoContext;
