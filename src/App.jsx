import "./App.css";
import "./index.css";
import NavBar from "./components/NavBar";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">
        <NavBar />
      </div>
      <div id="main-section">
        <MainContainer />
      </div>

      <footer>
      <div id="navbar">
        <NavBar />
      </div>
      </footer>
    </div>
  );
}

export default App;
