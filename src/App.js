import "./App.css";
import "./styles/Todo.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

// Root level component - "Roden i træstrukturen"
function App() {
  return (
    <div className="App">
      <Header title="MUL ToDos 2023" />
      <MainContent />
    </div>
  );
}

export default App;
