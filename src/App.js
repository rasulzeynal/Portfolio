import './App.css';
import './style.scss'
import NavBar from './pages/NavBar';
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from './pages/project/Projects';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Projects/>
    </div>
  );
}

export default App;
