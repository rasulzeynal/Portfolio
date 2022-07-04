import './App.css';
import Particle from './components/Particle';
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home"

function App() {
  return (
    <div className="App">
      <Particle/>
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
