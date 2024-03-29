import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Sidebar from './components/sidebar';
import About from './components/about';
import Contact from './components/contact';
import MenuBottom from './components/menu-bottom';
import Projects from './components/projects';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <MenuBottom />
        <div className="back">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
