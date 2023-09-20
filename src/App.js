import logo from "./logo.svg";
import "./App.css";
import "./Box.css";
import Box from "./components/Box";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Jannah kan ikke lide terminalen!</p>
        <p>Jannah kan lide React og hot-reload og sove længe</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Box message="Hejsa" color="green" />
      <Box message="davs nr 2" color="blue" />
      <Box message="jeg skulle have lavet færre kasser" color="purple" />
      <Box message="farvel" color="orange" />
    </div>
  );
}

export default App;
