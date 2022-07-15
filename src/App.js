import './App.css';
import './style.scss'
import NavBar from './pages/NavBar';
import Home from "./pages/home/Home";
import About from "./pages/about/About"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <About/>
    </div>
  );
}

export default App;
