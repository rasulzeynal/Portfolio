import './App.css';
import './style.scss'
import NavBar from './pages/NavBar';
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from './pages/project/Projects';
import Resume from './pages/resume/Resume';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Resume/>
    </div>
  );
}

export default App;
