import './App.css';
import Particle from './components/Particle';
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home"

function App() {
  return (
    <div className="App">
      <Particle/>
      <Navbar/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
