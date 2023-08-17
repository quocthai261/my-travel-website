import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home.js";
import About from "./routes/About.js";
import Service from "./routes/Service.js";
import Contact from "./routes/Contact.js";
import Navbar from './components/Navbar';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdxO93s9F9eYNistfUPCjOHHyuzFJAV7o",
  authDomain: "travel-website-c23b2.firebaseapp.com",
  projectId: "travel-website-c23b2",
  storageBucket: "travel-website-c23b2.appspot.com",
  messagingSenderId: "193546402804",
  appId: "1:193546402804:web:d2af19faf4e818961457a1",
  measurementId: "G-QE8H2LW50G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
