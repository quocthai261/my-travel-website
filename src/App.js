import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home.js";
import About from "./routes/About.js";
import Service from "./routes/Service.js";
import Contact from "./routes/Contact.js";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Navbar></Navbar>
    </div>
  );
}

export default App;
