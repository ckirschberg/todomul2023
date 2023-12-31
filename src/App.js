import "./App.css";
import "./styles/Todo.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { useState } from "react";
import { TodoContext } from "./context/todo-context";
import Signup from "./components/Signup"
import Login from "./components/Login";

// Root level component - "Roden i træstrukturen"
function App() {
  const [formValues, setFormValues] = useState({
    content: "",
    deadline: "",
    priority: "",
    labels: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const context = {
    formValues,
    setFormValues,
    isModalOpen,
    setIsModalOpen,
  };

  return (
    <div className="App">
      <TodoContext.Provider value={context}>
        <Header title="MUL ToDos 2023" />
        <Signup />
        <Login />
        <MainContent />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
