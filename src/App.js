import './App.css';
import './style.scss'
import NavBar from './pages/NavBar';
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from './pages/project/Projects';
import Resume from './pages/resume/Resume';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom"
import Footer from './pages/Footer';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
      <NavBar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
      <Footer/>
    </div>
    </Router>
    
  );
}

export default App;
