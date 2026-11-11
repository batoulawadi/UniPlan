import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Courses from "./pages/Courses"
import Schedule from "./pages/Schedule"
import Tasks from "./pages/Tasks"
import About from "./pages/About"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar"
import "./App.css";

function App(){

  return(<div>
    <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/courses" element={<Courses />} />
    <Route path="/schedule" element={<Schedule />} />
    <Route path="/tasks" element={<Tasks />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
  </div>);

}

export default App